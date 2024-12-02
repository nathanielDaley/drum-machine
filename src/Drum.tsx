import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
  descriptionDiv: HTMLElement;
}

function Drum({ audioClip, descriptionDiv }: DrumProps) {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    descriptionDiv.innerText = clip.description;
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
