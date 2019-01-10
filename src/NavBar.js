import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <ul className="right">
          <li><NavLink exact to="/">Film Populaire</NavLink></li>
          <li><NavLink to='/upcoming'>Film bientôt en salle</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default withRouter(Navbar)