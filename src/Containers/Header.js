import React from 'react'
import RotaliaLogo from '../RotaliaLogoV4.png'

import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <div style={{display: "flex", padding: "0 0 30px 0"}}>
        <Link to="/" style={{padding: "0 10px 0 0"}}>
          <div style={{background: `url(${RotaliaLogo})`, width: "100px", height: "89px", backgroundRepeat: "no-repeat"}}>
          </div>
        </Link>
        <div style={{fontSize: "30px", color: "#a9d864"}}>
          Rotalia Foundation
        </div>
      </div>
    )
  }
}
