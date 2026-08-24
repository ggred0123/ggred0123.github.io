/**
 * Single source of truth for the whole site, mirroring main.tex.
 * Update this file when the CV changes; every section reads from here.
 */

export const profile = {
  name: "Youngmin Kim",
  role: "M.S. Student in Artificial Intelligence",
  affiliation: "Kim Jaechul Graduate School of AI, KAIST",
  lab: "BioImaging, Signal Processing & machine Learning Lab (BISPL)",
  labUrl: "https://bispl-website.github.io",
  advisor: "Jong Chul Ye",
  location: "Seoul, Korea",
  email: "zeromin03@kaist.ac.kr",
  github: "https://github.com/ggred0123",
  // Fill these in when you have them, or delete the line to hide the link.
  scholar: "",
  linkedin: "",
  twitter: "",
  cv: "/cv_YoungminKim.pdf",
  photo: "/face.jpg",
  bio: [
    "I am a first-year M.S. student at the Kim Jaechul Graduate School of AI, KAIST, advised by Prof. Jong Chul Ye at BISPL. I received my B.S. in Computer Science and Engineering from Korea University in August 2026, graduating early in 3.5 years.",
    "My research focuses on 3D vision and generative modeling, particularly their applications to robotics and embodied AI. I am broadly interested in geometry-aware visual representations and learning-based approaches to spatial perception and interaction.",],
  interests: [
    "3D Vision",
    "Robotics",
    "Vision-Language-Action (VLA)",
    "World Action Models (WAM)",
    "Diffusion Models",
    "Generative Modeling",
    "Medical Imaging",
  ],
};

export type NewsItem = { date: string; body: string };

export const news: NewsItem[] = [
  {
    date: "Sep. 2026",
    body: "Starting my M.S. at the Kim Jaechul Graduate School of AI, KAIST, joining BISPL under Prof. Jong Chul Ye.",
  },
  {
    date: "Aug. 2026",
    body: "Received my B.S. in Computer Science and Engineering from Korea University — early graduation in 3.5 years.",
  },
  {
    date: "2026",
    body: "CRePE: Curved Ray Expectation Positional Encoding for unified-camera-controlled video generation is on arXiv.",
  },
  {
    date: "2026",
    body: "Preprint on DMD-augmented unpaired neural Schrödinger bridges for ultra-low-field MRI enhancement is on arXiv.",
  },
  {
    date: "2026",
    body: "Our ultra-low-field brain MRI enhancement method was presented at the MICCAI ULF-EnC Challenge Workshop.",
  },
  {
    date: "Jan. 2025",
    body: "Received the Academic Excellence Award from Korea University.",
  },
];

export type Publication = {
  title: string;
  /** Teaser shown to the left of the entry. Sized so the browser can
      reserve the space before it loads. Source PNGs live in ../paper. */
  figure?: { src: string; width: number; height: number };
  authors: string[];
  equalContribution?: string[];
  venue: string;
  year: string;
  links?: { label: string; href: string }[];
};

/** Author name that gets bolded in the list. */
export const ME = "Youngmin Kim";

export const publications: Publication[] = [
  {
    title:
      "CRePE: Curved Ray Expectation Positional Encoding for Unified-Camera-Controlled Video Generation",
    figure: { src: "/paper/crepe.webp", width: 480, height: 308 },
    authors: ["Seonghyun Jin", "Youngmin Kim", "Sunwoo Park", "Jong Chul Ye"],
    equalContribution: ["Seonghyun Jin", "Youngmin Kim", "Sunwoo Park"],
    venue: "Under review",
    year: "2026",
    links: [{ label: "arXiv:2605.12938", href: "https://arxiv.org/abs/2605.12938" }],
  },
  {
    title:
      "DMD-augmented Unpaired Neural Schrödinger Bridge for Ultra-Low Field MRI Enhancement",
    figure: { src: "/paper/dmd.webp", width: 480, height: 244 },
    authors: [
      "Youngmin Kim",
      "Jaeyun Shin",
      "Jeongchan Kim",
      "Taehoon Lee",
      "Jaemin Kim",
      "Peter Hsu",
      "Jelle Veraart",
      "Jong Chul Ye",
    ],
    equalContribution: ["Youngmin Kim", "Jaeyun Shin", "Jeongchan Kim"],
    venue: "Under review",
    year: "2026",
    links: [{ label: "arXiv:2603.03769", href: "https://arxiv.org/abs/2603.03769" }],
  },
  {
    title:
      "Ultra-Low-Field Brain MRI Enhancement using Resfusion and Residual Artifact Suppression Network",
    figure: { src: "/paper/ultra.webp", width: 480, height: 268 },
    authors: [
      "Youngmin Kim",
      "Jeongchan Kim",
      "Taehoon Lee",
      "Jaeyun Shin",
      "Suhyeon Lee",
      "Jong Chul Ye",
    ],
    equalContribution: ["Youngmin Kim", "Jeongchan Kim", "Taehoon Lee", "Jaeyun Shin"],
    venue: "MICCAI ULF-EnC Challenge Workshop",
    year: "2026",
  },
  {
    title:
      "Performance Analysis of Kubernetes Traffic Scheduling Algorithms in Homogeneous and Heterogeneous Environments",
    figure: { src: "/paper/kuber.webp", width: 480, height: 351 },
    authors: ["Youngmin Kim", "Hogeon Park", "Heonchang Yu"],
    venue: "Korea Computer Congress (KCC)",
    year: "2025",
  },
  {
    title:
      "Improving Visual Question Answering via Prompt-Level Adaptation and Knowledge-Driven Fine-Tuning: Solution of Meta CRAG-MM Challenge 2025",
    authors: ["Youngmin Kim", "Wonyeong Jang", "Taehee Jeong"],
    venue: "Proceedings of the KDD Cup Workshop on CRAG-MM",
    year: "2025",
  },
];

export type Entry = {
  period: string;
  title: string;
  org: string;
  location: string;
  note?: string;
};

export const education: Entry[] = [
  {
    period: "Sep. 2026 – Present",
    title: "M.S. in Artificial Intelligence",
    org: "KAIST, Kim Jaechul Graduate School of AI",
    location: "Seoul, Korea",
    note: "Advisor: Jong Chul Ye · Concentration: 3D Vision and Robotics",
  },
  {
    period: "Feb. 2023 – Aug. 2026",
    title: "B.S. in Computer Science and Engineering",
    org: "Korea University",
    location: "Seoul, Korea",
    note: "GPA: 4.3 / 4.5 · Advisor: Jaehoon Lee · Early graduation (3.5 years)",
  },
];

export const experience: Entry[] = [
  {
    period: "Sep. 2026 – Present",
    title: "Graduate Researcher",
    org: "BISPL, KAIST",
    location: "Seoul, Korea",
    note: "Advisor: Jong Chul Ye",
  },
  {
    period: "Jun. 2025 – Aug. 2026",
    title: "Research Intern",
    org: "BISPL, KAIST",
    location: "Seoul, Korea",
    note: "Advisor: Jong Chul Ye",
  },
  {
    period: "Jun. 2024 – Jun. 2025",
    title: "Research Intern",
    org: "Distributed and Cloud Computing Lab, Korea University",
    location: "Seoul, Korea",
    note: "Network latency in Kubernetes.",
  },
];
