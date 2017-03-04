import React from 'react'

import { Link } from 'react-router'
import HamburgerIcon from 'react-icons/lib/md/dehaze'
import RotaliaLogoSmall from '../RotaliaLogoSmall.png'

export default class MobileHeader extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid grey", justifyContent: "space-between", flexShrink: "0"}}>
        <HamburgerIcon style={{flexShrink: "0", background: "#1173bc", color: "white", fontSize: "50px", padding: "11px 10px 10px 10px", alignSelf: "center"}} onClick={this.props.handleClick}/>
        <div style={{fontSize: "30px", color: "#a9d864", alignSelf: "center", padding: "0 10px"}}>
          Rotalia Foundation
        </div>
        <Link to="/" style={{display: "flex", justifyContent: "center"}}>
          <div style={{background: `url(${RotaliaLogoSmall})`, width: "80px", height: "71px", backgroundRepeat: "no-repeat"}}>
          </div>
        </Link>
      </div>
    )
  }
}
