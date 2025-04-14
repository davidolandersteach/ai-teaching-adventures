import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

// Define color themes for each section
const getSectionColorTheme = (sectionId: number) => {
  const themes = {
    1: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      text: "text-blue-700",
      hover: "hover:bg-blue-50",
    },
    2: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      text: "text-purple-700",
      hover: "hover:bg-purple-50",
    },
    3: {
      bg: "bg-green-100",
      border: "border-green-200",
      text: "text-green-700",
      hover: "hover:bg-green-50",
    },
    4: {
      bg: "bg-orange-100",
      border: "border-orange-200",
      text: "text-orange-700",
      hover: "hover:bg-orange-50",
    },
    5: {
      bg: "bg-red-100",
      border: "border-red-200",
      text: "text-red-700",
      hover: "hover:bg-red-50",
    },
    6: {
      bg: "bg-teal-100",
      border: "border-teal-200",
      text: "text-teal-700",
      hover: "hover:bg-teal-50",
    },
    7: {
      bg: "bg-indigo-100",
      border: "border-indigo-200",
      text: "text-indigo-700",
      hover: "hover:bg-indigo-50",
    },
    8: {
      bg: "bg-pink-100",
      border: "border-pink-200",
      text: "text-pink-700",
      hover: "hover:bg-pink-50",
    },
  };

  return themes[sectionId as keyof typeof themes] || themes[1];
};

// Sample data for course sections
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

// HeroSection Component
const HeroSection = () => (
  <header className="bg-gradient-to-br from-education-700 to-education-900 text-white rounded-xl shadow-lg p-8 mb-8">
    <div className="max-w-3xl mx-auto md:flex md:items-center md:space-x-8">
      {/* Text Container */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">AI i utbildning</h1>
        <p className="text-xl opacity-90 mb-6">
          Lär dig hur artificiell intelligens förändrar utbildningslandskapet och hur du och dina elever kan använda AI på ett säkert sätt för att öka måluppfyllelsen.
        </p>
        <div className="flex gap-4 items-center">
          <Link
            to="/section/1"
            className="bg-white text-education-800 hover:bg-gray-100 px-4 py-2 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
          >
            Påbörja lärandet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* Image Container with proper aspect ratio and fitting */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-white/10">
          <img
            src="/Minecraft 1.png"
            alt="Illustration of AI in education"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </header>
);

// OverviewSection Component
const OverviewSection = () => (
  <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Översikt</h2>
    <p className="text-gray-600 mb-4">
      Denna kurs om AI i utbildning är utformad för att ge dig kunskaper och praktiska färdigheter för att integrera AI-verktyg och metoder i din undervisning.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
        <GraduationCap className="h-8 w-8 text-education-600 mb-3" />
        <h3 className="text-lg font-semibold mb-2">För pedagoger</h3>
        <p className="text-gray-600">
          Vetenskapligt grundad fortbildningsdesign anpassad för pedagoger utan krav på teknisk bakgrund.
        </p>
      </div>
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
        <BookOpen className="h-8 w-8 text-education-600 mb-3" />
        <h3 className="text-lg font-semibold mb-2">Strukturerat lärande</h3>
        <p className="text-gray-600">
          32 moment organiserade i åtta delar för logisk inlärning. Delarna bygger på varandra, men kan också användas separat.
        </p>
      </div>
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
        <Users className="h-8 w-8 text-education-600 mb-3" />
        <h3 className="text-lg font-semibold mb-2">Kollegialt samarbete</h3>
        <p className="text-gray-600">
          Reflektera tillsammans med kollegor för att nå djupare insikter.
        </p>
      </div>
    </div>
  </section>
);

// CourseSections Component
const CourseSections = () => (
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Kursens delar</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sectionData.map((section) => {
        const colorTheme = getSectionColorTheme(section.id);
        
        return (
          <Link
            key={section.id}
            to={`/section/${section.id}`}
            className={`bg-white rounded-lg border ${colorTheme.border} p-4 hover:shadow-md transition-shadow group ${colorTheme.hover}`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-3">
                <div className={`flex-shrink-0 h-8 w-8 ${colorTheme.bg} ${colorTheme.text} rounded-full flex items-center justify-center font-medium`}>
                  {section.id}
                </div>
              </div>
              <h3 className={`text-lg font-medium ${colorTheme.text} group-hover:font-semibold transition-all`}>
                {section.title}
              </h3>
              <div className="mt-auto pt-4 flex justify-end">
                <ArrowRight className={`h-5 w-5 ${colorTheme.text} group-hover:translate-x-1 transition-transform`} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </section>
);

// Main Index Component using semantic HTML
const Index = () => {
  return (
    <main className="animate-fade">
      <HeroSection />
      <OverviewSection />
      <CourseSections />
    </main>
  );
};

export default Index;
