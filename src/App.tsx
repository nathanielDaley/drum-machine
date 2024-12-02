import "./App.css";
import Drum from "./Drum";
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
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>Free Code Camp Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App;
