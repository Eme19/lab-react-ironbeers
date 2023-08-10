import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBeer({ SearChBeersHandler }) {
  return (
    <div className="search-style">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          className="search-input-style"
          placeholder="Type to search....."
          value={undefined}
          onChange={(e) => SearChBeersHandler(e)}
        />
      </div>
    </div>
  );
}

export default SearchBeer;
