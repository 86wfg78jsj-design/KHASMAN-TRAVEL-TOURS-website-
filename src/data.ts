import { TourPackage, TransportOption, Testimonial, BlogPost } from "./types";

// High-quality generated image references
export const HERO_IMAGE = "/src/assets/images/hero_mountain_1779428316885.png";
export const PRADO_IMAGE = "/src/assets/images/prado_tz_1779428339529.png";
export const HONEYMOON_IMAGE = "/src/assets/images/honeymoon_resort_1779428362432.png";
export const FAMILY_IMAGE = "/src/assets/images/family_adventure_1779428387171.png";
export const KHAPLU_IMAGE = "/src/assets/images/khaplu_palace_1779512969520.png";
export const DEOSAI_IMAGE = "/src/assets/images/deosai_plains_1779513158816.png";
export const SKARDU_BLOSSOM_IMAGE = "/src/assets/images/skardu_blossom_1779513296799.png";
export const SKARDU_LUXURY_IMAGE = "/src/assets/images/skardu_luxury_tour_1779516735661.png";
export const HUNZA_FORT_IMAGE = "/src/assets/images/hunza_fort_tour_1779516760485.png";
export const MANTHOKHA_IMAGE = "/src/assets/images/manthokha_waterfall_1779520043416.png";

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "skardu-luxury",
    title: "Skardu Luxury Tour",
    location: "Skardu",
    duration: "6 Days, 5 Nights",
    price: {
      PKR: 195000,
      USD: 700
    },
    image: SKARDU_LUXURY_IMAGE,
    rating: 4.9,
    category: "featured",
    description: "Relax amidst pristine turquoise lakes and sandy high-altitude dunes in Skardu. Features Shangrila Lake resort and magnificent Shigar Valley.",
    highlights: ["Shangrila Lake resort stay", "Manthokha Waterfall excursion", "Deosai Plains safari", "Lower & Upper Kachura Lakes", "Cold Desert Safaris on ATVs"]
  },
  {
    id: "hunza-tour",
    title: "Hunza Tour",
    location: "Hunza",
    duration: "5 Days, 4 Nights",
    price: {
      PKR: 145000,
      USD: 520
    },
    image: HUNZA_FORT_IMAGE,
    rating: 4.8,
    category: "featured",
    description: "Witness the magnificent color shift of Hunza's landscape. Traverse Altit & Baltit forts and enjoy pristine Karimabad.",
    highlights: ["Altit & Baltit Fort tours", "Attabad Lake boating", "Passu Cones viewport", "Khunjerab Pass (Pak-China border)"]
  },
  {
    id: "honeymoon-tour",
    title: "Honeymoon Tour",
    location: "Hunza",
    duration: "7 Days, 6 Nights",
    price: {
      PKR: 295000,
      USD: 1050
    },
    image: HONEYMOON_IMAGE,
    rating: 5.0,
    category: "honeymoon",
    description: "A tailor-made romantic odyssey with luxury stays at Serena Hunza / Luxus Grand Attabad. Private candlelight lakeside dinners and chauffeur-driven Prado transport.",
    highlights: ["Custom decorated Luxury honeymoon suite", "Private lakeside dining & photoshoot", "Daily luxury Prado transport", "Complimentary boat ride underPassu peaks"]
  },
  {
    id: "family-tour",
    title: "Family Tour",
    location: "Hunza",
    duration: "9 Days, 8 Nights",
    price: {
      PKR: 420000,
      USD: 1500
    },
    image: FAMILY_IMAGE,
    rating: 4.9,
    category: "family",
    description: "Designed for memories that bind. A fully supervised family tour with high-security luxury vehicles, interactive child-friendly activities, and modern parent comfort.",
    highlights: ["Private Toyota Prado TZ transport", "Family suites in premium hotels", "Interactive historical scavenger hunts", "Safe, family-friendly boat tours and safe strolls"]
  },
  {
    id: "khaplu-shigar-tour",
    title: "Khaplu & Shigar Tour",
    location: "Khaplu",
    duration: "8 Days, 7 Nights",
    price: {
      PKR: 350000,
      USD: 1250
    },
    image: KHAPLU_IMAGE,
    rating: 5.0,
    category: "featured",
    description: "Step back into royal comfort. Live like regional kings in the beautifully restored Serena Shigar Fort palace. Experience absolute serenity and premium hospitality.",
    highlights: ["Historic Amacha suite at Shigar Palace", "Traditional Balti organic cuisine tour", "Private tour of Khaplu Chaqchan Mosque", "Sunset photography session at Blind Lake"]
  },
  {
    id: "blossom-tour",
    title: "Blossom Tour",
    location: "Hunza & Skardu",
    duration: "6 Days, 5 Nights",
    price: {
      PKR: 165000,
      USD: 590
    },
    image: SKARDU_BLOSSOM_IMAGE,
    rating: 4.9,
    category: "featured",
    description: "Witness the magnificent pastel pink and white cherry blossoms blanketing Hunza & Skardu Valleys during early spring—an elite, deeply spiritual experience.",
    highlights: ["Cherry blossom garden pathways", "Karimabad local folk music evenings", "Traditional apricot mocktail greetings", "Aventurine spring-melt river rafting"]
  },
  {
    id: "skardu-manthokha-quick",
    title: "Quick Manthokha & Skardu Escape",
    location: "Skardu",
    duration: "3 Days, 2 Nights",
    price: {
      PKR: 85000,
      USD: 310
    },
    image: MANTHOKHA_IMAGE,
    rating: 4.8,
    category: "featured",
    description: "Experience Baltistan's magical water wonders in a fast-paced luxury getaway. Marvel at the cascading Manthokha Waterfall, boat on Upper Kachura Lake, and watch the sun set over the Cold Desert dunes.",
    highlights: ["Manthokha Waterfall private tour", "Upper Kachura wooden boat safari", "Sunset at Katpana Cold Desert dunes", "Dedicated mountain-pilot luxury SUV"]
  },
  {
    id: "hunza-quick-blitz",
    title: "3-Day Hunza Valley Blitz",
    location: "Hunza",
    duration: "3 Days, 2 Nights",
    price: {
      PKR: 89000,
      USD: 320
    },
    image: HUNZA_FORT_IMAGE,
    rating: 4.8,
    category: "featured",
    description: "A premium express escape designed for tight schedules. Admire the majestic Rakaposhi peak, cruise the pristine turquoise waters of Attabad Lake, and watch the sunset at Passu Cones in absolute comfort.",
    highlights: ["Private Attabad Lake speedboat cruise", "Passu Cones Golden Hour viewing", "Altit Fort guided royalty walk", "Chauffeured Toyota Prado TZ VIP escort"]
  },
  {
    id: "karakoram-deosai-grand",
    title: "Karakoram & Deosai Highlands",
    location: "Hunza & Skardu",
    duration: "6 Days, 5 Nights",
    price: {
      PKR: 198000,
      USD: 710
    },
    image: DEOSAI_IMAGE,
    rating: 4.9,
    category: "featured",
    description: "Conquer the ultimate high-altitude mountain loop. Traverse the ancient forts of Hunza Valley, cruise the turquoise waters of Attabad Lake, and embark on a rugged safari across the magical Deosai Plains plateau.",
    highlights: ["Full-day Deosai Plains 4WD safari", "Sheosar Lake alpine reflection views", "Attabad Lake speedboat cruise", "Baltit & Altit Fort guided entries", "Stay in premium heated mountain resort suites"]
  },
  {
    id: "baltistan-sovereign-6d",
    title: "6-Day Baltistan Sovereign Heritage",
    location: "Skardu",
    duration: "6 Days, 5 Nights",
    price: {
      PKR: 185000,
      USD: 660
    },
    image: KHAPLU_IMAGE,
    rating: 4.9,
    category: "featured",
    description: "Uncover the royal strongholds and pristine waters of Baltistan. Retreat to the stunning Serena Khaplu Palace and Shigar Fort properties, and ride into the majestic Cold Deserts near Skardu town.",
    highlights: ["Stay in restored historic Serena Royal Palaces", "Chauffeured 4x4 Katpana Cold Desert dune safari", "Private hand-boat tour of Kachura Lake", "Authentic five-course Balti royal feast banquet", "Excursion to Manthokha cascading water stream"]
  },
  {
    id: "deosai-tour",
    title: "Deosai Tour",
    location: "Deosai",
    duration: "4 Days, 3 Nights",
    price: {
      PKR: 120000,
      USD: 430
    },
    image: DEOSAI_IMAGE,
    rating: 4.7,
    category: "featured",
    description: "Explore the second-highest alpine plateau on Earth. Home to rare Himalayan brown bears, pristine streams, and the mystical Sheosar Lake.",
    highlights: ["Sheosar Lake golden hour camping", "Himalayan Brown Bear spotting", "Bara Pani suspension bridge crossing", "Katpana Cold Desert campfire"]
  }
];

