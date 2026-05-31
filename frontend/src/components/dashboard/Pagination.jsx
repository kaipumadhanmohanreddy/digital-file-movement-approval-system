const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center mt-8 gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-5 py-2 rounded-lg cursor-pointer transition-all"
      >
        Previous
      </button>

      <span className="px-4 py-2 bg-white rounded-lg shadow">
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-5 py-2 rounded-lg cursor-pointer transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;