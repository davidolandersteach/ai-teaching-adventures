
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, BookText, GraduationCap, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const sectionData = [
  { id: 1, title: "Introduction to AI in Education" },
  { id: 2, title: "AI Tools for Teachers" },
  { id: 3, title: "Classroom Integration Strategies" },
  { id: 4, title: "Assessment and AI" },
  { id: 5, title: "Ethics and Responsible Use" },
  { id: 6, title: "Personalized Learning with AI" },
  { id: 7, title: "Future of Education and AI" },
  { id: 8, title: "Practical Implementation" },
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
              Course Sections
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
