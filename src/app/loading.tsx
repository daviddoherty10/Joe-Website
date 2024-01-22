import "./main.css";
import { PiTennisBallFill } from "react-icons/pi";

export default function Loading() {
  return (
    <>
      <div id="loading-container">
        <div className="rotating-div">
          <PiTennisBallFill />
        </div>
      </div>
    </>
  );
}
