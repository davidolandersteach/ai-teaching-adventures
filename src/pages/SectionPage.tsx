import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseSection from "@/components/CourseSection";
import EmbedYoutube from "@/components/EmbedYoutube";
import EmbedGoogle from "@/components/EmbedGoogle";

// Create distinct moments for each section
const createSectionMoments = (sectionId: number) => {
  switch(sectionId) {
    case 1:
      return [
        {
          id: 1,
          title: "Grundläggande AI-koncept",
          content: (
            <div>
              <p className="mb-4">
                I detta moment utforskar vi grundläggande AI-koncept och hur de kan appliceras i utbildningssammanhang.
              </p>
              <EmbedYoutube videoId="dQw4w9WgXcQ" title="Introduktion till AI i utbildning" />
              <div className="mt-4">
                <h4 className="font-medium mb-2">Reflektionsfrågor</h4>
                <ul className="list-disc pl-5">
                  <li>Hur kan AI förändra hur vi undervisar?</li>
                  <li>Vilka är de främsta möjligheterna med AI i klassrummet?</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "Maskininlärning och algoritmer",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Maskininlärning i pedagogisk kontext</h3>
              <p className="mb-4">
                Maskininlärning är en central del av AI som möjliggör system som kan lära av data och förbättras över tid.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <h4 className="font-medium mb-2">Praktisk övning</h4>
                <p>Testa ett enklare AI-verktyg och reflektera över hur det skulle kunna användas i din undervisning.</p>
              </div>
            </div>
          ),
        },
        {
          id: 3,
          title: "AI-verktyg för utbildning",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Genomgång av verktyg</h3>
              <p className="mb-4">I detta moment ska vi bekanta oss med olika AI-verktyg för utbildning.</p>
              <ol className="list-decimal pl-5 my-3">
                <li>Intelligent tutoring systems</li>
                <li>Automatiserad bedömning</li>
                <li>Adaptivt lärande</li>
                <li>Chatbots för elevstöd</li>
              </ol>
            </div>
          ),
        },
        {
          id: 4,
          title: "Reflektion och framtidsplanering",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Diskussion om framtiden</h3>
              <p className="mb-4">
                Reflektera över hur AI kan förändra din undervisningspraktik på kort och lång sikt.
              </p>
              <div className="mt-4 bg-education-50 p-4 rounded-lg border border-education-100">
                <h4 className="font-medium text-education-800 mb-2">Din plan</h4>
                <p>Skapa en enkel handlingsplan för hur du skulle kunna integrera AI i din undervisning.</p>
              </div>
            </div>
          ),
        },
      ];
    
    case 2:
      return [
        {
          id: 1,
          title: "Pedagogiska teorier och AI",
          content: (
            <div>
              <p className="mb-4">
                Hur relaterar AI till befintliga pedagogiska teorier och metoder? Vi utforskar kopplingen mellan AI och pedagogik.
              </p>
              <h3 className="text-xl font-medium mb-2">Centrala teorier</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Konstruktivism</li>
                <li>Sociokulturell teori</li>
                <li>Konnektivism</li>
                <li>Behaviorism</li>
              </ul>
              <EmbedYoutube videoId="dQw4w9WgXcQ" title="AI och pedagogiska teorier" />
            </div>
          ),
        },
        {
          id: 2,
          title: "Forskningsbaserad AI-användning",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Vad säger forskningen?</h3>
              <p className="mb-4">
                Vi undersöker aktuell forskning om AI i utbildningssammanhang och vilken evidens som finns.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <h4 className="font-medium mb-2">Forskningsstudie</h4>
                <p>Genomgång av meta-studier om AI och lärande.</p>
              </div>
            </div>
          ),
        },
        {
          id: 3,
          title: "Praktiska exempel",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">AI i praktiken</h3>
              <p className="mb-4">Flera skolor och lärare använder redan AI med goda resultat. Här är några exempel:</p>
              <ol className="list-decimal pl-5 my-3">
                <li>Carnegie Learning och Mika</li>
                <li>DreamBox Learning</li>
                <li>AI-stödda lärplattformar</li>
              </ol>
            </div>
          ),
        },
        {
          id: 4,
          title: "Kritiska perspektiv",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Kritisk granskning</h3>
              <p className="mb-4">
                Det är viktigt att kritiskt granska både forskning och kommersiella påståenden om AI:s effekter i utbildningen.
              </p>
              <div className="mt-4 bg-education-50 p-4 rounded-lg border border-education-100">
                <h4 className="font-medium text-education-800 mb-2">Gruppdiskussion</h4>
                <p>Diskutera styrkor och svagheter med befintlig forskning om AI i utbildning.</p>
              </div>
            </div>
          ),
        },
      ];
    
    case 3:
      return [
        {
          id: 1,
          title: "AI-verktyg för lärare",
          content: (
            <div>
              <p className="mb-4">
                En översikt över användbara AI-verktyg specifikt utvecklade för lärare.
              </p>
              <h3 className="text-xl font-medium mb-2">Praktiska verktyg</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Verktyg för planering och administration</li>
                <li>AI-assistenter för lärare</li>
                <li>Verktyg för innehållsskapande</li>
                <li>Bedömningsverktyg</li>
              </ul>
              <EmbedYoutube videoId="dQw4w9WgXcQ" title="AI-verktyg för lärare" />
            </div>
          ),
        },
        {
          id: 2,
          title: "Strategier för implementering",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Implementera AI i klassrummet</h3>
              <p className="mb-4">
                Praktiska strategier för att integrera AI i undervisningen på ett meningsfullt sätt.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <h4 className="font-medium mb-2">Projektplanering</h4>
                <p>Utveckla en plan för hur du kan implementera ett AI-verktyg i en specifik lektion.</p>
              </div>
            </div>
          ),
        },
        {
          id: 3,
          title: "Hantera utmaningar",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Utmaningar och lösningar</h3>
              <p className="mb-4">Vi diskuterar vanliga utmaningar vid implementering av AI och hur dessa kan hanteras:</p>
              <ol className="list-decimal pl-5 my-3">
                <li>Tekniska utmaningar</li>
                <li>Kompetensutveckling</li>
                <li>Etiska överväganden</li>
                <li>Förankring hos kollegor och ledning</li>
              </ol>
            </div>
          ),
        },
        {
          id: 4,
          title: "Delning och samarbete",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Samarbete kring AI</h3>
              <p className="mb-4">
                Hur kan lärare samarbeta för att utveckla sin användning av AI i undervisningen?
              </p>
              <div className="mt-4 bg-education-50 p-4 rounded-lg border border-education-100">
                <h4 className="font-medium text-education-800 mb-2">Kollegialt lärande</h4>
                <p>Skapa en plan för hur du kan dela dina erfarenheter med kollegor.</p>
              </div>
            </div>
          ),
        },
      ];

    // Default moments for other sections (4-8)
    default:
      return [
        {
          id: 1,
          title: `Moment A - Sektion ${sectionId}`,
          content: (
            <div>
              <p className="mb-4">
                Innehåll för sektion {sectionId}, moment A. Detta kommer att anpassas med specifikt innehåll.
              </p>
              <EmbedYoutube videoId="dQw4w9WgXcQ" title={`Video för Sektion ${sectionId}, Moment A`} />
            </div>
          ),
        },
        {
          id: 2,
          title: `Moment B - Sektion ${sectionId}`,
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Diskussionsfrågor</h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Hur kan innehållet från moment A appliceras i din undervisning?</li>
                <li>Vilka utmaningar ser du med implementeringen?</li>
                <li>Vilka möjligheter skapar detta för dina elever?</li>
              </ul>
            </div>
          ),
        },
        {
          id: 3,
          title: `Moment C - Sektion ${sectionId}`,
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Praktisk aktivitet</h3>
              <p className="mb-4">En praktisk aktivitet relaterad till sektion {sectionId}.</p>
            </div>
          ),
        },
        {
          id: 4,
          title: `Moment D - Sektion ${sectionId}`,
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Reflektion och uppföljning</h3>
              <p className="mb-4">Reflektera över lärande och framsteg i sektion {sectionId}.</p>
            </div>
          ),
        },
      ];
  }
};

