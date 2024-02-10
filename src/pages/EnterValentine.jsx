import "./EnterValentinePage.css";
import us from "../assets/us.jpeg";
import lovegif from "../assets/my1.gif";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function EnterValentine() {
  const { width, height } = useWindowSize();
  return (
    <>
      <div className="backgroundPage">
        <Confetti width={width} height={height} />
        <h1 style={{ color: "#e3334d", textAlign: "center" }}>
          🥰Dum dum digaa 😘
          <br /> 💖I love you Meghaa!💞
        </h1>
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
    </>
  );
}
