
interface LineProgressBarProps {
  Title:string,
  Percentage:number
  BgColor:string,
  FontColor:string,
  BarColor:string
  Width:string,
  Height:string,
  Barthickness:string
}

const LineProgressBar:React.FC<LineProgressBarProps> = ({
  Title,
  Percentage,
  BgColor,
  FontColor,
  BarColor,
  Width,
  Height,
  Barthickness

}) => {

  return (
    <div>
      <div className="container">
        <div className="progress-bar-box">
          <div className="title">{Title}</div>
          <div className="progress-bar">
            <div className="progress-bar-per">
              <div className="percentage">{Percentage}%</div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default LineProgressBar
