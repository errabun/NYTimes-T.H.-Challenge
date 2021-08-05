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
        <h2 style={{'textAlign': 'center'}}>What kind of articles would you like to view?</h2>
        <select id='article-select' value={newsSelection} onChange={e => setNewsSelection(e.target.value)}>
          {selectGenre}
        </select>
          {/* <button onClick={e => submitGenre(e.target.value)}>Submit</button> */}
        <Link to='/query' onClick={() => handleClick()}>  
          View articles
        </Link>
      </main>
    </div>
  )
}

export default Dashboard
