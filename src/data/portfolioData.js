export const personalInfo = {
  name: "Atharva Komati",
  title: "AI Engineer & Full Stack Developer",
  shortBio: "Architecting private, zero-cost Local RAG systems and intelligent voice-controlled desktop agents. Specialist in Python, Local LLMs, React, Next.js, and Full-Stack Engineering.",
  fullBio: "I am a Computer Science student at MIT-WPU specializing in Local AI Architectures and Modern Full-Stack Systems. I engineer privacy-first AI products like StudyBuddy AI (offline RAG assistant with zero API cost) and Aura-X (voice-controlled automation agent with conversational memory), alongside high-performance web platforms tested in live production at WebMobi360.",
  email: "atharvakomati@gmail.com",
  phone: "+91 8080441258",
  location: "Pune, India",
  timezone: "Asia/Kolkata (IST)",
  status: "Available for AI & Full-Stack Roles",
  socialLinks: {
    github: "https://github.com/atharvakomati",
    linkedin: "www.linkedin.com/in/atharva-komati-242151401",
    email: "mailto:atharvakomati@gmail.com",
    phone: "tel:+918080441258"
  },
  stats: [
    { label: "Flagship AI Architectures", value: "2" },
    { label: "Production Bugs Resolved", value: "100+" },
    { label: "Core Tech Proficiencies", value: "15+" }
  ]
};

export const educationData = [
  {
    institution: "MIT World Peace University (MIT-WPU)",
    degree: "Integrated B.Tech in Computer Science and Engineering",
    period: "08/2024 – Present",
    location: "Pune, India",
    description: "Rigorous coursework focusing on Artificial Intelligence, Retrieval-Augmented Generation, Algorithms, System Architecture, and Modern Full-Stack Development.",
    highlights: [
      "Deep focus on Local LLM Quantization (GGML / 4-bit weights) and Vector Embeddings",
      "Hands-on practical development across Python, C/C++, JavaScript, SQL, and System Design",
      "Active participant in technical coding challenges and software hackathons"
    ]
  }
];

export const experienceData = [
  {
    id: "webmobi360",
    role: "Full Stack Developer Intern",
    company: "WebMobi360 Pvt. Ltd.",
    location: "Pune, India",
    period: "June 2026 – August 2026",
    type: "Production Internship",
    badge: "Live Impact",
    summary: "Contributed extensively to the live Training Placement Network (TPN) platform, engineering core admin features, payment infrastructure, and production stability.",
    achievements: [
      "Contributed to the live Training Placement Network (TPN) platform using Next.js, React, MySQL, and Git.",
      "Developed the Admin Dashboard with database integration, real-time analytics, and secure role-based authentication.",
      "Integrated Razorpay payment gateway workflows and designed several high-converting platform pages.",
      "Identified and resolved 100+ bugs across frontend and backend, improving platform stability, form validation, navigation speed, and overall UI/UX.",
      "Deployed the platform to Hostinger cloud environments and resolved routing, database connectivity, and server configuration issues."
    ],
    techStack: ["Next.js", "React", "MySQL", "Razorpay API", "Git", "Hostinger", "JavaScript", "REST APIs"]
  }
];

