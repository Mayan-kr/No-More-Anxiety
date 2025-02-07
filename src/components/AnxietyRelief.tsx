import React, { useState, useEffect } from "react";
import "./AnxietyRelief.css";

const AnxietyRelief: React.FC = () => {
  const [breathingInstruction, setBreathingInstruction] = useState("Breathe In");
  const [currentRelaxationStep, setCurrentRelaxationStep] = useState(0);
  const [currentGroundingStep, setCurrentGroundingStep] = useState(0);

  const relaxationSteps = [
    "Tense your feet for 5 seconds, then relax.",
    "Tense your calves for 5 seconds, then relax.",
    "Tense your thighs for 5 seconds, then relax.",
    "Tense your stomach for 5 seconds, then relax.",
    "Tense your hands for 5 seconds, then relax.",
    "Tense your shoulders for 5 seconds, then relax.",
    "Tense your face for 5 seconds, then relax.",
  ];

  const groundingSteps = [
    "Look for 5 things you can see.",
    "Touch 4 things you can feel.",
    "Listen for 3 things you can hear.",
    "Smell 2 things you can smell.",
    "Taste 1 thing you can taste.",
  ];

  useEffect(() => {
    const instructions = ["Breathe In", "Hold", "Breathe Out"];
    let index = 0;

    const interval = setInterval(() => {
      setBreathingInstruction(instructions[index]);
      index = (index + 1) % instructions.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleRelaxationNext = () => {
    setCurrentRelaxationStep((prev) => (prev + 1) % relaxationSteps.length);
  };

  const handleGroundingNext = () => {
    if (currentGroundingStep < groundingSteps.length) {
      alert(groundingSteps[currentGroundingStep]);
      setCurrentGroundingStep(currentGroundingStep + 1);
    } else {
      alert("You've completed the 5-4-3-2-1 technique!");
      setCurrentGroundingStep(0);
    }
  };

  return (
    <div className="anxiety-relief">
      {/* Breathing Exercise */}
      <section className="breathing-section">
        <h2>{breathingInstruction}</h2>
        <div className="breathing-circle"></div>
      </section>

      {/* Progressive Muscle Relaxation */}
      <section className="relaxation-section">
        <h2>Progressive Muscle Relaxation</h2>
        <p>{relaxationSteps[currentRelaxationStep]}</p>
        <button onClick={handleRelaxationNext}>Next Step</button>
      </section>

      {/* Quick Grounding Techniques */}
      <section className="grounding-section">
        <h2>5-4-3-2-1 Grounding Technique</h2>
        <button onClick={handleGroundingNext}>Start Grounding</button>
      </section>
    </div>
  );
};

export default AnxietyRelief;
