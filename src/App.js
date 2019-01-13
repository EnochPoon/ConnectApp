import React, { Component } from 'react';
import './App.css';
import Daily from './Daily';
import Archive from './Archive';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDaily: true,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main-content">
          {this.state.isDaily? <Daily /> : <Archive />}
        </div>
        
        <span className="buttons">
          <button type="button" onClick={() => {this.setState({isDaily: true})}}>Daily</button>
          <button type="button" onClick={() => {this.setState({isDaily: false})}}>Archive</button>
        </span>
      </div>
      
    );
  }
}

export default App;
