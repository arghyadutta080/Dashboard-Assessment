"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { performanceStatsType } from "@/lib/types/dashboard/performanceStats";

interface QuestionAnalysisProps {
  stats?: performanceStatsType;
}

const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({ stats }) => {
  const score = stats?.score ?? 0;

  const data = [
    { name: "Correct", value: (score / 15) * 100 },
    { name: "Incorrect", value: 100 - ((score / 15) * 100) },
  ];

  const COLORS = ["#8B5CF6", "#E2E8F0"];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">
            Question Analysis
          </CardTitle>
          <span className="text-lg font-medium text-[#8B5CF6]">{score}/15</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-gray-600">
          You answered {score} out of 15 questions correctly.
          {score < 15 && " However it still needs improvement."}
        </p>

        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionAnalysis;
