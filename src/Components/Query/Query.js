import './Query.css'
import { Link } from 'react-router-dom'

function Query({ articles, findSelected }) {

  const listArticles = articles.map(article => {
    return (
      <div>
        <Link to='/article'>
          <button key={article.title} className='query-btn' onClick={() => findSelected(article.id)}>
            {article.title}
          </button>
        </Link>
        <p>{article.byline}</p>
      </div>
    )
  })

  return (
    <div className='query-container'>
      <div className='list-container'>
        <main>
          {listArticles}
        </main>
      </div>
    </div>
  )
}

export default Query 