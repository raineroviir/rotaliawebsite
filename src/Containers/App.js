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
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
          <div className="content-wrapper" style={{display: "flex", flexDirection: "column"}}>
            <Header />
            <div className="content" style={{padding: "30px", display: "flex", flexGrow: "1", height: "100%"}}>
              {this.props.children}
            </div>
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
