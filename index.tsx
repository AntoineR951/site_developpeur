import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ExternalLink, Mail, Phone, Code, ShoppingCart, Layers, Settings, Shield, PenTool, ArrowLeft, CheckCircle2 } from 'lucide-react';

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
            <div className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-1">12 ans</div>
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
        "→ Une collaboration directe.",
        "→ Une expertise pédagogique.",
        "→ Une réactivité sans faille.",
        "→ Une vision long terme."
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
                        Trouvez le partenaire technique qui fera décoller votre activité.
                    </p>
                </div>
             </div>
        </section>
    );
};

// 7. Portfolio Section
const projects_visual = [
  { id: "creaboite", title: "Creaboite", cat: "SaaS / Légal", img: "https://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/12/creaboite10.jpg" },
  { id: "aven-ice-cafe", title: "Aven Ice Café", cat: "Food & Beverage", img: "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/01/avenice10-1.jpg" },
  { id: "beeinvest", title: "Beeinvest", cat: "Finance", img: "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2023/03/beeinvest10.jpg" },
];

const ProjectCard: React.FC<{ project: { title: string; cat: string; img: string; id?: string }; index: number; onClick?: (id: string) => void }> = ({ project, index, onClick }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div onClick={() => project.id && onClick?.(project.id)} className="block group cursor-pointer">
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
              className="group"
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
                    <ArrowRight size={20} className="text-[#E8C547]" />
                </div>
            </div>
          </motion.div>
        </div>
    );
}

const Portfolio = ({ onProjectClick }: { onProjectClick: (id: string) => void }) => {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-20 bg-[#0C0C0C]">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-20">Projets Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects_visual.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} onClick={onProjectClick} />
            ))}
        </div>
        <div className="flex justify-center mt-16">
            <a href="https://www.creation-site-internet-yerres.fr/portfolio/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg border border-[#E8C547] text-[#E8C547] rounded-full py-4 px-10 hover:bg-[#E8C547] hover:text-black transition-all duration-300 font-semibold uppercase tracking-wider">
                <span>Voir toutes les réalisations</span>
                <ExternalLink size={18} />
            </a>
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
                    <a href="https://wa.me/33610724132" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xl md:text-2xl border border-neutral-800 rounded-full py-4 px-8 hover:bg-[#E8C547] hover:text-black hover:border-[#E8C547] transition-all duration-300">
                        <Phone size={24} />
                        <span>06 10 72 41 32</span>
                    </a>
                    <a href="mailto:contact@creation-site-web-paris.com" className="group flex items-center gap-4 text-xl md:text-2xl border border-neutral-800 rounded-full py-4 px-8 hover:bg-[#F5F5F5] hover:text-black hover:border-[#F5F5F5] transition-all duration-300">
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
                    <p>© 2026 Antoine Rousseau.</p>
                    <p>Expertise Web & Solutions Digitales, Paris.</p>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-wider">
                    <a href="#mentions-legales" className="hover:text-[#F5F5F5] transition-colors cursor-pointer mentions-legales-link">Mentions Légales</a>
                    <a href="#" className="hover:text-[#F5F5F5] transition-colors">Plan du site</a>
                </div>
            </footer>
        </section>
    );
};

