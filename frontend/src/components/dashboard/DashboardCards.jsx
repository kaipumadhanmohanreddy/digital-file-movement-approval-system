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
          p-3
          bg-white
          dark:bg-slate-800
          border
          border-slate-200
          dark:border-slate-700
        "
        >
          {/* Title */}

          <h2
            className="
            text-sm
            font-semibold
            text-slate-700
            dark:text-slate-300
          "
          >
            {card.title}
          </h2>

          {/* Number */}

          <h1
            className="
            text-xl
            font-bold
            mt-2
            text-slate-900
            dark:text-white
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
