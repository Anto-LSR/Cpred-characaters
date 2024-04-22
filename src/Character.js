import React from 'react';

const Character = ({ character, onClick }) => {
  const handleClick = () => {
    onClick(character);
  };

  // Générer un nombre aléatoire entre 0 et 1
  const randomNum = Math.random();

  // Calculer la classe pour l'élément <img>
  const glitchClass = `cyber-glitch-${Math.round(randomNum)}`;
  
  return (
    <div 
      className="cyber-tile fg-black bg-bordeau mr-4 inline-block vt-bot character "
      onClick={handleClick}
    >
      <img className={glitchClass} src={character.imageUrl} alt={character.name} />
      <label className="char-label" style={{fontSize: '1.2rem'}}><b>{character.name}</b></label>
    </div>
  );
};

export default Character;