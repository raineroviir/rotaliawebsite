import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'
import '../index.scss'
import { initEnvironment } from '../actions/environment'
import { connect } from 'react-redux'
import MobileHeader from './MobileHeader'
import MobileNav from './MobileNav'

class App extends React.Component {
  constructor() {
    super()
    this.showNav = this.showNav.bind(this)
    this.state = {
      contentHeight: "auto",
      nav: false,
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initEnvironment())
  }
  componentDidUpdate(nextProps, nextState) {
    const height = document.getElementById('content').scrollHeight;
    if (nextState.contentHeight !== height) {
      this.setState({contentHeight: height})
    }
  }
  showNav() {
    this.setState({nav: !this.state.nav})
  }
  render() {
    const { height, isMobile, width } = this.props
    const computedStyle = isMobile ?
    {height: `${height}px`,width: `${width}px`} :
    {height: "auto", top: "auto"}
    console.log(height)
    console.log(width)
    if (isMobile) {
      return (
        <div style={{display: "flex", fontFamily: "Arial"}}>
          {this.state.nav && <MobileNav show={this.showNav}/>}
          <div style={{display: "flex", flexDirection: "column", width: "100%", height: height < this.state.contentHeight ? "auto" : height}}>
            <MobileHeader nav={this.state.nav} handleClick={this.showNav}/>
            <div id="content" className="content" style={{overflowY: "scroll",  display: "flex", flexDirection: "column",flexGrow: "1"}}>
              <div style={{padding: "20px 10px"}}>
                {this.props.children}
              </div>
              <div style={{flexGrow: "0", marginTop: "auto"}}>
              <Footer />
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div style={computedStyle, {display: "flex", fontFamily: "Arial", padding: "0 80px 0 50px"}}>
        <Nav />
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: height < this.state.contentHeight ? "auto" : height}}>
          <Header />
          <div id="content" className="content" style={{padding: "30px 0 0 0", display: "flex", flexGrow: "1"}}>
            {this.props.children}
          </div>
          <Footer style={{alignSelf: "flex-end"}}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { environment } = state
  const { height, isMobile, width } = environment
  return {
    height, isMobile, width
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
