import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'
import '../index.scss'
import { initEnvironment } from '../actions/environment'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initEnvironment())
  }
  render() {
    const { height, isMobile, width } = this.props
    const computedStyle = isMobile ?
    {height: `${height}px`,width: `${width}px`} :
    {height: this.props.widgetHeight, top: "auto"}
    return (
      <div style={{display: "flex", fontFamily: "Arial"}}>
        <Nav />
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
          <div className="content-wrapper" style={{display: "flex", flexDirection: "column", flexGrow: "1", padding: "10px 0 10px 10px"}}>
            <Header />
            <div className="content">
              {this.props.children}
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", flexGrow: "0", justifyContent: "flex-end"}}>
            <Footer />
          </div>
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
