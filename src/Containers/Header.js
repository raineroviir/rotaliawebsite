import React from 'react'

import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <div style={{display: "flex", padding: "0 0 30px 0", justifyContent: "center"}}>
        <div style={{fontSize: "30px", color: "#a9d864"}}>
          Rotalia Foundation
        </div>
      </div>
    )
  }
}
