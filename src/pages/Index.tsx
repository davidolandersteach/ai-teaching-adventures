import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import WelcomeToast from "@/components/WelcomeToast";

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
  <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground rounded-2xl shadow-elevation p-8 mb-8">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/90"></div>
    <div className="relative max-w-4xl mx-auto">
      <div className="md:flex md:items-center md:space-x-12">
        {/* Text Container */}
        <div className="md:w-2/3">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-medium">Professionell utveckling för lärare</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            AI i utbildning
          </h1>
          <p className="text-xl opacity-95 mb-8 leading-relaxed">
            Lär dig hur artificiell intelligens förändrar utbildningslandskapet och hur du och dina elever kan använda AI på ett säkert sätt för att öka måluppfyllelsen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/section/1"
              className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Påbörja lärandet <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="text-sm opacity-80">
              ✓ 8 moduler • ✓ 32 moment • ✓ Vetenskapligt grundat
            </div>
          </div>
        </div>
        {/* Image Container */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-4">
              <img
                src="/Minecraft 1.png"
                alt="Illustration of AI in education"
                className="w-full h-full object-contain filter drop-shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

// OverviewSection Component
const OverviewSection = () => (
  <section className="welcome-card mb-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-foreground mb-4">Vad du kommer att lära dig</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Denna kurs om AI i utbildning är utformad för att ge dig kunskaper och praktiska färdigheter för att integrera AI-verktyg och metoder i din undervisning.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="welcome-card border-l-4 border-l-primary">
        <div className="progress-ring w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center">För pedagoger</h3>
        <p className="text-muted-foreground text-center">
          Vetenskapligt grundad fortbildningsdesign anpassad för pedagoger utan krav på teknisk bakgrund.
        </p>
      </div>
      <div className="welcome-card border-l-4 border-l-accent">
        <div className="progress-ring w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center">Strukturerat lärande</h3>
        <p className="text-muted-foreground text-center">
          32 moment organiserade i åtta delar för logisk inlärning. Delarna bygger på varandra, men kan också användas separat.
        </p>
      </div>
      <div className="welcome-card border-l-4 border-l-primary">
        <div className="progress-ring w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Users className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center">Kollegialt samarbete</h3>
        <p className="text-muted-foreground text-center">
          Reflektera tillsammans med kollegor för att nå djupare insikter.
        </p>
      </div>
    </div>
  </section>
);

// CourseSections Component
const CourseSections = () => (
  <section>
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-foreground mb-4">Kursens delar</h2>
      <p className="text-lg text-muted-foreground">
        Välj en modul nedan för att börja ditt lärande. Varje modul innehåller flera interaktiva moment.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sectionData.map((section) => {
        const colorTheme = getSectionColorTheme(section.id);
        
        return (
          <Link
            key={section.id}
            to={`/section/${section.id}`}
            className="welcome-card group cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className={`progress-ring w-12 h-12 flex items-center justify-center text-white font-bold text-lg`}>
                  {section.id}
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {section.title}
              </h3>
              <div className="mt-auto">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">4 moment</p>
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
      <WelcomeToast />
      <HeroSection />
      <OverviewSection />
      <CourseSections />
    </main>
  );
};

export default Index;
