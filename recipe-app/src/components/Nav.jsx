import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()
  const handleLogout = () =>{
    window.localStorage.clear()
    axios.get('http://localhost:3001/auth/logout')
    .then(result => navigate('/'))
    .catch(err => console.log(err))
  }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{textAlign: 'center'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontSize: '60px', color: 'greenyellow'}}>
      Your Recipe
    </Link>
    <div className='nav-recipe'  style={{display: 'flex', placeItems: 'center', textAlign: 'center', fontSize: '20px', marginLeft: '-60px'}}>
    <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/recipe/create-recipe">
            Create Recipe
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/recipe/saved-recipe">
            Saved Recipes
          </Link>
        </li>
    </ul>
    </div>

    {
      window.localStorage.length ?
      <button className='btn btn-outline-light' onClick={handleLogout}>
        Logout
      </button>
      :
    <button className='btn btn-outline-light' type='submit'>
        <Link to="/auth/register" style={{textDecoration: 'none'}}>
        Login/Register
        </Link>
    </button>
    }
  </div>
</nav>

        </div>
    )
}

export default Nav
