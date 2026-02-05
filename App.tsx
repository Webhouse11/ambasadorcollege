
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Menu, X, ChevronRight, MapPin, Phone, Mail, 
  Facebook, Twitter, Instagram, Linkedin, 
  BookOpen, GraduationCap, Award, Users, Search, 
  Download, Send, ArrowRight, Play, ChevronLeft,
  CheckCircle, Calendar, MessageSquare, ExternalLink
} from 'lucide-react';
import { NAV_LINKS, STATS, PROGRAMS, NEWS, FACULTY, SLIDES, TESTIMONIALS, GALLERY_IMAGES } from './constants';

const SCHOOL_BUILDING_IMAGE = "https://lh3.googleusercontent.com/d/1w7Mz7CoAGVH2O3ud1_KMu2nR7HRXfVdW";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-brand-navyDark text-white py-2 text-xs border-b border-white/5 relative z-[60]">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={12} className="text-brand-gold" /> +234 (0) 803 123 4567</span>
            <span className="flex items-center gap-2"><Mail size={12} className="text-brand-gold" /> info@ambassadorscollegeife.com</span>
          </div>
          <div className="flex gap-4 font-bold tracking-wider">
            <a href="#" className="hover:text-brand-gold transition-colors">Student Portal</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-brand-gold transition-colors">Staff Login</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3 top-0' : 'bg-transparent py-6 lg:top-8 top-0'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="w-12 h-12 bg-brand-navy flex items-center justify-center rounded-xl shadow-lg transition-transform group-hover:scale-105">
              <span className="text-brand-gold font-serif text-3xl font-black">A</span>
            </div>
            <div>
              <h1 className={`font-serif text-xl font-black tracking-tighter leading-none transition-colors duration-500 ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>AMBASSADORS</h1>
              <p className={`text-[10px] tracking-[0.2em] font-bold uppercase transition-colors duration-500 ${isScrolled ? 'text-brand-gold' : 'text-brand-goldLight'}`}>College, Ile-Ife</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button 
                key={link.href} 
                onClick={() => scrollToSection(link.href)}
                className={`text-[13px] uppercase tracking-widest font-bold transition-all hover:text-brand-gold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#admissions')}
              className="bg-brand-gold hover:bg-brand-goldLight text-brand-navyDark px-8 py-3 rounded-md text-xs font-black uppercase tracking-widest shadow-lg transition-all active:scale-95"
            >
              Apply Now
            </button>
          </nav>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className={isScrolled ? 'text-brand-navy' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-brand-navy' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-brand-navyDark z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 relative px-4 text-center">
            <X className="absolute top-8 right-8 text-white cursor-pointer" size={32} onClick={() => setIsMenuOpen(false)} />
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-2xl mb-4">
              <span className="text-brand-navy font-serif text-4xl font-black">A</span>
            </div>
            {NAV_LINKS.map((link) => (
              <button 
                key={link.href} 
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-serif font-bold text-white hover:text-brand-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#admissions')}
              className="bg-brand-gold text-brand-navyDark px-12 py-4 rounded-md text-lg font-black uppercase tracking-widest mt-4"
            >
              Start Enrollment
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-brand-navyDark">
        {SLIDES.map((slide, index) => {
          const isMainSlide = index === 0;
          const slideImage = isMainSlide ? SCHOOL_BUILDING_IMAGE : slide.image;
          return (
            <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 z-0">
                <div 
                  className={`w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-linear ${index === currentSlide ? 'scale-100' : 'scale-110'} ${isMainSlide ? 'image-blend-overlay' : ''}`}
                  style={{ backgroundImage: `url(${slideImage})` }}
                />
                <div className={`absolute inset-0 ${isMainSlide ? 'hero-gradient' : 'bg-brand-navyDark/60'}`}></div>
              </div>
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <div className={`max-w-4xl text-white transform transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-[2px] w-12 bg-brand-gold"></div>
                      <span className="text-brand-gold text-sm font-black uppercase tracking-[0.3em] drop-shadow-md">{slide.highlight}</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-serif font-black mb-8 leading-[1.1] text-shadow-lg drop-shadow-2xl">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className={word.toLowerCase().includes('leaders') || word.toLowerCase().includes('wisdom') ? 'text-brand-gold italic' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                  </h2>
                  <p className="text-lg md:text-xl mb-12 max-w-xl text-slate-200 leading-relaxed font-light drop-shadow-md">
                      {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <button onClick={() => scrollToSection('#admissions')} className="bg-brand-gold hover:bg-brand-goldLight text-brand-navyDark px-10 py-5 rounded-md font-black uppercase tracking-widest transition-all shadow-2xl active:scale-95">
                      {slide.ctaPrimary}
                    </button>
                    <button onClick={() => scrollToSection('#about')} className="group bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-md font-bold transition-all flex items-center gap-3 active:scale-95">
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform">
                          <Play size={16} fill="currentColor" />
                      </div>
                      {slide.ctaSecondary}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="absolute bottom-0 left-0 w-full hidden lg:block z-20 pointer-events-none">
          <div className="container mx-auto px-8 mb-[-40px]">
            <div className="grid grid-cols-4 gap-8 bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl pointer-events-auto shadow-2xl">
                {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col items-center border-r border-white/10 last:border-0">
                    <div className="text-3xl font-serif font-black text-brand-gold mb-1">{stat.value}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">{stat.label}</div>
                </div>
                ))}
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-4 right-4 z-30 flex justify-between pointer-events-none md:px-8">
          <button onClick={prevSlide} className="pointer-events-auto p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md text-white transition-all"><ChevronLeft size={32} /></button>
          <button onClick={nextSlide} className="pointer-events-auto p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md text-white transition-all"><ChevronRight size={32} /></button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 lg:pt-48 bg-brand-light relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-gold/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
              <img src={SCHOOL_BUILDING_IMAGE} className="rounded-2xl shadow-3xl z-10 relative h-[600px] w-full object-cover transition-all duration-700" alt="Campus Building" />
              <div className="absolute top-8 left-8 z-20 bg-brand-navy p-6 rounded-xl shadow-2xl">
                <div className="text-brand-gold text-4xl font-black font-serif">15+</div>
                <div className="text-white text-xs uppercase tracking-widest mt-1">Years of Legacy</div>
              </div>
            </div>
            <div>
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Institution</span>
              <h3 className="text-5xl font-serif font-black text-brand-navy mb-8 leading-tight">Excellence in <br />Knowledge and <span className="text-brand-gold italic">Character</span></h3>
              <p className="text-slate-500 mb-12 leading-relaxed">Ambassadors College, Ile-Ife, is a premier private secondary school providing high-quality education focused on academic excellence and moral rectitude. Our mission is to raise global leaders who are academically sound and morally upright.</p>
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-navy flex items-center justify-center rounded-2xl shadow-lg text-brand-gold"><BookOpen size={24} /></div>
                  <h4 className="font-black text-brand-navy uppercase tracking-widest text-sm">Academic Depth</h4>
                  <p className="text-sm text-slate-500">Rigorous integrated curriculum focused on STEM, Arts, and Business.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-gold flex items-center justify-center rounded-2xl shadow-lg text-brand-navyDark"><Award size={24} /></div>
                  <h4 className="font-black text-brand-navy uppercase tracking-widest text-sm">Moral Legacy</h4>
                  <p className="text-sm text-slate-500">Character education programs built on a strong ethical foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="academics" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Learning Paths</span>
            <h3 className="text-5xl font-serif font-black text-brand-navy mb-6 italic">Empowering Global Minds</h3>
            <p className="text-slate-500">A comprehensive academic journey designed to foster curiosity and competence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {PROGRAMS.map((prog, i) => (
              <div key={i} className="group bg-brand-light p-10 rounded-[2rem] border border-slate-100 transition-all hover:-translate-y-4 hover:shadow-2xl">
                <div className="w-16 h-16 bg-brand-navy flex items-center justify-center rounded-xl mb-8 group-hover:bg-brand-gold transition-colors text-brand-gold group-hover:text-brand-navy">
                  {prog.icon === 'BookOpen' && <BookOpen size={32} />}
                  {prog.icon === 'GraduationCap' && <GraduationCap size={32} />}
                  {prog.icon === 'Award' && <Award size={32} />}
                </div>
                <h4 className="text-2xl font-serif font-black text-brand-navy mb-4">{prog.title}</h4>
                <p className="text-slate-500 mb-8">{prog.description}</p>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors">
                  View Syllabus <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Detail Section */}
      <section id="admissions" className="py-32 bg-brand-navyDark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Join Our Community</span>
              <h3 className="text-5xl font-serif font-black mb-8 leading-tight">Ready to Enroll Your Child?</h3>
              <p className="text-slate-300 mb-10 leading-relaxed">Admission into Ambassadors College is competitive and based on merit. We seek students who are ready to challenge themselves and contribute to our thriving community.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center flex-shrink-0 font-serif font-bold text-brand-gold">1</div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Purchase Form</h5>
                    <p className="text-sm text-slate-400">Available at the school admin office or apply online.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center flex-shrink-0 font-serif font-bold text-brand-gold">2</div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Entrance Examination</h5>
                    <p className="text-sm text-slate-400">Computer-based tests in Mathematics and English.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center flex-shrink-0 font-serif font-bold text-brand-gold">3</div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Interview Session</h5>
                    <p className="text-sm text-slate-400">A brief meeting with parents and the student candidate.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-3xl">
              <h4 className="text-2xl font-serif font-black text-brand-navy mb-8">Quick Inquiry</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Parent's Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-lg p-4 text-slate-800 focus:ring-2 focus:ring-brand-gold" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border-none rounded-lg p-4 text-slate-800 focus:ring-2 focus:ring-brand-gold" placeholder="+234..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Class of Interest</label>
                  <select className="w-full bg-slate-50 border-none rounded-lg p-4 text-slate-800 focus:ring-2 focus:ring-brand-gold">
                    <option>JSS 1</option>
                    <option>JSS 2</option>
                    <option>SSS 1</option>
                    <option>Transfer</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Message (Optional)</label>
                  <textarea className="w-full bg-slate-50 border-none rounded-lg p-4 text-slate-800 h-32 focus:ring-2 focus:ring-brand-gold" placeholder="Any specific questions?"></textarea>
                </div>
                <button className="w-full bg-brand-navy text-brand-gold font-black uppercase tracking-widest py-5 rounded-lg hover:bg-brand-navyDark transition-colors flex items-center justify-center gap-3">
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-32 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Educators</span>
            <h3 className="text-5xl font-serif font-black text-brand-navy italic">Dedicated Professionals</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {FACULTY.map((member, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group">
                <div className="h-80 overflow-hidden relative">
                  <img src={member.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt={member.name} />
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-10 text-center">
                  <h4 className="text-2xl font-serif font-black text-brand-navy mb-2">{member.name}</h4>
                  <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm italic">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Visual Journey</span>
              <h3 className="text-5xl font-serif font-black text-brand-navy">Life at Ambassadors</h3>
            </div>
            <button className="flex items-center gap-3 bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-gold transition-colors">
              Explore Album <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl group cursor-pointer relative shadow-lg">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="Gallery" />
                <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Search className="text-white" size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-32 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Updates</span>
            <h3 className="text-5xl font-serif font-black text-brand-navy mb-6 italic">News & Happenings</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {NEWS.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full group">
                <div className="h-56 overflow-hidden relative">
                  <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={item.title} />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-navyDark px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest">{item.category}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <Calendar size={14} className="text-brand-gold" /> {item.date}
                  </div>
                  <h4 className="text-xl font-serif font-black text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm mb-8 flex-grow">{item.excerpt}</p>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-navy group-hover:gap-4 transition-all">
                    Read More <ArrowRight size={14} className="text-brand-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-white">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Voices</span>
              <h3 className="text-5xl font-serif font-black mb-10 italic">What Our Community Says</h3>
              <div className="space-y-12">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="flex gap-8 items-start bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-gold">
                      <img src={t.image} className="w-full h-full object-cover" alt={t.name} />
                    </div>
                    <div>
                      <p className="text-slate-200 text-lg italic mb-6 leading-relaxed">"{t.text}"</p>
                      <h5 className="font-serif font-bold text-brand-gold text-xl">{t.name}</h5>
                      <p className="text-white/40 text-xs font-black uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="bg-brand-gold/10 p-12 rounded-[3rem] border border-brand-gold/20">
                <div className="text-brand-gold text-8xl font-serif mb-8 opacity-20">"</div>
                <p className="text-white text-3xl font-serif font-bold leading-tight mb-12">Excellence is not an act, but a habit. We build that habit here daily.</p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy"><GraduationCap size={24} /></div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"><Users size={24} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Get in Touch</span>
              <h3 className="text-5xl font-serif font-black text-brand-navy mb-8">We're Here to Help</h3>
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-brand-light flex items-center justify-center rounded-2xl text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-all shadow-md"><MapPin size={24} /></div>
                  <div>
                    <h5 className="font-black text-brand-navy uppercase tracking-widest text-xs mb-2">Location</h5>
                    <p className="text-slate-500 text-sm">Km 5, Ife-Ibadan Expressway, Ile-Ife, Osun State.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-brand-light flex items-center justify-center rounded-2xl text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-all shadow-md"><Phone size={24} /></div>
                  <div>
                    <h5 className="font-black text-brand-navy uppercase tracking-widest text-xs mb-2">Call Us</h5>
                    <p className="text-slate-500 text-sm">+234 (0) 803 123 4567<br />+234 (0) 805 987 6543</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-brand-light flex items-center justify-center rounded-2xl text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-all shadow-md"><Mail size={24} /></div>
                  <div>
                    <h5 className="font-black text-brand-navy uppercase tracking-widest text-xs mb-2">Email</h5>
                    <p className="text-slate-500 text-sm">info@ambassadorscollegeife.com<br />admissions@ambassadorscollegeife.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-brand-light rounded-3xl p-10 md:p-16 border border-slate-100 shadow-xl">
                <div className="flex items-center gap-3 mb-10">
                  <MessageSquare className="text-brand-gold" />
                  <h4 className="text-2xl font-serif font-black text-brand-navy">Send us a direct message</h4>
                </div>
                <form className="grid md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl p-5 text-slate-800 focus:ring-2 focus:ring-brand-gold transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl p-5 text-slate-800 focus:ring-2 focus:ring-brand-gold transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Subject</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl p-5 text-slate-800 focus:ring-2 focus:ring-brand-gold transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Your Message</label>
                    <textarea className="w-full bg-white border border-slate-200 rounded-xl p-5 text-slate-800 h-40 focus:ring-2 focus:ring-brand-gold transition-all"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="bg-brand-navy text-brand-gold px-12 py-5 rounded-xl font-black uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-95 transition-all">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navyDark text-white pt-32 pb-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl shadow-xl">
                  <span className="text-brand-navy font-serif text-4xl font-black">A</span>
                </div>
                <div>
                  <h1 className="font-serif text-3xl font-black tracking-tighter leading-none">AMBASSADORS</h1>
                  <p className="text-[11px] tracking-[0.4em] font-bold uppercase text-brand-gold mt-1">College, Ile-Ife</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-lg leading-relaxed mb-12 text-lg">Ambassadors College, Ile-Ife is a premier educational center committed to molding global citizens. We believe in the power of quality education to transform lives and communities.</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold hover:-translate-y-2 transition-all">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-10 italic">Navigation</h5>
              <ul className="space-y-5 text-slate-400 text-sm font-medium">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}><button onClick={() => scrollToSection(link.href)} className="hover:text-brand-gold transition-colors">{link.label}</button></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-10 italic">Academic Units</h5>
              <ul className="space-y-5 text-slate-400 text-sm font-medium">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Science Dept.</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Arts & Humanities</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Business Unit</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Technical Unit</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Sports Unit</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-10 italic">Newsletter</h5>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Stay updated with our latest achievements and school events.</p>
              <div className="relative">
                <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-gold" />
                <button className="absolute right-3 top-3 bg-brand-gold text-brand-navyDark p-2 rounded-lg hover:scale-105 transition-transform"><ArrowRight size={20} /></button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            <p>&copy; {new Date().getFullYear()} Ambassadors College, Ile-Ife. Designed for Excellence.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Portal Login <ExternalLink size={10} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
