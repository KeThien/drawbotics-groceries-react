import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink exact to="/"><button className="btn">Home</button></NavLink>
        <NavLink to="/stats"><button className="btn">Stats</button></NavLink>
        <NavLink to="/recipes"><button className="btn">Recipes</button></NavLink>
      </nav>
    )
  }
}

export default Navbar
