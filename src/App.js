import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { personnages } from "./personnages";
import Character from "./Character";
import Modal from "./Modal";

// Shuffle array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [shuffledPersonnages, setShuffledPersonnages] = useState([]);

  // Shuffle the characters when component mounts
  useEffect(() => {
    setShuffledPersonnages(shuffleArray(personnages));
  }, []);

  const toggleModal = (character) => {
    setSelectedCharacter(character);
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <h1 id="section-headings" className="cyber-h fg-bordeau" style={{textAlign: 'start'}}>Profils</h1>
      <div className="characters-list">
        {shuffledPersonnages.map((character) => (
          <Character
            key={character.id}
            character={character}
            onClick={toggleModal}
          />
        ))}
      </div>
      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedCharacter={selectedCharacter}
      />
    </div>
  );
}

export default App;
