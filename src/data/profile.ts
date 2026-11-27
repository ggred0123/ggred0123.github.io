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
    "I work on 3D vision and generative models for robotics: camera-controlled video generation, geometry-aware encodings, and vision-language-action policies.",
  bio: [
    "Before starting my M.S., I spent a year as a research intern at BISPL and earned my B.S. in Computer Science and Engineering from Korea University in 3.5 years.",
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
  { value: "1", label: "NeurIPS 2026 poster" },
  { value: "4×", label: "Semester honors at Korea University" },
];

export const pillars = [
  {
    title: "3D Vision & World Models",
    body: "Geometry-aware encodings and camera-controlled video generation.",
  },
  {
    title: "Robotics & VLA",
    body: "VLA policies, distillation, and world-action models.",
  },
  {
    title: "Diffusion & Generative Modeling",
    body: "Distribution matching, Schrödinger bridges, and flow models.",
  },
  {
    title: "Medical Imaging",
    body: "Ultra-low-field MRI enhancement.",
  },
];

export type Highlight = { tag: string; tone: "neurips" | "eccv" | "cvpr" | "award" | "iclr"; title: string; body: string };

export const highlights: Highlight[] = [
  {
    tag: "NeurIPS 2026",
    tone: "neurips",
    title: "CRePE accepted as a NeurIPS 2026 poster",
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
  { date: "Nov. 2026", body: "Mind the Band is on arXiv." },
  { date: "Nov. 2026", body: "GALILEO is on arXiv." },
  { date: "Nov. 2026", body: "Started a research internship at NAVER AI Lab." },
  { date: "Oct. 2026", body: "Two VLA distillation preprints on arXiv: FastOPD and DriftOPD." },
  { date: "Sep. 2026", body: "Three preprints on arXiv: DPP, Action Upcycling, and Adjoint Guidance Flow." },
  { date: "Sep. 2026", body: "CRePE accepted as a poster at NeurIPS 2026." },
  { date: "Sep. 2026", body: "Started my M.S. at KAIST AI (BISPL)." },
  { date: "Aug. 2026", body: "B.S. from Korea University, early graduation." },
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
  /** Shown in the Selected papers section on the homepage. */
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
    venue: "NeurIPS 2026 (Poster)",
    venueShort: "NeurIPS 2026",
    year: "2026",
    area: "Video Generation",
    summary:
      "Positional encoding over curved rays, so one video diffusion model follows pinhole, fisheye and panoramic cameras.",
    tags: ["Camera Control", "Positional Encoding", "World Models"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2605.12938" },
      { label: "ECCV Workshop", href: "https://eccv2026-3d-world-models.github.io" },
    ],
    featured: true,
  },
  {
    title: "Mind the Band: The Hidden Frequency Variable in Geometric RoPE",
    figure: { src: "/paper/mindband.webp", width: 480, height: 146 },
    authors: ["Seonghyun Jin", "Youngmin Kim", "Jong Chul Ye"],
    equalContribution: ["Seonghyun Jin", "Youngmin Kim"],
    venue: "arXiv preprint",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "3D Vision",
    summary:
      "Shows that geometric RoPE's frequency band, a hidden default, can flip multi-view benchmark rankings, and gives guidelines for setting it.",
    tags: ["Positional Encoding", "Multi-View Attention", "View Synthesis"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2611.32171" },
      { label: "Project page", href: "https://bispl-wm.github.io/MindTheBand/" },
    ],
    featured: true,
  },
  {
    title: "GALILEO: Geometric RoPE with Galilean Key Transport for Dynamic Scenes",
    figure: { src: "/paper/galileo.webp", width: 480, height: 249 },
    authors: ["Youngmin Kim", "Seonghyun Jin", "Jong Chul Ye"],
    equalContribution: ["Youngmin Kim", "Seonghyun Jin"],
    venue: "arXiv preprint",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "3D Vision",
    summary:
      "Galilean key transport moves each key's 3D position to the query time along its velocity, so moving objects are encoded where they are, not where they were captured.",
    tags: ["Positional Encoding", "Dynamic Scenes", "View Synthesis"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2611.29293" },
      { label: "Project page", href: "https://bispl-wm.github.io/GALILEO/" },
    ],
    featured: true,
  },
  {
    title: "Dynamic Manipulation with World-Action Models via Counterfactual Planning",
    figure: { src: "/paper/dynamic.webp", width: 480, height: 266 },
    authors: ["Sunwoo Park", "Wonbin Lee", "Seonghyun Jin", "Youngmin Kim", "Jangho Park", "Jong Chul Ye"],
    equalContribution: ["Sunwoo Park", "Wonbin Lee", "Seonghyun Jin", "Youngmin Kim"],
    venue: "arXiv preprint (under review)",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "Robotics",
    summary:
      "Handles moving targets by counterfactual planning with a world-action model, reusing existing skills in real time on one consumer GPU.",
    tags: ["World-Action Models", "Dynamic Manipulation", "Counterfactual Planning"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2609.33172" },
      { label: "Project page", href: "https://methoder00.github.io/DPP/" },
    ],
    featured: true,
  },
  {
    title: "FastOPD: On-Policy Distillation for Lightweight VLA Deployment",
    figure: { src: "/paper/fastopd.webp", width: 480, height: 158 },
    authors: ["Yoojin Oh", "Jeongsol Kim", "Yeonwoo Seo", "Jangho Park", "Seonghyun Jin", "Sunwoo Park", "Youngmin Kim", "Youngjun Jun", "Kyumin Choi", "Jong Chul Ye"],
    venue: "arXiv preprint (under review)",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "Robotics",
    summary:
      "On-policy distillation of a large VLA into a compact student, using flow maps and a self-consistency objective.",
    tags: ["VLA", "On-Policy Distillation", "Flow Maps"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2610.02832" },
      { label: "Project page", href: "https://fastopd.github.io/" },
    ],
  },
  {
    title: "DriftOPD: Sequence-Level Reverse-KL Distillation for One-Step VLA Policies",
    figure: { src: "/paper/driftopd.webp", width: 480, height: 172 },
    authors: ["Youngjun Jun", "Kyumin Choi", "Youngmin Kim", "Seonghyun Jin", "Sunwoo Park", "Jangho Park", "Jong Chul Ye"],
    venue: "arXiv preprint (under review)",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "Robotics",
    summary:
      "Teacher-free, rollout-free sequence-level reverse-KL distillation for one-step VLA policies.",
    tags: ["VLA", "Sequence-Level Distillation", "Reverse KL"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2610.00317" }],
  },
  {
    title: "Don't Throw Away the Tail: Action Upcycling for Policy Acceleration",
    figure: { src: "/paper/upcycling.webp", width: 480, height: 246 },
    authors: ["Taesung Kwon", "Jangho Park", "Sunwoo Park", "Youngmin Kim", "Seonghyun Jin", "Youngjun Jun", "Kyumin Choi", "Jong Chul Ye"],
    venue: "arXiv preprint (under review)",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "Robotics",
    summary:
      "Training-free reuse of discarded action-chunk tails, cutting policy calls by 1.2–1.7× with no loss in success rate.",
    tags: ["VLA", "Policy Acceleration", "Action Chunking"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2609.34911" }],
  },
  {
    title: "Adjoint Guidance Flow: Amortized Critic Guidance for VLA Policies",
    figure: { src: "/paper/adjoint.webp", width: 480, height: 260 },
    authors: ["Jeongsol Kim", "Youngjun Jun", "Kyumin Choi", "Youngmin Kim", "Seonghyun Jin", "Sunwoo Park", "Jangho Park", "Kwanyoung Kim", "Jong Chul Ye"],
    venue: "arXiv preprint (under review)",
    venueShort: "arXiv 2026",
    year: "2026",
    area: "Robotics",
    summary:
      "Amortized critic guidance for frozen VLAs via optimal control: 3.6× faster than QGF with 7× fewer parameters.",
    tags: ["VLA", "Flow Models", "Critic Guidance"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2609.34944" }],
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
      "Distribution matching distillation plus an unpaired Schrödinger bridge for ultra-low-field brain MRI enhancement.",
    tags: ["Schrödinger Bridge", "Distillation", "Unpaired Translation"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2603.03769" }],
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
      "Residual diffusion with an artifact-suppression network for the MICCAI ULF-EnC challenge.",
    tags: ["Diffusion", "MRI", "Challenge"],
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
      "Prompt-level adaptation and knowledge-driven fine-tuning for multimodal RAG question answering.",
    tags: ["VQA", "Multimodal RAG", "Challenge"],
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
      "Benchmarks Kubernetes traffic schedulers on homogeneous and heterogeneous clusters.",
    tags: ["Kubernetes", "Scheduling", "Benchmark"],
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
    period: "Nov. 2026 – Present",
    title: "NAVER AI Lab · Research Intern",
    org: "Advisor: Jungho Lee",
    location: "Seongnam, Korea",
    chip: "Research",
    bullets: ["World model."],
  },
  {
    period: "Sep. 2026 – Present",
    title: "BISPL, KAIST · Graduate Researcher",
    org: "Advisor: Prof. Jong Chul Ye",
    location: "Seoul, Korea",
    chip: "Research",
    bullets: ["3D vision and generative modeling for robotics."],
  },
  {
    period: "Jun. 2025 – Aug. 2026",
    title: "BISPL, KAIST · Research Intern",
    org: "Advisor: Prof. Jong Chul Ye",
    location: "Seoul, Korea",
    chip: "Research",
    bullets: ["Camera-controlled video generation, ultra-low-field MRI enhancement, medical foundation models."],
  },
  {
    period: "Jun. 2024 – Jun. 2025",
    title: "Distributed and Cloud Computing Lab, Korea University · Research Intern",
    org: "Advisor: Prof. Heonchang Yu",
    location: "Seoul, Korea",
    chip: "Research",
    bullets: ["Kubernetes scheduler performance analysis (KCC 2025)."],
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
    period: "Jul. 2026 – Present",
    title: "DPP — Dynamic Manipulation with World-Action Models",
    org: "BISPL, KAIST",
    area: "Robotics",
    body: "Counterfactual planning with a world-action model for manipulating moving targets.",
    link: { label: "Project page", href: "https://methoder00.github.io/DPP/" },
    featured: true,
  },
  {
    period: "Jun. 2026 – Aug. 2026",
    title: "CRePE — Unified-Camera-Controlled Video Generation",
    org: "BISPL, KAIST",
    area: "Video Generation",
    body: "One video model that follows pinhole, fisheye and panoramic camera paths.",
    link: { label: "Paper", href: "https://arxiv.org/abs/2605.12938" },
    featured: true,
  },
  {
    period: "Jun. 2025 – Present",
    title: "ULF to High-field MRI Enhancement",
    org: "BISPL, KAIST",
    area: "Medical Imaging",
    body: "Diffusion and Schrödinger-bridge models that lift 64 mT scans toward 3 T quality.",
    link: { label: "Preprint", href: "https://arxiv.org/abs/2603.03769" },
    featured: true,
  },
  {
    period: "Aug. 2025 – Mar. 2026",
    title: "Medical Foundational Model",
    org: "BISPL, KAIST",
    area: "Foundation Models",
    body: "Pretraining and adapting a foundation model for medical imaging.",
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
