import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h3>
          Groceries App React
        </h3>
        <button className="btn">Login</button>
      </div>
    )
  }
}

export default Header
