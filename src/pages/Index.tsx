import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

// Sample data for course sections
const sectionData = [
  { id: 1, title: "Introduktion till AI – Vad är AI och hur fungerar det?" },
  { id: 2, title: "AI och pedagogik – Teori, forskning och evidens" },
  { id: 3, title: "AI för lärare – Verktyg och strategier i praktiken" },
  { id: 4, title: "Bedömning" },
  { id: 5, title: "Etik och ansvarsfull användning" },
  { id: 6, title: "Differentierat lärande" },
  { id: 7, title: "Implementering av AI i klassrummet" },
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
          Lär dig hur artificiell intelligens förändrar utbildningslandskapet och hur du kan använda dessa verktyg i din undervisning.
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
      {/* Image Container */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="src/Minecraft 1.png" // Replace with your image URL or import statement
          alt="Illustration of AI in education"
          className="w-full h-auto rounded-lg object-cover"
          loading="lazy"
        />
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
          Designad för pedagoger utan krav på teknisk bakgrund.
        </p>
      </div>
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
        <BookOpen className="h-8 w-8 text-education-600 mb-3" />
        <h3 className="text-lg font-semibold mb-2">Strukturerat lärande</h3>
        <p className="text-gray-600">
          32 moment organiserade i logiska avsnitt för optimal inlärning.
        </p>
      </div>
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
        <Users className="h-8 w-8 text-education-600 mb-3" />
        <h3 className="text-lg font-semibold mb-2">Kollegialt samarbete</h3>
        <p className="text-gray-600">
          Dela idéer och resurser med andra pedagoger genom inbäddade dokument.
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
