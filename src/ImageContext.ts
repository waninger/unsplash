import { createContext } from "react";

interface ImageContextInterface {
  imageUrls: string[] | [];
  setImageUrls: (urls: string[] | []) => void;

  pageNumber: number | 1;
  setPageNumber: (page: number | 1) => void;

  queryString: string | "";
  setQueryString: (query: string | "") => void;

  hasMoreData: boolean | false;
  setHasMoreData: (hasMore: boolean | false) => void;

  isLoading: boolean | false;
  setIsLoading: (hasMore: boolean | false) => void;

  openModal: boolean | false;
  setOpenModal: (hasMore: boolean | false) => void;

  modalImageUrl: string | "";
  setModalImageUrl: (query: string | "") => void;
}

export const ImageContext = createContext<ImageContextInterface>({
  imageUrls: [],
  setImageUrls: () => {},
  pageNumber: 1,
  setPageNumber: () => {},
  queryString: "",
  setQueryString: () => {},
  hasMoreData: false,
  setHasMoreData: () => {},
  isLoading: false,
  setIsLoading: () => {},
  openModal: false,
  setOpenModal: () => {},
  modalImageUrl: "",
  setModalImageUrl: () => {},
});
