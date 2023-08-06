import React from 'react';

class AppInner extends React.Component {
  componentWillUnmount() {
    console.log("This component will unmount")
  }
  render(){
    return <div>Inner Component</div>
  }
}

class App extends React.Component {
  state = {
    InnerComponent: <AppInner/>
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        InnerComponent: <div>Unmounted</div>
      })
    }, 5000)
  }
  render() {
    console.log("inside render")
    return (
      <div>
        {this.state.InnerComponent}
      </div>
    );
  }
}
export default App;