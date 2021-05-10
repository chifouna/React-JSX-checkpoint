import './App.css';
import './style.css'
import myImage from "./ok.gif"

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: '100vw' }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src="./login1.png" alt="logo1" width="220" height="240"></img>
        <br />
        <img src={myImage} alt="logo2" width="190" height="150"></img>
      </div>
      <video width="100%" height="340" controls>
        <source src="./preventcybercrime.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
