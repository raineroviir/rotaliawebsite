import React from 'react'

export default class Trust extends React.Component {
  render() {
    return (
      <div style={{fontWeight: "600", display: "flex", flexDirection: "column"}}>
        <p style={{fontSize: "18px"}}>Charitable Trust</p>

          <p>Charitable Trust letter is shown on the following page:</p>

          <a href={require("../pdfs/CharitableTrust.pdf")}>Charitable Trust</a>

      </div>
    )
  }
}
