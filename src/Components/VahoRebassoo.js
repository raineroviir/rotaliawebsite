import React from 'react'
import ReactDOM from 'react-dom'

export default class VahoRebassoo extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView()
  }
  render() {
    return (
      <div>
        <div style={{fontSize: "18px", padding: "0 0 20px 0"}} >
        Vaho Rebassoo - Secretary
        </div>
        {/* <img style={{float: "left", width: "200px", height: "267px", padding: "0 10px 0 0"}} src={""} /> */}

        <div style={{fontSize: "14px"}}>
<p>As Chief Technology Officer for Boeing IT, Dr. Vaho Rebassoo is
responsible for strategic planning and direction for infrastructure
technology across The Boeing Company.</p>

<p>At Boeing since 1984, he led the program to convert all Boeing phones
from Centrex to PABX Systems, and then managed Network Operations
and Network Technical Services before being promoted to CTO of
Network and Computing Operations in 1997, responsible for planning,
design and implementation of IT infrastructure enterprise-wide.</p>

<p>Prior to joining Boeing he held systems engineering and management
positions with the Pentagon Telecommunications Center Automation
Project and then with Bell Laboratories in digital telecommunications.</p>

<p>Dr. Rebassoo received his bachelor's degree from Harvard University and
his Master's and Ph.D. degrees in Mathematics from the University of
Washington.</p>

<p>He is a member of numerous Boards of Directors or Executive Advisory
Boards, including the Washington Technology Alliance Board, The
Department of State Advisory Committee on Communications &
Information Policy, the National Academy of Sciences Committee on
Improving Procurement Practices in IT, the UCLA Wireless Research
Council, and the Pacific Institute for Mathematical Sciences Board.</p>

<p>He has been an angel investor or board member for 3 new venture firms.
</p>
</div>
      </div>
    )
  }
}
