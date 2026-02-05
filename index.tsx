import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ExternalLink, Mail, Phone, Code, ShoppingCart, Layers, Settings, Shield, PenTool } from 'lucide-react';

// --- Components ---

// 1. Custom Cursor
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#E8C547] pointer-events-none z-50 mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? '#E8C547' : 'transparent',
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    />
  );
};

// 2. Navigation
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference">
      <div className="text-xl font-bold font-display tracking-tighter text-[#F5F5F5]">
        ANTOINE ROUSSEAU
      </div>
      <a href="#contact" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#E8C547] transition-colors duration-300">
        Contact
      </a>
    </nav>
  );
};

// 3. Hero Section
const Hero = () => {
  const text = "Votre projet mérite quelqu'un qui s'en soucie vraiment.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="h-screen w-full flex flex-col justify-center px-6 md:px-20 relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block mr-2 md:mr-4 text-3xl md:text-6xl lg:text-7xl font-bold font-display leading-tight"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-20 flex flex-col gap-1"
      >
        <span className="text-[#E8C547] text-sm tracking-widest uppercase">Antoine Rousseau</span>
        <span className="text-neutral-400 text-sm">Artisan du Web & Partenaire Technique</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-20 animate-bounce"
      >
        <ArrowRight className="transform rotate-90 text-[#E8C547]" />
      </motion.div>
    </section>
  );
};

// 4. About Section
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="min-h-screen w-full py-20 px-6 md:px-20 bg-[#141414] flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <motion.div 
        className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
        transition={{ duration: 1, ease: [0.6, 0.01, 0, 0.95] }}
      >
        <img 
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" 
          alt="Antoine Rousseau"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-bold mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Une présence web qui génère des résultats concrets.
        </motion.h2>
        <motion.div
           className="text-lg md:text-xl text-neutral-400 leading-relaxed space-y-6"
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            Depuis 2017, j'accompagne les entreprises qui refusent les solutions génériques. Je transforme la complexité technique en leviers de croissance.
          </p>
          <p>
            <span className="text-[#E8C547]">Pas d'agence. Pas de bruits de couloir.</span> Juste une ligne directe avec un expert, votre vision, et une exécution sans faille.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-1">+200</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500">Projets livrés</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-1">8 ans</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500">D'expertise</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 4.5 Tech Stack Section
