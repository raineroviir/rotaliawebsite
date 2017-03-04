import React from 'react'
import { Link } from 'react-router'
import RotaliaLogo from '../RotaliaLogoV4.png'
import HamburgerIcon from 'react-icons/lib/md/dehaze'

export default class Nav extends React.Component {
  render() {
    return (
      <div style={{background: "#1173bc", color: "white", padding: "5px 20px", width: "160px"}}>
        <Link to="/" style={{display: "flex", justifyContent: "center"}}>
          <div style={{background: `url(${RotaliaLogo})`, width: "100px", height: "89px", backgroundRepeat: "no-repeat"}}>
          </div>
        </Link>
        <Link style={{padding: "10px"}} to="/"><div style={{color: "white"}}>Home</div></Link>
        <Link style={{padding: "10px"}} to="/news"><div style={{color: "white"}}>News</div></Link>
        <Link style={{padding: "10px"}} to="/board"><div style={{color: "white"}}>Board of Directors</div></Link>
        <Link style={{padding: "10px"}} to="/selection"><div style={{color: "white"}}>Selection Committee</div></Link>
        <Link style={{padding: "10px"}} to="/recipients"><div style={{color: "white"}}>Scholarship Recipients</div></Link>
        <Link style={{padding: "10px"}} to="/incorporation"><div style={{color: "white"}}>Articles of Incorporation</div></Link>
        <Link style={{padding: "10px"}} to="/trust"><div style={{color: "white"}}>Charitable Trust</div></Link>
        <Link style={{padding: "10px"}} to="/bylaws"><div style={{color: "white"}}>By-Laws</div></Link>
        <Link style={{padding: "10px"}} to="/contact"><div style={{color: "white"}}>Contact</div></Link>
      </div>
    )
  }
}