export const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    id: "prado-tz-luxury",
    name: "Toyota Land Cruiser Prado TZ Executive Edition",
    type: "Premium 4x4 SUV",
    image: PRADO_IMAGE,
    dailyRate: {
      PKR: 32000,
      USD: 115
    },
    seating: 7,
    features: [
      "Advanced 4WD Active Traction Control",
      "Tri-zone climate control AC & heater",
      "Full premium leather seating with heating",
      "Certified mountain-expert English speaking driver",
      "Roof racks for additional heavy baggage",
      "First aid and emergency oxygen kits on board"
    ],
    description: "The absolute gold standard for rugged Northern Pakistan terrain. Conquer the Karakoram Highway and loose dirt tracks of Deosai and Fairy Meadows in total sound-insulated luxury and sovereign safety."
  },
  {
    id: "v8-sovereign",
    name: "Toyota Land Cruiser V8 Centenary Sovereign",
    type: "Elite Off-Road Cruiser",
    image: "https://picsum.photos/seed/lcv8/800/600",
    dailyRate: {
      PKR: 55000,
      USD: 200
    },
    seating: 7,
    features: [
      "Elite V8 twin-turbo performance engine",
      "Premium wood-grain and double leather panels",
      "Hydraulic height suspension adjustment",
      "Specialized protocol mountain pilot driver",
      "Fully soundproofed VIP cabin space",
      "Advanced multi-zone climate lounge control"
    ],
    description: "The pinnacle of off-road supremacy. Live the ultimate VIP experience through winding valleys and state protocols with supreme, uncompromised power."
  },
  {
    id: "fortuner-sigma",
    name: "Toyota Fortuner Sigma 4 Premium Active",
    type: "High-Performance SUV",
    image: "https://picsum.photos/seed/fortuner/800/600",
    dailyRate: {
      PKR: 28000,
      USD: 100
    },
    seating: 7,
    features: [
      "High-clearance robust off-road capability",
      "Sigma 4 engine performance tuning",
      "Spacious 3-row comfort seating",
      "High-performance air-filtration unit",
      "Reliable heavy baggage carrier setup",
      "Professional local terrain certified captain"
    ],
    description: "A gorgeous, aggressive modern SUV built with strong mechanics. Extremely comfortable and resilient for family groups heading into active valleys."
  },
  {
    id: "grand-cabin",
    name: "Toyota HiAce Grand Cabin VIP Executive Lounge",
    type: "Super-Comfort Minibus",
    image: "https://picsum.photos/seed/grandcabin/800/600",
    dailyRate: {
      PKR: 35000,
      USD: 125
    },
    seating: 13,
    features: [
      "Spacious high-roof premium passenger lounge",
      "Individually reclining leather seats",
      "Separate individual overhead AC vents",
      "Ideal for high-end families and corporate teams",
      "Massive dedicated luggage compartment",
      "Dual front/rear entertainment screens"
    ],
    description: "The luxury standard for diplomat missions, corporate retreats, and massive extended families. Guarantees panoramic sightseeing window-views for every guest."
  },
  {
    id: "grand-carnival",
    name: "Kia Grand Carnival Grand-Lounge Edition",
    type: "Premium VIP Family Van",
    image: "https://picsum.photos/seed/carnival/800/600",
    dailyRate: {
      PKR: 38000,
      USD: 135
    },
    seating: 11,
    features: [
      "Aerodynamic whisper-quiet modern drive",
      "Executive captain-style sliding rear chairs",
      "Smart power dual sliding doors & tailgate",
      "Ultra-comfort suspension system",
      "Premium surround sound acoustic media player",
      "Excellent multi-port device fast chargers"
    ],
    description: "Experience royal asphalt gliding. Best suited for smooth scenic loops of Karimabad, Khaplu, and Shangrila with high-tier tech comfort convenience."
  },
  {
    id: "g-corolla",
    name: "Toyota Corolla Grande / GLi (G Corolla)",
    type: "Premium Sedan",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
    dailyRate: {
      PKR: 12000,
      USD: 45
    },
    seating: 4,
    features: [
      "Excellent asphalt fuel efficiency & smooth drive",
      "Strong climate control AC to keep cool during summer valley loops",
      "Spacious sedan boot space for standard luggage",
      "Extremely budget-friendly premium transport",
      "Polite, highly professional local driver"
    ],
    description: "The ideal, budget-friendly luxury sedan for smooth asphalt roads connecting Islamabad, Abbottabad, Gilgit town, and Karimabad. Highly reliable and cost-effective traveler class."
  },
  {
    id: "prado-tz-down",
    name: "Toyota Prado TZ Classic (Down Model Edition)",
    type: "Classic 4x4 Off-Road SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    dailyRate: {
      PKR: 24000,
      USD: 85
    },
    seating: 7,
    features: [
      "Unmatched mechanical simplicity & peak mountain durability",
      "High ground clearance built custom for rough rocky off-roads",
      "Manual gear mechanical 4x4 low/high transfer case stability",
      "Veteran local mountain navigator/driver with deep route expertise",
      "Budget-friendly 4x4 alternative to the modern TZ"
    ],
    description: "The legendary champion of Karakoram. Loved by adventurists and locals alike for its bulletproof mechanical reliability on extreme mountain pathways like Fairy Meadows jeep tracks and Deosai."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Ayesha & Bilal Siddiqui",
    role: "Honeymoon Travelers",
    location: "Lahore, Pakistan",
    comment: "Khasman Travel arranged the most breathtaking honeymoon we could have ever imagined! The stay at Altit, the private candlelight dinner over Attabad Lake under star showers, and our incredible pilot driving the luxurious Prado TZ made everything feel completely magical and stress-free.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar1/100/100",
    tourName: "Royal Honeymoon Retreat in Hunza"
  },
  {
    id: "review-2",
    name: "Dr. Adrian Thorne",
    role: "International Adventurer",
    location: "London, UK",
    comment: "Outstanding coordination! Trekking Fairy Meadows and visiting Shigar castle can be daunting, but with Khasman's local network, everything from the custom 4x4 transport pickup, expert guidance, and organic meals was flawlessly timed. Splendid attention to detail and high safety standards.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar2/100/100",
    tourName: "Fairy Meadows & Nanga Parbat Base"
  },
  {
    id: "review-3",
    name: "The Hashmi Family",
    role: "Family Group Tour",
    location: "Karachi, Pakistan",
    comment: "Traveling with three kids and my elderly parents to Skardu was our main concern, but Khasman Travel made it look like a breeze. The Land Cruiser was immaculate, the hotels had magnificent heated rooms, and their local guides kept the children entertained with folk tales all along. Top class!",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar3/100/100",
    tourName: "Grand Northern Pakistan Family Adventure"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "The secrets of longevity and pure lifestyle in Hunza Valley",
    excerpt: "Hidden high within the Karakoram range, Hunza inhabitants are globally renowned for their unmatched lifespan, sheer vitality, and disease-free lives...",
    content: "Hidden high within the Karakoram range, Hunza inhabitants are globally renowned for their unmatched lifespan, sheer vitality, and disease-free lives. For ages, researchers have sought to map what precisely makes these mountain folks defy human aging. The secrets lie in the crystalline mineral glacier water they consume directly from active glaciers, their rich diet centered around sun-dried apricots, walnuts, and organic buckwheat, and the highly active climbing lifestyle that is embedded deep within their beautiful daily culture. Explore our custom Hunza tours to live, eat, and breathe among the longevity masters yourself.",
    image: "https://picsum.photos/seed/blog1/600/400",
    date: "May 18, 2026",
    readTime: "4 min read",
    author: "Zainab Khasman"
  },
  {
    id: "blog-2",
    title: "Exploring Deosai Plains: A complete safety guide for high altitude safari",
    excerpt: "Often called 'The Giants' Land' and representing the second highest alpine plateau in the world, Deosai is a surreal wilderness that commands preparation...",
    content: "Often called 'The Giants' Land' and representing the second highest alpine plateau in the world, Deosai is a surreal wilderness that commands preparation. Located at an average elevation of 4,114 meters, this plateau feels like a separate planet altogether. To ensure a safe adventure, travelers must carry heavy thermal jackets, drink plenty of water to prevent AMS (Acute Mountain Sickness), and choose high-clearance 4WD vehicles like a certified Prado TZ. Khasman Travel provides fully oxygen-equipped safaris so your family enjoys golden wildflower carpet views without any altitude concerns.",
    image: "https://picsum.photos/seed/blog2/600/400",
    date: "April 29, 2026",
    readTime: "6 min read",
    author: "Faisal Karim"
  },
  {
    id: "blog-3",
    title: "Shangrila Resort vs Fairy Meadows: Choosing your dream gateway",
    excerpt: "Whether you seek absolute placid water serenity or rugged, heart-pounding trekking alpine pine landscapes, Northern Pakistan has the twin pillars...",
    content: "Whether you seek absolute placid water serenity or rugged, heart-pounding trekking alpine pine landscapes, Northern Pakistan has the twin pillars. If your heart yearns for luxury, fine dining, and smooth boating with elders, Shangrila Resort Skardu is the absolute match. However, if your dream relies on wooden log cabin campfires, listening to mountain avalanches echo across alpine meadows, and looking up at an 8,000m wall of pure snow, then pack your light boots for Fairy Meadows. Khasman Travel designs customized dual tours so you can combine both worlds.",
    image: "https://picsum.photos/seed/blog3/600/400",
    date: "March 15, 2026",
    readTime: "5 min read",
    author: "Kamran Shah"
  }
];
