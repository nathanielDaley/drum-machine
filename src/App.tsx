import './App.css'
import { AudioClip } from './types'

const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "./assets/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "./assets/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "./assets/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "./assets/Heater-4.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "./assets/Clap.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "./assets/Open-Hi-Hat.mp3",
    description: "Open Hi-hat",
  },
  {
    keyTrigger: "Z",
    url: "./assets/Kick-n-Hat.mp3",
    description: "Kick n' Hat",
  },
  {
    keyTrigger: "X",
    url: "./assets/Kick.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "./assets/Closed-Hi-Hat.mp3",
    description: "Closed Hi-hat",
  },
]

function App() {
  return (
    <>
      hello
    </>
  )
}

export default App
