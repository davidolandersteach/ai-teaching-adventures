import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseSection from "@/components/CourseSection";
import EmbedYoutube from "@/components/EmbedYoutube";
import EmbedGoogle from "@/components/EmbedGoogle";

// Sample content for the sections
const sectionData = [
  {
    id: 1,
    title: Modul 1: Introduktion till AI – Vad är AI och hur fungerar det?",
    description: "Understand the foundational concepts of AI and how they apply to educational contexts. This section provides an overview of AI technologies and their potential impact on teaching and learning.",
    moments: [
      {
        id: 1,
        title: "Understanding AI Fundamentals",
        content: (
          <div>
            <p className="mb-4">
              Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. This module provides an overview of AI concepts that are relevant to education.
            </p>
            <h3 className="text-xl font-medium mb-2">Key Concepts</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Machine Learning: How computers learn from data</li>
              <li>Natural Language Processing: How AI understands human language</li>
              <li>Computer Vision: How AI interprets visual information</li>
              <li>AI Ethics: Important considerations when using AI</li>
            </ul>
            <EmbedYoutube videoId="5NgNicANyqM" title="What is AI in Education?" />
          </div>
        ),
      },
      {
        id: 2,
        title: "Modul 2: AI och pedagogik – Teori, forskning och evidens",
        content: (
          <div>
            <p className="mb-4">
              Educational technology has evolved significantly over the decades, from simple teaching machines to sophisticated AI-powered learning systems. This moment traces that evolution and places AI in its historical context.
            </p>
            <h3 className="text-xl font-medium mb-2">Timeline</h3>
            <ul className="timeline pl-5 mb-4">
              <li className="mb-3">
                <strong>1960s:</strong> Computer-Assisted Instruction
              </li>
              <li className="mb-3">
                <strong>1980s:</strong> Personal computers enter classrooms
              </li>
              <li className="mb-3">
                <strong>2000s:</strong> Online learning and LMS systems
              </li>
              <li className="mb-3">
                <strong>2010s:</strong> Adaptive learning systems
              </li>
              <li>
                <strong>2020s:</strong> AI-powered personalized education
              </li>
            </ul>
            <EmbedGoogle 
              type="slides" 
              documentId="1VcwlEKmGtko8dDE8RYgzMz2Tff9uZ4dwIhtg0-DnIAA" 
              title="The Evolution of EdTech"
            />
          </div>
        ),
      },
      {
        id: 3,
        title: "Modul 3: AI för lärare – Verktyg och strategier i praktiken",
        content: (
          <div>
            <p className="mb-4">
              AI is already being used in various ways in education. This moment explores current applications and their impact on teaching and learning.
            </p>
            <h3 className="text-xl font-medium mb-2">Current Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Personalized Learning</h4>
                <p className="text-sm text-gray-600">Adapting content to student needs</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Automated Grading</h4>
                <p className="text-sm text-gray-600">Saving teacher time on assessments</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Learning Analytics</h4>
                <p className="text-sm text-gray-600">Insights into student performance</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium">Administrative Automation</h4>
                <p className="text-sm text-gray-600">Streamlining school operations</p>
              </div>
            </div>
            <EmbedYoutube videoId="y-gwXRd6zrA" title="AI Applications in Today's Classroom" />
          </div>
        ),
      },
      {
        id: 4,
        title: "Preparing for AI-Enhanced Teaching",
        content: (
          <div>
            <p className="mb-4">
              As AI becomes more prevalent in education, teachers need to develop new skills and mindsets. This moment helps educators prepare for an AI-enhanced teaching environment.
            </p>
            <h3 className="text-xl font-medium mb-2">Essential Skills for Teachers</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Digital literacy and AI awareness</li>
              <li>Critical evaluation of AI tools</li>
              <li>Designing AI-enhanced lessons</li>
              <li>Data interpretation and decision-making</li>
              <li>Balancing AI assistance with human touch</li>
            </ul>
            <EmbedGoogle 
              type="doc" 
              documentId="1w6OBTqisNYBVDZ-8LEzJUZeY3cJh1HbuDDVZzNgsFog" 
              title="Teacher's Guide to AI Readiness"
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
    title: "AI Tools for Teachers",
    description: "Explore practical AI tools that teachers can use to enhance instruction, save time, and improve student outcomes.",
    moments: [
      {
        id: 1,
        title: "Content Creation Tools",
        content: <p>Content about AI tools for creating educational materials...</p>,
      },
      {
        id: 2,
        title: "Assessment and Feedback Tools",
        content: <p>Content about AI-powered assessment tools...</p>,
      },
      {
        id: 3,
        title: "Classroom Management AI",
        content: <p>Content about AI for classroom management...</p>,
      },
      {
        id: 4,
        title: "Accessibility and Inclusion Tools",
        content: <p>Content about AI tools that enhance accessibility...</p>,
      },
    ],
  },
  // Placeholder data for the remaining sections
  {
    id: 3,
    title: "Classroom Integration Strategies",
    description: "Learn effective methods for integrating AI tools and techniques into your daily classroom activities.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Strategy ${idx + 1}`,
      content: <p>Content for this moment...</p>,
    })),
  },
  {
    id: 4,
    title: "Assessment and AI",
    description: "Discover how AI can transform assessment practices, making them more efficient, personalized, and effective.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Assessment Topic ${idx + 1}`,
      content: <p>Content for this moment...</p>,
    })),
  },
  {
    id: 5,
    title: "Ethics and Responsible Use",
    description: "Explore the ethical considerations of using AI in education and learn guidelines for responsible implementation.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Ethics Topic ${idx + 1}`,
      content: <p>Content for this moment...</p>,
    })),
  },
  {
    id: 6,
    title: "Personalized Learning with AI",
    description: "Learn how AI can help create truly personalized learning experiences for students of all abilities.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Personalization Topic ${idx + 1}`,
      content: <p>Content for this moment...</p>,
    })),
  },
  {
    id: 7,
    title: "Future of Education and AI",
    description: "Look ahead to how AI might transform education in the coming years and how teachers can prepare.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Future Topic ${idx + 1}`,
      content: <p>Content for this moment...</p>,
    })),
  },
  {
    id: 8,
    title: "Practical Implementation",
    description: "Bring it all together with practical steps for implementing AI in your specific educational context.",
    moments: Array(4).fill(null).map((_, idx) => ({
      id: idx + 1,
      title: `Implementation Step ${idx + 1}`,
      content: <p>Content for this moment...</p>,
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
