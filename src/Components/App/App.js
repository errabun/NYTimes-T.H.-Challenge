import './App.css';
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import Query from '../Query/Query'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchSelectNews } from '../apiCalls/apiCalls'

function App() {

  const [articles, setArticles] = useState({})

  const handleSubmit = (newsSelection) => {
    fetchSelectNews(newsSelection)
      .then(data => setArticles(data.results))
  }

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route
            exact path='/'
            render={() => <Dashboard handleSubmit={handleSubmit}/>}
          />
          <Route
            exact path='/query'
            render={() => <Query />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
