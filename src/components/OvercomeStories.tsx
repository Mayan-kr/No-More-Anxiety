import React from "react";
import { motion } from "framer-motion";
import "./HorizontalStories.css"; // Import the CSS file

const stories = [
  {
    name: "Emma",
    story: "After years of battling anxiety, I started practicing mindfulness and small daily gratitude exercises. Now, I embrace life with confidence!",
    image: "https://source.unsplash.com/100x100/?woman,smiling",
  },
  {
    name: "Liam",
    story: "Therapy and journaling helped me cope with depression. Today, I help others by sharing my journey and giving them hope.",
    image: "https://source.unsplash.com/100x100/?man,happy",
  },
  {
    name: "Sophia",
    story: "Music and art became my therapy. Expressing myself creatively helped me break free from anxiety and live joyfully.",
    image: "https://source.unsplash.com/100x100/?woman,painting",
  },
  {
    name: "Noah",
    story: "I found peace in meditation and self-care. Taking small steps daily transformed my mental health.",
    image: "https://source.unsplash.com/100x100/?man,relaxed",
  },
  {
    name: "Olivia",
    story: "Joining a support group showed me I wasn’t alone. Sharing experiences and helping others gave me purpose.",
    image: "https://source.unsplash.com/100x100/?woman,happy",
  },
  {
    name: "Ethan",
    story: "Exercise and a healthy diet helped me overcome stress. Now, I feel stronger physically and mentally every day.",
    image: "https://source.unsplash.com/100x100/?man,fitness",
  },
  {
    name: "Ava",
    story: "Practicing self-love and setting boundaries changed my life. I now prioritize my mental well-being without guilt.",
    image: "https://source.unsplash.com/100x100/?woman,selfcare",
  },
  {
    name: "Mason",
    story: "Reading and learning about psychology helped me understand myself better. Knowledge became my power.",
    image: "https://source.unsplash.com/100x100/?man,reading",
  },
  {
    name: "Isabella",
    story: "Volunteering for mental health organizations gave me a sense of purpose and connection.",
    image: "https://source.unsplash.com/100x100/?woman,volunteer",
  },
  {
    name: "James",
    story: "Journaling my thoughts daily helped me process emotions and gain clarity. It’s my personal therapy.",
    image: "https://source.unsplash.com/100x100/?man,journaling",
  },
  {
    name: "Charlotte",
    story: "Spending time in nature and hiking helped me find inner peace and disconnect from stress.",
    image: "https://source.unsplash.com/100x100/?woman,hiking",
  },
  {
    name: "Benjamin",
    story: "Learning to ask for help was the best decision I made. Seeking support changed my life for the better.",
    image: "https://source.unsplash.com/100x100/?man,support",
  },
];


const HorizontalStories: React.FC = () => {
  return (
    <div className="stories-container">
      <motion.div
        className="stories-wrapper"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {stories.map((story, index) => (
          <motion.div key={index} className="story-card" whileHover={{ scale: 1.05 }}>
            <img src={story.image} alt={story.name} className="story-image" />
            <h3 className="story-name">{story.name}</h3>
            <p className="story-text">{story.story}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalStories;
