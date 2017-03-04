import React from 'react'

export default class Bylaws extends React.Component {
  render() {
    return (
      <div style={{fontWeight: "600", display: "flex", flexDirection: "column"}}>
        <p style={{fontSize: "18px"}}>By-Laws </p>
          <p>By-Laws, dated 1983 are shown on the following pages:</p>
          <a href={require("../pdfs/Bylaws.pdf")}>By-Laws</a>
    
      </div>
    )
  }
}
