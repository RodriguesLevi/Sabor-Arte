import React, { useEffect } from 'react';
import './ModalWithForm.css';

function ModalWithForm({ 
  title, 
  name, 
  buttonText, 
  onClose, 
  onSubmit, 
  isOpen, 
  children 
}) {
  useEffect(() => {
    // Fecha o modal ao pressionar ESC
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  // Fecha o modal ao clicar fora dele
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`modal ${isOpen ? 'modal_opened' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button 
          type="button" 
          className="modal__close-button" 
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form 
          className="modal__form" 
          name={name} 
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;