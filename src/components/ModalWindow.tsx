import { useEffect, useContext } from "react";
import { ImageContext } from "../ImageContext";
import "../styles/Modal.css";

/**
 * imgae modal. Displays the image url passed into it
 */
function ModalWindow() {
  // global variables
  const { openModal, setOpenModal, modalImageUrl } = useContext(ImageContext);

  //rerender on openModal
  useEffect(() => {}, [openModal]);

  //if openmodal false close it
  if (!openModal) return null;

  //render modal
  return (
    <div
      className="overlay"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <img
        className="modal-image"
        src={modalImageUrl}
        alt=""
        onClick={() => {
          setOpenModal(false);
        }}
      ></img>
    </div>
  );
}
export default ModalWindow;
