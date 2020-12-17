
document.addEventListener('DOMContentLoaded', () => {
  console.log("the apiNytimesArticleSearch js file loaded")
  fetchArticles()
})


const fetchArticles = () => {
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=${apiKey}`

  $.ajax({
    url: url,
    method: 'get',
    dataType: 'json'
  }).done(response => {
    console.log('response: ', response)
  })
}