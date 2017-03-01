import React from 'react'

import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <div style={{display: "flex", padding: "30px 0 10px 10px", justifyContent: "center", alignContent: "center", flexDirection: "column", borderBottom: "1px solid grey"}}>
        <div style={{fontSize: "30px", color: "#a9d864"}}>
          Rotalia Foundation
        </div>
        <div style={{fontSize: "16px", color: "black"}}>Providing scholarships in the pursuit of higher learning since 1982</div>
      </div>
    )
  }
}
