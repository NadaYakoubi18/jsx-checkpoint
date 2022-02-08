import "./App.css";
import paysage from "./assets/perceptual-standard.jpg";
import vido from "./assets/video-1644325367.mp4";
import "./style.css";
function App() {
  return (
    <div className="App">
      <div className="div1">
        <h1 className="titlered">Your name here</h1>
        <br />
        <img src="/20456790.jpg" alt="cat" />
        <br />
        <img src={paysage} alt="view" />
      </div>
      <div className="vid">
        <video src={vido} />
      </div>
    </div>
  );
}

export default App;
