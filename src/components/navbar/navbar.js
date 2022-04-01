import { Link } from "react-router-dom";
import { useSearchFilter } from "../../contexts/search-filter-context";
import "./navbar.css";
const Navbar = () => {
  const { filterState, setFilterState } = useSearchFilter();
  return (
    <>
      <nav>
        <div className="brand brand-first-name">
          <Link to="/">
            <h1>
              Video<span className="brand-last-name">Com</span>
            </h1>
          </Link>
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Search Videos"
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <button className="nav-login">Login</button>
      </nav>
    </>
  );
};
export { Navbar };
