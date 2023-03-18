import { useContext, useEffect, useRef, useState} from "react";
import { ImageContext } from "../ImageContext";
import "../styles/gallery.css";

function Gallery() {
  const { imageUrls, pageNumber, setPageNumber, hasMoreData, isLoading } =useContext(ImageContext);
  const imageRef = useRef<HTMLImageElement>(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreData) {
        setPageNumber(pageNumber+1);
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [imageRef,isLoading]);

  return (
    <div className="gallery">
      {imageUrls.map((image, index) => {
        if (index + 1 === imageUrls.length) {
            console.log(imageUrls.length)
          console.log("setting last at index" + index);
          return (
            <img ref={imageRef} className="galler img" key={index} src={image} alt="" />
          );
        }
        return <img className="galler img" key={index} src={image} alt="" />;
      })}
    </div>
  );
}

export default Gallery;
