import React from "react";

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
      <div
        style={{
          backgroundImage: `url(${character.imageUrl})`,
          minHeight: "400px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: character.imagePosition ?? "center",
        }}
      >
        <label className="char-label-inset" style={{ fontSize: "1.2rem", display: 'none' }}>
          <b>{character.name}</b>
        </label>
      </div>
      {/* <img className={glitchClass} src={character.imageUrl} alt={character.name} /> */}
      <div>
        <label className="char-label" style={{ fontSize: "1.2rem" }}>
          <b>{character.name}</b>
        </label>
      </div>
    </div>
  );
};

export default Character;
