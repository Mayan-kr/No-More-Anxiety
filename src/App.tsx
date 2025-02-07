import "./App.css";
import Logo from "./components/Logo.tsx";
import Navbar from "./components/SideBar.tsx";
import MotivationalQuotes from "./components/Quotes.tsx";
import Body from "./components/Body.tsx";
import ToggleChatBox from "./components/ToggleChatBox.tsx";
import ContactMe from "./components/ContactMe.tsx";
import { Link, Element } from "react-scroll";
import AnxietyRelief from "./components/AnxietyRelief.tsx";
import GamesPages from "./components/ScrollGames.tsx";
import HorizontalStories from "./components/OvercomeStories.tsx";
import GratitudeComponent from "./components/Mentiongoodthings.tsx";


function App() {
  return (
    <> 
      {/* Add navigation using react-scroll */}
      <div className="navbar">
        <Link to="AppContainer" smooth={true} delay={500}>
    
        </Link>
      </div>

      {/* Define an Element for the scroll target */}
      <Element name="AppContainer" className="AppContainer">
        <Logo />
        <Navbar />
        <MotivationalQuotes />
        <ToggleChatBox />
        <AnxietyRelief/>
        <GratitudeComponent />
        <Body />
        <GamesPages />
        <HorizontalStories />
        



        <ContactMe />
      </Element>
    </>
  );
}

export default App;
