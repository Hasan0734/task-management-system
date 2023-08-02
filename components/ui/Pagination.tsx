import React from "react";
interface PropsType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  entities: number;
  pagination: any[];
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  entities,
  pagination,
}: PropsType) => {
  return (
    <ul className="flex items-center w-full divide-x-2">
      <li>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1.5 bg-gray-200 rounded-l-md ${
            currentPage === 1 && "cursor-not-allowed"
          }`}
        >
          Previus
        </button>
      </li>
      {pagination.map((page) => (
        <li
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`bg-primary text-white px-3 py-1.5 cursor-pointer`}
        >
          <span
            className={`flex h-6 min-w-6 items-center justify-center rounded-lg leading-tight transition-colors ${
              currentPage === page ? "bg-primary/50 text-white" : ""
            }`}
          >
            {page}
          </span>
        </li>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={pagination[pagination.length - 1] === currentPage}
        className={`px-2 py-1.5 bg-gray-200 rounded-r-md cursor-pointer  ${
          pagination[pagination.length - 1] === currentPage &&
          "cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </ul>
  );
};

export default Pagination;
