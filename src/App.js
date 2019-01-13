import React, { Component } from 'react';
import './App.css';
import Daily from './Daily';
import Archive from './Archive';
import PromptContent from './PromptContent';

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
        {/* <Daily onClick={handleNext} />*/}
          {this.state.isDaily? <PromptContent />: <Archive />}
        </div>
        
        <span className="buttons">
          {/* <button type="button" onClick={() => {this.setState({isDaily: true})}}>Daily</button>
          <button type="button" onClick={() => {this.setState({isDaily: false})}}>Archive</button> */}
        </span>
      </div>
      
    );
  }

  handleNext(){
    
  }
}

export default App;
