import './Query.css'
import { Link } from 'react-router-dom'

function Query({ articles, findSelected }) {

  const listArticles = articles.map(article => {
    return (
      <div>
        <button key={article.title} onClick={() => findSelected(article.id)}>
          {article.title}
        </button>
        <p>{article.byline}</p>
      </div>
    )
  })

  return (
    <div className='query-container'>
      <div className='list-container'>
        <h2>Other related news stories...</h2>
        <main>
          <Link to='/article'>
            {listArticles}
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Query 