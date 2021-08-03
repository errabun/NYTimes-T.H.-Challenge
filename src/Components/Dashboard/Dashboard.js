import './Dashboard.css'
import { useState, useEffect } from 'react'

function Dashboard ({ handleSubmit }) {
  const [newsSelection, setNewsSelection] = useState('')
  const [articles, setArticles] = useState({})

  return(
    <div className='component-container'>
      <main className='select-container'>
        <h2 style={{'textAlign': 'center'}}>What kind of articles would you like to view?</h2>
        <select name='article-select' id='article-select' value={newsSelection} onChange={e => setNewsSelection(e.target.value)}>
          <option value=''> --Please select an option--</option>
          <option value='arts'>Arts</option>
          <option value='books'>Books</option>
          <option value='business'>Business</option>
          <option value='fashion'>Fashion</option>
          <option value='food'>Food</option>
          <option value='health'>Health</option>
          <option value='magazine'>Magazine</option>
          <option value='movies'>Movies</option>
          <option value='politics'>Politics</option>
          <option value='realestate'>Real Estate</option>
          <option value='science'>Science</option>
          <option value='sports'>Sports</option>
          <option value='technology'>Technology</option>
          <option value='travel'>Travel</option>
          <option value='us'>US News</option>
          <option value='world'>World News</option>
        </select>
        <button onClick={() => handleSubmit(newsSelection)}>Show me news</button>
      </main>
    </div>
  )
}

export default Dashboard
