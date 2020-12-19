const { data } = require("jquery")

document.addEventListener('DOMContentLoaded', () => {
  console.log("the apiNytimesArticleSearch js file loaded")
  loadButtons()
  listenerButtons()
  // fetchArticles() 
})

const listenerButtons = () => {
  $('button.nyt').on('click', (event) => {
    event.preventDefault()
    let query = event.currentTarget.textContent
    fetchArticles(query)
  }) 
}

const loadButtons = () => {
  let nav = document.getElementById('articles-nav')
  nav.innerHTML = "<button class='articles__button nyt'>Food</button>"
  nav.innerHTML += "<button class='articles__button nyt'>Arts</button>"
  nav.innerHTML += "<button class='articles__button nyt'>Sports</button>"
  nav.innerHTML += "<button class='articles__button nyt'>News</button>"
}

const fetchArticles = (queryTerm) => {
  let data = {
    endpoint: 'articlesearch',
    query: queryTerm
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
