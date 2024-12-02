import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

function Drum({ audioClip }: DrumProps) {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger}></audio>
      {audioClip.keyTrigger}
    </button>
  );
}

export default Drum;
