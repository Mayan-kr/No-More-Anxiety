import "./SideBar.css"
import { TbHome } from "react-icons/tb";
import { GoInfo } from "react-icons/go";
import { IoCodeWorking } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FcFeedback } from "react-icons/fc";
import { LuMusic2 } from "react-icons/lu";
import AudioToggle from "./MusicButton";

export default function Navbar() {
  return (
    <>
      <div className="box">
        <ul>
          <li>
            <div className="icon-section">
              <a href="#home"> <TbHome size={25}/> <p>Home</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="#about"><GoInfo/> <p>About</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="#services"> <IoCodeWorking/> <p>Services</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="#contact"> <IoIosContact/> <p>Contact</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="#feedback"> <FcFeedback/> <p>Feedback</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="#"> < LuMusic2 className="MusicIcon"/> <AudioToggle/> </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}