import { useState } from "react";
import Gallery from "./components/Gallery";
import { ImageContext } from "./ImageContext";
import Navbar from "./components/Navbar";
import ModalWindow from "./components/ModalWindow";

function App() {
  //global variables
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [queryString, setQueryString] = useState("");
  const [hasMoreData, setHasMoreData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  //modal

  return (
    <>
      <ImageContext.Provider
        value={{
          imageUrls,
          setImageUrls,
          pageNumber,
          setPageNumber,
          queryString,
          setQueryString,
          hasMoreData,
          setHasMoreData,
          isLoading,
          setIsLoading,
          openModal,
          setOpenModal,
          modalImageUrl,
          setModalImageUrl,
        }}
      >
        <Navbar />
        <ModalWindow />
        <Gallery />
      </ImageContext.Provider>
    </>
  );
}

export default App;
