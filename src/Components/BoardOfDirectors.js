import React from 'react'
import { Link } from 'react-router'

export default class BoardOfDirectors extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexFlow: "row wrap", width: "100%", fontWeight: "600", flexGrow: "0"}}>
        <p style={{fontSize: "18px"}}>Board of Directors</p>
        {/* <ul>
          <li><Link to="/Mart-Kask">Mart Kask, M.S., PE, ICMA, Chairman & Managing Director, Mercer Island, WA</Link></li>
          <li><Link to="/Vaho-Rebassoo">Vaho Rebassoo, Ph.D., Secretary, Seattle, WA</Link></li>
          <li><Link to="/Paul-Raidna"> Paul Raidna, BA, CPA., Treasurer, Seattle, WA</Link></li>
          <li>Veljo Areng, BS, PE, Member, Muraste, Harjumaa, Estonia</li>
          <li>Rein Grabbi, MS, Chairman, Scholarship Selection Committee, Tallinn, Estonia</li>
          <li>Mati Laan, BS, PE, Member, Santa Monica, CA</li>
          <li>Thomas Napa, MBA, CPA, Vice Chairman, Edmonds, WA</li>
          <li>Tiina Oviir, DDS, Member, Seattle, WA</li>
          <li>Kalev Sepp, Ph.D., Vice Chairman, Beaverton, OR</li>
          <li>Jüri Tint, MS, Member, East Hampton, NY</li>
          <li>Margus Veanes, Ph.D., Member, Bellevue, WA</li>
          <li>Valdek Parik, AS, Member, Aloha, OR</li>
        </ul> */}
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between", flexGrow: "1"}}>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
              <Link to="/Mart-Kask">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link to="/Mart-Kask"><p>Mart Kask</p></Link></div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>Chairman & Managing Director</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
            <Link to="/Vaho-Rebassoo">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link to="/Vaho-Rebassoo"><p>Vaho Rebassoo</p></Link></div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>Secretary</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
              <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
                <Link  to="/Paul-Raidna">
              <img style={{width: "200px", height: "267px"}} src={require("../PaulRaidnav2.png")} />  </Link>
              <div style={{padding: "5px"}}><Link  to="/Paul-Raidna"><p>Paul Raidna</p> </Link></div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>Treasurer</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
              <Link to="/Thomas-Napa">
                <img style={{width: "200px", height: "267px"}} src={""} />
              </Link>
            <div style={{padding: "5px"}}>
              <Link to="/Thomas-Napa"><p>Thomas Napa</p></Link>
            </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>Vice Chairman</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
              <Link to="/Kalev-Sepp">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link to="/Kalev-Sepp"><p>Kalev Sepp</p></Link></div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>Vice Chairman</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
              <Link  to="/Veljo-Areng">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}>  <Link  to="/Veljo-Areng"><p>Veljo Areng</p></Link></div>

          </div>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}><Link  to="/Rein-Grabbi">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link  to="/Rein-Grabbi"><p>Rein Grabbi</p></Link></div>
          </div>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}><Link  to="/Mati-Laan">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link  to="/Mati-Laan"><p>Mati Laan</p></Link></div>
          </div>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}><Link  to="/Tiina-Oviir">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link  to="/Tiina-Oviir"><p>Tiina Oviir</p></Link></div>
          </div>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}><Link to="/Jüri-Tint">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link to="/Jüri-Tint"><p>Jüri Tint</p></Link></div>
          </div>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}><Link  to="/Margus-Veanes">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link  to="/Margus-Veanes"><p>Margus Veanes</p></Link></div>
          </div>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1", flexBasis: "33%"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}><Link  to="/Valdek-Parik">
            <img style={{width: "200px", height: "267px"}} src={""} /></Link>
            <div style={{padding: "5px"}}><Link  to="/Valdek-Parik"><p>Valdek Parik</p></Link></div>
          </div>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
        </div>
      </div>
    )
  }
}
