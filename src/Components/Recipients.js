import React from 'react'

export default class Recipients extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2016.pdf")} >2016/2017</a>
        </div>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2015.pdf")}>2015/2016</a>
        </div>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2014.pdf")}>2014/2015</a>
        </div>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2013.pdf")}>2013/2014</a>
        </div>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2012.pdf")}>2012/2013</a>
        </div>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2011.pdf")}>2011/2012</a>
        </div>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2010.pdf")}>2010/2011</a>
        </div>
        <div>
          <a href={require("../pdfs/RF_stipendiaadid_2009.pdf")}>2009/2010</a>
        </div>
      </div>
    )
  }
}
