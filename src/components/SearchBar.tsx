import { useContext, useState } from "react";
import { ImageContext } from "../ImageContext";
import "../styles/SearchBar.css";
import { BsSearch } from "react-icons/bs";

/**'
 * Search bar. handles querystring and resets pagenumber on new query
 */
function SearchBar() {
  //global variables
  const { setImageUrls, setPageNumber, queryString, setQueryString } =
    useContext(ImageContext);

  //peristance variable
  const [query, setQuery] = useState("");

  //set current querry string
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  //submit new string and reset page value
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query !== queryString) {
      setImageUrls([]);
      setQueryString(query);
      setPageNumber(1);
      console.log("new query");
    }
  };

  return (
    <div className="searchbar">
      <form onSubmit={onSubmit}>
        <input
          className="searchbar-input"
          type="text"
          onChange={handleChange}
        ></input>
        <button className="searchbar-button" type="submit">
          <BsSearch className="searchbar-icon" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
