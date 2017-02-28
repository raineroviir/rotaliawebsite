import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'
import '../index.scss'
import { initEnvironment } from '../actions/environment'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contentHeight: "auto"
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
  render() {
    const { height, isMobile, width } = this.props
    const computedStyle = isMobile ?
    {height: `${height}px`,width: `${width}px`} :
    {height: "auto", top: "auto"}
    console.log(computedStyle)
    return (
      <div style={{display: "flex", fontFamily: "Arial", }}>
        <Nav />
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: height < this.state.contentHeight ? "auto" : height}}>
          <Header />
          <div id="content" className="content" style={{padding: "30px", display: "flex", flexGrow: "1"}}>
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
