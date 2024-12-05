"use client";

import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Stats {
  percentile: number;
}

const data = [
  { x: 0, y: 2 },
  { x: 10, y: 5 },
  { x: 20, y: 10 },
  { x: 30, y: 25 },
  { x: 40, y: 40 },
  { x: 50, y: 65 },
  { x: 60, y: 40 },
  { x: 70, y: 20 },
  { x: 80, y: 10 },
  { x: 90, y: 5 },
  { x: 100, y: 2 },
];


const ComparisonGraph: React.FC<Stats> = ({percentile}) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="x"
            type="number"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}`}
          />
          <YAxis hide />
          <Tooltip
            formatter={(value: number) => [`${value}`, "numberOfStudent"]}
            labelFormatter={(label) => `Percentile: ${label}`}
          />
          <ReferenceLine
            x={percentile}
            stroke="#4F46E5"
            strokeDasharray="3 3"
            label={{
              position: "left",
              value: "your percentile",
              fill: "#4F46E5",
              fontSize: 16,
            }}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComparisonGraph;