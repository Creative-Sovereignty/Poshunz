import { useState } from 'react';
import '@/App.css';
import { Sparkles, Calendar, Video, FileText, BookOpen, Lock, Menu, X } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Ambient lighting effect */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,_#2A0A4A,_#050505_50%)] opacity-40 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,_#1A0B2E,_transparent_60%)] opacity-30 pointer-events-none" />
      
      {/* Celtic background pattern */}
      <div className="fixed inset-0 celtic-bg pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="font-cinzel text-2xl text-[#D4AF37] tracking-tight" data-testid="logo">
              Poshunz
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors" data-testid="nav-services">Services</a>
              <a href="#booking" className="font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors" data-testid="nav-booking">Book Session</a>
              <a href="#case-studies" className="font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors" data-testid="nav-case-studies">Case Studies</a>
              <a href="#blog" className="font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors" data-testid="nav-blog">Blog</a>
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#B38F1A] text-black font-semibold rounded-none px-8 py-3 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]" data-testid="nav-login-btn">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#D4AF37]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="mobile-menu-btn">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-4" data-testid="mobile-menu">
              <a href="#services" className="block font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors">Services</a>
              <a href="#booking" className="block font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors">Book Session</a>
              <a href="#case-studies" className="block font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors">Case Studies</a>
              <a href="#blog" className="block font-outfit text-sm text-[#A19CA8] hover:text-[#D4AF37] transition-colors">Blog</a>
              <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B38F1A] text-black font-semibold rounded-none px-8 py-3 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1749544812189-193ccae5e2f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxteXN0aWNhbCUyMGRhcmslMjBnb2xkfGVufDB8fHx8MTc3NTAzMTA5OXww&ixlib=rb-4.1.0&q=85"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1A0B2E]/70 to-[#050505]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none" data-testid="hero-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="font-outfit text-xs text-[#D4AF37] uppercase tracking-[0.2em]">Google Meet Ready</span>
          </div>
          
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-tight" data-testid="hero-title">
            A Journey of Self-Discovery
            <br />
            <span className="text-[#D4AF37]">and Empowerment</span>
          </h1>
          
          <p className="font-outfit text-base md:text-lg text-[#A19CA8] leading-relaxed max-w-3xl mx-auto mb-10" data-testid="hero-description">
            Discover your path through Tarot, explore your natal birth chart, and receive a personalized herbal elixir crafted to enhance your strengths and support your journey toward balance and fulfillment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#B38F1A] text-black font-semibold rounded-none px-8 py-3 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] glow-animate" data-testid="cta-book-session">
              Book Your Session
            </button>
            <button className="bg-transparent border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-none px-8 py-3 hover:bg-[#D4AF37]/10 transition-all" data-testid="cta-learn-more">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 md:py-32" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="font-outfit text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-4 block">The Poshunz Journey</span>
            <h2 className="font-cinzel text-3xl md:text-4xl tracking-tight text-[#D4AF37]">Our Three-Step Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large featured service */}
            <div className="md:col-span-12 bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-10 mb-6" data-testid="service-intro">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="font-cinzel text-2xl text-[#D4AF37] mb-6">A Multi-Faceted Approach to Personal Understanding</h3>
                <p className="font-outfit text-base text-[#A19CA8] leading-relaxed">
                  Our unique intake process offers a comprehensive journey beginning with Tarot readings to explore karmic patterns, followed by natal chart analysis to reveal your inherent strengths, culminating in a personalized herbal elixir crafted by our experienced herbalist and alchemist.
                </p>
              </div>
            </div>

            {/* Step 1: Tarot */}
            <div className="md:col-span-4 bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]" data-testid="service-tarot">
              <img 
                src="https://images.pexels.com/photos/10976268/pexels-photo-10976268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Tarot Reading"
                className="w-full h-48 object-cover mb-6 opacity-80"
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D4AF37] text-black font-cinzel w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">1</div>
                <Sparkles className="text-[#D4AF37]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-cinzel text-xl text-white mb-4">Tarot Reading</h3>
              <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed mb-4">
                We commence with an insightful Tarot reading to explore potential karmic patterns and current challenges you may be facing.
              </p>
              <div className="flex items-center gap-2 text-[#D4AF37] font-outfit text-sm">
                <Video size={18} strokeWidth={1.5} />
                <span>Via Google Meet</span>
              </div>
            </div>
            
            {/* Step 2: Birth Chart */}
            <div className="md:col-span-4 bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]" data-testid="service-chart">
              <img 
                src="https://images.pexels.com/photos/5976100/pexels-photo-5976100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Birth Chart"
                className="w-full h-48 object-cover mb-6 opacity-80"
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D4AF37] text-black font-cinzel w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">2</div>
                <Calendar className="text-[#D4AF37]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-cinzel text-xl text-white mb-4">Natal Birth Chart</h3>
              <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed mb-4">
                A thorough examination of your natal birth chart reveals your inherent strengths and areas where growth and balance can be fostered.
              </p>
              <div className="flex items-center gap-2 text-[#D4AF37] font-outfit text-sm">
                <FileText size={18} strokeWidth={1.5} />
                <span>Detailed analysis included</span>
              </div>
            </div>

            {/* Step 3: Poshunz Blend */}
            <div className="md:col-span-4 bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]" data-testid="service-potion">
              <img 
                src="https://images.pexels.com/photos/6178715/pexels-photo-6178715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Poshunz Blend"
                className="w-full h-48 object-cover mb-6 opacity-80"
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D4AF37] text-black font-cinzel w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">3</div>
                <Sparkles className="text-[#D4AF37]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-cinzel text-xl text-white mb-4">Your Personalized Poshunz</h3>
              <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed mb-4">
                Our herbalist and alchemist craft a potent elixir designed to enhance your strengths and support you in achieving your goals.
              </p>
              <div className="flex items-center gap-2 text-[#D4AF37] font-outfit text-sm">
                <Sparkles size={18} strokeWidth={1.5} />
                <span>Custom herbal blend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Preview Section */}
      <section id="booking" className="relative py-24 md:py-32 bg-[#10071C]/30" data-testid="booking-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-outfit text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-4 block">Easy Scheduling</span>
              <h2 className="font-cinzel text-3xl md:text-4xl tracking-tight text-[#D4AF37] mb-6">Begin Your Journey</h2>
              <p className="font-outfit text-base text-[#A19CA8] leading-relaxed mb-8">
                Schedule your personalized Poshunz experience. Each session is conducted via Google Meet and includes a comprehensive transcript along with your custom herbal blend recommendations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-none border border-[#D4AF37]/20">
                    <Calendar className="text-[#D4AF37]" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-lg text-white mb-1">Google Calendar Sync</h4>
                    <p className="font-outfit text-sm text-[#A19CA8]">Seamless integration with your existing schedule</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-none border border-[#D4AF37]/20">
                    <Video className="text-[#D4AF37]" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-lg text-white mb-1">Video Sessions</h4>
                    <p className="font-outfit text-sm text-[#A19CA8]">Face-to-face readings via Google Meet</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-none border border-[#D4AF37]/20">
                    <FileText className="text-[#D4AF37]" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-lg text-white mb-1">Session Transcripts</h4>
                    <p className="font-outfit text-sm text-[#A19CA8]">Detailed written records of your reading</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-gradient-to-r from-[#D4AF37] to-[#B38F1A] text-black font-semibold rounded-none px-8 py-3 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]" data-testid="booking-cta">
                View Available Times
              </button>
            </div>
            
            <div className="bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-10">
              <div className="aspect-square bg-[#2A0A4A]/40 border border-[#D4AF37]/20 rounded-none flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="text-[#D4AF37] mx-auto mb-4" size={64} strokeWidth={1.5} />
                  <p className="font-outfit text-sm text-[#A19CA8]">Calendar widget preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative py-24 md:py-32" data-testid="case-studies-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="font-outfit text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-4 block">Success Stories</span>
            <h2 className="font-cinzel text-3xl md:text-4xl tracking-tight text-[#D4AF37]">Case Studies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]" data-testid="case-study-1">
              <img 
                src="https://images.pexels.com/photos/5976100/pexels-photo-5976100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Case Study"
                className="w-full h-48 object-cover mb-6 opacity-70"
              />
              <h3 className="font-cinzel text-xl text-white mb-3">Career Transformation</h3>
              <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed mb-4">
                How ancient guidance helped a CEO navigate major business decisions and personal growth.
              </p>
              <button className="flex items-center gap-2 text-[#D4AF37] font-outfit text-sm hover:text-[#F3E5AB] transition-colors" data-testid="download-case-1">
                <FileText size={16} strokeWidth={1.5} />
                Download PDF
              </button>
            </div>
            
            <div className="bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]" data-testid="case-study-2">
              <img 
                src="https://images.pexels.com/photos/6178715/pexels-photo-6178715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Case Study"
                className="w-full h-48 object-cover mb-6 opacity-70"
              />
              <h3 className="font-cinzel text-xl text-white mb-3">Spiritual Awakening</h3>
              <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed mb-4">
                A journey from skepticism to profound spiritual connection through personalized readings.
              </p>
              <button className="flex items-center gap-2 text-[#D4AF37] font-outfit text-sm hover:text-[#F3E5AB] transition-colors" data-testid="download-case-2">
                <FileText size={16} strokeWidth={1.5} />
                Download PDF
              </button>
            </div>
            
            <div className="bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]" data-testid="case-study-3">
              <img 
                src="https://images.pexels.com/photos/10976268/pexels-photo-10976268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Case Study"
                className="w-full h-48 object-cover mb-6 opacity-70"
              />
              <h3 className="font-cinzel text-xl text-white mb-3">Relationship Healing</h3>
              <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed mb-4">
                Restoring harmony and understanding through energy work and spiritual guidance.
              </p>
              <button className="flex items-center gap-2 text-[#D4AF37] font-outfit text-sm hover:text-[#F3E5AB] transition-colors" data-testid="download-case-3">
                <FileText size={16} strokeWidth={1.5} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="relative py-24 md:py-32 bg-[#10071C]/30" data-testid="blog-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="font-outfit text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-4 block">Insights & Wisdom</span>
            <h2 className="font-cinzel text-3xl md:text-4xl tracking-tight text-[#D4AF37]">Latest from the Blog</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]" data-testid="blog-featured">
              <div className="relative h-80">
                <img 
                  src="https://images.pexels.com/photos/6178715/pexels-photo-6178715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Blog Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <span className="font-outfit text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 block">Wiccan Traditions</span>
                  <h3 className="font-cinzel text-2xl text-white mb-2">The Power of Moon Phases in Divination</h3>
                  <p className="font-outfit text-sm text-[#A19CA8]">Understanding lunar cycles and their impact on psychic readings...</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 space-y-6">
              <div className="bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-6 transition-transform duration-300 hover:-translate-y-1" data-testid="blog-post-1">
                <span className="font-outfit text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 block">New Age Practices</span>
                <h4 className="font-cinzel text-lg text-white mb-2">Crystal Energy Basics</h4>
                <p className="font-outfit text-xs text-[#A19CA8]">A beginner's guide to harnessing crystal power...</p>
              </div>
              
              <div className="bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-6 transition-transform duration-300 hover:-translate-y-1" data-testid="blog-post-2">
                <span className="font-outfit text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 block">Celtic Wisdom</span>
                <h4 className="font-cinzel text-lg text-white mb-2">Ancient Celtic Rituals</h4>
                <p className="font-outfit text-xs text-[#A19CA8]">Connecting with ancestral knowledge...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transcript Paywall Preview */}
      <section className="relative py-24 md:py-32" data-testid="transcript-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl tracking-tight text-[#D4AF37] mb-4">Your Session Transcripts</h2>
            <p className="font-outfit text-base text-[#A19CA8]">Access detailed records of all your readings</p>
          </div>
          
          <div className="relative bg-[#10071C]/60 backdrop-blur-2xl border border-white/10 rounded-none p-10">
            {/* Blurred content to simulate paywall */}
            <div className="blur-sm select-none pointer-events-none" data-testid="transcript-preview">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FileText className="text-[#D4AF37] mt-1" size={20} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-cinzel text-lg text-white mb-2">Session: January 15, 2026</h4>
                    <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed">
                      Your reading revealed significant patterns in your life path. The cards indicated a major transition approaching in your career sector, with the Tower card suggesting...
                    </p>
                  </div>
                </div>
                <div className="h-px bg-white/10 my-6" />
                <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed">
                  The Celtic Cross spread showed deep connections between your past experiences and current challenges. The presence of the High Priestess in your...
                </p>
              </div>
            </div>
            
            {/* Paywall overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#050505]/40 backdrop-blur-md">
              <div className="text-center" data-testid="paywall-overlay">
                <Lock className="text-[#D4AF37] mx-auto mb-4" size={48} strokeWidth={1.5} />
                <h3 className="font-cinzel text-2xl text-white mb-2">Unlock Your Transcripts</h3>
                <p className="font-outfit text-sm text-[#A19CA8] mb-6 max-w-md">Subscribe to access all your session transcripts and recordings</p>
                <button className="bg-gradient-to-r from-[#D4AF37] to-[#B38F1A] text-black font-semibold rounded-none px-8 py-3 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]" data-testid="unlock-transcript-btn">
                  Unlock with Stripe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/5" data-testid="footer">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-cinzel text-2xl text-[#D4AF37] mb-4">Poshunz</div>
              <p className="font-outfit text-sm text-[#A19CA8] leading-relaxed">
                A journey of self-discovery through Tarot, astrology, and personalized herbal alchemy.
              </p>
            </div>
            
            <div>
              <h4 className="font-cinzel text-sm text-white mb-4 uppercase tracking-wider">The Journey</h4>
              <ul className="space-y-2 font-outfit text-sm text-[#A19CA8]">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Tarot Readings</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Birth Chart Analysis</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Custom Herbal Blends</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cinzel text-sm text-white mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 font-outfit text-sm text-[#A19CA8]">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cinzel text-sm text-white mb-4 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 font-outfit text-sm text-[#A19CA8]">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Book Session</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center">
            <p className="font-outfit text-sm text-[#A19CA8]">
              © 2026 Poshunz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
