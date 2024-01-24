import './modal.css';

export const Modal = ({ taskYear, taskMonth, taskDay, setModal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
      </div>
      <div className="overlay"></div>
    </>
  );
};
