import React from "react";
import { useState } from "react";

const FlashCard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`flashcard-container ${flipped ? "flipped" : ""}`}
    >
      <div className="flashcard">
        <div className="front">{flashcard.question}</div>
        <div className="back">{flashcard.answer}</div>
      </div>
    </div>
  );
};
export default FlashCard;
