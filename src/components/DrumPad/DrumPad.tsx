import { AudioClip } from "../../types";
import "./DrumPad.css";

interface DrumPadProps {
  audioClip: AudioClip;
}

function DrumPad({ audioClip }: DrumPadProps) {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onMouseDown={() => playSound(audioClip)}
    >
      <audio
        src={audioClip.url}
        id={audioClip.keyTrigger}
        className="clip"
      ></audio>
      {audioClip.keyTrigger}
    </button>
  );
}

export default DrumPad;
