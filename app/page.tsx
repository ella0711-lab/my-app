"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  ExternalLink, 
  Sun, 
  Moon, 
  Code, 
  Cpu, 
  Sparkles, 
  GraduationCap, 
  Heart,
  Terminal,
  Layers,
  Send,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";

// Custom Github Icon for Lucide compatibility (Neobrutalism bold vector style)
const Github = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted] = useState(false);

  // Sync theme with document class
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfbf9] text-[#09090b] bg-neo-grid font-mono">
        <div className="neo-box p-6 bg-white font-black text-xl">
          LOADING PORTFOLIO...
        </div>
      </div>
    );
  }

  const projects = [
    {
      title: "VibePort",
      category: "frontend",
      description: "개발자들을 위한 마크다운 기반의 프리미엄 포트폴리오 생성기. 직관적인 UI와 반응형 템플릿을 제공합니다.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "/vibeport_thumb.png"
    },
    {
      title: "StudyMate",
      category: "fullstack",
      description: "대학생들을 위한 실시간 협업 스터디 타이머 및 계획 플래너. 소켓 통신을 활용한 뽀모도로 타이머 동기화를 구현했습니다.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "/studymate_thumb.png"
    },
    {
      title: "DevSpace Blog",
      category: "frontend",
      description: "정적 사이트 생성을 지원하는 초경량 기술 블로그. MDX 파싱과 코드 하이라이팅, SEO 최적화를 커스텀하게 구현했습니다.",
      tags: ["Next.js", "MDX", "TailwindCSS", "Plausible"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "/devspace_thumb.png"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground bg-neo-grid font-mono pb-24 transition-colors duration-300">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-[4px] border-slate-950 dark:border-slate-100 bg-background/95 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl md:text-3xl font-black tracking-tighter uppercase px-4 py-1.5 border-4 border-slate-950 dark:border-slate-100 bg-[#fde047] dark:bg-yellow-600 text-slate-950 dark:text-slate-100 shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_#fafaf9]">
            SEIN.OH
          </a>
          
          <nav className="hidden md:flex items-center gap-6 font-black text-sm uppercase">
            {["about", "skills", "projects", "contact"].map((link) => (
              <a 
                key={link} 
                href={`#${link}`} 
                className="px-3 py-1 border-2 border-transparent hover:border-slate-950 dark:hover:border-slate-100 hover:bg-[#67e8f9] dark:hover:bg-cyan-700 hover:text-slate-950 dark:hover:text-slate-100 transition-all"
              >
                // {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="neo-btn neo-btn-white p-3 border-4 hover:bg-[#bef264]"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-950" />}
            </button>
            <a 
              href="#contact" 
              className="neo-btn neo-btn-yellow border-4 text-slate-950"
            >
              HIRE ME!
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12 space-y-28 md:space-y-40">
        
        {/* Hero Section (Neobrutalism Poster Design - No Profile Image) */}
        <section className="relative">
          <div className="neo-box-yellow p-8 md:p-16 lg:p-20 text-slate-950 relative overflow-hidden group">
            {/* Ambient retro patterns in the background */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-300 opacity-20 border-l-4 border-b-4 border-black pointer-events-none transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-lime-300 opacity-20 border-r-4 border-t-4 border-black pointer-events-none transform -translate-x-8 translate-y-8 group-hover:rotate-12 transition-transform duration-500" />

            <div className="space-y-6 md:space-y-8 max-w-5xl relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 border-4 border-slate-950 bg-white text-slate-950 text-xs md:text-sm font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_#09090b]">
                <Sparkles className="w-4 h-4 fill-[#fde047]" /> Creative Web Developer
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase select-none">
                안녕하세요,<br />
                오세인 입니다.
              </h1>

              <p className="text-lg md:text-2xl font-bold border-t-4 border-slate-950 pt-8 max-w-3xl leading-relaxed text-slate-900">
                배움을 즐기며, 기술을 조화롭게 엮어 일상을 다채롭게 바꾸는 웹 서비스를 구현합니다. 
                현재 Next.js와 디자인 시스템에 몰입하여 코드를 작성하고 있습니다.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="neo-btn neo-btn-white border-4 text-base px-8 py-4 bg-white"
                >
                  PROJECT SHOWCASE ➔
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="neo-btn neo-btn-cyan border-4 text-slate-950 text-base px-8 py-4"
                >
                  <Github className="w-6 h-6 mr-2 inline" /> VISIT GITHUB
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section (Wide 3-column / 2-column / 1-column layout) */}
        <section id="about" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-slate-950 dark:border-slate-100 pb-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              // ABOUT ME
            </h2>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400 mt-2 md:mt-0 max-w-md">
              학습의 원동력과 가치관을 바탕으로 끊임없이 성장하며 문제를 해결합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="neo-box-lime p-8 text-slate-950 group">
              <div className="p-4 bg-white border-4 border-slate-950 w-fit mb-6 shadow-[3px_3px_0px_0px_#09090b] group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter border-b-2 border-slate-950 pb-2">지속적인 배움</h3>
              <p className="text-sm md:text-base font-bold leading-relaxed text-slate-900">
                직관적이고 인터랙티브한 코딩을 지향하고 있으며, 최신 웹 생태계를 깊게 파고드는 성장형 대학생 개발자입니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="neo-box-cyan p-8 text-slate-950 group">
              <div className="p-4 bg-white border-4 border-slate-950 w-fit mb-6 shadow-[3px_3px_0px_0px_#09090b] group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-8 h-8 fill-rose-500 text-rose-500" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter border-b-2 border-slate-950 pb-2">사용자 경험 중심</h3>
              <p className="text-sm md:text-base font-bold leading-relaxed text-slate-900">
                아름다운 레이아웃뿐 아니라 과감한 테두리, 시원시원한 반응성, 섬세하고 투박한 Neobrutalism 마이크로 애니메이션에 매료되었습니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="neo-box-orange p-8 text-slate-950 group">
              <div className="p-4 bg-white border-4 border-slate-950 w-fit mb-6 shadow-[3px_3px_0px_0px_#09090b] group-hover:scale-105 transition-transform duration-300">
                <Terminal className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter border-b-2 border-slate-950 pb-2">견고한 설계</h3>
              <p className="text-sm md:text-base font-bold leading-relaxed text-slate-900">
                TypeScript와 Next.js를 연동하여 완전한 형식 안전성을 추구하며, 확장 가능하고 예측 가능한 구조를 지향합니다.
              </p>
            </div>

          </div>
        </section>

        {/* Skills Section (Responsive Gauge layout) */}
        <section id="skills" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-slate-950 dark:border-slate-100 pb-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              // SKILL STACK
            </h2>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400 mt-2 md:mt-0 max-w-md">
              프로젝트와 실무에 적극적으로 활용하는 핵심 기술과 도구들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Frontend Skills */}
            <div className="neo-box p-8 space-y-6">
              <div className="flex items-center gap-3 border-b-4 border-slate-950 dark:border-slate-100 pb-3">
                <Code className="w-6 h-6" />
                <h3 className="font-black text-xl uppercase">Frontend</h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: "React / Next.js", level: 90, color: "bg-[#fde047]" },
                  { name: "TypeScript", level: 80, color: "bg-[#67e8f9]" },
                  { name: "TailwindCSS", level: 95, color: "bg-[#bef264]" },
                  { name: "Zustand & State tools", level: 75, color: "bg-[#fdba74]" }
                ].map((s) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex justify-between text-xs md:text-sm font-black uppercase">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-6 w-full bg-white dark:bg-stone-900 border-4 border-slate-950 dark:border-slate-100 shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_#fafaf9] overflow-hidden">
                      <div className={`h-full ${s.color} border-r-4 border-slate-950 dark:border-slate-100`} style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="neo-box p-8 space-y-6">
              <div className="flex items-center gap-3 border-b-4 border-slate-950 dark:border-slate-100 pb-3">
                <Cpu className="w-6 h-6" />
                <h3 className="font-black text-xl uppercase">Backend</h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: "Node.js (Express)", level: 70, color: "bg-[#bef264]" },
                  { name: "MongoDB", level: 65, color: "bg-[#fdba74]" },
                  { name: "RESTful API Design", level: 80, color: "bg-[#fde047]" },
                  { name: "Supabase / Firebase", level: 75, color: "bg-[#67e8f9]" }
                ].map((s) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex justify-between text-xs md:text-sm font-black uppercase">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-6 w-full bg-white dark:bg-stone-900 border-4 border-slate-950 dark:border-slate-100 shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_#fafaf9] overflow-hidden">
                      <div className={`h-full ${s.color} border-r-4 border-slate-950 dark:border-slate-100`} style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevTools & Design */}
            <div className="neo-box p-8 space-y-6">
              <div className="flex items-center gap-3 border-b-4 border-slate-950 dark:border-slate-100 pb-3">
                <Layers className="w-6 h-6" />
                <h3 className="font-black text-xl uppercase">Tools & UI/UX</h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: "Git & GitHub", level: 85, color: "bg-[#67e8f9]" },
                  { name: "Figma (UI Design)", level: 80, color: "bg-[#fdba74]" },
                  { name: "Vercel / Netlify", level: 90, color: "bg-[#bef264]" },
                  { name: "Docker", level: 50, color: "bg-[#fde047]" }
                ].map((s) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex justify-between text-xs md:text-sm font-black uppercase">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-6 w-full bg-white dark:bg-stone-900 border-4 border-slate-950 dark:border-slate-100 shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_#fafaf9] overflow-hidden">
                      <div className={`h-full ${s.color} border-r-4 border-slate-950 dark:border-slate-100`} style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section (Wide 3-column / 2-column / 1-column layout) */}
        <section id="projects" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-slate-950 dark:border-slate-100 pb-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              // PROJECTS
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {["all", "frontend", "fullstack"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 border-4 border-slate-950 dark:border-slate-100 font-black text-xs md:text-sm uppercase transition-all shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_#fafaf9] cursor-pointer ${
                    activeTab === tab 
                      ? "bg-[#bef264] text-slate-950 shadow-none translate-x-[2px] translate-y-[2px]" 
                      : "bg-white dark:bg-stone-800 text-foreground"
                  }`}
                >
                  {tab === "all" ? "전체" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div 
                key={p.title} 
                className="neo-box flex flex-col h-full hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_#09090b] dark:hover:shadow-[10px_10px_0px_0px_#fafaf9]"
              >
                {/* Image layout with harsh Neobrutalism border */}
                <div className="h-56 relative overflow-hidden border-b-4 border-slate-950 dark:border-slate-100 bg-[#fde047] dark:bg-yellow-800">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="px-2.5 py-1 text-[10px] font-black uppercase border-2 border-slate-950 dark:border-slate-100 bg-white dark:bg-stone-900 text-slate-950 dark:text-slate-100 shadow-[1px_1px_0px_0px_#000] dark:shadow-[1px_1px_0px_0px_#fff]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-3 text-xs font-black uppercase border-t-2 border-slate-950 dark:border-slate-100">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:underline"
                    >
                      <Github className="w-5 h-5" /> Code
                    </a>
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Demo ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section (Horizontal Wide layout) */}
        <section id="contact" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-slate-950 dark:border-slate-100 pb-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              // CONTACT ME
            </h2>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400 mt-2 md:mt-0 max-w-md">
              프로젝트 제안이나 협업 등 소중한 연락을 기다립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 flex">
              <div className="neo-box-lime p-8 md:p-12 space-y-8 flex flex-col justify-between w-full text-slate-950">
                <div className="space-y-4">
                  <h3 className="font-black text-3xl uppercase tracking-tighter">Let's build something together!</h3>
                  <p className="text-sm md:text-base font-bold leading-relaxed text-slate-800">
                    언제든지 의견이나 제안이 있으시면 우측 폼 또는 아래 정보를 이용해 메시지를 남겨주세요.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t-4 border-slate-950">
                  <a 
                    href="mailto:osein@example.com" 
                    className="flex items-center gap-4 p-4 border-4 border-slate-950 bg-white text-slate-950 hover:bg-[#67e8f9] hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_#000]"
                  >
                    <div className="p-2 border-2 border-slate-950 bg-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-black uppercase tracking-wider">Email</div>
                      <div className="font-black text-sm md:text-base">osein@example.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 border-4 border-slate-950 bg-white text-slate-950 hover:bg-[#bef264] hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_#000]"
                  >
                    <div className="p-2 border-2 border-slate-950 bg-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-black uppercase tracking-wider">GitHub</div>
                      <div className="font-black text-sm md:text-base">github.com/osein</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7">
              <form 
                onSubmit={handleSendMessage} 
                className="neo-box p-8 md:p-12 space-y-6 h-full relative"
              >
                {emailSent && (
                  <div className="absolute inset-0 bg-[#fde047] z-20 flex flex-col items-center justify-center space-y-4 animate-fade-in border-4 border-slate-950 dark:border-slate-100 p-8">
                    <CheckCircle2 className="w-20 h-20 text-slate-950" />
                    <h4 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">SENT SUCCESS!</h4>
                    <p className="text-base font-bold text-slate-900 text-center">소중한 의견 감사드립니다. 최대한 빠르게 연동 메일로 응답하겠습니다.</p>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tighter">간편 메시지 발송</h3>
                  <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400">성함과 이메일 주소를 입력해 주시면 감사하겠습니다.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-wider">이름</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="홍길동" 
                      className="neo-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-wider">이메일</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="example@domain.com" 
                      className="neo-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-black uppercase tracking-wider">내용</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="협업 제안이나 피드백을 적어주세요." 
                    className="neo-input resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="neo-btn neo-btn-cyan w-full text-slate-950 py-4 text-base border-4 hover:bg-cyan-400"
                >
                  MESSAGE SEND ➔
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t-[4px] border-slate-950 dark:border-slate-100 mt-28 py-8 text-center text-xs md:text-sm font-bold uppercase relative z-10 transition-colors duration-300">
        <p>© 2026 Sein Oh. All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center gap-1.5">
          Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> & Next.js Neobrutalism Layout
        </p>
      </footer>

    </div>
  );
}
