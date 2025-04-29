
// Color theme mapping for each section
export const getSectionColorTheme = (sectionId: number) => {
  const themes = {
    1: {
      primary: "text-blue-700",
      secondary: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200",
      hover: "hover:bg-blue-50",
      accent: "bg-blue-600",
      light: "text-blue-500",
    },
    2: {
      primary: "text-purple-700",
      secondary: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200",
      hover: "hover:bg-purple-50",
      accent: "bg-purple-600",
      light: "text-purple-500",
    },
    3: {
      primary: "text-green-700",
      secondary: "text-green-600",
      bg: "bg-green-100",
      border: "border-green-200",
      hover: "hover:bg-green-50",
      accent: "bg-green-600",
      light: "text-green-500",
    },
    4: {
      primary: "text-orange-700",
      secondary: "text-orange-600",
      bg: "bg-orange-100",
      border: "border-orange-200",
      hover: "hover:bg-orange-50",
      accent: "bg-orange-600",
      light: "text-orange-500",
    },
    5: {
      primary: "text-red-700",
      secondary: "text-red-600",
      bg: "bg-red-100",
      border: "border-red-200",
      hover: "hover:bg-red-50",
      accent: "bg-red-600",
      light: "text-red-500",
    },
    6: {
      primary: "text-teal-700",
      secondary: "text-teal-600",
      bg: "bg-teal-100",
      border: "border-teal-200",
      hover: "hover:bg-teal-50",
      accent: "bg-teal-600",
      light: "text-teal-500",
    },
    7: {
      primary: "text-indigo-700",
      secondary: "text-indigo-600",
      bg: "bg-indigo-100",
      border: "border-indigo-200",
      hover: "hover:bg-indigo-50",
      accent: "bg-indigo-600",
      light: "text-indigo-500",
    },
    8: {
      primary: "text-pink-700",
      secondary: "text-pink-600",
      bg: "bg-pink-100",
      border: "border-pink-200",
      hover: "hover:bg-pink-50",
      accent: "bg-pink-600",
      light: "text-pink-500",
    },
  };

  return themes[sectionId as keyof typeof themes] || themes[1];
};

// Module image mapping
export const getModuleImage = (sectionId: number) => {
  const images = {
    1: "/lovable-uploads/796c8632-5a2e-4bc0-bb56-0cbe324f94aa.png",
    2: "/lovable-uploads/99a70897-68c4-4af1-8876-0bb4044025b0.png",
    3: "/lovable-uploads/59141ba1-7dcd-4147-8da9-6e01cb989e65.png",
    4: "/lovable-uploads/db80bfcb-ab84-49d5-8916-6da4bf2fcd4d.png",
  };

  return images[sectionId as keyof typeof images] || null;
};
