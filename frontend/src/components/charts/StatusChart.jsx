import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const StatusChart = ({ data }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
      <h2 className="font-semibold mb-4 dark:text-white">File Status</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={["#3b82f6", "#22c55e", "#ef4444"][index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusChart;
