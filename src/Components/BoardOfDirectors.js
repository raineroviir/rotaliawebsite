import React from 'react'
import { Link } from 'react-router'

export default class BoardOfDirectors extends React.Component {
  render() {
    return (
      <div>
        Rotalia Foundation Board of Directors as of 13 February 2017
        <Link to="/Mart-Kask"> <p>Mart Kask - President</p></Link>
        <Link to="/Vaho-Rebassoo"><p>Vaho Rebassoo - Secretary</p></Link>
        <p>Paul Raidna - Treasurer </p>
        <p>Veljo Areng</p>
        <p>Rein Grabbi</p>
        <p>Mati Laan</p>
        <p>Toomas Napa</p>
        <p>Tiina Oviir</p>
        <p>Kalev Sepp</p>
        <p>Jüri Tint</p>
        <p>Margus Veanes</p>
        <p>Valdek Parik</p>
        <p>Bruno Laan, Emeritus</p>
        <p>Aavo Kalviste, Emeritus</p>
        <p>Lembit Kosenkranius, Emeritus</p>
      </div>
    )
  }
}
