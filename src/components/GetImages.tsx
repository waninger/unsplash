import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../ImageContext";

/**
 * takes a searchQery and loads a list of urls based on the
 * query and page number
 */
function GetImages() {
  //global variebles
  const {
    imageUrls,
    setImageUrls,
    pageNumber,
    queryString,
    hasMoreData,
    setHasMoreData,
    setIsLoading,
  } = useContext(ImageContext);

  //endpoint variables
  const endpoint: string = "https://api.unsplash.com/search/photos";
  const privateKey: string = "ZVT8vLK5avNC3fkDyHgaQEV77PjpEtISUhhCUxfcdow";
  const imagesPerPage: number = 30;
  let responseUrls: string[] = [];

  //config for axios call
  let config = {
    params: {
      client_id: privateKey,
      page: pageNumber,
      per_page: imagesPerPage,
      query: queryString,
    },
  };

  useEffect(() => {
    setIsLoading(true);

    console.log("sending data" + pageNumber);
    axios
      .get(endpoint, config)
      .then((resp) => {
        responseUrls = imageUrls;

        //itterate over response data and save basic urls
        resp.data.results.forEach((image: any) => {
          responseUrls.push(image.urls.regular);
        });
        setImageUrls(responseUrls);

        //check if this was the last page
        if (pageNumber < resp.data.total_pages) {
          setHasMoreData(true);
          console.log("has more data");
        } else setHasMoreData(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [pageNumber, queryString]);

  if (hasMoreData) return <div>Loading images...</div>;
  return <div></div>;
}

export default GetImages;
