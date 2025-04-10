
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseSection from "@/components/CourseSection";
import EmbedYoutube from "@/components/EmbedYoutube";
import EmbedGoogle from "@/components/EmbedGoogle";

// Standardized moment templates for all sections
const createStandardMoments = (sectionId: number) => [
  {
    id: 1,
    title: "Moment A",
    content: (
      <div>
        <p className="mb-4">
          Här kommer en introduktion till detta moment. Denna text kommer att uppdateras med specifikt innehåll för varje sektion.
        </p>
        <h3 className="text-xl font-medium mb-2">Instruktioner</h3>
        <p className="mb-4">
          För att genomföra detta moment ska du:
        </p>
        <ol className="list-decimal pl-5 my-3">
          <li>Läsa artikeln nedan</li>
          <li>Titta på videon</li>
          <li>Reflektera över innehållet</li>
        </ol>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
          <h4 className="font-medium mb-2">Artikel</h4>
          <p className="text-gray-600">Länk till artikel kommer att läggas in här.</p>
        </div>
        
        <EmbedYoutube videoId="dQw4w9WgXcQ" title={"Video för Sektion " + sectionId + ", Moment A"} />
        
        <div className="mt-4 bg-education-50 p-4 rounded-lg border border-education-100">
          <h4 className="font-medium text-education-800 mb-2">Lär dig mer</h4>
          <ul className="list-disc pl-5 text-education-700">
            <li>Ytterligare resurs 1</li>
            <li>Ytterligare resurs 2</li>
            <li>Ytterligare resurs 3</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Moment B",
    content: (
      <div>
        <h3 className="text-xl font-medium mb-3">Diskussionsfrågor utifrån Moment A</h3>
        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>Diskussionsfråga 1</li>
          <li>Diskussionsfråga 2</li>
          <li>Diskussionsfråga 3</li>
          <li>Diskussionsfråga 4</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-3">Förbered en aktivitet</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li>Förberedelse 1</li>
          <li>Förberedelse 2</li>
          <li>Förberedelse 3</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Moment C",
    content: (
      <div>
        <h3 className="text-xl font-medium mb-3">Moment C – aktivitet</h3>
        <p className="mb-4">Genomför den planerade aktiviteten.</p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Moment D",
    content: (
      <div>
        <h3 className="text-xl font-medium mb-3">Moment D – gemensam uppföljning</h3>
        
        <h4 className="text-lg font-medium mb-2 mt-4">Diskutera</h4>
        <p className="mb-3">Diskutera era observationer utifrån anteckningarna som ni gjorde i "Moment C"</p>
        
        <h5 className="font-medium mb-2">Diskussionsfrågor</h5>
        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>Diskussionsfråga 1</li>
          <li>Diskussionsfråga 2</li>
          <li>Diskussionsfråga 3</li>
        </ul>
        
        <h4 className="text-lg font-medium mb-2">Reflektera</h4>
        <p className="mb-3">Avsätt de sista tio minuterna för att reflektera över:</p>
        
        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li>Vad gjorde jag/vi?</li>
          <li>Vad lärde jag mig?</li>
        </ul>
        
        <p className="italic mt-4">Sammanfatta tillsammans arbetet med denna del i några punkter.</p>
      </div>
    ),
  },
];

// Sample content for the sections
const sectionData = [
  {
    id: 1,
    title: "Modul 1: Introduktion till AI – Vad är AI och hur fungerar det?",
    description: "Förstå de grundläggande koncepten inom AI och hur de tillämpas i utbildningssammanhang. Denna sektion ger en översikt över AI-teknologier och deras potentiella påverkan på undervisning och lärande.",
    moments: createStandardMoments(1),
  },
  {
    id: 2,
    title: "Modul 2: AI och pedagogik – Teori, forskning och evidens",
    description: "Utforska pedagogiska teorier och forskningsresultat kring användningen av AI i undervisning och lärande.",
    moments: createStandardMoments(2),
  },
  {
    id: 3,
    title: "Modul 3: AI för lärare – Verktyg och strategier i praktiken",
    description: "Lär dig praktiska verktyg och strategier för att implementera AI i ditt klassrum och din undervisning.",
    moments: createStandardMoments(3),
  },
  {
    id: 4,
    title: "Modul 4: Bedömning och AI",
    description: "Upptäck hur AI kan förändra bedömningsmetoder, göra dem mer effektiva, personliga och verkningsfulla.",
    moments: createStandardMoments(4),
  },
  {
    id: 5,
    title: "Modul 5: Etik och ansvarsfull användning",
    description: "Utforska de etiska övervägandena vid användning av AI i utbildning och lär dig riktlinjer för ansvarsfull implementering.",
    moments: createStandardMoments(5),
  },
  {
    id: 6,
    title: "Modul 6: Personaliserat lärande med AI",
    description: "Lär dig hur AI kan hjälpa till att skapa verkligt personaliserade lärandeupplevelser för elever med alla förmågor.",
    moments: createStandardMoments(6),
  },
  {
    id: 7,
    title: "Modul 7: Framtiden för utbildning och AI",
    description: "Blicka framåt mot hur AI kan komma att förändra utbildningen under de kommande åren och hur lärare kan förbereda sig.",
    moments: createStandardMoments(7),
  },
  {
    id: 8,
    title: "Modul 8: Praktisk implementering",
    description: "Sammanfatta allt med praktiska steg för att implementera AI i din specifika utbildningskontext.",
    moments: createStandardMoments(8),
  },
];

const SectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const sectionId = parseInt(id || "1");
  
  // Find the section data based on the ID
  const section = sectionData.find((s) => s.id === sectionId);
  
  useEffect(() => {
    // If section not found, redirect to home
    if (!section) {
      navigate("/");
    }
  }, [section, navigate]);

  if (!section) {
    return null;
  }

  return <CourseSection {...section} sectionId={sectionId} />;
};

export default SectionPage;
