import "./App.css";
import Drum from "./components/Drum/Drum";
import Footer from "./components/Footer/Footer";
import { audioClips } from "./utils/constants";

function App() {
  const playAudio = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === event.key.toUpperCase()
    );

    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById(`drum-${clip.keyTrigger}`)?.focus();
    document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__container" id="drum-machine" onKeyDown={playAudio}>
          <h1>\Drum Machine</h1>
          <Drum />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
