import { audioClips } from "../../utils/constants";
import DrumPad from "../DrumPad/DrumPad";
import "./Drum.css";

function Drum() {
  return (
    <div className="drum">
      {audioClips.map((clip) => (
        <DrumPad audioClip={clip} key={clip.keyTrigger} />
      ))}
    </div>
  );
}

export default Drum;
