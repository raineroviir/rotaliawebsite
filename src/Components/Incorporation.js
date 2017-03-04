import React from 'react'

export default class Incorporation extends React.Component {
  render() {
    return (
      <div style={{fontWeight: "600", display: "flex", flexDirection: "column"}}>
          <p style={{fontSize: "18px"}}>Articles of Incorporation</p>

        <p>Articles of Incorporation, dated December 28, 1982 is shown on the following pages:
        </p>

          <a href={require("../pdfs/ArticlesofIncorporation.pdf")}>Articles of Incorporation</a>
      </div>
    )
  }
}
