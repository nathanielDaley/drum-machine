import "./App.css";
import Drum from "./Drum";
import { audioClips } from "./utils/constants";

function App() {
  return (
    <div className="container" id="drum-machine">
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))}
      </div>
    </div>
  );
}

export default App;
