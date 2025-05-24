import { useState } from "react";
const SearchTask = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div className="mb-8 flex justify-end">
      <form>
        <div className="flex">
          <div className="relative overflow-hidden rounded-lg text-gray-300 min-w-[280px] md:min-w-[380px] lg:min-w-[440px]">
            <input
              value={searchTerm}
              onChange={() => setSearchTerm(event.target.value)}
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-gray-700 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search Task"
              required
            />
            <button
              onClick={handleClick}
              type="submit"
              className="absolute right-2 top-0 h-full rounded-e-lg text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchTask;
