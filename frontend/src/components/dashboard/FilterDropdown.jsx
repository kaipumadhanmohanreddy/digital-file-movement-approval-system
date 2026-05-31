const FilterDropdown = ({
  filter,
  setFilter,
}) => {
  return (
    <select
      value={filter}
      onChange={(e) =>
        setFilter(e.target.value)
      }
      className="bg-white border border-slate-300 rounded-xl px-5 py-3 shadow-sm outline-none"
    >
      <option value="">All Status</option>

      <option value="Approved">
        Approved
      </option>

      <option value="Rejected">
        Rejected
      </option>

      <option value="Under Review">
        Under Review
      </option>
    </select>
  );
};

export default FilterDropdown;