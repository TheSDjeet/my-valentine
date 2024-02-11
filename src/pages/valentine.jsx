import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ValentinePage.css"; // Import CSS file for styling

const ValentinePage = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [leftButtonSize, setLeftButtonSize] = useState(40);
  const [clickCount, setClickCount] = useState(0);
  const [lastClick, setLastClick] = useState(false);
  const navigate = useNavigate();

  const quotes = [
    "You are the sunshine in my life",
    "I cherish every moment with you",
    "You make my heart skip a beat",
    "Your smile brightens up my day",
    "You complete me in every way",
    "You're the reason for my happiness",
    "My love for you grows stronger every day",
    "You're the most beautiful person I know",
    "You're my everything",
    "Wll you be my Valentine?",
  ];

  const handleRightButtonClick = () => {
    if (quoteIndex < quotes.length - 1) {
      console.log(clickCount);
      setQuoteIndex((prevIndex) => prevIndex + 1);
      setClickCount((prevCount) => prevCount + 1);
      // Increase the size of the left button on each click
      setLeftButtonSize((prev) => prev * 1.1); // Adjusted to start increasing from the first click
    } else {
      // Make the left button full screen on the last click
      setLastClick(true);
    }
  };

  const handleLeftButtonClick = () => {
    // Redirect to another screen or display a lovely quote with a picture
    // alert("Redirecting to another screen with a lovely quote and picture!");
    navigate("/shubha_loves_megha");
  };

  return (
    <div className="background">
      <div className="button-container">
        <div>
          <button
            onClick={handleLeftButtonClick}
            style={{
              fontSize: "2em",
              padding: !lastClick && `${leftButtonSize}px`,
              width: lastClick && "100vw",
              height: lastClick && "100vw",
              marginBottom: "100px",
              background: lastClick && "#D0BC89",
              color: "#fff",
              // textTransform: "uppercase",
              cursor: lastClick && "pointer",
              fontFamily: "Dancing Script",
            }}
            disabled={!lastClick}
          >
            😍 Yes ! 💝
          </button>
        </div>

        <button
          onClick={handleRightButtonClick}
          className={lastClick ? "hidden" : "btn btn--green"}
        >
          {quotes[quoteIndex]}
        </button>
        {/* <div className="heart-container">
          <div id="heart"></div>
          <div className="centered-text">Yes</div>
        </div> */}
      </div>
    </div>
  );
};

export default ValentinePage;
