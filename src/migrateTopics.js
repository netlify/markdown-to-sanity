const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const slugify = require('slugify')

let topics = [
  {"slug":"insights", "title": "Opinions & Insights"},
  {"slug":"tools", "title": "Tools & Services"},
  {"slug":"news", "title": "News & Announcements"},
  {"slug":"tutorials", "title": "Guides & Tutorials"},
  {"slug":"sites", "title": "Featured Sites"},
  {"slug":"links", "title": "Useful Links"},
  {"slug":"case-studies", "title": "Case Studies"},
]

const ndJsonTopics = topics.map(topic => {
  const sanityTopic = {
    "_id": uuidv4(),
    "_type": "blogTopic",
    "slug": {
      "_type": "slug",
      "current": topic.slug
    },
    "title": topic.title
  }

  return JSON.stringify(sanityTopic)
})

let topicString = ''
ndJsonTopics.map(topic => {
  topicString = `${topicString}\n${topic}`
})

fs.writeFileSync('blog-topic.ndjson', topicString);
// {
//   "_createdAt": "2021-12-03T20:11:46Z",
//   "_id": "7a5be64d-fab3-48a9-806f-c2828d9bd16f",
//   "_rev": "oG9CJm6BFPy9ug6wRzF34Y",
//   "_type": "blogTag",
//   "_updatedAt": "2021-12-03T20:11:46Z",
//   "slug": {
//     "_type": "slug",
//     "current": "test"
//   },
//   "title": "test"
// }