const TechStack = () => {
    // Using simple icons CDN for consistent, clean monochrome SVG logos
    const techs = [
        { name: "React", url: "https://cdn.simpleicons.org/react/F5F5F5" },
        { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/F5F5F5" },
        { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/F5F5F5" },
        { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/F5F5F5" },
        { name: "Vite", url: "https://cdn.simpleicons.org/vite/F5F5F5" },
        { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/F5F5F5" },
        { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/F5F5F5" },
        { name: "PHP", url: "https://cdn.simpleicons.org/php/F5F5F5" },
    ];

    return (
        <section className="py-20 bg-[#0C0C0C] border-y border-neutral-900 overflow-hidden">
            <div className="container mx-auto px-6 md:px-20 mb-10">
                <p className="text-[#E8C547] text-sm tracking-widest uppercase mb-2">Arsenal Technique</p>
                <h3 className="text-2xl font-display font-bold text-neutral-500">
                    Les outils que je maîtrise pour <span className="text-[#F5F5F5]">propulser vos projets</span>.
                </h3>
            </div>
            
            <div className="relative flex w-full overflow-hidden mask-gradient">
                 {/* Left Fade Gradient */}
                 <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10" />
                 {/* Right Fade Gradient */}
                 <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 30, // Adjust speed here
                        repeatType: "loop" 
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Double the list to create infinite loop effect */}
                    {[...techs, ...techs, ...techs].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 group cursor-default">
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 transition-transform">
                                <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xs text-neutral-600 uppercase tracking-wider group-hover:text-neutral-400 transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// 5. Services Section (Horizontal Scroll)
const services = [
  {
    title: "Sites Vitrines",
    desc: "Design impactant, performance maximale. Votre image de marque, sublimée pour convaincre.",
    icon: <Layers size={32} />
  },
  {
    title: "E-Commerce",
    desc: "Convertissez plus. Une boutique fluide, sécurisée et optimisée pour la vente pure.",
    icon: <ShoppingCart size={32} />
  },
  {
    title: "Apps Web",
    desc: "Des outils sur-mesure qui digitalisent et simplifient votre métier. Dashboards, SaaS, CRM.",
    icon: <Code size={32} />
  },
  {
    title: "WordPress",
    desc: "Un développement artisanal sur le CMS le plus puissant. Zéro template générique, 100% unique.",
    icon: <PenTool size={32} />
  },
  {
    title: "Maintenance",
    desc: "Votre sérénité avant tout. Mises à jour, sauvegardes et veille proactive. Je veille, vous dormez.",
    icon: <Settings size={32} />
  },
  {
    title: "Dépannage",
    desc: "Réactivité immédiate. Site hacké ou bug critique ? Analyse, diagnostic et résolution de crise.",
    icon: <Shield size={32} />
  }
];

const Services = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [xRange, setXRange] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
        if (contentRef.current) {
            const totalWidth = contentRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const range = totalWidth - viewportWidth;
            setXRange(range > 0 ? range : 0);
        }
    };
    
    // Initial calculation
    updateWidth();
    
    // Recalculate on resize
    window.addEventListener('resize', updateWidth);
    
    // Recalculate after a short delay to ensure fonts/layout are loaded
    const timer = setTimeout(updateWidth, 100);

    return () => {
        window.removeEventListener('resize', updateWidth);
        clearTimeout(timer);
    };
  }, []);

  // Fix: offset: ["start start", "end end"] ensures animation is perfectly synced with the sticky pinning.
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -xRange]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0C0C0C]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div ref={contentRef} style={{ x }} className="flex gap-10 pl-20 pr-20 w-max">
            <div className="min-w-[400px] flex flex-col justify-center pr-10">
                <h2 className="text-6xl font-display font-bold text-[#F5F5F5] leading-tight">
                    Expertise<br/> <span className="text-[#E8C547]">& Solutions</span>
                </h2>
                <p className="mt-6 text-neutral-400 max-w-xs">
                    Faites défiler pour découvrir comment je peux vous aider →
                </p>
            </div>
          {services.map((service, i) => (
            <div key={i} className="group relative h-[450px] w-[350px] bg-[#141414] border border-neutral-900 hover:border-[#E8C547] transition-colors duration-500 p-8 flex flex-col justify-between rounded-lg shrink-0">
              <div className="text-[#E8C547] opacity-80 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{service.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#E8C547] group-hover:text-black group-hover:border-[#E8C547] transition-all">
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 6. Why Me Section
const ReasonItem: React.FC<{ text: string; index: number }> = ({ text, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-lg md:text-2xl text-neutral-300 font-light"
        >
            {text}
        </motion.div>
    );
}

const WhyMe = () => {
    const reasons = [
        "→ Une collaboration directe. Vous m'appelez, je réponds.",
        "→ Une expertise pédagogique. Je traduis le technique en business.",
        "→ Une réactivité sans faille. Vos urgences deviennent les miennes.",
        "→ Une vision long terme. Je construis pour durer, pas pour jeter."
    ];

    return (
        <section className="py-32 px-6 md:px-20 bg-[#141414] min-h-screen flex flex-col justify-center">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-[#F5F5F5]">
                    L'excellence technique,<br/> la simplicité en plus.
                </h2>
                <div className="space-y-8">
                    {reasons.map((reason, index) => (
                        <ReasonItem key={index} text={reason} index={index} />
                    ))}
                </div>
                
                <div className="mt-20 pt-10 border-t border-neutral-800">
                    <p className="text-xl md:text-2xl text-[#E8C547] font-display">
                        Je ne suis pas un simple prestataire. Je suis le partenaire technique qui fera décoller votre activité.
                    </p>
                </div>
             </div>
        </section>
    );
};

// 7. Portfolio Section
const projects = [
  { title: "Creaboite", cat: "SaaS / Légal", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" },
  { title: "Laura Dauzonne", cat: "Portfolio / Art", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" },
  { title: "Kamy Wedding", cat: "Event / Paris", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop" },
  { title: "Immosenart", cat: "Immobilier", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop" },
  { title: "Aven Ice Café", cat: "Food & Beverage", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" },
  { title: "Beeinvest", cat: "Finance", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
];

const ProjectCard: React.FC<{ project: { title: string; cat: string; img: string }; index: number }> = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
            className="group cursor-pointer"
        >
            <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <motion.img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="flex justify-between items-end border-b border-neutral-800 pb-4 group-hover:border-[#E8C547] transition-colors duration-500">
                <div>
                    <h3 className="text-2xl font-bold font-display text-[#F5F5F5]">{project.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1 uppercase tracking-wider">{project.cat}</p>
                </div>
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink size={20} className="text-[#E8C547]" />
                </div>
            </div>
        </motion.div>
    );
}

const Portfolio = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#0C0C0C]">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-20">Projets Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
            ))}
        </div>
    </section>
  );
};

// 8. Testimonials
const Testimonials = () => {
    const testimonials = [
        { text: "Monsieur Rousseau est très compétent. Il maîtrise très bien son travail.", author: "Sofiane A." },
        { text: "Enfin un prestataire sérieux et disponible. Je recommande sans hésiter.", author: "Laurent G." },
        { text: "Site livré rapidement, exactement comme je l'imaginais.", author: "Julie P." }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 px-6 md:px-20 bg-[#141414] flex flex-col items-center text-center">
            <Star className="text-[#E8C547] w-8 h-8 mb-8" fill="#E8C547" />
            <div className="h-40 md:h-32 w-full max-w-3xl relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                        <p className="text-xl md:text-3xl font-display font-light leading-relaxed mb-6">
                            "{testimonials[current].text}"
                        </p>
                        <cite className="text-sm uppercase tracking-widest text-[#E8C547] not-italic">
                            — {testimonials[current].author}, 2024
                        </cite>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-[#E8C547]' : 'bg-neutral-700'}`} 
                    />
                ))}
            </div>
        </section>
    );
};

// 9. Contact / Footer
const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-20 bg-[#0C0C0C] min-h-[80vh] flex flex-col justify-between">
            <div className="max-w-4xl">
                <h2 className="text-5xl md:text-8xl font-display font-bold leading-none mb-12">
                    Parlons-en.<br/>
                    <span className="text-neutral-700"></span>
                </h2>
                <p className="text-xl text-neutral-400 mt-6 max-w-2xl">
                    Prêt à passer au niveau supérieur ? Discutons de votre prochain succès numérique.
                </p>
                
                <div className="flex flex-col md:flex-row gap-8 mt-16">
                    <a href="tel:0610724132" className="group flex items-center gap-4 text-xl md:text-2xl border border-neutral-800 rounded-full py-4 px-8 hover:bg-[#E8C547] hover:text-black hover:border-[#E8C547] transition-all duration-300">
                        <Phone size={24} />
                        <span>06 10 72 41 32</span>
                    </a>
                    <a href="mailto:contact@antoine-rousseau.fr" className="group flex items-center gap-4 text-xl md:text-2xl border border-neutral-800 rounded-full py-4 px-8 hover:bg-[#F5F5F5] hover:text-black hover:border-[#F5F5F5] transition-all duration-300">
                        <Mail size={24} />
                        <span>Envoyer un message</span>
                    </a>
                </div>
                
                <p className="mt-8 text-neutral-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Réponse sous 24h garantie.
                </p>
            </div>

            <footer className="flex flex-col md:flex-row justify-between items-end pt-20 border-t border-neutral-900 mt-20 text-neutral-600 text-sm">
                <div>
                    <p>© 2024 Antoine Rousseau.</p>
                    <p>Expertise Web & Solutions Digitales, Paris.</p>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-wider">
                    <a href="#" className="hover:text-[#F5F5F5] transition-colors">Mentions Légales</a>
                    <a href="#" className="hover:text-[#F5F5F5] transition-colors">Plan du site</a>
                </div>
            </footer>
        </section>
    );
};

// --- Main App ---
const App = () => {
  return (
    <div className="bg-[#0C0C0C] text-[#F5F5F5] selection:bg-[#E8C547] selection:text-black">
      <CustomCursor />
      <Navigation />
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <main>
        <Hero />
        <About />
        <TechStack />
        <Services />
        <WhyMe />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
