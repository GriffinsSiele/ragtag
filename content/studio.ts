export const studio = {
  name: "Ragtag Studios",
  tagline: "Crafting stories for a global audience",
  kicker: "Film and sound",
  blurb:
    "A film and sound studio for stories that can travel — features, series, and original sound, finished for a festival screen.",
  mission: "Empower storytellers. Make work that holds on a global screen.",
  vision: "A house known for authentic stories that move, not volume that fills a slate.",
  close: "Bring the story. We will build the picture and the sound.",
  location: "Commissions worldwide",
  emailLabel: "Write the studio",
};

export const formats = ["Feature", "Short", "Television", "Sound", "Digital", "Training"];

export const values = [
  {
    title: "Authenticity",
    icon: "heart" as const,
    body: "Honor the culture in the frame. No borrowed voices.",
  },
  {
    title: "Collaboration",
    icon: "share-2" as const,
    body: "Local talent. International partners. One standard.",
  },
  {
    title: "Innovation",
    icon: "zap" as const,
    body: "New tools, old craft. The cut still has to land.",
  },
  {
    title: "Community",
    icon: "home" as const,
    body: "Productions and training that leave a bench behind.",
  },
  {
    title: "Excellence",
    icon: "award" as const,
    body: "Festival screen or phone. Same finish.",
  },
];

export const goals = [
  "Two features and three shorts a year, built from original stories.",
  "A mentorship bench for filmmakers, actors, artistes, and sound designers.",
  "International distributors so the work can leave home.",
  "Workshops in picture, sound, and how a film actually travels.",
  "Studio-made work on festival slates and global platforms.",
];

export const services = [
  {
    slug: "concept",
    title: "Concept development",
    icon: "edit-3" as const,
    image: "/media/script.jpg",
    summary: "From first spark to a production-ready story document: positioning, world, and a story that can travel.",
    points: ["Story architecture", "Audience and market framing", "Series and feature documents", "Treatment development"],
  },
  {
    slug: "script",
    title: "Scriptwriting",
    icon: "book-open" as const,
    image: "/media/clapper.jpg",
    summary: "Scripts written with cultural precision and cinematic pace, ready for directors, talent, and financiers.",
    points: ["Feature and short screenplays", "Episode outlines", "Dialogue polish", "Script coverage"],
  },
  {
    slug: "filming",
    title: "Filming",
    icon: "video" as const,
    image: "/media/film.jpg",
    summary: "Full production units for any scale, with cinematography that holds on a festival screen and a phone.",
    points: ["Director of photography", "Location and studio", "Talent and crew", "Production management"],
  },
  {
    slug: "wardrobe",
    title: "Wardrobe",
    icon: "wardrobe" as const,
    image: "/media/portrait.jpg",
    summary:
      "Costume and character dressing from first look to set — period, contemporary, and designed pieces that hold in close-up.",
    points: ["Character boards", "Costume design", "On-set continuity", "Aging and breakdown"],
  },
  {
    slug: "editing",
    title: "Editing",
    icon: "film" as const,
    image: "/media/edit.jpg",
    summary: "Picture editorial that protects performance, rhythm, and the cut the story actually needs.",
    points: ["Offline and online", "Color finishing", "Titles and graphics", "Delivery masters"],
  },
  {
    slug: "sound",
    title: "Sound design",
    icon: "volume-2" as const,
    image: "/media/sound.jpg",
    summary: "Sound as storytelling: location capture, design, score collaboration, and mix for cinema or streaming.",
    points: ["Production sound", "Design and Foley", "Music supervision", "Theatrical and broadcast mix"],
  },
];

export const work = [
  {
    slug: "feature-cinema",
    title: "Feature cinema",
    type: "Feature",
    year: "In development",
    image: "/media/work-1.jpg",
    logline: "Long-form stories built for festivals, theatrical windows, and global streaming.",
    scope: "Festival · theatrical · streaming",
    credits: ["Story", "Picture", "Sound"],
    gallery: ["/media/work-1.jpg", "/media/set.jpg", "/media/lens.jpg"],
  },
  {
    slug: "short-form",
    title: "Short form",
    type: "Short",
    year: "In development",
    image: "/media/work-2.jpg",
    logline: "Concentrated films and artist commissions that travel the festival circuit with force.",
    scope: "Festival · artist commission",
    credits: ["Direction", "Picture", "Sound"],
    gallery: ["/media/work-2.jpg", "/media/film.jpg", "/media/portrait.jpg"],
  },
  {
    slug: "television",
    title: "Television",
    type: "Television",
    year: "In development",
    image: "/media/work-3.jpg",
    logline: "Series worlds with the patience of cinema and the pulse of contemporary television.",
    scope: "Series · limited series",
    credits: ["Writers room", "Picture", "Sound"],
    gallery: ["/media/work-3.jpg", "/media/crowd.jpg", "/media/night.jpg"],
  },
  {
    slug: "digital",
    title: "Digital originals",
    type: "Digital",
    year: "In development",
    image: "/media/work-4.jpg",
    logline: "Premium digital work for platforms that still demand craft, not content mills.",
    scope: "Platform · branded · original",
    credits: ["Concept", "Picture", "Finish"],
    gallery: ["/media/work-4.jpg", "/media/edit.jpg", "/media/hero.jpg"],
  },
  {
    slug: "sound-worlds",
    title: "Sound worlds",
    type: "Sound",
    year: "Studio",
    image: "/media/work-5.jpg",
    logline: "Original sound design and mix for picture, installations, and artist projects.",
    scope: "Cinema · installation · artist",
    credits: ["Design", "Foley", "Mix"],
    gallery: ["/media/work-5.jpg", "/media/sound.jpg", "/media/culture.jpg"],
  },
  {
    slug: "studio-language",
    title: "Studio language",
    type: "In house",
    year: "Ongoing",
    image: "/media/work-6.jpg",
    logline: "The visual and sonic grammar we bring to every collaboration, from first look to delivery.",
    scope: "House style · finishing",
    credits: ["Grade", "Sound", "Delivery"],
    gallery: ["/media/work-6.jpg", "/media/about.jpg", "/media/workshop.jpg"],
  },
];

export const socials = [
  { name: "kick" as const, href: "https://kick.com", label: "Kick" },
  { name: "instagram" as const, href: "https://instagram.com", label: "Instagram" },
  { name: "youtube" as const, href: "https://youtube.com", label: "YouTube" },
  { name: "linkedin" as const, href: "https://linkedin.com", label: "LinkedIn" },
];

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/training", label: "Training" },
];
