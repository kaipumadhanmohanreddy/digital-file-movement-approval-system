const ApprovalTimeline = ({ history }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Approval Timeline
      </h2>

      <div className="space-y-4">
        {history?.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2 bg-white rounded shadow"
          >
            <h3 className="font-bold">
              {item.status}
            </h3>

            <p>{item.remarks}</p>

            <p className="text-sm text-gray-500">
              By: {item.actionBy?.name || "System"}
            </p>

            <p className="text-sm text-gray-500">
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalTimeline;