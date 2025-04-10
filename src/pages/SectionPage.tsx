
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseSection from "@/components/CourseSection";
import EmbedYoutube from "@/components/EmbedYoutube";
import EmbedGoogle from "@/components/EmbedGoogle";

// Sample content for the sections
const sectionData = [
  {
    id: 1,
    title: "Modul 1: Introduktion till AI – Vad är AI och hur fungerar det?",
    description: "Förstå de grundläggande koncepten inom AI och hur de tillämpas i utbildningssammanhang. Denna sektion ger en översikt över AI-teknologier och deras potentiella påverkan på undervisning och lärande.",
    moments: [
      {
        id: 1,
        title: "Moment A",
        content: (
          <div>
            <p className="mb-4">
              Artificiell Intelligens (AI) avser simulering av mänsklig intelligens i maskiner som är programmerade för att tänka och lära sig som människor. Den här modulen ger en översikt över AI-koncept som är relevanta för utbildning.
            </p>
            <h3 className="text-xl font-medium mb-2">Nyckelkoncept</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Maskininlärning: Hur datorer lär sig från data</li>
              <li>Naturlig språkbehandling: Hur AI förstår mänskligt språk</li>
              <li>Datorseende: Hur AI tolkar visuell information</li>
              <li>AI-etik: Viktiga överväganden vid användning av AI</li>
            </ul>
            <EmbedYoutube videoId="5NgNicANyqM" title="Vad är AI inom utbildning?" />
          </div>
        ),
      },
      {
        id: 2,
        title: "Moment B",
        content: (
          <div>
            <p className="mb-4">
              Utbildningsteknologin har utvecklats betydligt genom decennierna, från enkla undervisningsmaskiner till sofistikerade AI-drivna inlärningssystem. Detta moment spårar den utvecklingen och placerar AI i sitt historiska sammanhang.
            </p>
            <h3 className="text-xl font-medium mb-2">Tidslinje</h3>
            <ul className="timeline pl-5 mb-4">
              <li className="mb-3">
                <strong>1960-talet:</strong> Datorstödd undervisning
              </li>
              <li className="mb-3">
                <strong>1980-talet:</strong> Persondatorer kommer in i klassrummen
              </li>
              <li className="mb-3">
                <strong>2000-talet:</strong> Online-lärande och LMS-system
              </li>
              <li className="mb-3">
                <strong>2010-talet:</strong> Adaptiva inlärningssystem
              </li>
              <li>
                <strong>2020-talet:</strong> AI-driven personaliserad utbildning
              </li>
            </ul>
            <EmbedGoogle 
              type="slides" 
              documentId="1VcwlEKmGtko8dDE8RYgzMz2Tff9uZ4dwIhtg0-DnIAA" 
              title="Utvecklingen av EdTech" 
            />
          </div>
        ),
      },
      {
        id: 3,
        title: "Moment C",
        content: (
          <div>
            <p className="mb-4">
              AI används redan på olika sätt inom utbildning. Detta moment utforskar aktuella tillämpningar och deras påverkan på undervisning och lärande.
            </p>
            <h3 className="text-xl font-medium mb-2">Aktuella tillämpningar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Personaliserat lärande</h4>
                <p className="text-sm text-gray-600">Anpassning av innehåll efter elevernas behov</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Automatiserad bedömning</h4>
                <p className="text-sm text-gray-600">Sparar lärartid vid bedömningar</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Läranalytik</h4>
                <p className="text-sm text-gray-600">Insikter om elevers prestationer</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Administrativ automatisering</h4>
                <p className="text-sm text-gray-600">Effektivisering av skolans verksamhet</p>
              </div>
            </div>
            <EmbedYoutube videoId="y-gwXRd6zrA" title="AI-tillämpningar i dagens klassrum" />
          </div>
        ),
      },
      {
        id: 4,
        title: "Moment D",
        content: (
          <div>
            <p className="mb-4">
              När AI blir allt vanligare inom utbildning behöver lärare utveckla nya färdigheter och tankesätt. Detta moment hjälper pedagoger att förbereda sig för en AI-förstärkt undervisningsmiljö.
            </p>
            <h3 className="text-xl font-medium mb-2">Väsentliga färdigheter för lärare</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Digital kompetens och AI-medvetenhet</li>
              <li>Kritisk utvärdering av AI-verktyg</li>
              <li>Utformning av AI-förstärkta lektioner</li>
              <li>Datatolkning och beslutsfattande</li>
              <li>Balansering av AI-assistans med mänsklig touch</li>
            </ul>
            <EmbedGoogle 
              type="doc" 
              documentId="1w6OBTqisNYBVDZ-8LEzJUZeY3cJh1HbuDDVZzNgsFog" 
              title="Lärarguide till AI-beredskap" 
            />
          </div>
        ),
      },
    ],
  },
  // Other sections would be defined similarly with their own moments
  // For brevity, we'll just define the first section fully and provide 
  // placeholders for the rest
  {
    id: 2,
    title: "Modul 2: AI-verktyg för lärare",
    description: "Utforska praktiska AI-verktyg som lärare kan använda för att förbättra undervisning, spara tid och förbättra elevresultat.",
    moments: [
      {
        id: 1,
        title: "Moment A",
        content: <p>Innehåll om AI-verktyg för att skapa utbildningsmaterial...</p>,
      },
      {
        id: 2,
        title: "Moment B",
        content: <p>Innehåll om AI-drivna bedömningsverktyg...</p>,
      },
      {
        id: 3,
        title: "Moment C",
        content: <p>Innehåll om AI för klassrumshantering...</p>,
      },
      {
        id: 4,
        title: "Moment D",
        content: <p>Innehåll om AI-verktyg som förbättrar tillgänglighet...</p>,
      },
    ],
  },
  // Placeholder data for the remaining sections
  {
    id: 3,
    title: "Modul 3: Strategier för klassrumsintegration",
    description: "Lär dig effektiva metoder för att integrera AI-verktyg och tekniker i dina dagliga klassrumsaktiviteter.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Moment ${String.fromCharCode(65 + idx)}`,
      content: <p>Innehåll för detta moment...</p>,
    })),
  },
  {
    id: 4,
    title: "Modul 4: Bedömning och AI",
    description: "Upptäck hur AI kan förändra bedömningsmetoder, göra dem mer effektiva, personliga och verkningsfulla.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Moment ${String.fromCharCode(65 + idx)}`,
      content: <p>Innehåll för detta moment...</p>,
    })),
  },
  {
    id: 5,
    title: "Modul 5: Etik och ansvarsfull användning",
    description: "Utforska de etiska övervägandena vid användning av AI i utbildning och lär dig riktlinjer för ansvarsfull implementering.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Moment ${String.fromCharCode(65 + idx)}`,
      content: <p>Innehåll för detta moment...</p>,
    })),
  },
  {
    id: 6,
    title: "Modul 6: Personaliserat lärande med AI",
    description: "Lär dig hur AI kan hjälpa till att skapa verkligt personaliserade lärandeupplevelser för elever med alla förmågor.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Moment ${String.fromCharCode(65 + idx)}`,
      content: <p>Innehåll för detta moment...</p>,
    })),
  },
  {
    id: 7,
    title: "Modul 7: Framtiden för utbildning och AI",
    description: "Blicka framåt mot hur AI kan komma att förändra utbildningen under de kommande åren och hur lärare kan förbereda sig.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Moment ${String.fromCharCode(65 + idx)}`,
      content: <p>Innehåll för detta moment...</p>,
    })),
  },
  {
    id: 8,
    title: "Modul 8: Praktisk implementering",
    description: "Sammanfatta allt med praktiska steg för att implementera AI i din specifika utbildningskontext.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Moment ${String.fromCharCode(65 + idx)}`,
      content: <p>Innehåll för detta moment...</p>,
    })),
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
