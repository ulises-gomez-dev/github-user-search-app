import SearchIcon from "../assets/icon-search.svg";
import "./Search.css";

function Search({ handleSearch }) {
  return (
    <form className="search" action={handleSearch}>
      <img className="searchIcon" src={SearchIcon} alt="Search Icon" />
      <input type="text" name="query" placeholder="Search GitHub username..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
