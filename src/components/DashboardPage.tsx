"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import QuickStats from "@/components/dashboard/QuickStats";
import ComparisonGraph from "@/components/dashboard/ComparisonGraph";
import UpdateScoresModal from "@/components/dashboard/UpdateScoresModal";
import Sidebar from "@/components/dashboard/Sidebar";
import { syllabusAnalysis } from "@/utils/constants/dashboard/syllabusAnalysis";
import { syllabusAnalysisType } from "@/lib/types/dashboard/syllabusAnalysis";
import { performanceStatsType } from "@/lib/types/dashboard/performanceStats";
import QuestionAnalysis from "./dashboard/QuestionAnalysis";

const DashboardPage = () => {
  const [stats, setStats] = useState<performanceStatsType>({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const handleUpdateScores = (newStats: performanceStatsType) => {
    setStats(newStats);
  };

  return (
    <>
      <div className="flex">
        <aside className="hidden w-64 border-r bg-white md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <h1 className="text-2xl font-semibold">Skill Test</h1>
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="h-12 w-12">
                    <Image
                      src="/assets/html.png"
                      alt="HTML5 Logo"
                      width={48}
                      height={48}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">
                        Hyper Text Markup Language
                      </h2>
                      <UpdateScoresModal
                        onUpdate={handleUpdateScores}
                        currentStats={stats}
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June
                      2021
                    </p>
                  </div>
                </CardContent>
              </Card>
              <QuickStats {...stats} />
              <Card>
                <CardHeader>
                  <CardTitle>Comparison Graph</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-600">
                    You scored {stats.percentile}% percentile which is lower
                    than the average percentile 72% of all the engineers who
                    took this assessment
                  </p>
                  <ComparisonGraph percentile={stats.percentile} />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Syllabus Wise Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 my-4">
                  {syllabusAnalysis.map(
                    (result: syllabusAnalysisType, index) => {
                      return (
                        <div key={index}>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>{result.topic}</span>
                            <span style={{ color: `${result.color}` }}>
                              {result.percentage}%
                            </span>
                          </div>
                          <Progress
                            value={result.percentage}
                            className="bg-gray-200"
                            color={`${result.color}`}
                          />
                        </div>
                      );
                    }
                  )}
                </CardContent>
              </Card>
              <QuestionAnalysis stats={stats}/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
