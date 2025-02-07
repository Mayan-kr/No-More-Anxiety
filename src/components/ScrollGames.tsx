import React, { useState } from "react";
import "./ScrollGames.css";
import cupcakeImage from "../assets/puzzle1.gif";
import { games } from "./GameImports.tsx"; // games should return iframe links or React components

const GamesPages: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);


  // Toggle gallery
  const toggleGallery = () => {
    setIsOpen(!isOpen);
  };

  const closeGallery = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 600);
  };

  // Handle cupcake click animation
  const handleCupcakeClick = () => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 300); // Reset after animation
    toggleGallery();
  };

  // Navigate to next game
  const nextGame = () => {
    setCurrentIndex((currentIndex + 1) % games.length);
  };

  // Navigate to previous game
  const prevGame = () => {
    setCurrentIndex((currentIndex - 1 + games.length) % games.length);
  };

  return (
    <div className={`app ${isOpen ? "dark-bg" : ""}`}>
      <div
        className={`cupcake ${isClicking ? "clicking" : ""}`}
        onClick={handleCupcakeClick}
      >
        <img src={cupcakeImage} alt="Cupcake" className="cupcake-image" />
      </div>

      {/* Gallery Slider */}
      {isOpen && (
        <div className={`slider ${isClosing ? "closing" : ""}`}>
          <button className="close-btn" onClick={closeGallery}>
            ✖
          </button>
          <button className="nav-btn prev" onClick={prevGame}>
            &#8249;
          </button>
          <div className="slides">
              {games.map((GameComponent, index) => {
                let position: string;

                if (index === currentIndex) {
                  position = "active"; // Current game
                } else if (index === (currentIndex - 1 + games.length) % games.length) {
                  position = "prev"; // Previous game
                } else if (index === (currentIndex + 1) % games.length) {
                  position = "next"; // Next game
                } else {
                  position = "hidden"; // All other games
                }

                return (
                  <div
                    key={index}
                    className={`slide ${position}`}
                    style={{
                      display: position === "hidden" ? "none" : "block", // Hide inactive games
                    }}
                  >
                    <GameComponent /> {/* Render the game component */}
                  </div>
                );
              })}

          </div>
          <button className="nav-btn next" onClick={nextGame}>
              &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default GamesPages;
