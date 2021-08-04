import './Query.css'
import { Link } from 'react-router-dom'

function Query({ articles }) {

  const displayFirst = () => {
    return (
      <div>
        <h1>{articles[0].section.toUpperCase()}</h1>
        <h2>{articles[0].title}</h2>
        <h4>{articles[0].byline}</h4>
        <Link to={articles[0].url}>Take me to this story</Link>
        <p>{articles[0].abstract}</p>
        <img src={articles[0].multimedia[0].url} height='300' width='550' alt='story multimedia' />
      </div>  
    )
  }

  return (
    <div className='query-container'>
      <div className='main-story'>
        {displayFirst()}
      </div>
      <div className='list-container'>
        <h2>Other related news stories...</h2>
        <ul>
          {articles.map(article => {
            return (
              <div>
                <li key={article.title}>
                  <Link to={article.url}>
                    {article.title}
                  </Link>
                </li>
                {article.byline}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Query 