import React, { useState } from "react";
import "./ChatBox.css";

const Chatbox: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: "User", text: input }]);
      setInput(""); // Clear input field
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="container">
      <div className="ChatLogoBox">
        <p className="ChatLogo">Chat Box</p>
      </div>
      <div className="chatWindow">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.user === "User" ? "userMessage" : "botMessage"}
          >
            <strong>{msg.user}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
