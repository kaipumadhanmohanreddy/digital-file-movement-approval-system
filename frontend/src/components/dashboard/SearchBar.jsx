const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search files..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full md:w-96 bg-white border border-slate-300 rounded-xl px-5 py-3 outline-none focus:border-blue-500 shadow-sm"
    />
  );
};

export default SearchBar;