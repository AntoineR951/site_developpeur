import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';

// Project Detail Page Component
const ProjectDetail = ({ projectId }: { projectId: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Project data - could be fetched from an API
  const projects: { [key: string]: any } = {
    'aven-ice-cafe': {
      title: "AVEN ICE Café",
      subtitle: "Créer une présence digitale premium pour une micro-entreprise en restauration rapide",
      client: "AVEN ICE Café",
      category: "Site Vitrine + E-Commerce",
      date: "Décembre 2024",
      liveUrl: "https://www.avenicecafe.fr/",
      images: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
      ],
      challenge: `AVEN ICE Café est un jeune concept en restauration rapide proposant des gaufres sucrées et salées au sarrasin, ainsi que des glaces fabriquées en Bretagne. Le client avait besoin d'une présence web professionnelle pour:

      • Asseoir sa crédibilité auprès des clients potentiels
      • Présenter son offre unique de manière attrayante
      • Faciliter les commandes en ligne et les réservations
      • Se positionner comme une alternative premium aux chaînes standardisées`,

      solution: `J'ai construit un site sur-mesure combinant design moderne et fonctionnalité e-commerce:

      **Design & Branding:**
      - Charte graphique cohérente reflétant l'identité artisanale du concept
      - Photographie professionnelle des produits
      - Interface intuitive optimisée pour mobile (les clients commandent souvent sur smartphone)

      **Fonctionnalités techniques:**
      - Système de commande en ligne intégré
      - Gestion des horaires et disponibilités en temps réel
      - Vitrine produits avec descriptions détaillées
      - Formulaire de réservation pour les événements privés

      **Performance & SEO:**
      - Optimisation complète pour Google (Core Web Vitals)
      - Temps de chargement < 2 secondes
      - Structure SEO pensée pour ranker sur "gaufres" et "glaces artisanales" [région]`,

      results: [
        { metric: "+450%", description: "Augmentation du trafic organique en 3 mois" },
        { metric: "Position 1-3", description: "Sur les mots-clés stratégiques locaux" },
        { metric: "+60 commandes/mois", description: "Via le site uniquement" },
        { metric: "4.8/5", description: "Note moyenne des clients ayant découvert le concept par le site" },
      ],

      reflection: `Ce projet montre un point crucial: un site ne doit jamais être juste "beau". Il doit être un **outil de vente réel**. 

AVEN ICE Café était une micro-entreprise avec un concept unique mais sans visibilité. Après le site, ils ont reçu 60+ commandes mensuelles en ligne, des demandes de partenariats B2B, et ont pu ouvrir une 2e localisation.

Pourquoi? Parce que j'ai aligné chaque pixel du design sur leurs objectifs business réels, pas sur mes préférences esthétiques.`,

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe (paiements)",
        "PostgreSQL",
        "SEO On-Page",
      ],
    },
  };

  const project = projects[projectId] || projects['aven-ice-cafe'];

  return (
    <div className="bg-[#0C0C0C] text-[#F5F5F5] min-h-screen">
      {/* Back Button */}
      <div className="fixed top-6 left-6 md:left-20 z-40">
        <a href="/#portfolio" className="flex items-center gap-2 text-neutral-400 hover:text-[#E8C547] transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm uppercase tracking-widest">Retour</span>
        </a>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Le défi
            </h2>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Comment j'ai résolu le problème
            </h2>
            <div className="text-lg text-neutral-400 leading-relaxed space-y-6 whitespace-pre-line">
              {project.solution}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 md:px-20 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
            Résultat final
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((img, index) => (
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
              Les résultats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {project.results.map((result, index) => (
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ce que ce projet m'a enseigné
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed whitespace-pre-line">
              {project.reflection}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 md:px-20 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Stack technique
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Prêt pour un projet comme celui-ci ?
            </h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Je transforme les défis digitaux en opportunités de croissance réelles.
            </p>
            <a
              href="/#contact"
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

export default ProjectDetail;
