"use client";

import { useState } from "react";
import {
  BarChart,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Menu,
  Trophy,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { QuickStats } from "@/components/quick-stats";
import ComparisonGraph from "@/components/comparison-graph";
// import { UpdateScoresModal } from "./components/update-scores-modal";

export default function Page() {
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const handleUpdateScores = (newStats: {
    rank: number;
    percentile: number;
    score: number;
  }) => {
    setStats(newStats);
  };

  const Sidebar = () => (
    <nav className="flex flex-col gap-2 p-4">
      <Link
        href="#"
        className="flex items-center gap-2 rounded-lg px-3 py-4 text-gray-500 font-semibold hover:bg-gray-100"
      >
        <LayoutDashboard className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-4 text-blue-600 font-semibold"
      >
        <FileText className="h-5 w-5" />
        Skill Test
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-lg px-3 py-4 text-gray-500 font-semibold hover:bg-gray-100"
      >
        <BarChart className="h-5 w-5" />
        Internship
      </Link>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
            <Image
              src="/assets/logo.png"
              alt="WhatBytes Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold">WhatBytes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="md:block hidden">Rahil Siddique</span>
            <Image
              src="/assets/logo.png"
              alt="WhatBytes Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </header>
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
                      {/* <UpdateScoresModal onUpdate={handleUpdateScores} /> */}
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
                  <ComparisonGraph percentile={stats.percentile}/>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Syllabus Wise Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>HTML Tools, Forms, History</span>
                      <span className="text-blue-600">80%</span>
                    </div>
                    <Progress
                      value={80}
                      className="bg-gray-200"
                      color="#2563eb"
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Tags & References in HTML</span>
                      <span className="text-orange-600">60%</span>
                    </div>
                    <Progress
                      value={60}
                      className="bg-gray-200"
                      color="#ea580c"
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Tables & References in HTML</span>
                      <span className="text-red-600">24%</span>
                    </div>
                    <Progress
                      value={24}
                      className="bg-gray-200"
                      color="#dc2626"
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Tables & CSS Basics</span>
                      <span className="text-green-600">96%</span>
                    </div>
                    <Progress
                      value={96}
                      className="bg-gray-200"
                      color="#16a34a"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Question Analysis</CardTitle>
                    <span className="text-blue-600">{stats.score}/15</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    You scored {stats.score} questions correct out of 15.
                    However it still needs some improvements
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
