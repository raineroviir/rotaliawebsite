import React from 'react'

export default class Recipients extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", fontWeight: "600"}}>
        <p style={{fontSize: "18px"}}>Scholarship Recipients</p>
          <p>The 2016-2017 academic year scholarship recipients are listed on the following page:
          </p>

          <div>
            <a href={require("../pdfs/2016Recipients.pdf")} >Recipients (PDF)</a>
          </div>
          <div style={{padding: "5 0 0 0"}}>
            <a href={require("../pdfs/Brochure095.pdf")} >Brochure (PDF)</a>
          </div>
        {/* <div>
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
        </div> */}
      </div>
    )
  }
}