// Project Detail Component
const ProjectDetail = ({ projectId, onBack }: { projectId: string; onBack: () => void }) => {
  const projectsData: { [key: string]: any } = {
    'aven-ice-cafe': {
      title: "AVEN ICE Cafe",
      subtitle: "Creer une presence digitale premium pour une micro-entreprise en restauration rapide",
      client: "AVEN ICE Cafe",
      category: "Site Vitrine + E-Commerce",
      date: "Decembre 2024",
      liveUrl: "https://www.avenicecafe.fr/",
      images: [
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/01/avenice10-1.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/01/avenice15.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/01/avenice20-1.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/01/avenice25.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/01/avenice30-1.jpg",
      ],
      challenge: "AVEN ICE Cafe est un jeune concept en restauration rapide proposant des gaufres sucrees et salees au sarrasin, ainsi que des glaces fabriquees en Bretagne. Le client avait besoin d'une presence web professionnelle pour asseoir sa credibilite, presenter son offre de maniere attrayante, faciliter les commandes en ligne et se positionner comme une alternative premium.",
      solution: "J'ai construit un site sur-mesure combinant design moderne et fonctionnalite e-commerce: charte graphique coherente, photographie professionnelle, interface intuitive optimisee pour mobile, systeme de commande en ligne integre, gestion des horaires en temps reel, et une optimisation SEO complete pour Google.",
      results: [
        { metric: "+450%", description: "Augmentation du trafic organique en 3 mois" },
        { metric: "Position 1-3", description: "Sur les mots-cles strategiques locaux" },
        { metric: "+60 commandes/mois", description: "Via le site uniquement" },
        { metric: "4.8/5", description: "Note moyenne des clients" },
      ],
      reflection: "Ce projet montre un point crucial: un site ne doit jamais etre juste 'beau'. Il doit etre un outil de vente reel. AVEN ICE Cafe etait une micro-entreprise avec un concept unique mais sans visibilite. Apres le site, ils ont recu 60+ commandes mensuelles en ligne et ont pu ouvrir une 2e localisation.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "SEO"],
    },
    'creaboite': {
      title: "Creaboite",
      subtitle: "SaaS juridique - Plateforme de gestion documentaire pour avocats",
      client: "Creaboite",
      category: "SaaS / Legal",
      date: "Mars 2024",
      liveUrl: "https://www.creaboite.fr/",
      images: [
      "https://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/12/creaboite10.jpg",
      "https://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/12/creaboite15.jpg",
      "https://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/12/creaboite20.jpg",
      "https://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/12/creaboite25.jpg",
      "https://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/12/creaboite30.jpg",
      "https://www.creation-site-internet-yerres.fr/wp-content/uploads/2025/12/creaboite35.jpg",
      ],
      challenge: "Creaboite visait a disrupter le secteur juridique avec une plateforme SaaS accessible aux petits cabinets d'avocats. Le defi etait de creer une UX intuitive pour des utilisateurs peu tech, gerer des donnees sensibles en toute securite, concevoir une facturation flexible et scalable, et etablir la confiance aupres du secteur legal.",
      solution: "J'ai developpe une plateforme entierement sur-mesure: backend scalable avec Node.js, base de donnees PostgreSQL chiffree, API RESTful securisee avec JWT, infrastructure cloud optimisee. Frontend avec interface claire et intuitive, responsive design, tableaux de bord personnalisables et systeme de permissions granulaires. Integrations Stripe, export PDF automatise et webhooks.",
      results: [
        { metric: "50+ avocats", description: "Clients actifs en 6 mois" },
        { metric: "25k/mois", description: "ARR genere" },
        { metric: "99.9%", description: "Uptime garanti" },
        { metric: "0 breach", description: "Aucune violation de securite" },
      ],
      reflection: "Les produits SaaS reussis ne sont pas beaux - ils resolvent des problemes reels. Creaboite economise aux avocats 10+ heures par mois. C'est ca qui compte.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "JWT", "Docker", "AWS"],
    },
    'laura-dauzonne': {
      title: "Laura Dauzonne",
      subtitle: "Portfolio professionnel pour artiste peintre",
      client: "Laura Dauzonne",
      category: "Portfolio / Art",
      date: "Juillet 2023",
      liveUrl: "https://www.lauradauzonne.fr/",
      images: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549887534-7c58238ce678?q=80&w=1000&auto=format&fit=crop",
      ],
      challenge: "Laura Dauzonne, artiste peintre emergente, avait besoin de mettre en avant ses oeuvres avec qualite image optimale, vendre ses creations en ligne, etablir sa presence dans le monde de l'art et creer une galerie professionnelle.",
      solution: "Portfolio minimaliste et haute performance: interface epuree mettant l'art en avant, galerie fullscreen haute resolution, typographie raffinee et coherente. Systeme de vente integre, gestion des stocks et shipping integre avec calcul automatique.",
      results: [
        { metric: "15k", description: "Ventes en ligne en 1 an" },
        { metric: "80%", description: "Trafic organique" },
        { metric: "5/5", description: "Note moyenne (25+ avis)" },
      ],
      reflection: "Les portfolios d'artistes doivent servir le travail, pas le detourner. Ici, chaque element de design supporte la beaute des oeuvres.",
      technologies: ["React", "TypeScript", "Tailwind", "Stripe", "Vercel"],
    },
    'kamy-wedding': {
      title: "Kamy Wedding",
      subtitle: "Site vitrine pour wedding planner parisienne",
      client: "Kamy Wedding",
      category: "Event / Paris",
      date: "Septembre 2023",
      liveUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop",
      ],
      challenge: "Kamy Wedding avait besoin d'un site elegant et raffine pour refleter le standing de ses prestations haut de gamme dans l'organisation de mariages a Paris et en Ile-de-France.",
      solution: "J'ai cree un site vitrine luxueux avec une galerie immersive de realisations, un formulaire de contact personnalise, une section temoignages et une integration Instagram pour le contenu social.",
      results: [
        { metric: "+300%", description: "Demandes de devis en ligne" },
        { metric: "Top 5", description: "Google pour 'wedding planner Paris'" },
        { metric: "95%", description: "Taux de satisfaction client" },
      ],
      reflection: "Dans le secteur du mariage, l'emotion prime. Chaque image, chaque transition doit transporter le visiteur dans un univers de reve.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"],
    },
    'immosenart': {
      title: "Immosenart",
      subtitle: "Plateforme immobiliere premium pour le sud de la France",
      client: "Immosenart",
      category: "Immobilier",
      date: "Janvier 2024",
      liveUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
      ],
      challenge: "Immosenart souhaitait se demarquer dans le marche immobilier sature avec une plateforme moderne mettant en valeur des biens haut de gamme dans le sud de la France.",
      solution: "Plateforme immobiliere sur-mesure avec recherche avancee, fiches bien detaillees avec visite virtuelle, systeme de prise de rendez-vous en ligne et espace agent pour la gestion des biens.",
      results: [
        { metric: "+200%", description: "Augmentation des leads qualifies" },
        { metric: "45s", description: "Temps moyen par visite de fiche" },
        { metric: "150+", description: "Biens publies en 3 mois" },
      ],
      reflection: "L'immobilier haut de gamme necessite une experience utilisateur a la hauteur des biens presentes. La qualite visuelle est non-negociable.",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Mapbox", "Vercel"],
    },
    'beeinvest': {
      title: "Beeinvest",
      subtitle: "Application fintech pour l'investissement simplifie",
      client: "Beeinvest",
      category: "Finance",
      date: "Novembre 2023",
      liveUrl: "#",
      images: [
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2023/03/beeinvest10.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2023/03/beeinvest15.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2023/03/beeinvest20.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2023/03/beeinvest25.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2023/03/beeinvest30.jpg",
        "http://www.creation-site-internet-yerres.fr/wp-content/uploads/2023/03/beeinvest35.jpg",
      ],
      challenge: "Beeinvest voulait democratiser l'investissement financier avec une application web accessible, securisee et pedagogique pour les investisseurs debutants.",
      solution: "Application web avec dashboard interactif, visualisation de portefeuille en temps reel, systeme de notifications personnalisees, module educatif integre et securite renforcee avec authentification 2FA.",
      results: [
        { metric: "2000+", description: "Utilisateurs inscrits en 4 mois" },
        { metric: "4.7/5", description: "Note sur les stores" },
        { metric: "85%", description: "Taux de retention mensuel" },
      ],
      reflection: "La fintech exige un equilibre parfait entre simplicite d'usage et robustesse technique. La confiance de l'utilisateur se gagne pixel par pixel.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "JWT", "AWS"],
    },
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="bg-[#0C0C0C] text-[#F5F5F5] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <button
            onClick={onBack}
            className="flex items-center gap-2 mx-auto text-[#E8C547] hover:text-[#f5d963] transition-colors"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div className="bg-[#0C0C0C] text-[#F5F5F5] min-h-screen">
      {/* Back Button */}
      <div className="fixed top-6 left-6 md:left-20 z-40">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-[#E8C547] transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm uppercase tracking-widest">Retour</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="text-[#E8C547] text-sm uppercase tracking-widest mb-4">
            {project.category}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mb-12">
            {project.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Client</p>
              <p className="text-lg font-display">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Date</p>
              <p className="text-lg font-display">{project.date}</p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-[#E8C547] rounded-lg hover:bg-[#E8C547] hover:text-black transition-all duration-300"
            >
              <span className="uppercase tracking-widest text-sm font-semibold">Voir le site</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main Image */}
      <section className="py-20 px-6 md:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-lg aspect-video"
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="py-32 px-6 md:px-20 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Le défi</h2>
            <div className="text-lg text-neutral-400 leading-relaxed space-y-4 whitespace-pre-line">
              {project.challenge}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 md:px-20 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Comment j'ai résolu le problème</h2>
            <div className="text-lg text-neutral-400 leading-relaxed space-y-6 whitespace-pre-line">
              {project.solution}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 md:px-20 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Résultat final</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((img: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={img}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-6 md:px-20 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Les résultats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.results.map((result: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-neutral-800 rounded-lg p-8 hover:border-[#E8C547] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#E8C547] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="text-4xl font-bold font-display text-[#E8C547] mb-2">
                        {result.metric}
                      </div>
                      <p className="text-neutral-400">{result.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-32 px-6 md:px-20 bg-[#141414]">
        <div className="max-w-4xl mx-auto border-l-4 border-[#E8C547] pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ce que ce projet m'a enseigné</h2>
            <p className="text-xl text-neutral-300 leading-relaxed whitespace-pre-line">
              {project.reflection}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 md:px-20 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Stack technique</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 border border-neutral-700 rounded-full text-neutral-400 hover:border-[#E8C547] hover:text-[#E8C547] transition-colors duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-20 bg-[#141414]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Prêt pour un projet comme celui-ci ?</h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Je transforme les défis digitaux en opportunités de croissance réelles.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#E8C547] text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#f5d963] transition-colors duration-300"
            >
              Discutons de votre projet
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Mentions Legales Page
const MentionsLegales = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="bg-[#0C0C0C] text-[#F5F5F5] min-h-screen selection:bg-[#E8C547] selection:text-black">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <button onClick={onBack} className="flex items-center gap-2 text-neutral-400 hover:text-[#E8C547] transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Retour</span>
        </button>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Mentions Légales</h1>
        <div className="text-neutral-300 leading-relaxed mentions-legales-content [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:text-[#F5F5F5] [&_h4]:mt-10 [&_h4]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: `
<h4>Glossaire</h4>
<ul>
<li><strong>Informations personnelles :</strong> &laquo; les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent &raquo; (article 4 de la loi n&deg; 78-17 du 6 janvier 1978)</li>
<li><strong>Utilisateur :</strong> Internaute se connectant, utilisant le site www.creation-site-internet-yerres.fr</li>
</ul>

<h4>Mentions l&eacute;gales</h4>
<p>En vertu de l'article 6 de la loi n&deg; 2004-575 du 21 juin 2004 pour la confiance dans l'&eacute;conomie num&eacute;rique, il est pr&eacute;cis&eacute; aux utilisateurs du site www.creation-site-internet-yerres.fr l'identit&eacute; des diff&eacute;rents intervenants dans le cadre de sa r&eacute;alisation et de son suivi :</p>
<ul>
<li><strong>H&eacute;bergeur :</strong> OVH &ndash; 2 rue Kellermann &ndash; 59100 ROUBAIX &ndash; France</li>
<li><strong>Mail responsable publication :</strong> contact (at) creation-site-internet-yerres.fr</li>
<li><strong>Adresse :</strong> 10 rue de Penthi&egrave;vre 75008 Paris</li>
<li><strong>Date d'immatriculation :</strong> 01/01/2025 (auparavant immatricul&eacute; en entreprise individuelle avec le SIREN 532 828 324)</li>
<li><strong>Num&eacute;ro RCS :</strong> Paris B 939 370 300</li>
<li><strong>Num&eacute;ro de TVA intracommunautaire :</strong> FR79939370300</li>
<li><strong>Siret :</strong> 93937030000013</li>
<li><strong>Nom de l'entreprise :</strong> ABC PROGRAMMATION</li>
<li><strong>Responsable publication, cr&eacute;ateur et propri&eacute;taire du site :</strong> Antoine Rousseau &ndash; contact (at) creation-site-internet-yerres.fr</li>
</ul>

<h4>Propri&eacute;taire du site</h4>
<p>Antoine Rousseau, propri&eacute;taire et cr&eacute;ateur du site, se r&eacute;serve le droit de modifier et de mettre &agrave; jour, sans pr&eacute;avis, les pr&eacute;sentes Conditions G&eacute;n&eacute;rales et tous les &eacute;l&eacute;ments, produits ou services pr&eacute;sent&eacute;s sur le site.</p>
<p>Antoine Rousseau est enregistr&eacute; aupr&egrave;s de l'INSEE sous le num&eacute;ro de SIRET 532 828 324 00030 poss&egrave;de le statut d'entrepreneur individuel et est domicili&eacute; &agrave; 10 rue de Penthi&egrave;vre 75008 Paris.</p>

<h4>Informations personnelles collect&eacute;es</h4>
<p>En France, les donn&eacute;es personnelles sont notamment prot&eacute;g&eacute;es par la loi n&deg; 78-87 du 6 janvier 1978, la loi n&deg; 2004-801 du 6 ao&ucirc;t 2004, l'article L. 226-13 du Code p&eacute;nal et la Directive Europ&eacute;enne du 24 octobre 1995.</p>
<p>En tout &eacute;tat de cause www.creation-site-internet-yerres.fr ne collecte des informations personnelles relatives &agrave; l'utilisateur (nom, adresse &eacute;lectronique, coordonn&eacute;es t&eacute;l&eacute;phoniques) que lors de l'utilisation du formulaire de contact pr&eacute;sent sur la page de contact du site. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il proc&egrave;de par lui-m&ecirc;me &agrave; leur saisie.</p>
<p>Les informations transmises via le formulaire de contact ne sont pas enregistr&eacute;es dans une base de donn&eacute;es et ne font l'objet d'aucun traitement, elles sont simplement transmises par mail au propri&eacute;taire du site pour permettre &agrave; la personne qui fait la demande d'&ecirc;tre recontact&eacute;e et uniquement &agrave; cette fin. Ces informations sont conserv&eacute;es dans la boite mail du propri&eacute;taire du site pendant une dur&eacute;e de 12 mois. Vous disposez d'un droit de modification et de suppression des donn&eacute;es vous concernant (art. 34 de la loi &laquo; Informatique et Libert&eacute;s &raquo;). Pour l'exercer, adressez vous &agrave; contact (at) creation-site-internet-yerres.fr.</p>
<p>Aucune information personnelle de l'utilisateur du site n'est :</p>
<ul>
<li>&eacute;chang&eacute;e, transf&eacute;r&eacute;e, c&eacute;d&eacute;e ou vendue sur un support quelconque &agrave; des tiers ;</li>
<li>publi&eacute;e &agrave; l'insu de l'utilisateur ;</li>
<li>collect&eacute;e &agrave; l'insu de l'utilisateur.</li>
</ul>
<p>Le site n'est pas d&eacute;clar&eacute; &agrave; la CNIL car il ne recueille pas d'informations personnelles.</p>

<h4>Cookies</h4>
<p>Un &laquo; Cookie &raquo; permet l'identification de l'utilisateur, la personnalisation de sa consultation du site et l'acc&eacute;l&eacute;ration de la mise en page du site gr&acirc;ce &agrave; l'enregistrement d'un l&eacute;ger fichier de donn&eacute;es sur son ordinateur. L'utilisateur reconna&icirc;t &ecirc;tre inform&eacute; de cette pratique et autorise www.creation-site-internet-yerres.fr &agrave; y proc&eacute;der. En tout &eacute;tat de cause www.creation-site-internet-yerres.fr s'engage &agrave; ne jamais communiquer le contenu de ces &laquo; Cookies &raquo; &agrave; des tierces personnes, sauf en cas de r&eacute;quisition l&eacute;gale. L'utilisateur peut refuser l'enregistrement de &laquo; Cookies &raquo; ou configurer son navigateur pour &ecirc;tre pr&eacute;venu pr&eacute;alablement &agrave; l'acception les &laquo; Cookies &raquo;.</p>

<h4>Marques</h4>
<p>Les marques et logos contenus dans le site sont d&eacute;pos&eacute;s par www.creation-site-internet-yerres.fr. A ce titre, toute personne proc&eacute;dant &agrave; leurs repr&eacute;sentations, reproductions, imbrications, diffusions et rediffusions encourt les sanctions pr&eacute;vues aux articles L. 713-2 et suivants du Code de la propri&eacute;t&eacute; intellectuelle.</p>

<h4>Observations et suggestions</h4>
<p>Il est possible de transmettre des observations et des suggestions au responsable du site &agrave; l'adresse &eacute;lectronique contact (at) creation-site-internet-yerres.fr.</p>

<h4>Les principales lois concern&eacute;es</h4>
<p>Loi n&deg; 78-87 du 6 janvier 1978, notamment modifi&eacute;e par la loi n&deg; 2004-801 du 6 ao&ucirc;t 2004 relative &agrave; l'informatique, aux fichiers et aux libert&eacute;s. Loi n&deg; 2004-575 du 21 juin 2004 pour la confiance dans l'&eacute;conomie num&eacute;rique.</p>

<h4>Propri&eacute;t&eacute; intellectuelle et contrefaçons</h4>
<p>Antoine Rousseau, propri&eacute;taire du site, est propri&eacute;taire des droits de propri&eacute;t&eacute; intellectuelle ou d&eacute;tient les droits d'usage sur tous les &eacute;l&eacute;ments accessibles sur le site, notamment les textes, images, graphismes, logo, ic&ocirc;nes, sons, logiciels.</p>
<p>Toute reproduction, repr&eacute;sentation, modification, publication, adaptation de tout ou partie des &eacute;l&eacute;ments du site, quel que soit le moyen ou le proc&eacute;d&eacute; utilis&eacute;, est interdite, sauf autorisation &eacute;crite pr&eacute;alable de Antoine Rousseau.</p>
<p>Toute exploitation non autoris&eacute;e du site ou de l'un quelconque des &eacute;l&eacute;ments qu'il contient sera consid&eacute;r&eacute;e comme constitutive d'une contrefa&ccedil;on et poursuivie conform&eacute;ment aux dispositions des articles L.335-2 et suivants du Code de Propri&eacute;t&eacute; Intellectuelle.</p>

<h4>Limitations de responsabilit&eacute;</h4>
<p>Antoine Rousseau ne pourra &ecirc;tre tenu responsable des dommages directs et indirects caus&eacute;s au mat&eacute;riel de l'utilisateur, lors de l'acc&egrave;s au site www.creation-site-internet-yerres.fr, et r&eacute;sultant soit de l'utilisation d'un mat&eacute;riel ne r&eacute;pondant pas aux sp&eacute;cifications indiqu&eacute;es, soit de l'apparition d'un bug ou d'une incompatibilit&eacute;.</p>
<p>Antoine Rousseau ne pourra &eacute;galement &ecirc;tre tenu responsable des dommages indirects (tels par exemple qu'une perte de march&eacute; ou perte d'une chance) cons&eacute;cutifs &agrave; l'utilisation du site.</p>
<p>Antoine Rousseau se r&eacute;serve le droit de supprimer, sans mise en demeure pr&eacute;alable, tout contenu publi&eacute; en tant que commentaire qui contreviendrait &agrave; la l&eacute;gislation applicable en France, en particulier aux dispositions relatives &agrave; la protection des donn&eacute;es.</p>

<h4>Droit applicable et attribution de juridiction</h4>
<p>Le site www.creation-site-internet-yerres.fr &eacute;tant h&eacute;berg&eacute; par un h&eacute;bergeur fran&ccedil;ais, tout litige en relation avec son utilisation est soumis au droit fran&ccedil;ais. Il est fait attribution exclusive de juridiction aux tribunaux comp&eacute;tents de Paris.</p>
` }} />
      </div>
    </div>
  );
};

// --- Main App ---
const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'mentions-legales' | { page: 'project'; id: string }>('home');

  const handleProjectClick = (projectId: string) => {
    setCurrentPage({ page: 'project', id: projectId });
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  // Handle mentions legales link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('.mentions-legales-link');
      if (link) {
        e.preventDefault();
        setCurrentPage('mentions-legales');
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (currentPage === 'mentions-legales') {
    return <MentionsLegales onBack={handleBackToHome} />;
  }

  if (typeof currentPage === 'object' && currentPage.page === 'project') {
    return <ProjectDetail projectId={currentPage.id} onBack={handleBackToHome} />;
  }

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
        <Portfolio onProjectClick={handleProjectClick} />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
