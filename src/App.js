import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { personnages } from "./personnages";
import Character from "./Character";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const toggleModal = (character) => {
    setSelectedCharacter(character);
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <h1 id="section-headings" className="cyber-h fg-bordeau" style={{textAlign: 'start'}}>Profils</h1>
      <div className="characters-list">
        {personnages.map((character) => (
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