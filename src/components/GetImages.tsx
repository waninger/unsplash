import axios from "axios";
import { useContext, useEffect } from "react";
import { ImageContext } from "../ImageContext";
import "../styles/Information.css";

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
    isLoading,
    setIsLoading,
  } = useContext(ImageContext);

  //endpoint variables
  const endpoint: string = "https://api.unsplash.com/search/photos";
  const privateKey: string = "ZVT8vLK5avNC3fkDyHgaQEV77PjpEtISUhhCUxfcdow";
  const imagesPerPage: number = 30;

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
    axios
      .get(endpoint, config)
      .then((resp) => {
        let responseUrls: string[] = [];
        responseUrls = imageUrls;

        //itterate over response data and save basic urls
        resp.data.results.forEach((image: any) => {
          responseUrls.push(image.urls.regular);
        });
        setImageUrls(responseUrls);

        //check if this was the last page
        if (pageNumber < resp.data.total_pages) {
          setHasMoreData(true);
        } else setHasMoreData(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [pageNumber, queryString]);

  //Loading info
  if (isLoading || hasMoreData)
    return <div className="info-text">Loading images...</div>;
  //No image Found
  if (queryString !== "" && imageUrls.length === 0)
    return <div className="info-text">No image Found</div>;
  //no info needed
  return <div></div>;
}

export default GetImages;