export const projectsData = [
  {
    id: "studybuddy-ai",
    title: "StudyBuddy AI",
    subtitle: "Offline AI-Powered Study Assistant with Local RAG",
    tagline: "100% Private, Zero Cloud Cost Retrieval-Augmented Generation for Students",
    period: "04/2026 – 05/2026",
    category: "AI & ML",
    isPrimaryFlagship: true,
    featured: true,
    badge: "Flagship AI Project",
    accentColor: "cyan",
    coverColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    shortDescription: "An offline AI study companion built using a RAG architecture to answer questions directly from students' own notes with source citations and zero cloud costs.",
    fullDescription: "StudyBuddy AI executes Retrieval-Augmented Generation entirely locally on user hardware. It ingests multi-page student notes and textbook PDFs, processes recursive semantic chunking, constructs dense vector embeddings, and performs zero-cost local LLM inference without transmitting sensitive study data to third-party cloud APIs.",
    highlights: [
      "Offline RAG Pipeline: Ingests PDFs, chunks text semantically, and builds local vector indices",
      "Interactive Source Citation: Answers include exact page and line references with yellow highlighting",
      "Automated Summary Generator: Produces executive summaries and concept cheat-sheets",
      "Dynamic Quiz & Flashcard Engine: Generates active-recall questions and spaced repetition cards",
      "Zero-Cost Inference: Runs quantized 4-bit local LLMs (Ollama / GGML) with $0 ongoing API costs"
    ],
    metrics: [
      { label: "Cloud API Cost", value: "$0.00 (100% Local)" },
      { label: "Data Privacy", value: "100% On-Device" },
      { label: "Source Attribution", value: "Exact Page & Line" }
    ],
    techStack: ["Python", "Local LLMs (Ollama)", "RAG Pipeline", "Vector DB", "PDF Extraction", "Modular", "JSON"],
    githubUrl: "https://github.com/atharvakomati/studybuddy-ai",
    liveDemoUrl: "#",
    codeSnippet: `# StudyBuddy AI - Local RAG Pipeline Sample
class StudyBuddyRAG:
    def __init__(self, model_name="llama3:8b-instruct-q4"):
        self.embeddings = LocalEmbedder()
        self.vector_index = VectorStore()
        self.llm = LocalLLMClient(model=model_name)

    def query(self, prompt: str) -> dict:
        # Step 1: Semantic similarity vector retrieval
        top_chunks = self.vector_index.search(prompt, k=4)
        
        # Step 2: Context synthesis with source citations
        context = "\\n".join([f"[{c.doc} p.{c.page}]: {c.text}" for c in top_chunks])
        response = self.llm.generate(prompt=prompt, context=context)
        
        return {
            "answer": response.text,
            "citations": [c.citation for c in top_chunks],
            "flashcards": self.generate_flashcards(context)
        }`,
    architectureSteps: [
      "PDF Ingestion & Text Normalization Pipeline",
      "Recursive Semantic Chunking & Local Vector Embeddings",
      "Contextual Similarity Retrieval & Top-K Reranking",
      "Local LLM Prompt Synthesis with Source Highlighting",
      "Flashcard & Dynamic Quiz Generation Subsystems"
    ]
  },
  {
    id: "aura-x",
    title: "Aura-X AI Assistant",
    subtitle: "Voice-Controlled Desktop Automation & Conversational Memory",
    tagline: "Natural Voice Automation Agent with Persistent Multi-Turn Context",
    period: "02/2026 – 03/2026",
    category: "AI & Systems",
    isPrimaryFlagship: true,
    featured: true,
    badge: "Flagship AI Project",
    accentColor: "purple",
    coverColor: "from-purple-500/20 via-indigo-500/10 to-transparent",
    shortDescription: "A voice-controlled desktop assistant that enhances productivity through intelligent system automation, multi-step NLP parsing, and conversational memory.",
    fullDescription: "Aura-X is an autonomous desktop voice agent engineered with a modular Python backend and PyQt HUD. It processes continuous spoken speech, maintains conversational context across dialog turns, executes multi-step OS workflows (launching developer tools, controlling Spotify music playback), and filters responses with prompt engineering.",
    highlights: [
      "Voice NLP Engine: Multi-step command decomposition with real-time speech recognition",
      "Persistent Conversational Memory: Retains ongoing context across complex multi-turn dialogs",
      "Spotify & System Automation: Automates playlist controls, app execution, and file management",
      "Real-Time Response Filtering: Custom prompt engineering filters and verifies output accuracy",
      "Modern PyQt HUD: Low-latency desktop head-up display with dynamic audio waveforms"
    ],
    metrics: [
      { label: "Command Parsing", value: "Multi-Step Intent" },
      { label: "Memory State", value: "Conversational Buffer" },
      { label: "Integrations", value: "Spotify API + Native OS" }
    ],
    techStack: ["Python", "PyQt", "Speech Recognition", "Spotify API", "Prompt Engineering", "System Automation", "JSON"],
    githubUrl: "https://github.com/atharvakomati/aura-x",
    liveDemoUrl: "#",
    codeSnippet: `# Aura-X - Voice Intent & Memory Engine
class AuraXVoiceAgent:
    def __init__(self):
        self.memory = ConversationalMemoryBuffer(max_turns=10)
        self.spotify = SpotifyController()
        self.os_bridge = SystemAutomationBridge()

    def process_voice_command(self, audio_stream):
        text = self.transcribe(audio_stream)
        intent = self.nlp_engine.parse(text, history=self.memory.get_context())
        
        if intent.has_action("spotify_play"):
            self.spotify.play_track(intent.params.get("query"))
        if intent.has_action("launch_app"):
            self.os_bridge.open_application(intent.params.get("app"))
            
        self.memory.record_turn(user=text, assistant=intent.response_text)
        return self.synthesize_speech(intent.response_text)`,
    architectureSteps: [
      "Audio Capture & Real-time Speech-to-Text Transcription",
      "Intent Classification & Multi-step Command Decomposition",
      "Conversational Memory Buffer Lookup & Context Injection",
      "Modular Action Handlers (Spotify, System Scripts, Launchers)",
      "TTS Audio Synthesis & PyQt Dynamic HUD Visualization"
    ]
  },
  {
    id: "tpn-platform",
    title: "Training Placement Network (TPN)",
    subtitle: "Enterprise Student & Recruiter Placement Portal",
    period: "06/2026 – 08/2026",
    category: "Full Stack",
    featured: false,
    badge: "Production Web Platform",
    accentColor: "emerald",
    coverColor: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    shortDescription: "A full-stack placement portal featuring admin dashboards, secure authentication, Razorpay payments, and live cloud deployment.",
    fullDescription: "Built and stabilized during my internship at WebMobi360, this platform streamlines campus recruitment and training. Key contributions included engineering the Admin Dashboard, integrating Razorpay payment processing, resolving over 100 platform bugs, and managing deployment on Hostinger.",
    highlights: [
      "Developed secure Admin Dashboard with database integration and role-based permissions",
      "Integrated Razorpay payment gateway for smooth transactional workflows",
      "Diagnosed and resolved 100+ bugs across frontend validation, routing, and database queries",
      "Configured production hosting, server settings, and live database migrations on Hostinger"
    ],
    metrics: [
      { label: "Platform Role", value: "Full Stack Intern" },
      { label: "Issues Fixed", value: "100+ Resolved" },
      { label: "Payment Gateway", value: "Razorpay" }
    ],
    techStack: ["Next.js", "React", "MySQL", "Razorpay API", "Git", "Hostinger", "JavaScript"],
    githubUrl: "https://github.com/atharvakomati",
    liveDemoUrl: "#",
    architectureSteps: [
      "Next.js App Routing & Component Hierarchy",
      "MySQL Relational Schema Design & Query Optimization",
      "Razorpay Webhook & Payment Verification Layer",
      "Admin Analytics & Candidate Management Engine",
      "Hostinger Cloud Production Deployment"
    ]
  },
  {
    id: "weatherify",
    title: "Weatherify Weather Web App",
    subtitle: "Real-Time Weather Intelligence & Visual Analytics",
    period: "01/2026 – 01/2026",
    category: "Full Stack",
    featured: false,
    badge: "Data Pipeline App",
    accentColor: "blue",
    coverColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
    shortDescription: "A full-stack weather application providing real-time data powered by OpenWeatherMap API, dynamic Matplotlib visual trends, and dark mode UI.",
    fullDescription: "Weatherify combines real-time meteorological API data with custom data transformation pipelines. It ingests live weather and multi-day forecast JSON streams, converts them into structured CSV records, and generates dynamic visual analytics and Matplotlib trend curves inside a responsive, dark-mode web interface.",
    highlights: [
      "Real-time weather tracking and multi-day forecast trend visualization",
      "Custom data pipeline transforming JSON API responses into structured CSV formats",
      "Dynamic statistical visual trend generation using Matplotlib & Data analytics",
      "Responsive, mobile-first dark mode UI with fluid CSS animations and micro-interactions"
    ],
    metrics: [
      { label: "Data Pipeline", value: "JSON to CSV ETL" },
      { label: "Visualization", value: "Matplotlib & Charts" },
      { label: "UI Experience", value: "Dark Theme CSS3" }
    ],
    techStack: ["Python", "Flask", "React", "OpenWeatherMap API", "Matplotlib", "Pandas", "NumPy", "CSS3"],
    githubUrl: "https://github.com/atharvakomati/weatherify",
    liveDemoUrl: "#",
    architectureSteps: [
      "OpenWeatherMap Live REST Endpoint Polling",
      "Data Ingestion & Sanitization Layer",
      "Automated CSV Transformation & Historical Logging Pipeline",
      "Matplotlib Analytical Curve Rendering",
      "Responsive React / CSS3 Dashboard Presentation"
    ]
  }
];

