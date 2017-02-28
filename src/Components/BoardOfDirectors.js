import React from 'react'
import { Link } from 'react-router'

export default class BoardOfDirectors extends React.Component {
  render() {
    return (
      <div>
        Rotalia Foundation Board of Directors as of 13 February 2017
        <Link to="/Mart-Kask"> <p>Mart Kask, M.S., PE, ICMA, Chairman & Managing Director, Mercer Island, WA</p></Link>
        <Link to="/Vaho-Rebassoo"><p>Vaho Rebbasoo, Ph.D., Secretary, Seattle, WA</p></Link>
        <p>Paul Raidna, BA, CPA., Seattle, WA</p>
        <p>Veljo Areng, BS, PE, Member, Muraste, Harjumaa, Estonia</p>
        <p>Rein Grabbi, MS, Chairman, Scholarship Selection Committee, Tallinn, Estonia</p>
        <p>Mati Laan, BS, PE, Member, Santa Monica, CA</p>
        <p>Thomas Napa, MBA, CPA, Vice Chairman, Edmonds, WA</p>
        <p>Tiina Oviir, DDS, Member, Seattle, WA</p>
        <p>Kalev Sepp, Ph.D., Vice Chairman, Beaverton, OR</p>
        <p>Jūri Tint, MS, Member, East Hampton, NY</p>
        <p>Margus Veanes, Ph.D., Member, Bellevue, WA</p>
        <p>Valdek Parik, AS, Member, Aloha, OR</p>
      </div>
    )
  }
}
