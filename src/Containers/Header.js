import React from 'react'
import RotaliaLogo from '../RotaliaLogoV4.png'

import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <div style={{display: "flex", padding: "30px 0 10px 10px", alignContent: "center", flexDirection: "row", fontWeight: "600", flexShrink: "0"}}>
        <Link to="/" style={{display: "flex", justifyContent: "center"}}>
          <div style={{background: `url(${RotaliaLogo})`, width: "100px", height: "89px", backgroundRepeat: "no-repeat"}}>
          </div>
        </Link>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center" , padding: "0 0 0 10px"}}><div style={{fontSize: "36px", color: "#a9d864"}}>
          Rotalia Foundation
        </div>
        <div style={{fontSize: "12px", color: "black"}}>Preserve and enhance Estonian cultural heritage</div></div>
      </div>
    )
  }
}
