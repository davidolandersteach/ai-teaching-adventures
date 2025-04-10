
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, BookText, GraduationCap, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const sectionData = [
  { id: 1, title: "1 Introduktion till AI – Vad är AI och hur fungerar det?" },
  { id: 2, title: "2 AI och pedagogik – Teori, forskning och evidens" },
  { id: 3, title: "3 AI för lärare – Verktyg och strategier i praktiken" },
  { id: 4, title: "Modul 4: Bedömning och AI" },
  { id: 5, title: "Modul 5: Etik och ansvarsfull användning" },
  { id: 6, title: "Modul 6: Personaliserat lärande med AI" },
  { id: 7, title: "Modul 7: Framtiden för utbildning och AI" },
  { id: 8, title: "Modul 8: Praktisk implementering" },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div
      className={cn(
        "h-screen bg-sidebar sticky top-0 border-r border-gray-200 transition-all duration-300 overflow-y-auto",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-2">
          {!collapsed && (
            <span className="text-xl font-bold text-education-700">
              AI for Teachers
            </span>
          )}
          {collapsed && <GraduationCap className="h-6 w-6 text-education-700" />}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-200"
        >
          {collapsed ? (
            <BookOpen className="h-5 w-5" />
          ) : (
            <BookText className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav className="p-2">
        <Link
          to="/"
          className={cn(
            "sidebar-link mb-2",
            location.pathname === "/" && "active"
          )}
        >
          <Home className="h-5 w-5" />
          {!collapsed && <span>Home</span>}
        </Link>

        <div className="pt-2 pb-1">
          {!collapsed && (
            <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Kursmoduler
            </div>
          )}
          {collapsed && <hr className="border-gray-200" />}
        </div>

        {sectionData.map((section) => (
          <Link
            key={section.id}
            to={`/section/${section.id}`}
            className={cn(
              "sidebar-link my-1",
              location.pathname === `/section/${section.id}` && "active"
            )}
          >
            <span className="flex items-center justify-center h-5 w-5 text-xs font-medium rounded-full bg-education-100 text-education-800">
              {section.id}
            </span>
            {!collapsed && (
              <span className="truncate">{section.title}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
