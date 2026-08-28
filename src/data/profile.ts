/**
 * Single source of truth for the whole site, mirroring ../main.tex.
 * Update this file when the CV changes; every page reads from here.
 */

export const profile = {
  name: "Youngmin Kim",
  initials: "YK",
  role: "M.S. Student · KAIST AI",
  tagline: "Geometry-aware AI for embodied agents.",
  eyebrow: "KAIST AI · 3D Vision · Generative Modeling · Robotics",
  affiliation: "Kim Jaechul Graduate School of AI, KAIST",
  lab: "BioImaging, Signal Processing & machine Learning Lab (BISPL)",
  labShort: "BISPL · Prof. Jong Chul Ye",
  labUrl: "https://bispl-website.github.io",
  advisor: "Jong Chul Ye",
  location: "Seoul, Korea",
  email: "zeromin03@kaist.ac.kr",
  github: "https://github.com/ggred0123",
  // Fill these in when you have them, or leave empty to hide the link.
  scholar: "",
  linkedin: "",
  cv: "/cv_YoungminKim.pdf",
  // Visitor counter (GoatCounter, free): sign up at https://www.goatcounter.com,
  // pick a code (e.g. "ggred0123") and put it here. Empty = counter hidden.
  goatcounter: "",
  photo: "/face.jpg",
  focus: "3D Vision & Robotics",
  summary:
    "Building geometry-aware visual representations and generative models for spatial perception, interaction, and medical imaging.",
  heroText:
    "I am an M.S. student at KAIST AI (BISPL) advised by Prof. Jong Chul Ye. I work on 3D vision and generative modeling — camera-controlled video generation, diffusion-based image enhancement, and vision-language-action models — with an eye toward robotics and embodied AI.",
  bio: [
    "I am a first-year M.S. student at the Kim Jaechul Graduate School of AI, KAIST, advised by Prof. Jong Chul Ye at BISPL. I received my B.S. in Computer Science and Engineering from Korea University in August 2026, graduating early in 3.5 years.",
    "Before joining BISPL full-time, I interned there for over a year working on ultra-low-field MRI enhancement and camera-controlled video generation, and earlier studied Kubernetes scheduling at the Distributed and Cloud Computing Lab at Korea University.",
  ],
  interests: [
    "3D Vision",
    "Robotics",
    "Vision-Language-Action",
    "World Action Models",
    "Diffusion Models",
    "Medical Imaging",
  ],
};

export const stats = [
  { value: "5", label: "Papers and preprints" },
  { value: "4", label: "First or co-first author works" },
  { value: "1", label: "ECCV 2026 workshop paper" },
  { value: "4×", label: "Semester honors at Korea University" },
];

export const pillars = [
  {
    title: "3D Vision & World Models",
    body: "Geometry-aware representations and camera-controlled video generation as a step toward world action models.",
  },
  {
    title: "Robotics & VLA",
    body: "Vision-language-action policies and simulation (MuJoCo, Isaac Sim, LIBERO) for embodied agents.",
  },
  {
    title: "Diffusion & Generative Modeling",
    body: "Distribution matching, Schrödinger bridges, and diffusion models for image and video synthesis.",
  },
  {
    title: "Medical Imaging",
    body: "Ultra-low-field MRI enhancement and medical foundation models that work under real scanner constraints.",
  },
];

export type Highlight = { tag: string; tone: "eccv" | "cvpr" | "award" | "iclr"; title: string; body: string };

export const highlights: Highlight[] = [
  {
    tag: "ECCV 2026 W",
    tone: "eccv",
    title: "CRePE accepted at the 3D World Models Workshop",
    body: "Curved Ray Expectation Positional Encoding for unified-camera-controlled video generation.",
  },
  {
    tag: "KAIST AI",
    tone: "iclr",
    title: "Starting my M.S. at BISPL",
    body: "Joining Prof. Jong Chul Ye's group in September 2026 after a year as a research intern.",
  },
  {
    tag: "arXiv",
    tone: "cvpr",
    title: "DMD-augmented unpaired neural Schrödinger bridge",
    body: "Ultra-low-field MRI enhancement without paired data; presented at the MICCAI ULF-EnC workshop.",
  },
  {
    tag: "Award",
    tone: "award",
    title: "Academic Excellence Award",
    body: "Korea University, Jan. 2025 — alongside three semester highest honors.",
  },
];

export type NewsItem = { date: string; body: string };

export const news: NewsItem[] = [
  { date: "Sep. 2026", body: "Starting my M.S. at the Kim Jaechul Graduate School of AI, KAIST, joining BISPL under Prof. Jong Chul Ye." },
  { date: "Aug. 2026", body: "CRePE was accepted to the ECCV 2026 Workshop on 3D in the Era of World Models, in Malmö this September." },
  { date: "Aug. 2026", body: "Received my B.S. in Computer Science and Engineering from Korea University — early graduation in 3.5 years." },
  { date: "2026", body: "Preprint on DMD-augmented unpaired neural Schrödinger bridges for ultra-low-field MRI enhancement is on arXiv." },
  { date: "2026", body: "Our ultra-low-field brain MRI enhancement method was presented at the MICCAI ULF-EnC Challenge Workshop." },
  { date: "Jan. 2025", body: "Received the Academic Excellence Award from Korea University." },
];

