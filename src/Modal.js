import React from "react";

const Modal = ({ isOpen, onClose, selectedCharacter }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal cyber-tile-big bg-dark fg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="bg-bordeau cyber-razor-top cyber-razor-bottom">
          {selectedCharacter.fullname}
        </h2>
        <img style={{marginTop: '10px'}} src={selectedCharacter.imageUrl}></img>
        {/* owner */}
        <div
          class="code-block bg-white flex-between"
          data-title="Joueur:"
          id="code2"
        >
          {selectedCharacter.player}
        </div>
        {/* role */}
        <div
          class="code-block bg-white flex-between"
          data-title="Rôle:"
          id="code2"
        >
          Solo
        </div>
        {/* age */}
        <div
          class="code-block bg-white flex-between"
          data-title="Âge:"
          id="code2"
        >
          {selectedCharacter.age}
        </div>
        {/* bio */}
        <div
          class="code-block bg-white flex-between"
          style={{textAlign: 'right'}}
          data-title="Bio:"
          id="code2"
        >
          {selectedCharacter.description}
        </div>
        <button
          class="cyber-button bg-cyan fg-dark"
          style={{ zIndex: 500 }}
          onClick={onClose}
        >
          Retour
          <span class="glitchtext">PD INSO</span>
          <span class="tag">R25</span>
        </button>

        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default Modal;
