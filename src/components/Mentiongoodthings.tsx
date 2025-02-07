import "./MentionGoodthings.css"
import React, { useState } from "react";

const GratitudeComponent: React.FC = () => {
  const [goodThings, setGoodThings] = useState(["", "", ""]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newGoodThings = [...goodThings];
    newGoodThings[index] = value;
    setGoodThings(newGoodThings);
  };

  const handleSubmit = () => {
    if (goodThings.every((thing) => thing.trim() !== "")) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="form-container">
          <h2>Mention 3 good things in your life?</h2>
          {goodThings.map((thing, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Good thing ${index + 1}`}
              value={thing}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="message-container">
          <h2>Your Life is Amazing! ✨</h2>
          <p>Look at all the wonderful things you have:</p>
          <ul>
            {goodThings.map((thing, index) => (
              <li key={index}>{thing}</li>
            ))}
          </ul>
          <p>You have so much to be grateful for. Keep shining! 🌟</p>
          <img
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
            alt="Happy GIF"
          />
        </div>
      )}
    </div>
  );
};

export default GratitudeComponent;
