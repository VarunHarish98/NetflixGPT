import ModalCard from "./ModalCard";

const Modal = ({ onClose, visible, id }) => {
  if (!visible) return null;

  const onCloseEvent = (e) => { //Prevent event bubbling
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      className="fixed inset-0 flex items-center justify-center backdrop-blur"
      onClick={onCloseEvent}
    >
      <div className="bg-black text-white p-4 w-96 h-96 rounded shadow-lg">
        <ModalCard id={id} />
      </div>
      <div className="absolute top-0 right-0">
        <button
          className="relative text-white p-2 rounded backdrop-blur hover:bg-white-200"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