export type Publication = {
  title: string;
  figure?: { src: string; width: number; height: number };
  authors: string[];
  equalContribution?: string[];
  venue: string;
  venueShort: string;
  year: string;
  area: string;
  summary: string;
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

/** Author name that gets bolded in the list. */
export const ME = "Youngmin Kim";

export const publications: Publication[] = [
  {
    title: "CRePE: Curved Ray Expectation Positional Encoding for Unified-Camera-Controlled Video Generation",
    figure: { src: "/paper/crepe.webp", width: 480, height: 308 },
    authors: ["Seonghyun Jin", "Youngmin Kim", "Sunwoo Park", "Jong Chul Ye"],
    equalContribution: ["Seonghyun Jin", "Youngmin Kim", "Sunwoo Park"],
    venue: "ECCV 2026 Workshop on 3D in the Era of World Models",
    venueShort: "ECCV 2026 W",
    year: "2026",
    area: "Video Generation",
    summary:
      "A positional encoding that models curved rays so a single video diffusion model can be controlled by pinhole, fisheye and panoramic cameras alike.",
    tags: ["Camera Control", "Positional Encoding", "World Models"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2605.12938" },
      { label: "Workshop", href: "https://eccv2026-3d-world-models.github.io" },
    ],
    featured: true,
  },
  {
    title: "DMD-augmented Unpaired Neural Schrödinger Bridge for Ultra-Low Field MRI Enhancement",
    figure: { src: "/paper/dmd.webp", width: 480, height: 244 },
    authors: ["Youngmin Kim", "Jaeyun Shin", "Jeongchan Kim", "Taehoon Lee", "Jaemin Kim", "Peter Hsu", "Jelle Veraart", "Jong Chul Ye"],
    equalContribution: ["Youngmin Kim", "Jaeyun Shin", "Jeongchan Kim"],
    venue: "arXiv preprint (under review)",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "Medical Imaging",
    summary:
      "Combines distribution matching distillation with an unpaired neural Schrödinger bridge to translate ultra-low-field brain MRI toward high-field quality.",
    tags: ["Schrödinger Bridge", "Distillation", "Unpaired Translation"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2603.03769" }],
    featured: true,
  },
  {
    title: "Ultra-Low-Field Brain MRI Enhancement using Resfusion and Residual Artifact Suppression Network",
    figure: { src: "/paper/ultra.webp", width: 480, height: 268 },
    authors: ["Youngmin Kim", "Jeongchan Kim", "Taehoon Lee", "Jaeyun Shin", "Suhyeon Lee", "Jong Chul Ye"],
    equalContribution: ["Youngmin Kim", "Jeongchan Kim", "Taehoon Lee", "Jaeyun Shin"],
    venue: "MICCAI 2026 ULF-EnC Challenge Workshop",
    venueShort: "MICCAI 2026 W",
    year: "2026",
    area: "Medical Imaging",
    summary:
      "A residual diffusion pipeline with an artifact-suppression network for the MICCAI ultra-low-field enhancement challenge.",
    tags: ["Diffusion", "MRI", "Challenge"],
    featured: true,
  },
  {
    title: "Performance Analysis of Kubernetes Traffic Scheduling Algorithms in Homogeneous and Heterogeneous Environments",
    figure: { src: "/paper/kuber.webp", width: 480, height: 351 },
    authors: ["Youngmin Kim", "Hogeon Park", "Heonchang Yu"],
    venue: "Korea Computer Congress (KCC) 2025",
    venueShort: "KCC 2025",
    year: "2025",
    area: "Systems",
    summary:
      "Measures how Kubernetes traffic-scheduling algorithms behave across homogeneous and heterogeneous clusters.",
    tags: ["Kubernetes", "Scheduling", "Benchmark"],
  },
  {
    title:
      "Improving Visual Question Answering via Prompt-Level Adaptation and Knowledge-Driven Fine-Tuning: Solution of Meta CRAG-MM Challenge 2025",
    authors: ["Youngmin Kim", "Wonyeong Jang", "Taehee Jeong"],
    venue: "KDD Cup 2025 Workshop on CRAG-MM",
    venueShort: "KDD Cup 2025",
    year: "2025",
    area: "Vision-Language",
    summary:
      "Prompt-level adaptation and knowledge-driven fine-tuning for multimodal RAG question answering in the Meta CRAG-MM challenge.",
    tags: ["VQA", "Multimodal RAG", "Challenge"],
  },
];

export type Entry = {
  period: string;
  title: string;
  org: string;
  location: string;
  chip: string;
  note?: string;
  bullets?: string[];
};

export const education: Entry[] = [
  {
    period: "Sep. 2026 – Present",
    title: "KAIST, Kim Jaechul Graduate School of AI",
    org: "M.S. in Artificial Intelligence · BISPL · Advisor: Prof. Jong Chul Ye",
    location: "Seoul, Korea",
    chip: "M.S.",
    note: "Concentration: 3D Vision and Robotics",
  },
  {
    period: "Feb. 2023 – Aug. 2026",
    title: "Korea University",
    org: "B.S. in Computer Science and Engineering · Advisor: Prof. Jaehoon Lee",
    location: "Seoul, Korea",
    chip: "B.S.",
    note: "GPA 4.3 / 4.5 · Early graduation in 3.5 years · Academic Excellence Award",
  },
];

export const experience: Entry[] = [
  {
    period: "Sep. 2026 – Present",
    title: "BISPL, KAIST · Graduate Researcher",
    org: "Advisor: Prof. Jong Chul Ye",
    location: "Seoul, Korea",
    chip: "Research",
    bullets: ["3D vision and generative modeling for robotics and embodied AI."],
  },
  {
    period: "Jun. 2025 – Aug. 2026",
    title: "BISPL, KAIST · Research Intern",
    org: "Advisor: Prof. Jong Chul Ye",
    location: "Seoul, Korea",
    chip: "Research",
    bullets: [
      "Co-led CRePE, a curved-ray positional encoding for unified-camera-controlled video generation (ECCV 2026 workshop).",
      "Developed diffusion and Schrödinger-bridge methods for ultra-low-field MRI enhancement (MICCAI ULF-EnC).",
      "Contributed to a medical foundation model effort.",
    ],
  },
  {
    period: "Jun. 2024 – Jun. 2025",
    title: "Distributed and Cloud Computing Lab, Korea University · Research Intern",
    org: "Advisor: Prof. Heonchang Yu",
    location: "Seoul, Korea",
    chip: "Research",
    bullets: ["Analyzed execution time and network latency of Kubernetes scheduler algorithms (KCC 2025)."],
  },
];

export type Project = {
  period: string;
  title: string;
  org: string;
  area: string;
  body: string;
  link?: { label: string; href: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    period: "Jun. 2026 – Aug. 2026",
    title: "CRePE — Unified-Camera-Controlled Video Generation",
    org: "BISPL, KAIST",
    area: "Video Generation",
    body: "Curved Ray Expectation Positional Encoding so one video model follows pinhole, fisheye and panoramic camera trajectories.",
    link: { label: "Paper", href: "https://arxiv.org/abs/2605.12938" },
    featured: true,
  },
  {
    period: "Jun. 2025 – Present",
    title: "ULF to High-field MRI Enhancement",
    org: "BISPL, KAIST",
    area: "Medical Imaging",
    body: "Diffusion, residual-artifact suppression and unpaired Schrödinger-bridge models that lift 64 mT scans toward 3 T quality.",
    link: { label: "Preprint", href: "https://arxiv.org/abs/2603.03769" },
    featured: true,
  },
  {
    period: "Aug. 2025 – Mar. 2026",
    title: "Medical Foundational Model",
    org: "BISPL, KAIST",
    area: "Foundation Models",
    body: "Large-scale pretraining and adaptation of a foundation model for medical imaging tasks.",
    featured: true,
  },
  {
    period: "Nov. 2025 – Dec. 2025",
    title: "Short Movie Using 3DGS",
    org: "Korea University",
    area: "3D Vision",
    body: "Captured and rendered a short film with 3D Gaussian Splatting, from scene reconstruction to camera paths.",
  },
  {
    period: "Dec. 2024 – Present",
    title: "KAIST Map",
    org: "KAIST Madcamp",
    area: "Software",
    body: "Backend developer for the KAIST Map campus navigation app.",
  },
  {
    period: "Jul. 2024 – Mar. 2025",
    title: "Kubernetes Scheduler Execution-Time Analysis",
    org: "Distributed and Cloud Computing Lab, Korea University",
    area: "Systems",
    body: "Benchmarked scheduler algorithms across homogeneous and heterogeneous clusters; published at KCC 2025.",
  },
];

export const awards = [
  { date: "Jan. 2025", title: "Academic Excellence Award", org: "Korea University" },
  { date: "2024 – 2025", title: "Semester Highest Honors (×3)", org: "Korea University · Feb. 2025, Aug. 2024, Feb. 2024" },
  { date: "Aug. 2023", title: "Semester Honors", org: "Korea University" },
];

export const skills = [
  { label: "Languages", items: "Python, C++" },
  { label: "Frameworks", items: "PyTorch" },
  { label: "Simulation", items: "MuJoCo, Isaac Sim, LIBERO" },
  { label: "Models", items: "VLA, diffusion models, video generation models" },
];
