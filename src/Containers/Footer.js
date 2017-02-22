import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
      <div style={{padding: "10px", borderTop: "1px solid #dce0e0", color: "#666", background: "#a9d864"}}>
        sirje.mark@ut.ee | (+372) 737 5609 or (+372) 507 3729 |
        Ülikooli 18-121, Tartu 50090
      </div>
    )
  }
}
