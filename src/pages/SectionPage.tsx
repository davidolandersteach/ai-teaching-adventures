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
          title: "Moment A: Individuell förberedelse (ca 60 minuter)",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Syfte</h3>
              <p className="mb-4">
                Att bygga en individuell kunskapsbas och reflektera över egna erfarenheter och tankar kring AI inför den kollegiala diskussionen.
              </p>
              
              <h4 className="text-lg font-medium mb-2">Genomförande</h4>
              <p className="mb-4">Varje deltagare tar del av följande material:</p>
              
              <ol className="list-decimal pl-5 mb-4 space-y-4">
                <li>
                  <strong>Läs grundläggande artikel:</strong> "Vad är AI?" från Internetstiftelsen (Internetkunskap). 
                  Fokusera på definitionen, vardagsexempel och den grundläggande idén om maskininlärning.
                  <div className="mt-2">
                    <a href="https://internetkunskap.se/artiklar/vad-ar-ai/" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline">
                      Länk: Vad är AI för något? | Internetkunskap
                    </a>
                  </div>
                </li>
                <li>
                  <strong>Läs Skolverkets råd:</strong> "Råd om AI, Chat GPT och liknande verktyg"
                  <div className="mt-2">
                    <a href="https://www.skolverket.se/rad-om-ai-chat-gpt-och-liknande-verktyg" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline">
                      Länk: Råd om AI, Chat GPT och liknande verktyg - Skolverket
                    </a>
                  </div>
                </li>
                <li>
                  <strong>Se kort introduktionsvideo:</strong> "What is AI?"
                  <div className="mt-4">
                    <EmbedYoutube videoId="dQw4w9WgXcQ" title="What is Artificial Intelligence Exactly?" />
                  </div>
                </li>
                <li>
                  <strong>Frivillig fördjupning:</strong> "Generativ AI – en del av digital kompetens"
                  <div className="mt-2">
                    <a href="https://preparus.se/generativ-ai-digital-kompetens" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline">
                      Länk: Generativ AI - en del av digital kompetens · Preparus
                    </a>
                  </div>
                </li>
              </ol>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                <h4 className="font-medium text-blue-800 mb-2">Reflektionsfrågor att ta med till Moment B:</h4>
                <ul className="list-disc pl-5 space-y-2 text-blue-900">
                  <li>Vad var den viktigaste eller mest överraskande insikten du fick från materialet?</li>
                  <li>Hur skulle du förklara AI på en enkel nivå för en kollega inom din skolform?</li>
                  <li>Vilket exempel på AI i vardagen tror du är mest relevant att diskutera med dina elever?</li>
                  <li>Vilken direkt koppling ser du mellan AI och målet om digital kompetens i ditt arbete?</li>
                  <li>Vilken är din största fråga eller fundering kring AI i skolan just nu?</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "Moment B: Kollegial diskussion och planering (ca 90 minuter)",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Syfte</h3>
              <p className="mb-4">
                Att dela insikter från Moment A, bygga en gemensam förståelse inom kollegiet och planera en konkret, 
                åldersanpassad aktivitet att genomföra med eleverna.
              </p>

              <h4 className="text-lg font-medium mb-2">Agenda</h4>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium">1. Delningsrunda (ca 20 min)</h5>
                  <p>Varje deltagare delar kortfattat sin viktigaste insikt och sin enkla AI-förklaring från Moment A.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium">2. Gemensam definition och relevans (ca 20 min)</h5>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Diskutera: Hur kan vi gemensamt definiera AI för hela skolan?</li>
                    <li>Identifiera gemensamma vardagsexempel på AI</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium">3. Koppling till styrdokument och uppdrag (ca 20 min)</h5>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Sammanfatta: AI:s koppling till digital kompetens</li>
                    <li>Diskutera: Vikten av grundläggande AI-förståelse</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium">4. Planering av Moment C (ca 30 min)</h5>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Välj aktivitet</li>
                    <li>Konkretisera genomförandet</li>
                    <li>Formulera syfte för eleverna</li>
                    <li>Planera observation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Förslag på aktiviteter:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-green-700">Förskola/Tidiga år</h5>
                    <ul className="list-disc pl-5">
                      <li>Sorteringslek "med AI"</li>
                      <li>Robotinstruktioner</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-700">Grundskola (låg/mellan)</h5>
                    <ul className="list-disc pl-5">
                      <li>Quick, Draw! (Google)</li>
                      <li>Teachable Machine</li>
                      <li>Enkel chatbot-interaktion</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-700">Högstadium/Gymnasium</h5>
                    <ul className="list-disc pl-5">
                      <li>Analysera rekommendationssystem</li>
                      <li>Granska AI-genererad text/bild</li>
                      <li>AI i vardagsverktyg</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 3,
          title: "Moment C: Praktisk tillämpning i klassrummet",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Syfte</h3>
              <p className="mb-4">
                Att genomföra den planerade aktiviteten för att ge eleverna en första, åldersanpassad inblick i AI 
                och samla erfarenheter till Moment D.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">Att tänka på under genomförandet:</h4>
                <ul className="list-disc pl-5 space-y-2 text-yellow-900">
                  <li><strong>Tydlig introduktion:</strong> Förklara syftet på elevernas nivå</li>
                  <li><strong>Aktivt deltagande:</strong> Se till att eleverna är aktiva</li>
                  <li><strong>Fokus på konceptet:</strong> Lyft fram grundläggande AI-koncept</li>
                  <li><strong>Observera och dokumentera:</strong> Notera reaktioner och frågor</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 4,
          title: "Moment D: Gemensam reflektion och erfarenhetsutbyte (ca 60 minuter)",
          content: (
            <div>
              <h3 className="text-xl font-medium mb-3">Syfte</h3>
              <p className="mb-4">
                Att dela och analysera erfarenheterna från Moment C, koppla tillbaka till lärandemålen och 
                identifiera nästa steg.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-medium">1. Erfarenhetsutbyte (ca 20 min)</h5>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Vilken aktivitet genomfördes?</li>
                    <li>Hur reagerade eleverna?</li>
                    <li>Vad verkade eleverna förstå/inte förstå?</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-medium">2. Analys och koppling till lärandemål (ca 20 min)</h5>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Hur upplevde eleverna den första kontakten med AI-konceptet?</li>
                    <li>Vilka mönster ser vi i elevernas reaktioner?</li>
                    <li>Hur väl lyckades aktiviteterna?</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-medium">3. Lärdomar och framåtblick (ca 20 min)</h5>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Vad fungerade bra? (Framgångsfaktorer)</li>
                    <li>Vad var utmanande? (Utvecklingsområden)</li>
                    <li>Vilket behov av fortsatt lärande finns?</li>
                    <li>Hur tar vi nästa steg?</li>
                  </ul>
                </div>
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
    description: `Denna första modul syftar till att skapa en gemensam grundförståelse för vad artificiell intelligens (AI) är, 
    hur det fungerar på en grundläggande nivå, och varför det är relevant för alla som arbetar i skolan – från förskola till 
    gymnasium. Vi utforskar begreppet AI, dess koppling till skolans styrdokument (särskilt digital kompetens) och inleder en 
    diskussion om möjligheter och utmaningar i vår pedagogiska vardag.

    Vetenskaplig och pedagogisk förankring: Modulen bygger på Skolverkets rekommendationer kring AI och digital kompetens, 
    insikter från forskning om AI i utbildning (t.ex. Kjällander m.fl.) samt etablerade källor som Internetstiftelsen. 
    Upplägget främjar aktivt lärande och reflektion, vilket är centralt för professionell utveckling.

    Lärandemål:
    - Förklara grundläggande: Med egna ord beskriva vad AI är och ge exempel på AI i vardagen.
    - Koppla till styrdokument: Relatera AI till mål om digital kompetens och kritiskt tänkande.
    - Identifiera relevans: Resonera kring AI:s betydelse för yrkesroll och lärande.
    - Inleda utforskande: Känna sig tryggare i att diskutera AI-relaterade frågor.`,
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
