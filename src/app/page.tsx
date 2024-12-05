import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardPage from "@/components/DashboardPage";

export default function Page() {
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
              src="/assets/profile.png"
              alt="WhatBytes Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </header>
      <DashboardPage />
    </div>
  );
}
