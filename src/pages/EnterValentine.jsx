import "./EnterValentinePage.css";
import us from "../assets/us.jpeg";
import lovegif from "../assets/my1.gif";

export default function EnterValentine() {
  return (
    <div className="backgroundPage">
      <h1>Dum dum digaa ...Please be my valentine nigaa!</h1>
      <div className="flexContainer">
        <div className="imageContainer1">
          <img
            src={lovegif}
            alt="gif"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="imageContainer">
          <img src={us} alt="us" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}
