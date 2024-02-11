import "./LetsMeet.css";
import emraan from "../assets/emraan.gif";
import emailjs from "@emailjs/browser";

function LetsMeetPage() {
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const letsSendMail = () => {
    const templateParams = {
      name: "Megha",
      notes: "Check this out!",
    };
    console.log("test");
    emailjs
      .send(SERVICE_KEY, TEMPLATE_KEY, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className="backgroundLetsMeetPage">
      <h1 className="letsMeetH1">Let&apos;s Meet on 14th feb!💞</h1>
      <div className="gifContainerMegha">
        <img src={emraan} style={{ height: "100%", width: "100%" }} />
      </div>
      <h1 className="letsMeetSec">Acropolis Mall</h1>
      <h2>4:00pm</h2>
      <button
        className="btn btn--green"
        style={{ marginTop: "30px" }}
        onClick={letsSendMail}
      >
        Yes!
      </button>
    </div>
  );
}

export default LetsMeetPage;
