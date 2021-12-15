const fetch = require('node-fetch');
/* const mutations = [
  {
    "patch": {
      "query": "*[_type == 'blogPost']",
      "unset": ["relatedPosts"]
    }
  }
] */
const mutations = [
  {
    delete: {
      "query": "*[_type == 'blogPost']"
    },
  },
]
/* const mutations = [
  {
    "patch": {
      "query": "*[_type == 'blogTags']",
      "set": {
        "_type": "blogTag"
      }
    }
  }
] */
fetch(`https://o0o2tn5x.api.sanity.io/v2021-06-07/data/mutate/import-blog-data?dryRun=true`, {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer skLxH4mM7Ab2zr2WSsgAiwcxBVlyg0HwkLZfstOw3mD2bioGdd7QkCYJzT0jkZq2mSlGNoLQrWHLpbKeg`
  },
  body: JSON.stringify({mutations})
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))