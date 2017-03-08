import React from 'react'

import { Link } from 'react-router'
import HamburgerIcon from 'react-icons/lib/md/dehaze'

export default class MobileHeader extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid grey", justifyContent: "space-between", height: "55px"}}>
        <HamburgerIcon style={{background: "#1173bc", color: "white", fontSize: "34px", padding: "11px 13px"}} onClick={this.props.handleClick}/>
        <div style={{fontSize: "24px", color: "#a9d864", padding: "0 10px", alignSelf: "center"}}>
          <div style={{textAlign: "center"}}>Rotalia Foundation</div>
        </div>
        <Link to="/" style={{display: "flex", justifyContent: "center", alignItems: "center", }}>
          <img src={require('../RotaliaLogoSmall62.png')} />
        </Link>
      </div>
    )
  }
}
