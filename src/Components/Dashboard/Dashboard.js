import './Dashboard.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import genres from '../../newsGenres'

function Dashboard ({ submitGenre }) {
  const [newsSelection, setNewsSelection] = useState('')

  const handleClick = () => {
    submitGenre(newsSelection)
  }

  const selectGenre = genres.map((genre, index) => {
    return (
      <option value={genre} key={index} id={genre}>{genre}</option>
    )
  })

  return(
    <div className='component-container'>
      <main className='select-container'>
        <h2 style={{'textAlign': 'center'}}>What kind of news articles would you like to view?</h2>
        <select className='genre-select' id='article-select' value={newsSelection} onChange={e => setNewsSelection(e.target.value)}>
          {selectGenre}
        </select>
        <button className='query-btn'>
          <Link to='/query' onClick={() => handleClick()}>  
            View articles
          </Link>
        </button>
      </main>
    </div>
  )
}

export default Dashboard
