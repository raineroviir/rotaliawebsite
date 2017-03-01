import React from 'react'
import { Link } from 'react-router'

export default class BoardOfDirectors extends React.Component {
  render() {
    return (
      <div>
        Rotalia Foundation Board of Directors as of 13 February 2017
        <ul>
          <li><Link to="/Mart-Kask">Mart Kask, M.S., PE, ICMA, Chairman & Managing Director, Mercer Island, WA</Link></li>
          <li><Link to="/Vaho-Rebassoo">Vaho Rebbasoo, Ph.D., Secretary, Seattle, WA</Link></li>
          <li>Paul Raidna, BA, CPA., Seattle, WA</li>
          <li>Veljo Areng, BS, PE, Member, Muraste, Harjumaa, Estonia</li>
          <li>Rein Grabbi, MS, Chairman, Scholarship Selection Committee, Tallinn, Estonia</li>
          <li>Mati Laan, BS, PE, Member, Santa Monica, CA</li>
          <li>Thomas Napa, MBA, CPA, Vice Chairman, Edmonds, WA</li>
          <li>Tiina Oviir, DDS, Member, Seattle, WA</li>
          <li>Kalev Sepp, Ph.D., Vice Chairman, Beaverton, OR</li>
          <li>Jūri Tint, MS, Member, East Hampton, NY</li>
          <li>Margus Veanes, Ph.D., Member, Bellevue, WA</li>
          <li>Valdek Parik, AS, Member, Aloha, OR</li>
        </ul>
      </div>
    )
  }
}
