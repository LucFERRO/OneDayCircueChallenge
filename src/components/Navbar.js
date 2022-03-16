import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/"> <h1>Accueil</h1></Link>
      <Link to="/staff"> <h1>Artistes</h1></Link>
      <Link to="/pricing"> <h1>Bon de commande</h1> </Link>
      <Link to="/agenda"> <h1>Réservation</h1> </Link>
      <Link to="/contacts"> <h1>Contacts</h1> </Link>
    </nav>
  )
}

export default Navbar