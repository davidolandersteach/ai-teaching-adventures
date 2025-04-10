
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

const Index = () => {
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

  return (
    <div className="animate-fade">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-education-700 to-education-900 text-white rounded-xl shadow-lg p-8 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">AI i utbildning</h1>
          <p className="text-xl opacity-90 mb-6">
           klnnlknömm BLAKBMLMRGWW
          </p>
          <div className="flex gap-4 items-center">
            <Link
              to="/section/1"
              className="bg-white text-education-800 hover:bg-gray-100 px-4 py-2 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
            >
              Start Learning <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Översikt */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Översikt</h2>
        <p className="text-gray-600 mb-4">
Metatext metatext        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <GraduationCap className="h-8 w-8 text-education-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">För pedagoger</h3>
            <p className="text-gray-600">
              Designed specifically for teachers of all technical backgrounds.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <BookOpen className="h-8 w-8 text-education-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Structured Learning</h3>
            <p className="text-gray-600">
              32 moments organized into logical sections for optimal learning.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <Users className="h-8 w-8 text-education-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Kolligialt samarbete</h3>
            <p className="text-gray-600">
              Share ideas and resources with other educators through embedded documents.
            </p>
          </div>
        </div>
      </div>

      {/* Course Sections */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectionData.map((section) => (
            <Link
              key={section.id}
              to={`/section/${section.id}`}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 h-8 w-8 bg-education-100 text-education-700 rounded-full flex items-center justify-center font-medium">
                    {section.id}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-education-600 transition-colors">
                  {section.title}
                </h3>
                <div className="mt-auto pt-4 flex justify-end">
                  <ArrowRight className="h-5 w-5 text-education-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
