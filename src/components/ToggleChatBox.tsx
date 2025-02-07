// App.tsx or ToggleChatBox.tsx
import "./Toggle.css"
import React, { useState } from "react";
import Chatbox from "./ChatBox.tsx"; // Adjust the path based on your file structure

const ToggleChatBox: React.FC = () => {
    const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

    const toggleChatBox = () => {
        setIsChatBoxOpen((prev) => !prev);
    };

    return (
        <div>
            <button className="ToggleButton"   onClick={toggleChatBox}>
                {isChatBoxOpen ? "-X-" : "OPEN CHATBOX"}
            </button>
            {isChatBoxOpen && <Chatbox />}
        </div>
    );
};

export default ToggleChatBox;
