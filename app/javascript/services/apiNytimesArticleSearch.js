const { data } = require("jquery")

document.addEventListener('DOMContentLoaded', () => {
  console.log("the apiNytimesArticleSearch js file loaded")
  fetchArticles()
})


const fetchArticles = () => {
  let data = {
    endpoint: 'articlesearch',
    query: 'news'
  }

  $.ajax({
    url: '/nyt_api',
    method: 'get',
    data: data,
    dataType: 'json'
  }).done(response => {
 
    const articles = response.table.payload.response.docs.map(a => {
      return new Article(a)
    })

    const articleCards = articles.map(a => {
      return a.articleHtml()
    })
    
    document.querySelector('#nyt-articles').innerHTML = articleCards.join('')
  })
}

class Article {
  constructor(obj) {
    this.headline = obj.headline.main
  }
}

Article.prototype.articleHtml = function () {
  return (`
    <div class ='article-card'>
      <h3 class='article-card__headline'>${this.headline}</h3>
    </div>
  `)
}