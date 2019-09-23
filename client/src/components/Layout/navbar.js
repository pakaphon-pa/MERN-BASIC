import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">ExcerMemo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-item">
                <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
                <Link to="/user" className="nav-link">Create User</Link>
            </li>
         
          </ul>
        </div>
      </nav>
      
    )
}

export default navbar
