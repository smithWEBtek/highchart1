document.addEventListener('DOMContentLoaded', () => {
  console.log("the apiNytimesArticleSearch js file loaded")

  fetchArticles()
  debugger;
})
const API_KEY = process.env["NYT_API_KEY"]
// const API_KEY = process.env.NYT_API_KEY

const fetchArticles = () => {
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=${API_KEY}`

  $.ajax({
    url: url,
    method: 'get',
    dataType: 'json'
  }).done(response => {
    console.log('response: ', response)
  })
}