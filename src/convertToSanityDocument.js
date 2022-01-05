const convertHTMLtoPortableText = require('./convertHTMLtoPortableText')
const {nanoid} = require('nanoid')
const {format} = require('date-fns')
const TurndownService = require('turndown')
const slugify = require('slugify')

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'o0o2tn5x',
  dataset: 'import-blog-data',
  token: 'skzLDOzsYekJMYFTuNYyRk0hg87larhePKf69j3VceHU3WRLss96QULMVGsHyddihDsbleK4k5u1XCPqKb9I5quqHxKNLDG5Z6Y0YPwD0gaGCYtMwZC0mix6bcMHFEqIoVvM5lb2Xb7kStkjx8sE9JPDVlAaNrnVf3Fj1w1fISFdW2pOKNU5',
})


async function getAuthorRef(name) {

  const query = `*[_type == "people" && name == "${name}"]{ "ref": _id }`

  const data = await client.fetch(query).catch(err => console.error(err));

  return {
    "_key": nanoid(),
    "_ref": data && data[0] && data[0].ref || "people-netlify",
    "_type":"reference"
  }

}

async function getTopicRef(slug) {

  const query = `*[_type == "blogTopic" && slug.current == "${slug}"]{ "ref": _id }`

  const data = await client.fetch(query).catch(err => console.error(err));

  return {
    "_ref": data[0].ref,
    "_type":"reference",
    "_weak": false
  }
}

async function getTagsRef(tag) {

  const query = `*[_type == "blogTag" && title == "${tag}"]{ "ref": _id }`

  const data = await client.fetch(query).catch(err => console.error(err));

  if(data && data[0] && data[0].ref) {
    return {
      "_ref": data[0].ref,
      "_type":"reference",
      "_weak": false
    }
  } else {
    return
  }
}

async function getRelatedPostRef(post) {
  if(typeof post !== "string") return null;

  const query = `*[_type == "blogPost" && title == $title]{ "ref": _id }`

  const data = await client.fetch(query, { title: post }).catch(err => console.error(err));

  if(data && data[0] && data[0].ref) {
    console.log("FOUND!")
    return {
      "_ref": data[0].ref,
      "_type":"reference"
    }
  } else {
    return null
  }
}

async function convertToSanityDocument({data = {}, contents}) {
  const turndownService = new TurndownService({
    codeBlockStyle: 'fenced',
    fence: '```'
  })

  const { title, description, date, authors, lastmod, topics, tags, relatedposts, seo } = data.frontmatter || {}

  console.log(`${date.split("T")[0]} - ${title}`)

  if(authors && authors.length > 0) {
    var authorsRefs = await Promise.all(authors.map(async (author) => {
      return await getAuthorRef(author);
    }));
  }

  if(topics) {
    var topicRef = await getTopicRef(topics[0]);
  }

  if(tags && tags.length > 0) {
    var tagsRefs = await Promise.all(tags.map(async (tag) => {
      return await getTagsRef(tag);
    }));
  }

  if(relatedposts && relatedposts.length > 0) {
    var postsRefs = await Promise.all(relatedposts.map(async (post) => {
      return await getRelatedPostRef(post);
    }));
  }

  if(date) {
    const formattedDate = date.split("T")
    var blogDate = formattedDate[0].split("-")
  } else {
    console.log('no date');
    var blogDate = new Date();
  }

  const year = blogDate[0];
  const month = blogDate[1];
  const day = blogDate[2];

  const removeNull = function(list) {
    if(!Array.isArray(list)) return null;

    const filtered = list.filter( el => el != null);

    if(filtered.length > 0) return filtered

    return null;
  }

  const doc = {
    "_type":"blogPost",
    _createdAt: format(new Date()),
    _updatedAt: format(new Date()),
    "_id": `blog_${slugify(title, { lower: true, strict: true })}_${year}${month}${day}`,
    title,
    description,
    "slug":{
    "_type":"slug",
      "current": `${year}/${month}/${day}/${slugify(title ? title : `no-title-${nanoid()}`, { lower: true, strict: true })}/`
    },
    publishDate: `${year}-${month}-${day}`,
    "markdown": turndownService.turndown(contents),
    "seofields":{
      "_type":"seofields",
      "metadescription": seo && seo.metatitle ? seo.metatitle : '',
      "metatitle": seo && seo.metadescription ? seo.metadescription : '',
      "lastModificationDate": lastmod ? lastmod : '',
    },
    "authors": authorsRefs,
    "blogTags":removeNull(tagsRefs),
    "topic": topicRef,
    relatedPosts: removeNull(postsRefs)
  }

  if(seo && seo.ogimage) {
    doc.seofields.ogimage = {
      "_type": "image",
      "_sanityAsset": seo && seo.ogimage ? `image@file:///Users/sam/Documents/Netlify/Code/markdown-to-sanity${seo.ogimage}` : '',
    }
  }

  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  }

  return removeEmpty(doc);
}

module.exports = convertToSanityDocument
