import React from "react";

function SearchInput() {
  return (
    <div>
      <h2 className="text-center text-[20px] text-gray-900 mb-2">SearchInput</h2>
      <div className="flex justify-center">
        <div className="flex bg-gray-100 p-1 px-10 gap-2 rounded-full divide-x">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Location"
            className="p-2 outline-none bg-transparent text-gray-900"
          />
        </div>
        <div>
          <input
            type="date"
            className="p-2 outline-none bg-transparent text-gray-900"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
