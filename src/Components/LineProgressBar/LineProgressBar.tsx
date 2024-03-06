import { useEffect, useState } from 'react'
import './lineProgressBar.scss'

interface LineProgressBarProps {
  Title:string,
  Percentage:number
  BgColor:string,
  FontColor:string,
  BarColor:string
  Width:string,
  Height:string,
  Barthickness:string,
  PercentageFontColor:string,
  PercentageBgColor:string
}

const LineProgressBar:React.FC<LineProgressBarProps> = ({
  Title,
  Percentage,
  BgColor,
  FontColor,
  BarColor,
  Width,
  Height,
  Barthickness,
  PercentageFontColor,
  PercentageBgColor

}) => {

  const [ShowPercentage, setPersentage] = useState<string>('0');

  useEffect (() => {
    if(Percentage < 10){
      setPersentage(`0${Percentage}`);
    }else{
      setPersentage(`${Percentage}`)
    }
  }, [])

  return (
    <div>
      <div className="container" style={{backgroundColor:BgColor ? BarColor:"#ccc" , width:Width ? Width:"650px" , height:Height ? Height:"80px"}}>
        <div className="progress-bar-box">
          <div className="title" style={{color: FontColor ? FontColor: "#00000"}}>{Title}</div>
          <div className="progress-bar" style={{backgroundColor:BarColor ? BarColor: "#0000001a" , height:Barthickness ? Barthickness: "8px" , width:"100%"}}>
            <div className="progress-bar-per" style={{backgroundColor:BarColor ? BarColor: "#007bff" , width:`${Percentage}%`}}>
              <div className="percentage" style={{backgroundColor:BarColor ? BarColor:"#007bff"}}>
                <span className='tool-tip' style={{color:PercentageFontColor ? PercentageFontColor:"#ffffff" , '--tooltip-bg-color': PercentageBgColor}} >{ShowPercentage}%</span>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default LineProgressBar
