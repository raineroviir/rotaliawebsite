import React from 'react'
import { Link } from 'react-router'

export default class BoardOfDirectors extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexFlow: "row wrap", width: "100%", fontWeight: "600"}}>
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
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Mart-Kask">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Mart Kask</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Chairman & Managing Director</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Vaho-Rebassoo">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Vaho Rebassoo</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Secretary</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Paul-Raidna">
            <img style={{width: "200px", height: "267px"}} src={require("../PaulRaidnav2.png")} />
            <div style={{padding: "5px"}}><p>Paul Raidna</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Treasurer</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Vice-Chairman">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Thomas Napa</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Vice Chairman</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Vice-Chairman">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Kalev Sepp</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Vice Chairman</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Veljo-Areng">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Veljo Areng</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Rein-Grabbi">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Rein Grabbi</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Mati-Laan">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Mati Laan</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Tiina-Oviir">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Tiina Oviir</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Jüri-Tint">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Jüri Tint</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", borderBottom: "1px dotted black", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Margus-Veanes">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Margus Veanes</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
          <div style={{padding: "10px 0px", flexGrow: "1"}}>
            <Link style={{display: "flex", flexFlow: "column", alignItems: "center"}} to="/Valdek-Parik">
            <img style={{width: "200px", height: "267px"}} src={""} />
            <div style={{padding: "5px"}}><p>Valdek Parik</p></div>
            </Link>
            <div style={{display: "flex", justifyContent: "center"}}>Member</div>
          </div>
        </div>
      </div>
    )
  }
}
