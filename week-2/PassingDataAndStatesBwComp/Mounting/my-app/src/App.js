import React from 'react';

class App extends React.Component {
  constructor(props){
  super(props)
  console.log("inside the constructor")
  }
  componentDidMount = () => {
    console.log("inside component did mount")
  }
  render(){
    console.log("inside render")
    return(
      <div>The component is rendered</div>
    );
  }
}
export default App;
