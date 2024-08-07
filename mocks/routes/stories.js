const twoStories = require('../../cypress/fixtures/stories.json')
const threeStories = require('../../cypress/fixtures/incomplete.json')

const fiveStories = {
  hits: [
    ...twoStories.list,
    ...threeStories.list
  ]
}

const nextStories = {
  hits: [
    {
      "objectID": "6",
      "title": "Clean Agile",
      "author": "Robert C. Martin",
      "url": "https://example.com/rm4",
      "num_comments": 9983,
      "points": 424
    },
    {
      "objectID": "7",
      "title": "Clean Craftsmanship",
      "author": "Robert C. Martin",
      "url": "https://example.com/rm5",
      "num_comments": 134,
      "points": 8487
    },
    {
      "objectID": "8",
      "title": "Composing Software",
      "author": "Eric Elliott",
      "url": "https://example.com/ee",
      "num_comments": 99,
      "points": 999
    },
    {
      "objectID": "9",
      "title": "The Programmer's Brain",
      "author": "Felienne Hermans",
      "url": "https://example.com/fh",
      "num_comments": 349,
      "points": 937
    },
    {
      "objectID": "10",
      "title": "A Philosophy of Software Design",
      "author": "John Ousterhout",
      "url": "https://example.com/jo",
      "num_comments": 10001,
      "points": 1000
    },
  ]
}

module.exports = [
  {
    id: 'get-stories',
    url: '*/search**',
    method: 'GET',
    variants: [
      {
        id: 'five-stories',
        type: 'middleware',
        options: {
          middleware: (req, res) => {
            res.status(200)
            if (req.query.page === '0') {
              res.send(fiveStories)
            } else {
              res.send(nextStories)
            }
          }
        }
      },
      {
        id: 'no-stories',
        type: 'json',
        options: {
          status: 200,
          body: { hits: [] }
        }
      },
    ]
  }
]
