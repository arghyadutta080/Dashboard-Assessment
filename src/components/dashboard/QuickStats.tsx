import { Card, CardContent } from "@/components/ui/card";
import { Trophy, FileText, CheckCircle2 } from "lucide-react";

interface QuickStatsProps {
  rank: number;
  percentile: number;
  score: number;
}

const QuickStats: React.FC<QuickStatsProps> = ({ rank, percentile, score }) => {
  return (
    <Card>
      <CardContent className="grid gap-6 pt-6 sm:grid-cols-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <div className="text-2xl font-bold">{rank}</div>
            <div className="text-xs text-gray-500">YOUR RANK</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <div className="text-2xl font-bold">{percentile}%</div>
            <div className="text-xs text-gray-500">PERCENTILE</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-2xl font-bold">{score}/15</div>
            <div className="text-xs text-gray-500">CORRECT ANSWERS</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickStats
