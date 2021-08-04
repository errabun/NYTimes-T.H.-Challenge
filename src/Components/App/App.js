import './App.css';
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import Query from '../Query/Query'
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import { fetchSelectNews } from '../apiCalls/apiCalls'

function App() {

  const [articles, setArticles] = useState([])

  const submitGenre = (newsSelection) => {
    fetchSelectNews(newsSelection)
      .then(data => setArticles(data.results))
  }

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route
            exact path='/query'
            render={() => <Query articles={articles} />}
          />
          <Route
            exact path='/'
            render={() => <Dashboard submitGenre={submitGenre}/>}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
