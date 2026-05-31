import Card from "../ui/Card";

const DashboardCards = ({ stats }) => {
  const cards = [
    {
      title: "Total Files",
      value: stats.totalFiles,
    },

    {
      title: "Approved",
      value: stats.approved,
    },

    {
      title: "Pending",
      value: stats.pending,
    },

    {
      title: "Rejected",
      value: stats.rejected,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="
          p-4
          bg-white
          border
          border-slate-300
          shadow-sm
        "
        >
          {/* Title */}

          <h2
            className="
            text-sm
            font-semibold
            text-slate-700
          "
          >
            {card.title}
          </h2>

          {/* Number */}

          <h1
            className="
            text-3xl
            font-bold
            text-slate-900
            mt-3
          "
          >
            {card.value}
          </h1>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;
