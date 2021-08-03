import './Dashboard.css'
import { useState, useEffect } from 'react'

function Dashboard () {
  const [newsSelection, setNewsSelection] = useState('')

  const apiKey='xK7RQqZlQJNbAVvD3uspG5xdju3gGsvV'

  const handleClick = (e) => {
    setNewsSelection(e.target.value)
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${newsSelection}.json?api-key=${apiKey}`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Couldn\'t find any articles, please try again')
        } else {
          return console.log(resp.json())
        }
      })
  }

  return(
    <main>
      <h2>What kind of articles would you like to view?</h2>
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
        <option value='opinion'>Opinion</option>
        <option value='politics'>Politics</option>
        <option value='realestate'>Real Estate</option>
        <option value='science'>Science</option>
        <option value='technology'>Technology</option>
        <option value='travel'>Travel</option>
        <option value='us'>US News</option>
        <option value='world'>World News</option>
      </select>
      <button onClick={e => handleClick(e)}>Show me news</button>
    </main>
  )
}

export default Dashboard
