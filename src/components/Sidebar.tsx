
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, BookText, GraduationCap, Home } from "lucide-react";
import { cn } from "@/lib/utils";

// Define color themes for each section
const getSectionColorTheme = (sectionId: number) => {
  const themes = {
    1: "text-blue-700 bg-blue-100 border-blue-200",
    2: "text-purple-700 bg-purple-100 border-purple-200",
    3: "text-green-700 bg-green-100 border-green-200",
    4: "text-orange-700 bg-orange-100 border-orange-200",
    5: "text-red-700 bg-red-100 border-red-200",
    6: "text-teal-700 bg-teal-100 border-teal-200",
    7: "text-indigo-700 bg-indigo-100 border-indigo-200",
    8: "text-pink-700 bg-pink-100 border-pink-200",
  };

  return themes[sectionId as keyof typeof themes] || themes[1];
};

const sectionData = [
  { id: 1, title: "Introduktion till AI – Vad är AI och hur fungerar det?" },
  { id: 2, title: "AI och pedagogik – Teori, forskning och evidens" },
  { id: 3, title: "AI för lärare – Verktyg och strategier i praktiken" },
  { id: 4, title: "Bedömning" },
  { id: 5, title: "Etik och ansvarsfull användning" },
  { id: 6, title: "Differentierat lärande" },
  { id: 7, title: "AI och källkritik" },
  { id: 8, title: "Utvärdering, reflektion och framtid" },
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
              AI för lärare
            </span>
          )}
          {collapsed && <GraduationCap className="h-6 w-6 text-education-700" />}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-200 transition-colors"
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
            "sidebar-link mb-2 transition-all duration-200",
            location.pathname === "/" && "active"
          )}
        >
          <Home className="h-5 w-5" />
          {!collapsed && <span>Hem</span>}
        </Link>

        <div className="pt-2 pb-1">
          {!collapsed && (
            <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Kursmoduler
            </div>
          )}
          {collapsed && <hr className="border-gray-200" />}
        </div>

        {sectionData.map((section) => {
          const colorTheme = getSectionColorTheme(section.id);
          const isActive = location.pathname === `/section/${section.id}`;
          
          return (
            <Link
              key={section.id}
              to={`/section/${section.id}`}
              className={cn(
                "sidebar-link my-1 transition-all duration-200 ease-in-out hover:scale-[1.02] hover:font-medium",
                isActive ? "active" : "",
                !isActive && `hover:${colorTheme.split(" ")[1]} hover:${colorTheme.split(" ")[0]}`
              )}
            >
              <span className={cn(
                "flex items-center justify-center h-5 w-5 text-xs font-medium rounded-full",
                colorTheme.split(" ").slice(0, 2).join(" ")
              )}>
                {section.id}
              </span>
              {!collapsed && (
                <span className={cn(
                  "truncate transition-all duration-200",
                  isActive ? "text-lg font-bold" : "",
                  !isActive && colorTheme.split(" ")[0]
                )}>
                  {section.title}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
