"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { performanceStatsType } from "@/lib/types/dashboard/performanceStats";

interface UpdateScoresModalProps {
  onUpdate: (data: performanceStatsType) => void;
  currentStats: performanceStatsType;
}

const UpdateScoresModal: React.FC<UpdateScoresModalProps> = ({
  onUpdate,
  currentStats,
}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(currentStats);
  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const validateField = (name: string, value: string): string => {
    if (value === "") return "";

    if (name === "rank") {
      if (isNaN(Number(value)) || Number(value) <= 0)
        return "should be a positive number";
    }

    if (name === "percentile") {
      if (isNaN(Number(value))) return "should be a number";
      if (Number(value) < 0 || Number(value) > 100)
        return "should be between 0 and 100";
    }

    if (name === "score") {
      if (isNaN(Number(value))) return "should be a number";
      if (Number(value) < 0 || Number(value) > 15)
        return "should be between 0 and 15";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      onUpdate({
        rank: Number(formData.rank),
        percentile: Number(formData.percentile),
        score: Number(formData.score),
      });
      setOpen(false);
    }
  };

  const isFormValid = (): boolean => {
    return !Object.values(errors).some((error) => error !== "");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#2D2D77] font-semibold">Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] p-0 gap-0 rounded-md">
        <DialogHeader className="px-6 pt-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-[32px] font-bold">
              Update scores
            </DialogTitle>
            <Image
              src="/assets/html.png"
              alt="HTML5 Logo"
              width={48}
              height={48}
              className="rounded"
            />
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          <div className="space-y-2 flex flex-row justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E1E4E] text-white font-semibold">
                1
              </div>
              <label htmlFor="rank" className="text-base font-semibold">
                Update your Rank
              </label>
            </div>
            <div className="flex flex-col items-center w-[35%]">
              <Input
                id="rank"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                className={`border-2 h-9 text-lg w-full ${
                  errors.rank ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.rank && (
                <p className="text-red-500 text-sm">{errors.rank}</p>
              )}
            </div>
          </div>

          <div className="space-y-2 flex flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E1E4E] text-white font-semibold">
                2
              </div>
              <label htmlFor="percentile" className="text-base font-semibold">
                Update your Percentile
              </label>
            </div>
            <div className="flex flex-col items-center w-[35%]">
              <Input
                id="percentile"
                name="percentile"
                value={formData.percentile}
                onChange={handleChange}
                className={`border-2 h-9 text-lg w-full ${
                  errors.percentile ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.percentile && (
                <p className="text-red-500 text-sm">{errors.percentile}</p>
              )}
            </div>
          </div>

          <div className="space-y-2 flex flex-row justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E1E4E] text-white font-semibold">
                3
              </div>
              <label htmlFor="score" className=" text-base font-semibold">
                Update your Current Score (out of 15)
              </label>
            </div>
            <div className="flex flex-col items-center w-[35%]">
              <Input
                id="score"
                name="score"
                value={formData.score}
                onChange={handleChange}
                className={`border-2 h-9 text-lg w-full ${
                  errors.score ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.score && (
                <p className="text-red-500 text-sm">{errors.score}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-12 px-6 text-base font-semibold"
            >
              cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid()}
              className="h-12 px-8 text-base font-semibold bg-[#1E1E4E] hover:bg-[#2D2D77] disabled:opacity-50"
            >
              save →
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateScoresModal;