export const skillsData = {
  categories: [
    {
      name: "AI & Machine Learning",
      icon: "Cpu",
      description: "Building intelligent retrieval, local inference pipelines, and scientific data models.",
      skills: [
        { name: "Python", level: 94, badge: "Core AI", experience: "StudyBuddy AI & Aura-X" },
        { name: "Local RAG Architecture", level: 92, badge: "Specialization", experience: "Vector Search & Retrieval" },
        { name: "Local LLM Quantization", level: 88, badge: "Specialization", experience: "Ollama / GGML / 4-bit" },
        { name: "Prompt Engineering", level: 90, badge: "Advanced", experience: "Aura-X Voice NLP" },
        { name: "NumPy & Pandas", level: 86, badge: "Data", experience: "ETL & Matrix Operations" },
        { name: "Matplotlib", level: 85, badge: "Analytics", experience: "Visual Analytics" }
      ]
    },
    {
      name: "Frontend Development",
      icon: "Layout",
      description: "Crafting fast, responsive, and aesthetically polished user experiences.",
      skills: [
        { name: "React", level: 92, badge: "Production", experience: "WebMobi360 & Web Apps" },
        { name: "Next.js", level: 88, badge: "Production", experience: "TPN Placement Portal" },
        { name: "JavaScript (ES6+)", level: 92, badge: "Core", experience: "Modern Async / DOM" },
        { name: "HTML5 / CSS3", level: 95, badge: "Mastery", experience: "Responsive Design Systems" },
        { name: "Tailwind CSS", level: 92, badge: "Styling", experience: "Modern UI/UX" },
        { name: "PyQt", level: 84, badge: "Desktop UI", experience: "Aura-X Low-Latency HUD" }
      ]
    },
    {
      name: "Backend & Databases",
      icon: "Database",
      description: "Designing reliable REST APIs, database schemas, and integration pipelines.",
      skills: [
        { name: "Flask", level: 86, badge: "Microservices", experience: "REST API Backends" },
        { name: "SQL / MySQL", level: 88, badge: "Relational DB", experience: "TPN Database Schema" },
        { name: "RESTful APIs", level: 90, badge: "Integrations", experience: "Spotify & Weather APIs" },
        { name: "Razorpay Payments", level: 85, badge: "Fintech", experience: "Production WebMobi360" },
        { name: "JSON Data Pipelines", level: 94, badge: "ETL", experience: "Automated Data Transformers" },
        { name: "Modular Architecture", level: 88, badge: "System Design", experience: "Aura-X & StudyBuddy AI" }
      ]
    },
    {
      name: "Tools, DevOps & Languages",
      icon: "Terminal",
      description: "Version control, developer tools, system programming, and cloud deployment.",
      skills: [
        { name: "Git & GitHub", level: 92, badge: "Version Control", experience: "Team Collaboration" },
        { name: "C / C++", level: 82, badge: "Systems", experience: "Algorithms & Logic" },
        { name: "Visual Studio Code", level: 95, badge: "IDE", experience: "Primary Workflow" },
        { name: "Hostinger Cloud", level: 82, badge: "Deployment", experience: "Server & DNS Config" },
        { name: "Linux / Shell", level: 82, badge: "CLI", experience: "Scripting & Automation" }
      ]
    }
  ]
};

