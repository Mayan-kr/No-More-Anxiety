import React, { useState } from "react";
import { TbRefreshDot } from "react-icons/tb";

const MotivationalQuotes: React.FC = () => {
  const quotes: string[] = [
    "Believe in yourself and all that you are.",
    "You are stronger than you think.",
    "Every day is a second chance.",
    "You have the power to create change.",
    "Don’t wait for opportunity. Create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Small steps every day lead to big results.",
    "Focus on progress, not perfection.",
    "Your only limit is your mind.",
    "Dream big, work hard, and stay focused.",
    "Believe in yourself and all that you are.",
    "You are stronger than you think.",
    "Every day is a second chance.",
    "You have the power to create change.",
    "Don’t wait for opportunity. Create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Small steps every day lead to big results.",
    "Focus on progress, not perfection.",
    "Your only limit is your mind.",
    "Dream big, work hard, and stay focused.",
    "You don’t have to control your thoughts. You just have to stop letting them control you.",
    "Do what you can, with what you have, where you are.",
    "The greatest weapon against stress is our ability to choose one thought over another.",
    "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
    "You are not your anxiety. You are not your fears. You are capable of overcoming them.",
    "Feelings are just visitors. Let them come and go.",
    "Worrying is carrying tomorrow’s load with today’s strength.",
    "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
    "Nothing diminishes anxiety faster than action.",
    "Sometimes the most productive thing you can do is relax.",
    "Although the world is full of suffering, it is also full of the overcoming of it.",
    "Turn your wounds into wisdom.",
    "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself up.",
    "When you come out of the storm, you won’t be the same person who walked in. That’s what the storm is all about.",
    "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don’t let the darkness of the past block the light of the future.",
    "Strength grows in the moments when you think you can’t go on but keep going anyway.",
    "When everything seems to be going against you, remember that airplanes take off against the wind, not with it.",
    "It’s not the load that breaks you down, it’s the way you carry it.",
    "Peace comes from within. Do not seek it without.",
    "You can’t always control what goes on outside, but you can always control what goes on inside.",
    "The mind is like water. When it’s turbulent, it’s difficult to see. When it’s calm, everything becomes clear.",
    "Quiet the mind, and the soul will speak.",
    "Don’t let your mind bully your body into believing it must carry the burden of its worries.",
    "Sometimes you just need to slow down, take a deep breath, and remind yourself that everything is going to be okay.",
    "One small positive thought in the morning can change your whole day.",
    "Breath is the power behind all things. I breathe in and know that good things will happen.",
    "You are allowed to take a break. You are allowed to rest. It doesn’t mean you’re giving up.",
    "Let go of what you cannot control. Accept it and move forward.",
    "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
    "Self-compassion is simply giving the same kindness to ourselves that we would give to others.",
    "Be yourself, but always your better self.",
    "Loving yourself isn’t vanity; it’s sanity.",
    "Take care of yourself first. You can’t pour from an empty cup.",
    "Comparison is the thief of joy.",
    "Happiness is an inside job. Don’t assign anyone else that much power over your life.",
    "You are enough just as you are.",
    "Healing takes time, and asking for help is a courageous step.",
    "Don’t forget: You’ve survived 100% of your worst days so far.",
    "Even the darkest night will end, and the sun will rise.",
    "This too shall pass.",
    "It’s not whether you get knocked down; it’s whether you get back up.",
    "You don’t have to see the whole staircase, just take the first step.",
    "Hope is being able to see that there is light despite all of the darkness.",
    "The best way out is always through.",
    "Out of difficulties grow miracles.",
    "Your story is not over yet.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Life is tough, my darling, but so are you."

  ];

  // State to manage the current quote
  const [currentQuote, setCurrentQuote] = useState<string>(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  // Function to get a new random quote
  const getRandomQuote = () => {
    let newQuote: string;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === currentQuote); // Ensure a different quote is shown
    setCurrentQuote(newQuote);
  };

  return (
    <div style={styles.container}>
      <p style={styles.quote}>"{currentQuote}"</p>
      <button style={styles.button} onClick={getRandomQuote}>
      <TbRefreshDot />
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    textAlign: "center",
    padding: "1.5vh 0 1.5vh 0",
    fontFamily: "Arial, sans-serif",
    borderRadius: "8px",
    maxHeight: "2vh",
    height:"2vh",
    maxWidth: "70%", 
    margin: "10vh 0 10px 13vw",
    border: "2px solid #ccccccc8",
    backdropFilter: "blur(4px)",
  },

  quote: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#000000",
    margin: "-5px 0 0 0",
    
  },
  
  button: {

    position: "absolute",
    padding: "5px 10px 3px 10px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    right: "6px",
    top:"3px",
    backgroundColor:"rgba(152, 152, 152)",
    color:"white",
  }
};

export default MotivationalQuotes;
