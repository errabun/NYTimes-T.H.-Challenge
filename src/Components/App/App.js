import './App.css';
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route
          exact route='/'
          render={() => <Dashboard/>}
        />
      </main>
    </div>
  );
}

export default App;