export const terminalCommands = {
  help: "Available commands:\n  • studybuddy  - Deep dive into StudyBuddy AI (Local RAG architecture)\n  • aurax       - Deep dive into Aura-X AI Assistant (Voice automation)\n  • whoami      - Display Atharva's engineering bio\n  • skills      - List core AI, frontend, backend & tool skills\n  • projects    - View all flagship & production projects\n  • experience  - WebMobi360 internship details\n  • education   - MIT-WPU academic background\n  • contact     - Direct email, phone, location & socials\n  • stats       - Key engineering metrics\n  • sudo hire   - Run fast-track hiring protocol 🚀\n  • clear       - Clear terminal screen",
  studybuddy: "📘 StudyBuddy AI [Flagship AI Project]:\n  • Architecture: Offline RAG (Retrieval-Augmented Generation)\n  • Engine:       Quantized Local LLMs (Ollama / GGML)\n  • Cost:         $0.00 Cloud API Cost\n  • Features:     PDF chunking, exact source citations, automated quizzes, flashcards",
  aurax: "🎙️ Aura-X AI Assistant [Flagship AI Project]:\n  • Architecture: Voice-controlled desktop agent with Conversational Memory\n  • Tech Stack:   Python, PyQt, SpeechRecognition, Spotify API, Prompt Engineering\n  • Features:     Multi-step NLP execution, conversational buffer, OS automation",
  whoami: "Atharva Komati\nComputer Science Student & AI/Full-Stack Developer from Pune, India.\nSpecializing in Local RAG Architectures, Quantized LLMs, Next.js, and Python systems.",
  skills: "Technical Skills:\n  [AI/ML]      Python, Local RAG, Local LLMs (Ollama), Prompt Eng, NumPy, Pandas, Matplotlib\n  [Frontend]   React, Next.js, JavaScript, Tailwind CSS, HTML5, CSS3, PyQt HUD\n  [Backend]    Flask, MySQL, SQL, REST APIs, JSON Pipelines, Razorpay SDK\n  [DevOps]     Git, GitHub, VS Code, Hostinger Cloud, Linux Shell",
  projects: "Core Projects:\n  1. StudyBuddy AI   -> Offline RAG AI assistant (Zero-cost, source citations)\n  2. Aura-X          -> Voice-controlled desktop assistant (Conversational memory)\n  3. TPN Platform    -> Next.js + MySQL placement network with Razorpay\n  4. Weatherify      -> Real-time OpenWeather data pipeline & Matplotlib trends",
  experience: "Work Experience:\n  Full Stack Developer Intern @ WebMobi360 Pvt. Ltd. (June 2026 – August 2026)\n  - Engineered Admin Dashboard with secure auth\n  - Integrated Razorpay payment workflows\n  - Resolved 100+ production bugs\n  - Deployed to Hostinger with server configuration",
  education: "Education:\n  Integrated B.Tech in Computer Science\n  MIT World Peace University (MIT-WPU), Pune, India (08/2024 – Present)",
  contact: "Connect with Atharva:\n  • Email:    atharvakomati@gmail.com\n  • Phone:    +91 8080441258\n  • Location: Pune, India\n  • GitHub:   https://github.com/atharvakomati\n  • LinkedIn: https://linkedin.com/in/atharvakomati",
  stats: "Portfolio Stats:\n  • Flagship AI Architectures: 2 (StudyBuddy AI & Aura-X)\n  • Production Bugs Fixed:     100+\n  • Cloud API Cost:            $0 (Local LLMs)\n  • Status:                    Open for opportunities",
  "sudo hire": "🎉 Congratulations! Fast-track interview protocol unlocked.\nSending high-priority handshake to atharvakomati@gmail.com... 🚀"
};
