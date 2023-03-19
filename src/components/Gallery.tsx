import { useContext, useEffect, useRef, useState } from "react";
import { ImageContext } from "../ImageContext";
import "../styles/gallery.css";
import GetImages from "./GetImages";

/**
 * Gallery component
 * displayes images and increments pageNumber when the last image
 * is diplayed unless there is no more data.
 * takes image URLs
 */

function Gallery() {
  //global varables
  const { imageUrls, pageNumber, setPageNumber, hasMoreData, isLoading } =
    useContext(ImageContext);

  //refrence to last image in Array
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    //increment pagenumber if last image is reached and there is more data
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreData) {
        setPageNumber(pageNumber + 1);
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [imageRef, isLoading]);

  return (
    <>
      <div className="gallery">
        {imageUrls.map((image, index) => {
          //if we reached the last image set the useRef in it
          if (index + 1 === imageUrls.length) {
            return (
              <img
                ref={imageRef}
                className="galler img"
                key={index}
                src={image}
                alt=""
              />
            );
          }
          return <img className="galler img" key={index} src={image} alt="" />;
        })}
      </div>
      <GetImages />
    </>
  );
}

export default Gallery;
