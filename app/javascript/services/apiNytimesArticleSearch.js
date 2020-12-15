document.addEventListener('DOMContentLoaded', () => {
  console.log("the apiNytimesArticleSearch js file loaded")

  fetchArticles()
})

const fetchArticles = () => {

  let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ZSUEMQxulNj8dK5AkSjdlJGLwiiJAjws"

  $.ajax({
    url: url,
    method: 'get',
    dataType: 'json'
  }).done(response => {
    console.log('response: ', response)
  })
}