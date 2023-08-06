import logo from './logo.svg';
import './App.css';

function App(props) {
  const compStyle = {
    color: props.color,
    fontSize: props.size+"px"
  };

  return (
    <div>
      <span style={compStyle}>I am a sentence</span><br/>
      <button onClick={props.clickEvent}>Click me!</button>
    </div>
  );
}

export default App;
