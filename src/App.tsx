import './App.css'
import LineProgressBar from './Components/LineProgressBar/LineProgressBar.tsx'

function App() {
  return (
    <>
      <LineProgressBar 
        Title={"HTML"}
        Percentage={60}
        BgColor={"#424242"}
        FontColor={"#ffffff"}
        BarColor={"#cbb22"}
      />
    </>
  )
}

export default App
