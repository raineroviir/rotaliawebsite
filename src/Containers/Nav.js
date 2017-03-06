import React from 'react'
import { Link } from 'react-router'
import HamburgerIcon from 'react-icons/lib/md/dehaze'

export default class Nav extends React.Component {
  constructor() {
    super()
    this.setActive = this.setActive.bind(this)
    this.state = {
      active: ""
    }
  }
  setActive(e) {
    this.setState({active: e.target.innerText})
  }
  render() {
    return (
      <div style={{background: "#1173bc", color: "white", padding: "25px 0 5px 0", width: "125px", flexShrink: "0", margin: "119px 50px 0 0"}}>
        <Link className="navbar-button" to="/">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "Home" ? "rgb(12, 84, 137)" : ""}}>Home</div>
        </Link>
        <Link className="navbar-button" to="/news">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "News" ? "rgb(12, 84, 137)" : ""}}>News</div>
        </Link>
        <Link className="navbar-button" to="/board">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "Board of Directors" ? "rgb(12, 84, 137)" : ""}}>Board of Directors</div>
        </Link>
        <Link className="navbar-button" to="/selection">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "Selection Committee" ? "rgb(12, 84, 137)" : ""}}>Selection Committee</div>
        </Link>
        <Link className="navbar-button"to="/recipients">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "Scholarship Recipients" ? "rgb(12, 84, 137)" : ""}}>Scholarship Recipients</div>
        </Link>
        <Link className="navbar-button"  to="/incorporation">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "Articles of Incorporation" ? "rgb(12, 84, 137)" : ""}}>Articles of Incorporation</div>
        </Link>
        <Link className="navbar-button" to="/trust" >
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "Charitable Trust" ? "rgb(12, 84, 137)" : ""}}>Charitable Trust</div>
        </Link>
        <Link className="navbar-button" to="/bylaws">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "By-Laws" ? "rgb(12, 84, 137)" : ""}}>By-Laws</div>
        </Link>
        <Link className="navbar-button"  to="/contact">
          <div onClick={this.setActive} className="navbar-innerbutton-div" style={{background: this.state.active === "Contact" ? "rgb(12, 84, 137)" : ""}}>Contact</div>
        </Link>
      </div>
    )
  }
}
