import './Dashboard.css'
import { useState, useEffect } from 'react'

function Dashboard () {

  const apiKey='xK7RQqZlQJNbAVvD3uspG5xdju3gGsvV'

  const handleClick = (e) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${e.target.value}.json?api-key=${apiKey}`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Couldn\'t find any articles, please try again')
        } else {
          return resp.json()
        }
      })
  }

  return(
    <main>
      <h2>What kind of articles would you like to view?</h2>
      <select name='article-select' id='article-select'>
        <option value=''> --Please select an option--</option>
        <option value='arts'>Arts</option>
        <option value='automobiles'>Automobiles</option>
        <option value='books'>Books</option>
        <option value='business'>Business</option>
        <option value='fashion'>Fashion</option>
        <option value='food'>Food</option>
        <option value='health'>Health</option>
        <option value='home'>Home</option>
        <option value='insider'>Insider</option>
        <option value='magazine'>Magazine</option>
        <option value='movies'>Movies</option>
        <option value='nyregion'>New York Region</option>
        <option value='obituaries'>Obituaries</option>
        <option value='opinion'>Opinion</option>
        <option value='politics'>Politics</option>
        <option value='realestate'>Real Estate</option>
        <option value='science'>Science</option>
        <option value='sundayreview'>Sunday Review</option>
        <option value='technology'>Technology</option>
        <option value='theater'>Theater</option>
        <option value='t-magazine'>T-Magazine</option>
        <option value='travel'>Travel</option>
        <option value='upshot'>Upshot</option>
        <option value='us'>US News</option>
        <option value='world'>World News</option>
      </select>
      <button onClick={e => handleClick}
    </main>
  )
}

export default Dashboard
