export type CareerPath = {
  role: string;
  summary: string;
  progress: number;
  steps: {
    title: string;
    description: string;
  }[];
};

export const careerPaths: Record<string, CareerPath> = {
  "AI Engineer": {
    role: "AI Engineer",
    summary: "Build intelligent systems and turn models into reliable products.",
    progress: 72,
    steps: [
      {
        title: "Python Systems",
        description:
          "Strengthen production-ready Python and API foundations.",
      },
      {
        title: "ML Engineering",
        description:
          "Move from notebooks to reproducible ML workflows.",
      },
      {
        title: "LLM Applications",
        description:
          "Build, evaluate and ship useful AI-powered experiences.",
      },
    ],
  },

  "ML Engineer": {
    role: "ML Engineer",
    summary:
      "Turn machine-learning knowledge into production-ready systems.",
    progress: 64,
    steps: [
      {
        title: "Model Development",
        description:
          "Strengthen practical model-building and evaluation.",
      },
      {
        title: "ML Pipelines",
        description:
          "Learn repeatable data and model deployment workflows.",
      },
      {
        title: "Production ML",
        description:
          "Connect models to reliable applications and services.",
      },
    ],
  },

  "AI Product Engineer": {
    role: "AI Product Engineer",
    summary:
      "Combine product thinking, software engineering and AI capabilities.",
    progress: 68,
    steps: [
      {
        title: "Frontend Systems",
        description:
          "Build polished interfaces around intelligent products.",
      },
      {
        title: "APIs & Architecture",
        description:
          "Connect product experiences to scalable backend systems.",
      },
      {
        title: "AI Product Integration",
        description:
          "Turn AI capabilities into useful user-facing workflows.",
      },
    ],
  },
};