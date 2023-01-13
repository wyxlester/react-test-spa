import React from 'react'
import Globe from '../images/globe.png'

const Nav = () => {
  return (
    <nav className="d-flex">
      <img src={Globe} alt="globe" className="nav--logo"/>
      <span className="nav--brand">My Travels</span>
    </nav>
  )
}

export default Nav
