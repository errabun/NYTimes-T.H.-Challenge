import './App.css';
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import Query from '../Query/Query'
import Article from '../Article/Article'
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import { fetchSelectNews } from '../apiCalls/apiCalls'

function App() {

  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState('')

  const submitGenre = (newsSelection) => {
    fetchSelectNews(newsSelection)
      .then(data => setArticles(data.results))
  }

  const findSelected = (title) => {
    const foundStory = articles.find(article => article.id === title)
    setSelectedArticle(foundStory)
  }

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route
            exact path='/query'
            render={() => <Query articles={articles} findSelected={findSelected}/>}
          />
          <Route
            exact path='/article'
            render={() => <Article selectedArticle={selectedArticle} />}
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
