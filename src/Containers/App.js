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
      nav: false
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
  handleClick() {
    console.log('hclick')
  }
  showNav() {
    this.setState({nav: !this.state.nav})
    console.log('clicked outside')
  }
  render() {
    const { height, isMobile, width } = this.props
    const computedStyle = isMobile ?
    {height: `${height}px`,width: `${width}px`} :
    {height: "auto", top: "auto"}
    if (isMobile) {
      return (
        <div style={{display: "flex", fontFamily: "Arial"}}>
          {this.state.nav && <MobileNav handleClick={this.showNav} show={this.showNav}/>}
          <div style={{display: "flex", flexDirection: "column", width: "100%", height: height < this.state.contentHeight ? "auto" : height}}>
            <MobileHeader nav={this.state.nav} handleClick={this.showNav}/>
            <div id="content" style={{padding: "20px 10px", display: "flex", flexGrow: "1"}}>
              {this.props.children}
            </div>
            <Footer style={{alignSelf: "flex-end"}}/>
          </div>
        </div>
      )
    }
    return (
      <div style={{display: "flex", fontFamily: "Arial", }}>
        <Nav />
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: height < this.state.contentHeight ? "auto" : height}}>
          <Header />
          <div id="content" className="content" style={{padding: "30px 90px", display: "flex", flexGrow: "1"}}>
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
