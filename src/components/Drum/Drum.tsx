import { audioClips } from "../../utils/constants";
import DrumPad from "../DrumPad/DrumPad";

function Drum() {
  return (
    <div className="whole-drum">
      {audioClips.map((clip) => (
        <DrumPad audioClip={clip} key={clip.keyTrigger} />
      ))}
    </div>
  );
}

export default Drum;
