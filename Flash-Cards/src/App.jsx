import { useState } from "react";
import "./App.css";
import FlashCard from "./components/flashcard";
const flashCardList = [
  {
    question: "Q:What is considered the largest empire in history?",
    answer: "A:The Mongol Empire",
  },
  { question: "Q:What year did the French Revolution start?", answer: "A:1789" },
  {
    question: "Q:When did the Mexican Revolution start?",
    answer: "A:Nov. 20, 1910",
  },
  {
    question:
      "Q:Who was the first person in the world to land on the moon, and which country were they from?",
    answer: "A:Neil Armstrong from the United States",
  },
  {
    question:
      "Q:What was the name of the Ukrainian nuclear power plant that was the site of a nuclear disaster in April 1986?",
    answer: "A:Chernobyl",
  },
  {
    question:
      "Q:What was the name of the international group formed to maintain world peace after World War I?",
    answer: "A:The League of Nations",
  },
  {
    question: "Q:Who fought in the Hundred Years' War?",
    answer: "A:Britain and France",
  },
  {
    question:
      "Q:Historians believe the Bubonic Plague started in Europe in which year?",
    answer: "A:1347",
  },
  {
    question:
      "Q:What is the name of the period of starvation lasting from 1845 to 1852 in Ireland?",
    answer: "A:The Irish Potato Famine",
  },
  {
    question: "Q:What leader came to power in Cuba after the Cuban Revolution?",
    answer: "A:Fidel Castro",
  },
  {
    question:
      "Q:Who was the first democratically elected president of South Africa?",
    answer: "A:Nelson Mandela",
  },
];
const App = () => {
  const [index, setIndex] = useState(0);
  const incrIndex = () => {
    if (index < flashCardList.length - 1) {
      setIndex(index + 1);
    }
  };
  const decrIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <div className="App">
      <h1> World History Trivia!</h1>
      <h2>
        Test your knowledge here and see if you can guess all of them correctly!
      </h2>
      <FlashCard flashcard={flashCardList[index]} />
      <div className="buttonArea">
        <h1>{index} out of {flashCardList.length-1} </h1>
        <button onClick={decrIndex}>Back</button>
        <button onClick={incrIndex}>Next</button>
      </div>
    </div>
  );
};

export default App;
