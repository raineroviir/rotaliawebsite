import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
      <div style={{padding: "10px", borderTop: "1px solid #dce0e0", color: "#666", background: "#a9d864"}}>
        <div style={{display: "flex", justifyContent: "center"}}><div style={{padding: "0 5px"}}> Phone: 206 232-9388</div> <div style={{padding: "0 5px"}}>Email: kaskinc@aol.com</div></div>
      </div>
    )
  }
}
