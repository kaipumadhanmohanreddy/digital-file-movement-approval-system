const FilterBar = ({
  search,
  setSearch,

  status,
  setStatus,

  department,
  setDepartment,

  priority,
  setPriority,
}) => {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-xl
        p-4
        flex
        flex-wrap
        gap-4
        mb-5
      "
    >
      {/* Search */}

      <input
        type="text"
        placeholder="Search files..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          border
          rounded-lg
          px-4 py-2
          text-sm
          flex-1
          min-w-[200px]
        "
      />

      {/* Department */}

      <select
        value={department}
        onChange={(e) =>
          setDepartment(
            e.target.value
          )
        }
        className="
          border
          rounded-lg
          px-3 py-2
          text-sm
        "
      >
        <option value="">
          Department
        </option>

        <option value="HR">
          HR
        </option>

        <option value="Finance">
          Finance
        </option>

        <option value="IT">
          IT
        </option>
      </select>

      {/* Priority */}

      <select
        value={priority}
        onChange={(e) =>
          setPriority(
            e.target.value
          )
        }
        className="
          border
          rounded-lg
          px-3 py-2
          text-sm
        "
      >
        <option value="">
          Priority
        </option>

        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>
      </select>

      {/* Status */}

      <select
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value
          )
        }
        className="
          border
          rounded-lg
          px-3 py-2
          text-sm
        "
      >
        <option value="">
          Status
        </option>

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
    </div>
  );
};

export default FilterBar;