import React, {Component} from 'react';
import './App.css';

import Validation from './Validation/Validation';

class App extends Component{

  state = {
    input: [
      {length: 0}
    ]
  }
  
  outputLength = (event) => {
    const input = [...this.state.input]
    const inputString = event.target.value;
    input.length = inputString.length;
    this.setState({input: input});
  }
  
  render(){
    return (
      <div className="App">
        <input 
          onChange={this.outputLength}
          type="text"/>
        <p>{this.state.input.length}</p>
        <Validation length={this.state.input.length} />
      </div>
    );
  }
}

export default App;
