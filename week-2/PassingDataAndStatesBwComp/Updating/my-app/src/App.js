import React from 'react';

class App extends React.Component {
  state = {counter: "0"};

  incrementConter = () => this.setState({counter:parseInt(this.state.counter)+1})

  shouldComponentUpdate() {
    console.log("Inside shouldcomponentupdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevPeops, prevState) {
    console.log("Inside getSnapshotBeforeUpdate");
    console.log("Previous counter is ", prevState.counter);
    console.log("New counter is ", this.state.counter);
    return prevState;
  }

  componentDidUpdate(){
    console.log("Inside componentDidUpdate");
  }

  render(){
    console.log("Inside render");
    return(
      <div>
      <button onClick={this.incrementConter}>Click me!</button>
      {this.state.counter}
      </div>
    );
  }
}
export default App;
