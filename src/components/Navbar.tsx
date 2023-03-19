import { useEffect } from "react";
import "../styles/Navbar.css";
import SearchBar from "./SearchBar";

/**
 * Top aligned navigation bar.
 * Follows on scroll and holds searchbar
 */
function Navbar() {
  //listen to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //add css changes
  function handleScroll() {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  }

  return <div className="navbar">{<SearchBar />}</div>;
}
export default Navbar;
