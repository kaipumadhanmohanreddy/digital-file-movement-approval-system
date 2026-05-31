const StatusBadge = ({ status }) => {
  /*
    Dynamic Status Colors
  */

  const statusStyles = {
    Submitted: "bg-blue-100 text-blue-700",

    "Under Review":
      "bg-yellow-100 text-yellow-700",

    Approved: "bg-green-100 text-green-700",

    Rejected: "bg-red-100 text-red-700",

    "Returned for Changes":
      "bg-orange-100 text-orange-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;