import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Bar,
} from "recharts";

import Card from "../ui/Card";

const DashboardCharts = ({ stats }) => {
  /*
    Pie Chart Data
  */

  const pieData = [
    {
      name: "Approved",
      value: stats.approved,
    },

    {
      name: "Pending",
      value: stats.pending,
    },

    {
      name: "Rejected",
      value: stats.rejected,
    },
  ];

  /*
    Bar Chart Data
  */

  const barData = [
    {
      category: "Low",
      files: stats.lowPriority,
    },

    {
      category: "Medium",
      files: stats.mediumPriority,
    },

    {
      category: "High",
      files: stats.highPriority,
    },
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444"];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
      {/* Pie Chart */}

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-5">Approval Status</h2>

        <div className="h-44">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={50} label>
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Bar Chart */}

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-5">File Priority Analysis</h2>

        <div className="h-44">
          <ResponsiveContainer>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar dataKey="files" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default DashboardCharts;
