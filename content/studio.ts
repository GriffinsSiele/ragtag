export const studio = {
  name: "Ragtag Studios",
  tagline: "Crafting stories for a global audience",
  kicker: "Film and sound production",
  blurb:
    "Ragtag Studios is a film and sound production company committed to producing high-quality content that celebrates diverse stories and culture. We specialize in creating compelling visual and auditory experiences for film, television, and digital media. Our team comprises experienced professionals passionate about storytelling and dedicated to delivering exceptional results.",
  mission:
    "To empower African storytellers, promote cultural exchange, and create impactful content that resonates with global audiences, fostering community development and cultural growth through film and sound.",
  vision:
    "To be a leading global production house recognized for producing innovative, authentic stories that inspire, entertain, and connect people worldwide.",
  close:
    "At Ragtag Studios, we believe in the power of storytelling to connect, inspire, and entertain. We are committed to pushing creative boundaries and delivering innovative solutions that exceed expectations. Let us help you bring your vision to life.",
};

export const values = [
  {
    title: "Authenticity",
    icon: "heart" as const,
    body: "We honor and celebrate widespread, diverse narratives and cultural heritage.",
  },
  {
    title: "Collaboration",
    icon: "share-2" as const,
    body: "We work closely with local talent and international partners to foster a collaborative environment.",
  },
  {
    title: "Innovation",
    icon: "zap" as const,
    body: "We embrace creativity and utilize cutting-edge technology to push creative boundaries.",
  },
  {
    title: "Community",
    icon: "home" as const,
    body: "We are committed to supporting community development through storytelling and training initiatives.",
  },
  {
    title: "Excellence",
    icon: "award" as const,
    body: "We strive for the highest standards in every project, delivering exceptional quality.",
  },
];

export const goals = [
  "Produce at least two feature films and three short films annually, showcasing diverse African stories.",
  "Establish a mentorship program for emerging filmmakers, actors, artistes and sound designers.",
  "Partner with international distributors to ensure global reach for our content.",
  "Create educational workshops and training programs focused on film production and storytelling.",
  "Increase the representation of African-made content on global streaming platforms and film festivals.",
];

export const services = [
  {
    slug: "concept",
    title: "Concept development",
    icon: "edit-3" as const,
    image: "/media/script.jpg",
    summary:
      "From first spark to a production-ready bible: positioning, world, and a story that can travel.",
    points: [
      "Story architecture",
      "Audience and market framing",
      "Series and feature bibles",
      "Treatment development",
    ],
  },
  {
    slug: "script",
    title: "Scriptwriting",
    icon: "book-open" as const,
    image: "/media/clapper.jpg",
    summary:
      "Scripts written with cultural precision and cinematic pace, ready for directors, talent, and financiers.",
    points: [
      "Feature and short screenplays",
      "Episode outlines",
      "Dialogue polish",
      "Script coverage",
    ],
  },
  {
    slug: "filming",
    title: "Filming",
    icon: "video" as const,
    image: "/media/film.jpg",
    summary:
      "Full production units for any scale, with cinematography that holds on a festival screen and a phone.",
    points: [
      "Director of photography",
      "Location and studio",
      "Talent and crew",
      "Production management",
    ],
  },
  {
    slug: "editing",
    title: "Editing",
    icon: "film" as const,
    image: "/media/edit.jpg",
    summary:
      "Picture editorial that protects performance, rhythm, and the cut the story actually needs.",
    points: [
      "Offline and online",
      "Color finishing",
      "Titles and graphics",
      "Delivery masters",
    ],
  },
  {
    slug: "sound",
    title: "Sound design",
    icon: "volume-2" as const,
    image: "/media/sound.jpg",
    summary:
      "Sound as storytelling: location capture, design, score collaboration, and mix for cinema or streaming.",
    points: [
      "Production sound",
      "Design and Foley",
      "Music supervision",
      "Theatrical and broadcast mix",
    ],
  },
];

export const work = [
  {
    slug: "feature-cinema",
    title: "Feature cinema",
    type: "Feature",
    year: "Slate",
    image: "/media/work-1.jpg",
    logline:
      "Long-form African stories built for festivals, theatrical windows, and global streaming.",
  },
  {
    slug: "short-form",
    title: "Short form",
    type: "Short",
    year: "Slate",
    image: "/media/work-2.jpg",
    logline:
      "Concentrated films and artist commissions that travel the festival circuit with force.",
  },
  {
    slug: "television",
    title: "Television",
    type: "Television",
    year: "Slate",
    image: "/media/work-3.jpg",
    logline:
      "Series worlds with the patience of cinema and the pulse of contemporary television.",
  },
  {
    slug: "digital",
    title: "Digital originals",
    type: "Digital",
    year: "Slate",
    image: "/media/work-4.jpg",
    logline:
      "Premium digital work for platforms that still demand craft, not content mills.",
  },
  {
    slug: "sound-worlds",
    title: "Sound worlds",
    type: "Sound",
    year: "Studio",
    image: "/media/work-5.jpg",
    logline:
      "Original sound design and mix for picture, installations, and artist projects.",
  },
  {
    slug: "studio-language",
    title: "Studio language",
    type: "In house",
    year: "Ongoing",
    image: "/media/work-6.jpg",
    logline:
      "The visual and sonic grammar we bring to every collaboration, from first look to delivery.",
  },
];

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/training", label: "Training" },
];
