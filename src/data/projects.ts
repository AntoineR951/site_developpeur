export const projectsData: { [key: string]: any } = {
  'aven-ice-cafe': {
    id: 'aven-ice-cafe',
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
- Interface intuitive optimisée pour mobile

**Fonctionnalités techniques:**
- Système de commande en ligne intégré
- Gestion des horaires et disponibilités en temps réel
- Vitrine produits avec descriptions détaillées
- Formulaire de réservation pour événements privés

**Performance & SEO:**
- Optimisation complète pour Google
- Temps de chargement < 2 secondes
- Structure SEO pour ranker sur mots-clés stratégiques`,
    results: [
      { metric: "+450%", description: "Augmentation du trafic organique en 3 mois" },
      { metric: "Position 1-3", description: "Sur les mots-clés stratégiques locaux" },
      { metric: "+60 commandes/mois", description: "Via le site uniquement" },
      { metric: "4.8/5", description: "Note moyenne des clients" },
    ],
    reflection: `Ce projet montre un point crucial: un site ne doit jamais être juste 'beau'. Il doit être un outil de vente réel.

AVEN ICE Café était une micro-entreprise avec un concept unique mais sans visibilité. Après le site, ils ont reçu 60+ commandes mensuelles en ligne et ont pu ouvrir une 2e localisation.

Pourquoi? Parce que j'ai aligné chaque pixel du design sur leurs objectifs business réels.`,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "SEO"],
    description: "Site vitrine et e-commerce pour AVEN ICE Café - un concept de gaufres bretonnes. +450% de trafic, +60 commandes/mois",
    ogImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
  },
  'creaboite': {
    id: 'creaboite',
    title: "Creaboite",
    subtitle: "SaaS juridique - Plateforme de gestion documentaire pour avocats",
    client: "Creaboite",
    category: "SaaS / Légal",
    date: "Mars 2024",
    liveUrl: "https://www.creaboite.fr/",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    ],
    challenge: `Creaboite visait à disrupter le secteur juridique avec une plateforme SaaS accessible aux petits cabinets d'avocats. Le défi était de:

• Créer une UX intuitive pour des utilisateurs peu tech
• Gérer de la données sensibles en toute sécurité
• Concevoir une facturation flexible et scalable
• Établir la confiance auprès du secteur légal`,
    solution: `J'ai développé une plateforme entièrement sur-mesure:

**Architecture technique:**
- Backend scalable avec Node.js
- Base de données PostgreSQL chiffrée
- API RESTful sécurisée avec JWT
- Infrastructure cloud optimisée

**Frontend:**
- Interface Claire et intuitive
- Responsive design pour tous devices
- Tableaux de bord personnalisables
- Système de permissions granulaires

**Intégrations:**
- Paiement Stripe intégré
- Export PDF automatisé
- Webhooks pour notifications`,
    results: [
      { metric: "50+ avocats", description: "Clients actifs en 6 mois" },
      { metric: "€25k/mois", description: "ARR généré" },
      { metric: "99.9%", description: "Uptime garanti" },
      { metric: "0 breach", description: "Aucune violation de sécurité" },
    ],
    reflection: `Les produits SaaS réussis ne sont pas beaux - ils résolvent des problèmes réels. Creaboite économise aux avocats 10+ heures par mois. C'est ça qui compte.`,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "JWT", "Docker", "AWS"],
    description: "Plateforme SaaS pour les cabinets d'avocats - Gestion documentaire sécurisée et scalable",
    ogImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
  },
  'laura-dauzonne': {
    id: 'laura-dauzonne',
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
    challenge: `Laura Dauzonne, artiste peintre émergente, avait besoin de:

• Mettre en avant ses œuvres avec qualité image optimale
• Vendre ses créations en ligne
• Établir sa présence dans le monde de l'art
• Créer une galerie professionnelle`,
    solution: `Portfolio minimaliste et haute performance:

**Design:**
- Interface épurée mettant l'art en avant
- Galerie fullscreen haute résolution
- Typographie raffinée et cohérente

**E-commerce:**
- Système de vente intégré
- Gestion des stocks
- Shipping intégré (calcul automatique)`,
    results: [
      { metric: "€15k", description: "Ventes en ligne en 1 an" },
      { metric: "80%", description: "Trafic organique" },
      { metric: "5★", description: "Note moyenne (25+ avis)" },
    ],
    reflection: `Les portfolios d'artistes doivent servir le travail, pas le détourner. Ici, chaque élément de design supporte la beauté des œuvres.`,
    technologies: ["React", "TypeScript", "Tailwind", "Stripe", "Vercel"],
    description: "Portfolio et galerie en ligne pour artiste peintre - €15k de ventes générées",
    ogImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
  },
};

export const projects = Object.values(projectsData).map(({ id, title, cat: category, img: mainImage }) => ({
  id,
  title,
  cat: category,
  img: mainImage,
}));

export const projects_visual = [
  { id: "creaboite", title: "Creaboite", cat: "SaaS / Légal", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" },
  { id: "laura-dauzonne", title: "Laura Dauzonne", cat: "Portfolio / Art", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" },
  { id: "kamy-wedding", title: "Kamy Wedding", cat: "Event / Paris", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop" },
  { id: "immosenart", title: "Immosenart", cat: "Immobilier", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop" },
  { id: "aven-ice-cafe", title: "Aven Ice Café", cat: "Food & Beverage", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" },
  { id: "beeinvest", title: "Beeinvest", cat: "Finance", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
];
