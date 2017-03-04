import React from 'react'
import RotaliaLogo from '../RotaliaLogoV4.png'

import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <div style={{display: "flex", padding: "30px 0 10px 10px", justifyContent: "center", alignContent: "center", flexDirection: "row", borderBottom: "1px solid grey", fontWeight: "600"}}>
        <div style={{display: "flex", flexDirection: "column"}}><div style={{fontSize: "18px", color: "#a9d864"}}>
          Rotalia Foundation
        </div>
        <div style={{fontSize: "12px", color: "black"}}>Preserve and enhance Estonian cultural heritage</div></div>
      </div>
    )
  }
}
