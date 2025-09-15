import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Rocket, Sparkles, Star, Lightbulb, Mail, MapPin, Instagram, Linkedin, Twitter, Menu, X, Sun, Moon } from 'lucide-react'
// import Lenis from '@studio-freight/lenis'
import './App.css'

function App() {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Removed Lenis smooth scroll

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const masterclasses = [
    {
      title: "Masterclass #1: AI & ML – Hands-on Model Building",
      content: [
        "Intro to AI/ML, types of learning, key algorithms",
        "Dataset loading and preprocessing using Python (pandas, scikit-learn)",
        "Build and train a basic ML classifier (e.g., digit recognizer)",
        "Evaluate model accuracy and tune parameters hands-on"
      ]
    },
    {
      title: "Masterclass #2: Quantitative Finance & Algo Trading",
      content: [
        "Basics of trading strategies: momentum, mean-reversion",
        "Intro to Python finance tools and back-testing environment",
        "Code & run a moving average crossover strategy",
        "Analyze Sharpe ratio, drawdowns, and improve logic"
      ]
    },
    {
      title: "Masterclass #3: VLSI SOC Design with Verilog HDL",
      content: [
        "SoC architecture and Verilog coding fundamentals",
        "Write & simulate modules like ALU or counters in ModelSim",
        "Understand synthesis flow and basic timing analysis",
        "Hands-on coding of a simple system block"
      ]
    },
    {
      title: "Masterclass #4: Generative AI & LLM Prompt Tuning",
      content: [
        "Basics of LLMs, tokenization, and generative capabilities",
        "Craft effective prompts (few-shot, CoT, etc.)",
        "Build a simple Q&A or productivity agent",
        "Students fine-tune prompts and test outputs live"
      ]
    },
    {
      title: "Masterclass #5: Blockchain & Web3 App Development",
      content: [
        "Understand blockchain, smart contracts, Ethereum basics",
        "Write a simple smart contract (e.g., token/voting)",
        "Deploy and interact with contract using Web3.js",
        "Build a simple front-end to trigger smart contract events"
      ]
    },
    {
      title: "Masterclass #6: 3D Modeling & CAD/CAM",
      content: [
        "Intro to SolidWorks/Onshape: sketching, extrusion",
        "Demo: create a mechanical part with constraints",
        "Students design and assemble basic components",
        "Export for 3D printing or CNC via CAM preview"
      ]
    },
    {
      title: "Masterclass #7: Business Communication & Public Speaking",
      content: [
        "Learn structure & tone of professional communication",
        "Train in posture, eye contact, voice modulation",
        "Practice elevator pitches and storytelling formats",
        "Peer feedback and re-delivery to improve confidence"
      ]
    }
  ]

  const additionalEvents = [
    {
      title: "Career Panel Discussions",
      description: "Industry experts share insights about various career paths and answer student questions about breaking into different fields."
    },
    {
      title: "Resume Review Clinic",
      description: "One-on-one sessions with professionals to review and improve student resumes, cover letters, and LinkedIn profiles."
    },
    {
      title: "Mock Interview Sessions",
      description: "Practice interviews with alumni and industry professionals to build confidence and improve interview skills."
    },
    {
      title: "Networking Sessions",
      description: "Structured networking events connecting students with alumni, industry professionals, and peers."
    },
    {
      title: "Career Guidance Workshops",
      description: "Sessions focused on career planning, goal setting, and navigating different career trajectories."
    }
  ]

  const schedule = [
    {
      day: "Monday",
      events: [
        { time: "09:00 AM", event: "Opening Ceremony & Welcome" },
        { time: "10:30 AM", event: "Masterclass #1: AI & ML" },
        { time: "02:00 PM", event: "Career Panel: Tech Industry" },
        { time: "04:00 PM", event: "Networking Session" }
      ]
    },
    {
      day: "Tuesday", 
      events: [
        { time: "09:30 AM", event: "Masterclass #2: Quantitative Finance" },
        { time: "01:00 PM", event: "Resume Review Clinic" },
        { time: "03:30 PM", event: "Mock Interview Sessions" }
      ]
    },
    {
      day: "Wednesday",
      events: [
        { time: "10:00 AM", event: "Masterclass #3: Digital System Design" },
        { time: "02:30 PM", event: "Career Panel: Finance & Consulting" },
        { time: "04:30 PM", event: "Career Guidance Workshop" }
      ]
    },
    {
      day: "Thursday",
      events: [
        { time: "09:00 AM", event: "Masterclass #4: Generative AI" },
        { time: "01:30 PM", event: "Masterclass #5: Blockchain & Web3" },
        { time: "04:00 PM", event: "Alumni Networking" }
      ]
    },
    {
      day: "Friday",
      events: [
        { time: "10:00 AM", event: "Masterclass #6: UI/UX Design" },
        { time: "02:00 PM", event: "Masterclass #7: Communication Skills" },
        { time: "04:30 PM", event: "Closing Ceremony & Awards" }
      ]
    }
  ]

  return (
    <div className={`min-h-screen w-screen m-0 p-0 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-slate-900'
    }`}>
      {/* Header / Navigation */}
  <header className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 backdrop-blur-lg ${
          isDarkMode 
            ? 'border-purple-500/30' 
            : 'border-purple-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-purple-400 to-pink-400'
                  : 'from-purple-600 to-pink-600'
              }`}>UDAAN</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#home" className={`transition-colors font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
              }`}>Home</a>
              <a href="#why-udaan" className={`transition-colors font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
              }`}>Why UDAAN?</a>
              <a href="#objectives" className={`transition-colors font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
              }`}>Objectives</a>
              <a href="#events" className={`transition-colors font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
              }`}>Events</a>
              <a href="#schedule" className={`transition-colors font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
              }`}>Schedule</a>
              <a href="#contact" className={`transition-colors font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
              }`}>Contact</a>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-yellow-400 hover:bg-slate-800' 
                    : 'text-slate-600 hover:bg-purple-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-yellow-400 hover:bg-slate-800' 
                    : 'text-slate-600 hover:bg-purple-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors p-2 ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden py-4 border-t mx-4 transition-colors ${
                isDarkMode ? 'border-purple-500/30' : 'border-purple-200'
              }`}
            >
              <nav className="flex flex-col space-y-1">
                <a 
                  href="#home" 
                  className={`transition-colors font-medium py-2 px-4 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-slate-800' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#why-udaan" 
                  className={`transition-colors font-medium py-2 px-4 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-slate-800' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why UDAAN?
                </a>
                <a 
                  href="#objectives" 
                  className={`transition-colors font-medium py-2 px-4 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-slate-800' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Objectives
                </a>
                <a 
                  href="#events" 
                  className={`transition-colors font-medium py-2 px-4 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-slate-800' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </a>
                <a 
                  href="#schedule" 
                  className={`transition-colors font-medium py-2 px-4 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-slate-800' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule
                </a>
                <a 
                  href="#contact" 
                  className={`transition-colors font-medium py-2 px-4 rounded-lg ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-slate-800' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="pt-20 pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className={`text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
            variants={fadeInUp}
          >
            UDAAN –{' '}
            <span className={`block bg-gradient-to-r bg-clip-text text-transparent gradient-shimmer ${
              isDarkMode 
                ? 'from-purple-400 via-pink-400 to-yellow-400' 
                : 'from-purple-600 via-pink-600 to-orange-500'
            }`}>
              Soaring into Your Future
            </span>
          </motion.h1>
          <motion.h2 
            className={`text-xl md:text-2xl lg:text-3xl mb-10 font-medium ${
              isDarkMode ? 'text-purple-200' : 'text-purple-700'
            }`}
            variants={fadeInUp}
          >
            The Annual Intra-college Career Fest at IIITDM Kancheepuram
          </motion.h2>
          <motion.p 
            className={`text-lg md:text-xl leading-relaxed mb-12 ${
              isDarkMode ? 'text-gray-300' : 'text-slate-700'
            }`}
            variants={fadeInUp}
          >
            UDAAN is a one-week intra-college career fest designed to ignite students' professional aspirations with{' '}
            <span className="font-semibold text-teal-600">#7 masterclasses/workshops</span> touching all domains, 
            cutting‑edge technology panel discussions, competitive events, personalized career guidance and much more—
            fostering peer networking and industry connections for students at any stage of their journey.
          </motion.p>
          <motion.a 
            href="#events" 
            className={`inline-block px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
            }`}
            variants={fadeInUp}
          >
            🚀 Explore the Events
          </motion.a>
        </div>
      </motion.section>

      {/* Why UDAAN Section */}
      <motion.section 
        id="why-udaan" 
        className={`py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-slate-800 to-purple-900' 
            : 'bg-gradient-to-r from-purple-100 to-pink-100'
        }`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'from-purple-400 to-pink-400' 
                  : 'from-purple-600 to-pink-600'
              }`}>Why UDAAN?</span> <span className="text-4xl md:text-5xl lg:text-6xl">✨</span>
            </h2>
            <p className={`text-xl md:text-2xl leading-relaxed ${
              isDarkMode ? 'text-purple-200' : 'text-purple-700'
            }`}>
              While our institute hosts an inter-college tech fest, UDAAN serves a fundamentally different and complementary purpose.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <motion.div 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                  : 'bg-white/70 border-purple-200 hover:bg-white backdrop-blur-sm'
              }`}
              variants={fadeInUp}
            >
              <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-colors ${
                  isDarkMode 
                    ? 'bg-purple-900/50 group-hover:bg-purple-800' 
                    : 'bg-purple-100 group-hover:bg-purple-200'
                }`}>
                  <Target className={`w-8 h-8 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Student-Centric Career Development</h3>
                </div>
              </div>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Tech fests often focus on innovation, coding, and competitions across institutions. UDAAN is designed exclusively for our students' career advancement, combining soft skill training, industry exploration, and personal guidance which are usually missing in tech fests.</p>
            </motion.div>
            
            <motion.div 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                  : 'bg-white/70 border-purple-200 hover:bg-white backdrop-blur-sm'
              }`}
              variants={fadeInUp}
            >
              <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-colors ${
                  isDarkMode 
                    ? 'bg-pink-900/50 group-hover:bg-pink-800' 
                    : 'bg-pink-100 group-hover:bg-pink-200'
                }`}>
                  <Users className={`w-8 h-8 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Career Mentorship Beyond Competitions</h3>
                </div>
              </div>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>UDAAN offers career clinics, resume reviews, and masterclasses that go beyond competitions, targeting students' career clarity, placement preparation, and profile building.</p>
            </motion.div>
            
            <motion.div 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                  : 'bg-white/70 border-purple-200 hover:bg-white backdrop-blur-sm'
              }`}
              variants={fadeInUp}
            >
              <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-colors ${
                  isDarkMode 
                    ? 'bg-orange-900/50 group-hover:bg-orange-800' 
                    : 'bg-orange-100 group-hover:bg-orange-200'
                }`}>
                  <Rocket className={`w-8 h-8 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Peer & Alumni Mentorship</h3>
                </div>
              </div>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>A fest dedicated to careers makes room for meaningful interaction with alumni, recruiters, and industry mentors—not possible in crowded inter-college settings.</p>
            </motion.div>
            
            <motion.div 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                  : 'bg-white/70 border-purple-200 hover:bg-white backdrop-blur-sm'
              }`}
              variants={fadeInUp}
            >
              <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-colors ${
                  isDarkMode 
                    ? 'bg-yellow-900/50 group-hover:bg-yellow-800' 
                    : 'bg-yellow-100 group-hover:bg-yellow-200'
                }`}>
                  <Sparkles className={`w-8 h-8 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Bridging the Semester Gap</h3>
                </div>
              </div>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Our annual inter-college tech fest is held in the even semester. There is currently no major tech or career event in the odd semester. UDAAN fills that crucial gap, ensuring year-round student engagement.</p>
            </motion.div>
            
            <motion.div 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                  : 'bg-white/70 border-purple-200 hover:bg-white backdrop-blur-sm'
              }`}
              variants={fadeInUp}
            >
              <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-900/50 group-hover:bg-blue-800' 
                    : 'bg-blue-100 group-hover:bg-blue-200'
                }`}>
                  <Star className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Empowering Freshers Early On</h3>
                </div>
              </div>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Freshers join in the odd semester and often lack exposure to career and tech ecosystems. UDAAN provides them early access to guidance, role models, and communities, helping them plan their journeys from the start.</p>
            </motion.div>
            
            <motion.div 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                  : 'bg-white/70 border-purple-200 hover:bg-white backdrop-blur-sm'
              }`}
              variants={fadeInUp}
            >
              <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-colors ${
                  isDarkMode 
                    ? 'bg-green-900/50 group-hover:bg-green-800' 
                    : 'bg-green-100 group-hover:bg-green-200'
                }`}>
                  <Lightbulb className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>FROST Replacement with Broader Scope</h3>
                </div>
              </div>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Earlier, we hosted FROST (Free & Open Source Software Training), but it was limited in scope. UDAAN broadens that vision by covering tech, finance, communication, design, and beyond—through hands-on masterclasses and exposure.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Objectives Section */}
      <motion.section 
        id="objectives"
        className={`py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full transition-colors duration-300 ${
          isDarkMode ? 'bg-slate-900' : 'bg-blue-50'
        }`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className={`${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent'
              }`}>Our Core Objectives</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <motion.div className="text-center" variants={fadeInUp}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-teal-600 to-teal-800' 
                  : 'bg-gradient-to-br from-teal-500 to-teal-600'
              }`}>
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>Skill Building</h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Equip students with practical, in-demand skills beyond regular curriculum.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-amber-600 to-amber-800' 
                  : 'bg-gradient-to-br from-amber-500 to-amber-600'
              }`}>
                <span className="text-white text-xl">🌟</span>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>Career Exploration</h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Provide exposure to diverse career paths and emerging industries.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-purple-600 to-purple-800' 
                  : 'bg-gradient-to-br from-purple-500 to-purple-600'
              }`}>
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>Networking</h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Foster connections among peers, alumni, faculty, and industry experts.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-pink-600 to-pink-800' 
                  : 'bg-gradient-to-br from-pink-500 to-pink-600'
              }`}>
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>Guidance</h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Offer tailored advice through one-on-one clinics and panel discussions.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section 
        id="events" 
        className={`py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-900 to-slate-800' 
            : 'bg-gradient-to-r from-pink-50 to-purple-50'
        }`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className={`${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent'
              }`}>Events & Masterclasses</span>
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-purple-200' : 'text-purple-700'
            }`}>
              Comprehensive workshops and sessions designed to boost your career prospects
            </p>
          </motion.div>

          <div className="space-y-6">
            {masterclasses.map((masterclass, index) => (
              <motion.div 
                key={index} 
                className={`rounded-xl border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-purple-500/30' 
                    : 'bg-white/80 border-purple-200 backdrop-blur-sm'
                }`} 
                variants={fadeInUp}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 py-4 text-left transition-colors rounded-lg flex justify-between items-center ${
                    isDarkMode 
                      ? 'hover:bg-slate-700/50' 
                      : 'hover:bg-purple-50'
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>{masterclass.title}</h3>
                  <span className={`text-2xl ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>{activeAccordion === index ? '−' : '+'}</span>
                </button>
                {activeAccordion === index && (
                  <div className={`px-6 py-4 border-t ${
                    isDarkMode 
                      ? 'bg-slate-800/30 border-purple-500/30' 
                      : 'bg-white/90 border-purple-200'
                  }`}>
                    <ul className={`space-y-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {masterclass.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className={`mr-2 mt-1 ${
                            isDarkMode ? 'text-purple-400' : 'text-purple-600'
                          }`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-16" variants={fadeInUp}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              isDarkMode ? 'text-purple-300' : 'text-purple-700'
            }`}>Additional Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalEvents.map((event, index) => (
                <motion.div 
                  key={index} 
                  className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                      : 'bg-white/80 border-purple-200 hover:bg-white backdrop-blur-sm'
                  }`}
                  variants={fadeInUp}
                >
                  <h4 className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>{event.title}</h4>
                  <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Schedule Section */}
      <motion.section 
        id="schedule" 
        className={`py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full transition-colors duration-300 ${
          isDarkMode ? 'bg-slate-900' : 'bg-blue-50'
        }`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className={`${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent'
              }`}>Weekly Schedule</span>
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-purple-200' : 'text-purple-700'
            }`}>Your journey through UDAAN week</p>
          </motion.div>

          <motion.div 
            className={`rounded-xl overflow-hidden shadow-xl border ${
              isDarkMode 
                ? 'bg-slate-800/50 border-purple-500/30' 
                : 'bg-white/90 border-purple-200 backdrop-blur-sm'
            }`} 
            variants={fadeInUp}
          >
            <div className={`text-white p-6 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-700 to-pink-700' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600'
            }`}>
              <h3 className="text-2xl font-bold text-center">UDAAN 2025 Schedule</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${
                  isDarkMode ? 'bg-purple-900/50' : 'bg-purple-50'
                }`}>
                  <tr>
                    <th className={`px-4 py-4 text-left text-sm font-semibold uppercase tracking-wider w-1/4 ${
                      isDarkMode ? 'text-purple-300' : 'text-purple-800'
                    }`}>Day</th>
                    <th className={`px-4 py-4 text-left text-sm font-semibold uppercase tracking-wider w-1/4 ${
                      isDarkMode ? 'text-purple-300' : 'text-purple-800'
                    }`}>Time</th>
                    <th className={`px-4 py-4 text-left text-sm font-semibold uppercase tracking-wider w-1/2 ${
                      isDarkMode ? 'text-purple-300' : 'text-purple-800'
                    }`}>Event</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${
                  isDarkMode ? 'divide-purple-500/30' : 'divide-gray-200'
                }`}>
                  {schedule.map((day, dayIndex) => 
                    day.events.map((event, eventIndex) => (
                      <tr key={`${dayIndex}-${eventIndex}`} className={`transition-colors ${
                        isDarkMode 
                          ? `hover:bg-purple-800/30 ${
                              dayIndex % 2 === 0 ? 'bg-slate-700/30' : 'bg-slate-800/30'
                            }` 
                          : `hover:bg-purple-50 ${
                              dayIndex % 2 === 0 ? 'bg-purple-25' : 'bg-white'
                            }`
                      }`}>
                        {eventIndex === 0 && (
                          <td className="px-4 py-4 whitespace-nowrap align-top" rowSpan={day.events.length}>
                            <div className="flex items-center">
                              <div className={`text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3 ${
                                isDarkMode 
                                  ? 'bg-gradient-to-br from-purple-600 to-pink-600' 
                                  : 'bg-gradient-to-br from-purple-500 to-pink-500'
                              }`}>
                                {day.day.charAt(0)}
                              </div>
                              <div>
                                <div className={`text-sm font-medium ${
                                  isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>{day.day}</div>
                                <div className={`text-sm ${
                                  isDarkMode ? 'text-purple-300' : 'text-gray-500'
                                }`}>
                                  {new Date(2025, 0, 13 + dayIndex).toLocaleDateString('en-US', { 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })}
                                </div>
                              </div>
                            </div>
                          </td>
                        )}
                        <td className="px-4 py-4 whitespace-nowrap align-top">
                          <div className={`text-sm font-medium ${
                            isDarkMode ? 'text-purple-300' : 'text-gray-900'
                          }`}>{event.time}</div>
                        </td>
                        <td className="px-4 py-4 align-top">
                          <span className={`font-medium ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-800'
                          }`}>{event.event}</span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sponsors & Contact Section */}
      <section 
        id="contact" 
        className={`py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-slate-800 to-purple-900' 
            : 'bg-gradient-to-r from-purple-50 to-pink-50'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent'
            }`}>Sponsors & Contact</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Sponsors */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>✨ Become a Sponsor</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {/* Sponsor placeholders */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i} 
                    className={`h-24 rounded-lg flex items-center justify-center border-2 border-dashed transition-colors ${
                      isDarkMode 
                        ? 'bg-slate-700/50 border-purple-500/50 hover:bg-slate-700' 
                        : 'bg-white/70 border-purple-300 hover:bg-white'
                    }`}
                  >
                    <span className={`text-sm ${
                      isDarkMode ? 'text-purple-300' : 'text-purple-600'
                    }`}>Sponsor Logo</span>
                  </div>
                ))}
              </div>
              <a 
                href="mailto:udaan@iiitdm.ac.in" 
                className={`inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white' 
                    : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white'
                }`}
              >
                🚀 Become a Sponsor
              </a>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>📞 Get In Touch</h3>
              <div className="space-y-6">
                <div className={`rounded-lg p-6 border transition-shadow hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                    : 'bg-white/80 border-purple-200 hover:bg-white backdrop-blur-sm'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-teal-600 to-teal-800' 
                        : 'bg-gradient-to-br from-teal-500 to-teal-600'
                    }`}>
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-lg mb-1 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>Email:</p>
                      <a 
                        href="mailto:udaan@iiitdm.ac.in" 
                        className={`font-medium text-lg hover:underline ${
                          isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
                        }`}
                      >
                        udaan@iiitdm.ac.in
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`rounded-lg p-6 border transition-shadow hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                    : 'bg-white/80 border-purple-200 hover:bg-white backdrop-blur-sm'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-amber-600 to-amber-800' 
                        : 'bg-gradient-to-br from-amber-500 to-amber-600'
                    }`}>
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-lg mb-1 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>Venue:</p>
                      <p className={`text-lg ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>IIITDM Kancheepuram, Chennai</p>
                    </div>
                  </div>
                </div>
                
                <div className={`rounded-lg p-6 border transition-shadow hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-purple-500/30 hover:bg-slate-800' 
                    : 'bg-white/80 border-purple-200 hover:bg-white backdrop-blur-sm'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-pink-600 to-pink-800' 
                        : 'bg-gradient-to-br from-pink-500 to-pink-600'
                    }`}>
                      <Twitter className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-lg mb-2 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>Social Media:</p>
                      <div className="flex space-x-4">
                        <a 
                          href="#" 
                          className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                            isDarkMode 
                              ? 'bg-purple-800/50 text-purple-300 hover:bg-purple-700' 
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          }`}
                        >
                          <Instagram size={16} />
                          <span>Instagram</span>
                        </a>
                        <a 
                          href="#" 
                          className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                            isDarkMode 
                              ? 'bg-blue-800/50 text-blue-300 hover:bg-blue-700' 
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          <Linkedin size={16} />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-900 text-white' 
          : 'bg-slate-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`mb-4 md:mb-0 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-300'
            }`}>
              <span style={{fontSize: '2.2em', verticalAlign: 'middle'}}>©</span> 2025 UDAAN Fest | IIITDM Kancheepuram | All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className={`transition-colors p-2 rounded-lg ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/30' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800'
                }`}
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className={`transition-colors p-2 rounded-lg ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-pink-400 hover:bg-pink-900/30' 
                    : 'text-gray-300 hover:text-pink-400 hover:bg-gray-800'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className={`transition-colors p-2 rounded-lg ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/30' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                }`}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