// Sample content for the sections
const sectionData = [
  {
    id: 1,
    title: "Introduktion till AI – Vad är AI och hur fungerar det?",
    description: "Förstå de grundläggande koncepten inom AI och hur de tillämpas i utbildningssammanhang. Denna sektion ger en översikt över AI-teknologier och deras potentiella påverkan på undervisning och lärande.",
    moments: [], // Will be populated dynamically
  },
  {
    id: 2,
    title: "AI och pedagogik – Teori, forskning och evidens",
    description: "Utforska pedagogiska teorier och forskningsresultat kring användningen av AI i undervisning och lärande.",
    moments: [], // Will be populated dynamically
  },
  {
    id: 3,
    title: "AI för lärare – Verktyg och strategier i praktiken",
    description: "Lär dig praktiska verktyg och strategier för att implementera AI i ditt klassrum och din undervisning.",
    moments: [], // Will be populated dynamically
  },
  {
    id: 4,
    title: "AI för elever - Lärande, skapande och stöd",
    description: "Upptäck hur AI kan stödja elevers lärande, skapande och ge individualiserat stöd.",
    moments: [], // Will be populated dynamically
  },
  {
    id: 5,
    title: "Etik och ansvarsfull användning",
    description: "Utforska de etiska övervägandena vid användning av AI i utbildning och lär dig riktlinjer för ansvarsfull implementering.",
    moments: [], // Will be populated dynamically
  },
  {
    id: 6,
    title: "Differentierat lärande",
    description: "Lär dig hur AI kan hjälpa till att skapa verkligt personaliserade lärandeupplevelser för elever med alla förmågor.",
    moments: [], // Will be populated dynamically
  },
  {
    id: 7,
    title: "AI och källkritik",
    description: "Blicka framåt mot hur AI kan komma att förändra utbildningen under de kommande åren och hur lärare kan förbereda sig.",
    moments: [], // Will be populated dynamically
  },
  {
    id: 8,
    title: "Utvärdering, reflektion och framtid",
    description: "Sammanfatta allt med praktiska steg för att implementera AI i din specifika utbildningskontext.",
    moments: [], // Will be populated dynamically
  },
];

const SectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const sectionId = parseInt(id || "1");
  
  // Find the section data based on the ID and generate specific moments
  let section = sectionData.find((s) => s.id === sectionId);
  
  useEffect(() => {
    // If section not found, redirect to home
    if (!section) {
      navigate("/");
      return;
    }
    
    // Generate specific moments for this section
    section.moments = createSectionMoments(sectionId);
  }, [section, sectionId, navigate]);

  if (!section) {
    return null;
  }

  return <CourseSection {...section} sectionId={sectionId} />;
};

export default SectionPage;
