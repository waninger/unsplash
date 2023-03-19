import { useState } from "react";
import Gallery from "./components/Gallery";
import { ImageContext } from "./ImageContext";
import Navbar from "./components/Navbar";

function App() {
  //global variables
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [queryString, setQueryString] = useState("");
  const [hasMoreData, setHasMoreData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        }}
      >
        <Navbar />
        <Gallery />
      </ImageContext.Provider>
    </>
  );
}

export default App;
