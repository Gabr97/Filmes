import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <>
      <div className="input-group rounded container" style={{width:"40vw"}}>
        <input
        
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </>
  );
};
export default Search;