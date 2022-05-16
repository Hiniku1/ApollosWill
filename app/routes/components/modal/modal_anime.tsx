import React from 'react';
import Modal from 'react-modal';

export default function Modal_Anime(){
    let subtitle: { style: { color: string; }; };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
          

        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}