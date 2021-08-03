import './Header.css' 
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className='header-container'>
      <Link to='/'>
        <h2 style={{'margin-left': '1.5em'}}>News on Demand</h2>
      </Link>
    </div>
  )
}

export default Header