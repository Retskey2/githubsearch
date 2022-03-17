import "./style.scss"
export default function Spinner() {
    return (
      <div className="container">
          <div className="loader loader-21">
              <div className="css-times times1"/>
              <div className="css-times times2"/>
              <div className="css-times times3"/>
          </div>
      </div>
    )
}