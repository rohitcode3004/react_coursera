import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {counter: "0"};

  increnentCounter = () => {
    this.setState({counter:parseInt(this.state.counter)+1});
  }

  //override the render method
  render() {
    return <div>
      <button onClick={this.increnentCounter}>Click me!</button>
      <br/>
      {this.state.counter}
    </div>
  }
}

export default App;
