import React from 'react'
import { Link } from 'react-router'
// import rf2009 from '../historyPDFs/RF_stipendiaadid_2016.pdf'
// var PDF = require('react-pdf')
// require('pdfjs-dist');

export default class History extends React.Component {
  // constructor() {
  //   super()
  //   this.prevPage = this.prevPage.bind(this)
  //   this.nextPage = this.nextPage.bind(this)
  //   this.onFileChange = this.onFileChange.bind(this)
  //   this._onDocumentComplete = this._onDocumentComplete.bind(this)
  //   this.state = {
  //     currentPage: 2,
  //     pages: 0,
  //     file: rf2009
  //   }
  // }
  // prevPage(ev) {
  //   ev.preventDefault();
  //   this.setState({
  //     currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
  //   });
  // }
  // nextPage(ev) {
  //   ev.preventDefault();
  //   this.setState({ currentPage: this.state.currentPage < this.state.pages ? this.state.currentPage + 1 : this.state.pages });
  // }
  // onFileChange(ev) {
  //   this.setState({
  //     file: ev.target.files[0]
  //   });
  // }
  // render() {
  //   return (
  //     <div className="container">
  //       <h1>PDF.js + React = &lt;3</h1>
  //       <div>
  //         <label>
  //           Change file<br />
  //           <input type="file" onChange={this.onFileChange} />
  //         </label>
  //       </div>
  //       <PDF page={this.state.currentPage} file={this.state.file} onDocumentComplete={this._onDocumentComplete} />
  //       <div>
  //         <button onClick={this.prevPage}>Previous page</button>
  //         <button onClick={this.nextPage}>Next page</button>
  //       </div>
  //     </div>
  //   );
  // }
  // _onDocumentComplete(pages){
  //   this.setState({pages: pages});
  // }
  //
  render() {
    return (
      <a href="/files/RF_stipendiaadid_2016.pdf">2016/2017</a>
    )
  }
}
