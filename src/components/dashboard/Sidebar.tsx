import { BarChart, FileText, LayoutDashboard } from "lucide-react";
import Link from "next/link";

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

export default Sidebar
