import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { KhasmanLogo } from "./components/KhasmanLogo";
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Car, 
  Users, 
  Star, 
  ArrowRight, 
  Mail, 
  Phone, 
  Clock, 
  Shield, 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Heart, 
  TrendingUp, 
  MessageCircle, 
  Send, 
  Sparkles, 
  CheckCircle,
  Map,
  Plane,
  ChevronRight,
  Info
} from "lucide-react";
import { 
  TOUR_PACKAGES, 
  TRANSPORT_OPTIONS, 
  TESTIMONIALS, 
  BLOG_POSTS, 
  HERO_IMAGE, 
  PRADO_IMAGE,
  SKARDU_LUXURY_IMAGE,
  HUNZA_FORT_IMAGE,
  SKARDU_BLOSSOM_IMAGE,
  KHAPLU_IMAGE,
  DEOSAI_IMAGE,
  MANTHOKHA_IMAGE
} from "./data";
import { TourPackage, BlogPost } from "./types";

const HERO_SLIDES = [
  {
    image: HERO_IMAGE,
    tag: "The Epitome of Luxury Travel in Pakistan",
    titlePrefix: "Karakoram Peaks &",
    titleHighlight: "Uncompromising Luxury",
    description: "Discover the magic of Northern Pakistan with Khasman Travel & Tours — where every journey becomes a lifetime memory. Explore the majestic beauty of Hunza, Skardu, Khaplu, and Shigar in luxury, comfort, and adventure. From breathtaking mountain landscapes to premium travel experiences, we create unforgettable moments beyond the ordinary."
  },
  {
    image: MANTHOKHA_IMAGE,
    tag: "Cascading Wonders & Untamed Alpine Streams",
    titlePrefix: "Manthokha Majestic &",
    titleHighlight: "Waterfall Splendors",
    description: "Marvel at the spectacular Manthokha Waterfall cascading down standard towering mountain ranges, creating mist-shrouded green pastures and beautiful streams. A scenic masterpiece nestled near Skardu."
  },
  {
    image: DEOSAI_IMAGE,
    tag: "The Roof Of The World & Ancient Wilderness",
    titlePrefix: "Deosai Plains &",
    titleHighlight: "High-Altitude Plateaus",
    description: "Traverse the magical, endless alpine meadows of Deosai National Park. Encounter rare wildlife, crystal streams, and the mirror-like reflection of Sheosar Lake looking out onto high Karakoram peaks."
  },
  {
    image: SKARDU_LUXURY_IMAGE,
    tag: "Serene Turquoise Lakes & Majestic Deserts",
    titlePrefix: "Skardu Valley &",
    titleHighlight: "Shangrila Cottages",
    description: "Relax amidst pristine turquoise lakes and sandy high-altitude dunes in Skardu. Gaze at the mirror-like Kachura waters while staying in premium luxury suites and navigating the royal Shigar Valley."
  },
  {
    image: HUNZA_FORT_IMAGE,
    tag: "Ancient Forts, Culture & Peak Views",
    titlePrefix: "Hunza Valley &",
    titleHighlight: "Baltit Fort Majesty",
    description: "Walk through thousand-year-old fort pathways, gaze up at the high snowy ridge of Rakaposhi, and immerse yourself in the warm hospitality, traditional music, and rich organic orchards of Karimabad."
  },
  {
    image: SKARDU_BLOSSOM_IMAGE,
    tag: "Spring Splendor & Pastel Valleys",
    titlePrefix: "Blossom Season &",
    titleHighlight: "Himalayan Orchards",
    description: "Witness Hunza & Skardu Valleys drapes in magnificent pastel pink and white cherry and apricot blossoms. A deeply spiritual, premium travel experience blanketing the valleys in early spring."
  },
  {
    image: KHAPLU_IMAGE,
    tag: "Royal Heritage & Palace Masterpieces",
    titlePrefix: "Khaplu Palace &",
    titleHighlight: "Sovereign Sanctuary",
    description: "Breathe in the living heritage of Baltistan at the beautifully restored royal palace of Khaplu. Relive centuries of rich grand dynastic lineage coupled with premium 5-star comfort and culinary splendor."
  }
];

export default function App() {
  // Global Currency State
  const [currency, setCurrency] = useState<"PKR" | "USD">("PKR");

  // Hero Slideshow active index custom state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto carousel effect changing slide every 5000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIdx) => (prevIdx + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter States
  const [activeCategory, setActiveCategory] = useState<"all" | "featured" | "honeymoon" | "family">("all");
  const [activeLocation, setActiveLocation] = useState<string>("All");
  const [activeDuration, setActiveDuration] = useState<"All" | "3" | "5" | "6" | "7+">("All");

  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Modal active states
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Booking Modal Form States
  const [bookingName, setBookingName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingGuests, setBookingGuests] = useState(2);
  const [bookingMessage, setBookingMessage] = useState("");
  const [bookingFeedback, setBookingFeedback] = useState(false);
  const [bookingTransport, setBookingTransport] = useState("Toyota Prado TZ");

  // Prado TZ Calculator State
  const [selectedVehicleIdx, setSelectedVehicleIdx] = useState(0);
  const [pradoDays, setPradoDays] = useState(5);
  const [pradoPickup, setPradoPickup] = useState("Gilgit Airport");
  const [pradoRoute, setPradoRoute] = useState("Hunza & Passu Highway");
  const [pradoTerrain, setPradoTerrain] = useState("standard"); // standard vs challenging (Deosai/Fairy Meadows/Shigar roads)

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Custom Holiday Planner State
  const [plannerStep, setPlannerStep] = useState(1);
  const [planDestinations, setPlanDestinations] = useState<string[]>([]);
  const [planTransport, setPlanTransport] = useState("Toyota Prado TZ");
  const [planDuration, setPlanDuration] = useState("5-7 Days");
  const [planGroup, setPlanGroup] = useState("Couple");
  const [planName, setPlanName] = useState("");
  const [planPhone, setPlanPhone] = useState("");
  const [customTicketGenerated, setCustomTicketGenerated] = useState(false);

  // Handle sticky header scroll reflection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Format money helper
  const formatPrice = (price?: { PKR: number; USD: number }) => {
    return "Price on Request";
  };

  // Pre-fixed WhatsApp contact details
  const WHATSAPP_NUMBER = "+923555014497"; // WhatsApp Hotline
  const PHONE_NUMBER = "+923125771406"; // Call Hotline

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent("Hi Khasman Travel & Tours! I am looking for a premium tour package to Northern Pakistan. Please guide me through your premium seasonal packages.");
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`, "_blank");
  };

  const handlePackageWhatsAppInquiry = (pkg: TourPackage) => {
    const customText = `Hi Khasman Travel & Tours! I would like to inquire about the luxury package: *${pkg.title}* (${pkg.duration}) for the ${pkg.location} region. Please share pricing, availability, and modern itinerary details.`;
    const textEncoded = encodeURIComponent(customText);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${textEncoded}`, "_blank");
  };

  const handlePradoWhatsAppInquiry = () => {
    const selectedCar = TRANSPORT_OPTIONS[selectedVehicleIdx] || TRANSPORT_OPTIONS[0];
    const terrainLabel = pradoTerrain === "challenging" ? "Rugged Mountain Pass Track" : "Smooth Asphalt Highway";
    const customText = `Hi Khasman Travel! I want to rent the *${selectedCar.name}* for my upcoming mountain trip:\n\n- *Duration:* ${pradoDays} Days\n- *Pickup:* ${pradoPickup}\n- *Target Route:* ${pradoRoute}\n- *Terrain Type:* ${terrainLabel}\n\nPlease share premium rates, availability details, and confirm availability of your pilot and SUV.`;
    const textEncoded = encodeURIComponent(customText);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${textEncoded}`, "_blank");
  };

  const handleCustomTicketWhatsApp = () => {
    const customText = `Hi Khasman Travel! I have built a custom luxury holiday request via your premium planner:\n\n- *Destinations:* ${planDestinations.join(", ") || "All Regions"}\n- *Preferred Vehicle:* ${planTransport}\n- *Duration:* ${planDuration}\n- *Travel Group:* ${planGroup}\n- *Lead Guest:* ${planName}\n- *Contact details:* ${planPhone}\n\nPlease share our customized luxury itinerary catalog!`;
    const textEncoded = encodeURIComponent(customText);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${textEncoded}`, "_blank");
  };

  // Dynamic Prado cost calculator
  const computedPradoTotal = () => {
    const baseRatePKR = (TRANSPORT_OPTIONS[selectedVehicleIdx] || TRANSPORT_OPTIONS[0]).dailyRate.PKR;
    let multiplier = 1;
    if (pradoTerrain === "challenging") {
      multiplier += 0.20; // 20% premium for rough mountain tracks (Deosai, Fairy Meadows, etc.)
    }
    // Location adjustment
    if (pradoPickup === "Islamabad") {
      multiplier += 0.15; // Extra ferry charges from Islamabad base
    }
    return Math.round(baseRatePKR * pradoDays * multiplier);
  };

  // Filter package logic
  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    const matchCategory = activeCategory === "all" || pkg.category === activeCategory;
    const matchLocation = activeLocation === "All" || pkg.location === activeLocation || (activeLocation === "Hunza & Skardu" && (pkg.location.includes("Hunza") || pkg.location.includes("Skardu")));
    
    let matchDuration = true;
    if (activeDuration !== "All") {
      if (activeDuration === "3") {
        matchDuration = pkg.duration.startsWith("3 ");
      } else if (activeDuration === "5") {
        matchDuration = pkg.duration.startsWith("5 ");
      } else if (activeDuration === "6") {
        matchDuration = pkg.duration.startsWith("6 ");
      } else if (activeDuration === "7+") {
        const daysNum = parseInt(pkg.duration.split(" ")[0]) || 0;
        matchDuration = daysNum >= 7;
      }
    }
    
    return matchCategory && matchLocation && matchDuration;
  });

  const locationsList = ["All", "Skardu", "Hunza", "Deosai", "Fairy Meadows", "Khaplu", "Shigar"];

  return (
    <div className="min-h-screen bg-navy-dark text-white font-sans overflow-x-hidden">
      
      {/* WhatsApp Floating Button */}
      <button 
        id="whatsapp-floating-btn"
        onClick={handleFloatingWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center cursor-pointer group"
        aria-label="Contact official WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-sm whitespace-nowrap ml-0 group-hover:ml-2">
          Inquire Instantly
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </button>

      {/* Luxury Sticky Navbar */}
      <header 
        id="main-navigation-bar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-navy-dark/95 backdrop-blur-md border-b border-gold-gold/10 py-3 shadow-xl" 
            : "bg-gradient-to-b from-navy-deep/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo with Mountain + Airplane branding */}
          <a href="#hero" className="flex items-center group">
            <KhasmanLogo size="md" showText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#packages" className="hover:text-gold-gold transition-colors duration-200">Featured Packages</a>
            <a href="#honeymoon" className="hover:text-gold-gold transition-colors duration-200">Honeymoon Retreats</a>
            <a href="#family" className="hover:text-gold-gold transition-colors duration-200">Family Comfort</a>
            <a href="#prado" className="hover:text-gold-gold transition-colors duration-200">Luxury Fleet</a>
            <a href="#reviews" className="hover:text-gold-gold transition-colors duration-200">Reviews & Faith</a>
            <a href="#blog" className="hover:text-gold-gold transition-colors duration-200">Travel Blog</a>
            <a href="#planner" className="hover:text-gold-gold transition-colors duration-200 text-gold-gold flex items-center gap-1 bg-gold-gold/10 px-3 py-1 rounded-full border border-gold-gold/20">
              <Sparkles className="w-3.5 h-3.5" /> Planner
            </a>
          </nav>

          {/* Right Controls: Booking Hotline Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-gold-dark via-gold-gold to-gold-light text-navy-dark px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-gold-gold/10"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex lg:hidden items-center space-x-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gold-gold transition-colors focus:outline-none p-2 rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[68px] left-0 w-full bg-navy-deep/95 backdrop-blur-lg border-b border-gold-gold/20 z-30 lg:hidden py-6 px-6"
          >
            <nav className="flex flex-col space-y-4 font-display font-medium tracking-wide">
              <a 
                href="#packages" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-200 hover:text-gold-gold transition-colors flex items-center justify-between"
              >
                <span>Tour Packages</span>
                <ChevronRight className="w-4 h-4 text-gold-gold" />
              </a>
              <a 
                href="#honeymoon" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-200 hover:text-gold-gold transition-colors flex items-center justify-between"
              >
                <span>Honeymoon Retrears</span>
                <ChevronRight className="w-4 h-4 text-gold-gold" />
              </a>
              <a 
                href="#family" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-200 hover:text-gold-gold transition-colors flex items-center justify-between"
              >
                <span>Family Group Stays</span>
                <ChevronRight className="w-4 h-4 text-gold-gold" />
              </a>
              <a 
                href="#prado" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-200 hover:text-gold-gold transition-colors flex items-center justify-between"
              >
                <span>Prado TZ Transport Cruiser</span>
                <ChevronRight className="w-4 h-4 text-gold-gold" />
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-200 hover:text-gold-gold transition-colors flex items-center justify-between"
              >
                <span>Guest Testimonials</span>
                <ChevronRight className="w-4 h-4 text-gold-gold" />
              </a>
              <a 
                href="#blog" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-200 hover:text-gold-gold transition-colors flex items-center justify-between"
              >
                <span>Secrets Travel Blog</span>
                <ChevronRight className="w-4 h-4 text-gold-gold" />
              </a>
              <a 
                href="#planner" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gold-gold hover:text-white transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-1"><Sparkles className="w-4 h-4" /> Personal Itinerary Builder</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </nav>
            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col space-y-4">
              <div className="text-center text-xs text-gray-400 flex flex-col gap-1.5">
                <div>Phone: <span className="text-white font-mono font-semibold">0312-5771406</span></div>
                <div>WhatsApp: <span className="text-gold-gold font-mono font-semibold">0355-5014497</span></div>
              </div>
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gold-gold text-navy-dark text-center py-3 rounded-lg font-bold uppercase tracking-wider block text-sm"
              >
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: Massive Luxurious Hero Banner */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-navy-deep"
      >
        {/* Background Image Slideshow with Dark & Premium Navy gradient filters */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentSlideIndex}
              src={HERO_SLIDES[currentSlideIndex].image} 
              alt="Majestic Karakoram Mountain Range, Baltistan, Northern Pakistan" 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.35, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-transparent to-navy-deep/85"></div>
        </div>

        {/* Floating airplane path visualization */}
        <div className="absolute top-1/4 right-1/4 opacity-40 animate-[bounce_8s_infinite] pointer-events-none hidden md:block">
          <svg width="400" height="150" viewBox="0 0 400 150" fill="none" className="stroke-gold-gold/40 stroke-[2] stroke-dasharray-[5_5]">
            <path d="M 0 100 Q 150 10 C 300 140 400 0" />
            <circle cx="0" cy="100" r="4" fill="#D4AF37" className="animate-ping" />
            <circle cx="400" cy="0" r="4" fill="#D4AF37" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Animating Left Text area with strict height to prevent layout jumps */}
            <div className="relative overflow-hidden min-h-[380px] sm:min-h-[340px] lg:min-h-[440px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col text-left"
                >
                  {/* Elegant luxury badge overlay */}
                  <div className="inline-flex items-center space-x-2 bg-gold-gold/10 border border-gold-gold/30 px-4 py-1.5 rounded-full mb-6 w-fit">
                    <Sparkles className="w-4 h-4 text-gold-gold" />
                    <span className="font-mono text-[11px] font-bold text-gold-gold uppercase tracking-widest">
                      {HERO_SLIDES[currentSlideIndex].tag}
                    </span>
                  </div>

                  <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-white mb-6 leading-tight">
                    {HERO_SLIDES[currentSlideIndex].titlePrefix} <br />
                    <span className="text-gradient bg-gradient-to-r from-gold-gold via-gold-light to-gold-gold bg-clip-text text-transparent font-extrabold">
                      {HERO_SLIDES[currentSlideIndex].titleHighlight}
                    </span>
                  </h1>

                  <p className="text-gray-300 text-sm md:text-base lg:text-[15.5px] max-w-xl mb-4 leading-relaxed font-light tracking-wide">
                    {HERO_SLIDES[currentSlideIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators / Interactive Dots */}
            <div className="flex items-center space-x-2.5 mb-8">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlideIndex === idx 
                      ? "w-10 bg-gradient-to-r from-gold-gold to-gold-light shadow-lg shadow-gold-gold/20" 
                      : "w-2.5 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Quick USPs badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2.5 bg-navy-light/60 border border-gold-gold/15 p-3 rounded-xl backdrop-blur-sm">
                <Shield className="w-5 h-5 text-gold-gold shrink-0" />
                <div>
                  <div className="text-xs font-bold">100% Elite Safety</div>
                  <div className="text-[10px] text-gray-400">Trained VIP Guides</div>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 bg-navy-light/60 border border-gold-gold/15 p-3 rounded-xl backdrop-blur-sm">
                <Car className="w-5 h-5 text-gold-gold shrink-0" />
                <div>
                  <div className="text-xs font-bold">Premium Prado TZ</div>
                  <div className="text-[10px] text-gray-400">Royal 4x4 Ground Fleet</div>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 bg-navy-light/60 border border-gold-gold/15 p-3 rounded-xl backdrop-blur-sm col-span-2 sm:col-span-1">
                <Star className="w-5 h-5 text-gold-gold shrink-0" />
                <div>
                  <div className="text-xs font-bold">5-Star Luxury Stays</div>
                  <div className="text-[10px] text-gray-400">Pre-booked heated suites</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#packages"
                className="bg-gradient-to-r from-gold-dark via-gold-gold to-gold-light text-navy-dark font-display font-extrabold px-8 py-4 rounded-xl text-center shadow-lg shadow-gold-gold/10 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-sm tracking-wider uppercase"
              >
                Explore Luxury Tours
              </a>
              <a 
                href="#planner"
                className="border border-gold-gold/40 hover:bg-gold-gold/10 text-white font-display font-bold px-8 py-4 rounded-xl text-center transition-all duration-200 cursor-pointer text-sm tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-gold" />
                Custom Itinerary Plan
              </a>
            </div>
          </div>

          {/* Hero Right: Floating Booking Inquiry Box */}
          <div className="lg:col-span-5 bg-navy-light/80 border border-gold-gold/30 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-md gold-glow">
            <h3 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2 tracking-wide">
              <Compass className="text-gold-gold w-5.5 h-5.5 animate-spin" style={{ animationDuration: "12s" }} />
              Bespoke Itinerary Concierge
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed font-light">
              Connect directly with our Chief Travel Curator to customize your highly personalized executive, honeymoon, or family expedition.
            </p>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              setBookingFeedback(true);
            }} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Faisal Karim" 
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-sm font-light text-white focus:outline-none focus:border-gold-gold/60 placeholder:text-gray-600 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Target Destination</label>
                  <select 
                    id="hero-destination-select"
                    className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-sm font-light text-white focus:outline-none focus:border-gold-gold/60 transition"
                  >
                    <option value="Hunza">Hunza Valley</option>
                    <option value="Skardu">Skardu Oasis</option>
                    <option value="Deosai">Deosai Plains</option>
                    <option value="Fairy Meadows">Fairy Meadows</option>
                    <option value="Khaplu">Khaplu Heritage</option>
                    <option value="Shigar">Shigar Palace</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Ideal Start Date</label>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2 text-sm font-light text-white focus:outline-none focus:border-gold-gold/60 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Travel Crew</label>
                  <select 
                    value={bookingGuests}
                    onChange={(e) => setBookingGuests(parseInt(e.target.value))}
                    className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-sm font-light text-white focus:outline-none focus:border-gold-gold/60 transition"
                  >
                    <option value="2">2 Persons (Couple)</option>
                    <option value="4">4 Persons (Family)</option>
                    <option value="6">6-8 Persons (Comfort Group)</option>
                    <option value="12">12+ Persons (Corporate Retreat)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Preferred Luxury Transport</label>
                  <select 
                    value={bookingTransport}
                    onChange={(e) => setBookingTransport(e.target.value)}
                    className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-sm font-light text-white focus:outline-none focus:border-gold-gold/60 transition"
                  >
                    <option value="Toyota Prado TZ">Toyota Prado TZ Premium</option>
                    <option value="Land Cruiser V8">Land Cruiser V8 Sovereign</option>
                    <option value="Toyota Fortuner">Toyota Fortuner Active</option>
                    <option value="HiAce Grand Cabin">HiAce Grand Cabin Minibus</option>
                    <option value="Kia Grand Carnival">Kia Grand Carnival Lounge</option>
                    <option value="Toyota Corolla GLi/Grande (G Corolla)">Toyota Corolla GLi/Grande (G Corolla)</option>
                    <option value="Toyota Prado Classic (TZ Down Model)">Toyota Prado TZ Classic (Down Model)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-gold-gold to-gold-light text-navy-dark font-bold text-xs tracking-wider uppercase transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gold-gold/10 font-display cursor-pointer"
              >
                Inquire Matching Quote
              </button>
            </form>

            {/* Simulated instant WhatsApp clickout or modal triggers */}
            <AnimatePresence>
              {bookingFeedback && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs text-left"
                >
                  <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-400">
                    <CheckCircle className="w-4 h-4 shrink-0" /> Setup Package matches found!
                  </div>
                  Dear {bookingName || "Explorer"}, we have pre-packaged an elite tour plan matching your chosen criteria. Click below to launch direct chat on WhatsApp with Khasman's Elite Advisor.
                  <button 
                    onClick={() => {
                      const textEncoded = encodeURIComponent(`Hi Khasman Travel! I'm matching a luxury package request via your Hero form:\n- Name: ${bookingName || "Prospect"}\n- Date: ${bookingDate}\n- Crew Size: ${bookingGuests}\n- Transport: ${bookingTransport}`);
                      window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${textEncoded}`, "_blank");
                      setBookingFeedback(false);
                    }}
                    className="w-full mt-2.5 py-1.5 bg-[#25D366] text-white hover:bg-[#20b858] transition rounded font-bold uppercase tracking-wider text-[10px] text-center"
                  >
                    Open Official Chat on WhatsApp
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </section>

      {/* SECTION 2: Filterable Premium Tour Packages */}
      <section id="packages" className="py-24 bg-navy-dark relative border-t border-navy-light z-10">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-gold-gold text-xs font-mono tracking-widest uppercase font-extrabold mb-3">
              👑 Curated Escapes
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Featured Luxury Tour Packages
            </h2>
            <div className="w-16 h-1 bg-gold-gold mx-auto mb-6"></div>
            <p className="text-gray-400 text-sm">
              Each package is detailed with 5-star mountain view resorts, private executive high-ground transport, and professional local concierge crews to guarantee safe, spectacular lifelong memories.
            </p>
          </div>

          {/* Interactive Filters Area */}
          <div className="flex flex-col space-y-4 mb-12">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs uppercase text-gray-500 font-mono mr-2">Theme:</span>
              {[
                { id: "all", label: "All Curated Packages" },
                { id: "featured", label: "Featured Signature" },
                { id: "honeymoon", label: "Honeymoon Luxury" },
                { id: "family", label: "Comfort Family" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as any);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold font-display uppercase tracking-wider transition duration-250 cursor-pointer ${
                    activeCategory === cat.id 
                      ? "bg-gradient-to-r from-gold-dark to-gold-gold text-navy-dark shadow-md" 
                      : "bg-navy-light/60 hover:bg-navy-light text-gray-300 border border-gold-gold/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Location Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
              <span className="text-xs uppercase text-gray-500 font-mono mr-2">Region:</span>
              {locationsList.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setActiveLocation(loc);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition cursor-pointer ${
                    activeLocation === loc 
                      ? "bg-gold-gold/20 text-gold-gold border border-gold-gold/40" 
                      : "bg-navy-light/40 hover:bg-navy-light text-gray-400 hover:text-white border border-transparent"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Duration Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-gold-gold/5 max-w-xl mx-auto w-full">
              <span className="text-xs uppercase text-gray-500 font-mono mr-2">Duration:</span>
              {[
                { id: "All", label: "All Durations" },
                { id: "3", label: "3 Days (Blitz)" },
                { id: "5", label: "5 Days (Classic)" },
                { id: "6", label: "6 Days (Royal)" },
                { id: "7+", label: "7+ Days (Expeditions)" }
              ].map((dur) => (
                <button
                  key={dur.id}
                  onClick={() => {
                    setActiveDuration(dur.id as any);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition cursor-pointer ${
                    activeDuration === dur.id 
                      ? "bg-gradient-to-r from-gold-dark to-gold-gold text-navy-dark shadow-md" 
                      : "bg-navy-light/40 hover:bg-navy-light text-gray-400 hover:text-white border border-transparent"
                  }`}
                >
                  {dur.label}
                </button>
              ))}
            </div>

          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-navy-light/50 border border-gold-gold/10 rounded-2xl overflow-hidden shadow-xl hover:border-gold-gold/30 hover:shadow-gold-gold/5 transition-all duration-300 flex flex-col group"
                >
                  
                  {/* Photo area with pricing, rating overlays */}
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Category tag */}
                    <span className="absolute top-4 left-4 bg-navy-dark/85 backdrop-blur-md text-gold-gold px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold-gold/20">
                      {pkg.category} Tours
                    </span>
                    
                    {/* Location Badge */}
                    <span className="absolute bottom-4 left-4 bg-navy-dark/85 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold tracking-wide flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-gold shrink-0" />
                      <span>{pkg.location}</span>
                    </span>

                    {/* Quick rate info overlay */}
                    <div className="absolute top-4 right-4 bg-navy-dark/95 backdrop-blur-md border border-gold-gold/40 rounded-xl p-2.5 text-right flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">Rate Quote</span>
                      <span className="text-xs font-bold text-gold-gold tracking-tight mt-0.5">
                        On Request
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Rating + Days */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                        <div className="flex items-center space-x-1 font-semibold text-white">
                          <Clock className="w-3.5 h-3.5 text-gold-gold" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gold-gold">
                          <Star className="w-3.5 h-3.5 fill-gold-gold text-gold-gold" />
                          <span className="font-bold text-white">{pkg.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-white mb-2 group-hover:text-gold-gold transition-colors duration-200">
                        {pkg.title}
                      </h3>

                      <p className="text-xs text-gray-300 leading-relaxed font-light mb-4 line-clamp-3">
                        {pkg.description}
                      </p>

                      {/* Package Highlights bullet ticks */}
                      <div className="space-y-1.5 mb-6">
                        {pkg.highlights.map((hlt, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-[10.5px] text-gray-300 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-gold shrink-0"></span>
                            <span>{hlt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking trigger buttons */}
                    <div className="grid grid-cols-12 gap-2 mt-auto pt-4 border-t border-navy-dark">
                      <button 
                        onClick={() => setSelectedPackage(pkg)}
                        className="col-span-4 bg-navy-light hover:bg-navy-dark text-white border border-white/10 hover:border-gold-gold/40 text-xs font-bold py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                      <button 
                        onClick={() => handlePackageWhatsAppInquiry(pkg)}
                        className="col-span-8 bg-[#25D366] hover:bg-[#20b858] text-white flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-bold transition-all hover:shadow-md cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Inquire on WhatsApp</span>
                      </button>
                    </div>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Fallback empty message */}
          {filteredPackages.length === 0 && (
            <div className="bg-navy-light/30 border border-gold-gold/10 rounded-2xl p-12 text-center text-gray-400 max-w-xl mx-auto my-12">
              <Compass className="w-12 h-12 text-gold-gold opacity-45 mx-auto mb-4 animate-spin-slow" />
              <p className="font-bold text-white mb-1">No custom packages found</p>
              <p className="text-xs">Try selecting a different seasonal theme or region, or build a matching customized schedule using our dynamic multi-trip itinerary builder below!</p>
              <a href="#planner" className="inline-block mt-4 text-xs font-bold text-gold-gold underline">Open custom itinerary planner</a>
            </div>
          )}

        </div>

      </section>

      {/* SECTION 3: Dedicated Honeymoon Retreats Block with generated asset */}
      <section id="honeymoon" className="py-24 bg-gradient-to-b from-navy-dark to-navy-deep relative z-10 overflow-hidden">
        
        {/* Abstract background decorative overlay */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Beautifully Generated Honeymoon Resort Image and text card stack */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gold-gold/10 rounded-3xl translate-x-3 -translate-y-3 z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-3xl border border-gold-gold/30 gold-glow">
                <img 
                  src="/src/assets/images/honeymoon_resort_1779428362432.png" 
                  alt="Shangrila Lake Skardu Honeymoon Resort" 
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay heart tag */}
              <div className="absolute -bottom-4 -right-4 bg-navy-light border border-gold-gold p-4 rounded-2xl shadow-xl flex items-center space-x-3 z-20">
                <div className="bg-gold-gold/20 p-2.5 rounded-full text-gold-gold">
                  <Heart className="w-6 h-6 fill-gold-gold" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Couples Preferred</div>
                  <div className="text-[10px] text-gray-400">Exclusive 100% Privacy</div>
                </div>
              </div>
            </div>

            {/* Right: Immersive details */}
            <div className="lg:col-span-6 text-left">
              <div className="text-gold-gold text-xs font-mono tracking-widest uppercase font-extrabold mb-3 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-gold-gold fill-gold-gold" />
                Timeless Romance
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-6">
                Breathtaking Royal <br />
                Honeymoon Tours
              </h2>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Step into marital tranquility amidst colossal peaks and turquoise rivers. Our meticulously designed luxury honeymoon retreats offer absolute romantic isolation, private photography sessions to capture your love against Passu Cones, VIP transfers in comfort Prado TZ, and stays in regional heritage palaces of Baltistan.
              </p>

              {/* Inclusions list */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Private heated boutique suites",
                  "Double-decked rowboat rides",
                  "Candlelight organic dinners",
                  "Chauffeur Prado TZ transport",
                  "Local dry-fruit & gift hamper",
                  "Professional photoshoot slots"
                ].map((inc, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-gold-gold shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button 
                onClick={() => {
                  const honeymoonPkg = TOUR_PACKAGES.find(p => p.id === "honeymoon-tour") || TOUR_PACKAGES[2];
                  handlePackageWhatsAppInquiry(honeymoonPkg);
                }}
                className="inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-gold-dark to-gold-gold text-navy-dark font-display font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition shadow-lg shadow-gold-gold/10 cursor-pointer"
              >
                <span>Customize Couple Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 4: Family Tours Section with generated asset */}
      <section id="family" className="py-24 bg-navy-dark relative z-10 border-t border-b border-navy-light">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Elegant details */}
            <div className="text-left order-2 lg:order-1">
              <div className="text-gold-gold text-xs font-mono tracking-widest uppercase font-extrabold mb-3 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-gold-gold" />
                Unforgettable Legacies
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-6">
                Premium Family Comfort <br />
                Multi-Generation Holiday Trips
              </h2>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Traveling with toddlers or elderly relatives requires custom scheduling that balances active exploration with refreshing rests. We provide spacious luxury multi-bedroom family suites, safe custom child seats in our Prado TZ SUVs, certified mountain paramedic guides, and engaging cultural scavenger tours.
              </p>

              {/* Family checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-gold-gold/10 p-1.5 rounded-lg text-gold-gold shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Absolute Safety Guarding</h4>
                    <p className="text-[11px] text-gray-400">Continuous check-ins, medical coordination, and seasoned route expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gold-gold/10 p-1.5 rounded-lg text-gold-gold shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Tailor-Made Kid & Elder Friendly Spots</h4>
                    <p className="text-[11px] text-gray-400">Gentle stroll path maps, safe horse-riding, and high-altitude comfort gear.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={() => {
                  const familyPkg = TOUR_PACKAGES.find(p => p.id === "family-tour") || TOUR_PACKAGES[3];
                  handlePackageWhatsAppInquiry(familyPkg);
                }}
                className="inline-flex items-center justify-center space-x-2.5 bg-navy-light hover:bg-navy-light/80 text-white border border-gold-gold/40 px-8 py-3.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Plan Family Vacation</span>
                <ArrowRight className="w-4 h-4 text-gold-gold" />
              </button>
            </div>

            {/* Right: Beautifully Generated Family Adventure Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gold-gold/10 rounded-3xl -translate-x-3 translate-y-3 z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-3xl border border-gold-gold/30 gold-glow">
                <img 
                  src="/src/assets/images/family_adventure_1779428387171.png" 
                  alt="Premium Family Camping Adventure Fairy Meadows" 
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay rating bar */}
              <div className="absolute -top-4 -left-4 bg-navy-light border border-gold-gold/20 p-3.5 rounded-xl shadow-xl flex items-center space-x-2 z-20">
                <Star className="w-5 h-5 text-gold-gold fill-gold-gold" />
                <div>
                  <div className="text-xs font-extrabold text-white">4.9 / 5.0</div>
                  <div className="text-[10px] text-gray-400">Based on 145+ Families</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 5: Luxury Prado TZ Transport Rental & Specs with live interactive calculator */}
      <section id="prado" className="py-24 bg-navy-deep relative z-10 overflow-hidden">
        
        {/* Dynamic background lighting */}
        <div className="absolute bottom-[-10%] left-[5%] w-96 h-96 bg-gold-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-gold-gold text-xs font-mono tracking-widest uppercase font-extrabold mb-3">
              🚙 Sovereign Road Presence
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Khasman Luxury & Sovereign Fleet
            </h2>
            <div className="w-16 h-1 bg-gold-gold mx-auto mb-6"></div>
            <p className="text-gray-400 text-sm">
              Conquer the winding roads of Northern Pakistan in absolute soundproofed luxury. Choose from our premium certified elite fleet designed for sovereign safety and ultimate terrain prestige.
            </p>
          </div>

          {/* Elite Vehicle Fleet Selector */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {TRANSPORT_OPTIONS.map((car, idx) => {
              let shortName = "Fleet Option";
              if (car.id === "prado-tz-luxury") shortName = "Toyota Prado TZ";
              else if (car.id === "v8-sovereign") shortName = "Land Cruiser V8";
              else if (car.id === "fortuner-sigma") shortName = "Toyota Fortuner";
              else if (car.id === "grand-cabin") shortName = "HiAce Grand Cabin";
              else if (car.id === "grand-carnival") shortName = "Kia Grand Carnival";
              else if (car.id === "g-corolla") shortName = "G Corolla";
              else if (car.id === "prado-tz-down") shortName = "Prado Classic";

              return (
                <button
                  key={car.id}
                  onClick={() => setSelectedVehicleIdx(idx)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                    selectedVehicleIdx === idx
                      ? "bg-gradient-to-r from-gold-dark to-gold-gold text-[#0b132b] border-[#d4af37] font-black shadow-lg shadow-gold-gold/15 scale-105"
                      : "bg-[#0b132b]/80 text-gray-400 border-gold-gold/15 hover:text-white hover:border-gold-gold/40"
                  }`}
                >
                  {shortName}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Executive specs & beautiful image of SUV */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="relative rounded-2xl overflow-hidden border border-gold-gold/30 gold-glow shadow-2xl">
                <img 
                  src={TRANSPORT_OPTIONS[selectedVehicleIdx]?.image || PRADO_IMAGE} 
                  alt={TRANSPORT_OPTIONS[selectedVehicleIdx]?.name || "Toyota Prado TZ"} 
                  className="w-full h-auto object-cover aspect-[16/9] transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                      {TRANSPORT_OPTIONS[selectedVehicleIdx]?.name || "Toyota Prado TZ"}
                    </h4>
                    <p className="text-[10.5px] text-gray-300">
                      {TRANSPORT_OPTIONS[selectedVehicleIdx]?.description || "Equipped for Deosai Plains & Khunjerab Border crossings"}
                    </p>
                  </div>
                  <span className="bg-gold-gold text-navy-dark px-3 py-1 rounded text-xs font-black uppercase">
                    {TRANSPORT_OPTIONS[selectedVehicleIdx]?.type || "Active Fleet"}
                  </span>
                </div>
              </div>

              {/* Specifications Block Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(TRANSPORT_OPTIONS[selectedVehicleIdx] || TRANSPORT_OPTIONS[0]).features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 bg-navy-light/40 border border-gold-gold/10 p-3.5 rounded-xl">
                    <div className="bg-gold-gold/10 p-1.5 rounded text-gold-gold shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white mb-0.5 uppercase tracking-wide">Spec #{idx + 1}</h5>
                      <p className="text-[11px] text-gray-300 font-light">{feat}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Col: Interactive Rental Price Calculator card */}
            <div className="lg:col-span-5 bg-navy-light/70 border border-gold-gold/30 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Car className="text-gold-gold w-5 h-5" />
                {(TRANSPORT_OPTIONS[selectedVehicleIdx]?.id === "prado-tz-luxury" ? "Prado" : TRANSPORT_OPTIONS[selectedVehicleIdx]?.name.split(" ")[1] || "Fleet")} Rental Calculator
              </h3>
              <p className="text-xs text-gray-400 mb-6">Plan standard rental duration and pathways. Includes seasoned VIP mountain pilot driver.</p>

              <div className="space-y-4 text-left">
                
                {/* Sliders for Renting Duration */}
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gold-gold mb-1">
                    <span>Duration in Days</span>
                    <span className="font-mono text-white text-sm">{pradoDays} Days</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="14" 
                    value={pradoDays} 
                    onChange={(e) => setPradoDays(parseInt(e.target.value))}
                    className="w-full accent-gold-gold h-2 bg-navy-dark rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>1 Day</span>
                    <span>7 Days</span>
                    <span>14 Days</span>
                  </div>
                </div>

                {/* Pickup Location select */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Preferred Pickup Hub</label>
                  <select 
                    value={pradoPickup}
                    onChange={(e) => setPradoPickup(e.target.value)}
                    className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-gold-gold/60 transition"
                  >
                    <option value="Islamabad">Islamabad Capital (Ferry service premium)</option>
                    <option value="Gilgit Airport">Gilgit Town / Gilgit Airport Hub</option>
                    <option value="Skardu Airport">Skardu Airport / Shangrila Hub</option>
                    <option value="Hunza (Aliabad)">Hunza Valley Base</option>
                  </select>
                </div>

                {/* Road Route select */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Target Travel Route</label>
                  <select 
                    value={pradoRoute}
                    onChange={(e) => setPradoRoute(e.target.value)}
                    className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-gold-gold/60 transition"
                  >
                    <option value="Hunza & Passu Highway">Karakoram Highway (Hunza & Passu Cones)</option>
                    <option value="Skardu Shangrila Road">Skardu Town, Desert & Lakes</option>
                    <option value="Deosai National Bear Park">Deosai Plains expedition</option>
                    <option value="Khaplu & Shigar Valley">Baltistan Heritage Palaces (Shigar & Khaplu)</option>
                  </select>
                </div>

                {/* Off-road / terrain option */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gold-gold font-bold mb-1">Terrain Challenge Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPradoTerrain("standard")}
                      className={`p-2.5 rounded-lg text-xs font-bold tracking-wide border cursor-pointer transition ${
                        pradoTerrain === "standard" 
                          ? "bg-gold-gold/20 border-gold-gold text-gold-gold" 
                          : "bg-navy-dark border-gold-gold/15 text-gray-400 hover:text-white"
                      }`}
                    >
                      Asphalt Highway
                    </button>
                    <button
                      onClick={() => setPradoTerrain("challenging")}
                      className={`p-2.5 rounded-lg text-xs font-bold tracking-wide border cursor-pointer transition ${
                        pradoTerrain === "challenging" 
                          ? "bg-gold-gold/20 border-gold-gold text-gold-gold" 
                          : "bg-navy-dark border-gold-gold/15 text-gray-400 hover:text-white"
                      }`}
                    >
                      Rough Mountain Track (+20%)
                    </button>
                  </div>
                </div>

                {/* Computed Price Display */}
                <div className="bg-navy-dark/95 border border-gold-gold/20 rounded-xl p-4 mt-6 text-center">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">Estimated Luxury Rental Cost</div>
                  <div className="text-2xl font-black text-gold-gold tracking-tight">
                    {formatPrice({ PKR: computedPradoTotal(), USD: Math.round(computedPradoTotal() / 280) })}
                  </div>
                  <div className="text-[9.5px] text-gray-500 mt-1">
                    *Includes chauffeur fuel, expert driver wages, local route tolls, and emergency kit.
                  </div>
                </div>

                {/* Contact Book */}
                <button
                  onClick={handlePradoWhatsAppInquiry}
                  className="w-full py-3.5 mt-4 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-[#20b858] transition-all cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Request Premium Chauffeur via WhatsApp</span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SECTION 6: Customer Reviews Testimonial Slider with premium cards */}
      <section id="reviews" className="py-24 bg-navy-dark relative z-10 border-t border-navy-light">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-gold-gold text-xs font-mono tracking-widest uppercase font-extrabold mb-3">
              ⭐ Premium Faith
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Sovereign Guest Testimonials
            </h2>
            <div className="w-16 h-1 bg-gold-gold mx-auto mb-6"></div>
            <p className="text-gray-400 text-sm">
              Read real-life reflections of corporate executives, happy newlyweds, and elite globetrotters who traversed Karakoram with Khasman Travel & Tours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-navy-light/40 border border-gold-gold/10 p-6 rounded-2xl flex flex-col justify-between hover:border-gold-gold/30 transition-all duration-300 relative group"
              >
                {/* Golden quote marker background ornament */}
                <span className="absolute top-4 right-4 text-6xl font-serif text-gold-gold/[0.08] select-none pointer-events-none group-hover:text-gold-gold/15 transition-colors">
                  “
                </span>

                <div>
                  {/* Rating state */}
                  <div className="flex items-center space-x-1 text-gold-gold mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-gold text-gold-gold" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-300 italic font-light leading-relaxed mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-navy-dark/50">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-11 h-11 rounded-full object-cover border border-gold-gold/30"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-white uppercase tracking-wide">{t.name}</h5>
                    <div className="text-[10px] text-gold-gold font-mono">{t.role}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{t.location}</div>
                  </div>
                </div>

                <div className="mt-3.5 text-left bg-navy-dark/40 py-1.5 px-3 rounded-lg text-[10px] text-gray-400 font-mono border border-gold-gold/5">
                  Package: <span className="text-white">{t.tourName}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Trust Badges */}
          <div className="mt-16 pt-12 border-t border-navy-light/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-gold-gold font-display font-extrabold uppercase">98%</div>
              <p className="text-xs text-gray-400 font-mono uppercase mt-1">Excellent Rate</p>
            </div>
            <div>
              <div className="text-2xl font-black text-gold-gold font-display font-extrabold uppercase">1,250+</div>
              <p className="text-xs text-gray-400 font-mono uppercase mt-1">Couples Guided</p>
            </div>
            <div>
              <div className="text-2xl font-black text-gold-gold font-display font-extrabold uppercase">12+ Years</div>
              <p className="text-xs text-gray-400 font-mono uppercase mt-1">Mountain Pilot Driving</p>
            </div>
            <div>
              <div className="text-2xl font-black text-gold-gold font-display font-extrabold uppercase">24/7</div>
              <p className="text-xs text-gray-400 font-mono uppercase mt-1">Satellite Dispatch SOS</p>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 7: Travel Blog / Inspiration Section with full read-more modals */}
      <section id="blog" className="py-24 bg-navy-deep relative z-10 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
            <div>
              <div className="text-gold-gold text-xs font-mono tracking-widest uppercase font-extrabold mb-3">
                📖 Altitude Whispers
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-2">
                Travel Blog & Insights
              </h2>
              <div className="w-16 h-1 bg-gold-gold mb-4"></div>
              <p className="text-gray-400 text-sm max-w-xl">
                Stay updated with modern packing checklists, high altitude survival guides, and cultural folklore of Gilgit Baltistan.
              </p>
            </div>
            <a 
              href="#contact" 
              className="text-xs font-bold text-gold-gold tracking-wider uppercase border-b border-gold-gold hover:text-white hover:border-white transition-colors duration-200 cursor-pointer mt-4 md:mt-0 flex items-center space-x-1"
            >
              <span>Get periodic travel books</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.id}
                className="bg-navy-light/30 border border-gold-gold/10 rounded-2xl overflow-hidden shadow-xl hover:border-gold-gold/30 hover:scale-[1.01] transition-all duration-300 flex flex-col group text-left"
              >
                
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 bg-navy-dark/90 backdrop-blur-md text-gold-gold text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
                    {post.date}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Read time + Author */}
                    <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-mono mb-2.5">
                      <span className="text-gold-gold font-bold">{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-white group-hover:text-gold-gold transition-colors duration-200 mb-3 leading-snug">
                      {post.title}
                    </h4>

                    <p className="text-xs text-gray-300 font-light mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedBlog(post)}
                    className="text-xs font-extrabold text-gold-gold group-hover:text-white transition-colors flex items-center space-x-1 cursor-pointer pt-4 border-t border-navy-dark/50"
                  >
                    <span>Read Immersive Story</span>
                    <ArrowRight className="w-3.5 h-3.5 inline-block" />
                  </button>
                </div>

              </article>
            ))}
          </div>

        </div>

      </section>

      {/* SECTION 11: Personal Holidays Custom Planner Ticket Builder (Extra visual fidelity) */}
      <section id="planner" className="py-24 bg-navy-dark relative z-10 border-t border-navy-light">
        
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="bg-gradient-to-br from-navy-light to-navy-dark border border-gold-gold/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden gold-glow text-left">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-gold/5 rounded-full blur-[40px] pointer-events-none"></div>
            
            {/* Steps indicator */}
            <div className="flex items-center justify-between border-b border-gold-gold/15 pb-6 mb-8">
              <div>
                <span className="text-gold-gold text-[10px] font-mono tracking-widest uppercase font-bold">Interactive Feature</span>
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">Custom Itinerary Builder</h3>
              </div>
              <div className="flex items-center space-x-2 font-mono text-xs">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${plannerStep === 1 ? "bg-gold-gold text-navy-dark" : "bg-navy-dark text-gray-400"}`}>1</span>
                <span className="text-gray-500">→</span>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${plannerStep === 2 ? "bg-gold-gold text-navy-dark" : "bg-navy-dark text-gray-400"}`}>2</span>
                <span className="text-gray-500">→</span>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${customTicketGenerated ? "bg-emerald-500 text-white" : "bg-navy-dark text-gray-400"}`}>✓</span>
              </div>
            </div>

            {/* STEP 1: Route Selection */}
            {plannerStep === 1 && !customTicketGenerated && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gold-gold mb-3 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold-gold" />
                    Which mystical places do you want to unite? (Select many)
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {["Skardu", "Hunza Valley", "Deosai Plains", "Fairy Meadows", "Khaplu Heritage", "Shigar Valley"].map((dest) => {
                      const selected = planDestinations.includes(dest);
                      return (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => {
                            if (selected) {
                              setPlanDestinations(planDestinations.filter(d => d !== dest));
                            } else {
                              setPlanDestinations([...planDestinations, dest]);
                            }
                          }}
                          className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                            selected 
                              ? "bg-gold-gold text-navy-dark border-gold-gold" 
                              : "bg-navy-dark border-gold-gold/15 text-gray-300 hover:border-gold-gold/40"
                          }`}
                        >
                          {dest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Preferred transport</label>
                    <select 
                      value={planTransport} 
                      onChange={(e) => setPlanTransport(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="Toyota Prado TZ">Toyota Prado TZ 4x4</option>
                      <option value="Toyota Prado Classic (TZ Down Model)">Toyota Prado TZ Classic (Down Model)</option>
                      <option value="Toyota Corolla GLi/Grande (G Corolla)">Toyota Corolla GLi/Grande (G Corolla)</option>
                      <option value="VIP Coaster Cruiser">Comfort Grand Cabin</option>
                      <option value="Elite Helicopter Charter">Air Helicopter Tour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Trip span scale</label>
                    <select 
                      value={planDuration} 
                      onChange={(e) => setPlanDuration(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="3-5 Days">3-5 Days (Quick Escapes)</option>
                      <option value="5-7 Days">5-7 Days (Standard Luxury)</option>
                      <option value="8-12 Days">8-12 Days (Deep Expedition)</option>
                      <option value="Custom Unlimited">12+ Days (Royal Baltistan)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Travel crew type</label>
                    <select 
                      value={planGroup} 
                      onChange={(e) => setPlanGroup(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="Couple">Couple (Honeymoon Mood)</option>
                      <option value="Family Pack">Family (Mixed Ages)</option>
                      <option value="Adventure Friends">Solo/Adventure Friends</option>
                      <option value="Corporate VIPs">Corporate/Diplomat Retreat</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-gold-gold/15 flex justify-end">
                  <button
                    onClick={() => setPlannerStep(2)}
                    disabled={planDestinations.length === 0}
                    className="px-6 py-3 bg-gold-gold text-navy-dark disabled:bg-gray-700 disabled:text-gray-400 font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer hover:bg-gold-light/95 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Proceed to Contacts</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Lead Passenger Info */}
            {plannerStep === 2 && !customTicketGenerated && (
              <div className="space-y-6">
                <div className="bg-navy-dark/60 p-4 rounded-xl border border-gold-gold/10 flex items-start gap-3">
                  <Info className="w-5 h-5 text-gold-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">Current configuration path</span>
                    <p className="text-xs text-white font-medium">
                      Routing {planDuration} across *{planDestinations.join(" + ")}* using {planTransport} for {planGroup}.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gold-gold mb-1.5">Lead Guest Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Faisal Karim"
                      value={planName}
                      onChange={(e) => setPlanName(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold-gold/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gold-gold mb-1.5">WhatsApp Contact Number</label>
                    <input 
                      type="text" 
                      placeholder="e.g. +92 300 1234567"
                      value={planPhone}
                      onChange={(e) => setPlanPhone(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold-gold/50"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gold-gold/15 flex justify-between">
                  <button
                    onClick={() => setPlannerStep(1)}
                    className="px-5 py-2.5 bg-navy-dark border border-gold-gold/25 hover:bg-navy-light text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Back to destinations
                  </button>
                  <button
                    onClick={() => {
                      if (planName && planPhone) {
                        setCustomTicketGenerated(true);
                      } else {
                        alert("Please fill name and contact phone to issue custom ticket!");
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-gold-dark via-gold-gold to-gold-light text-navy-dark font-display font-extrabold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Generate Custom Tour Ticket
                  </button>
                </div>
              </div>
            )}

            {/* SUCCESS STATE: Stunning Golden Ticket display */}
            {customTicketGenerated && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                
                {/* Visual Ticket element */}
                <div className="bg-gradient-to-r from-navy-deep to-navy-light border-2 border-gold-gold/50 rounded-2xl p-6 relative overflow-hidden text-left mx-auto max-w-lg shadow-xl font-mono">
                  
                  {/* Decorative ticket notch holes */}
                  <div className="absolute top-1/2 -left-3.5 w-6 h-6 rounded-full bg-navy-light border-r border-gold-gold/50"></div>
                  <div className="absolute top-1/2 -right-3.5 w-6 h-6 rounded-full bg-navy-light border-l border-gold-gold/50"></div>

                  <div className="flex justify-between items-start border-b border-gold-gold/25 pb-4 mb-4">
                    <div>
                      <div className="text-[10px] text-gold-gold uppercase font-black">Boarding Luxury Ticket</div>
                      <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Khasman Customs</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400">Class Type</div>
                      <span className="text-[10px] text-white bg-gold-gold/20 px-2 py-0.5 rounded border border-gold-gold/30">ROYAL CLASS</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs mb-4">
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase block">Lead Guest</span>
                      <span className="text-white font-bold">{planName}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase block">Contact Support</span>
                      <span className="text-white font-bold">{planPhone}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[9px] text-gray-500 uppercase block">Sailing Path Routes</span>
                      <span className="text-gold-gold font-bold text-xs uppercase tracking-tight">{planDestinations.join(" -> ")}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase block">Ground transport fleet</span>
                      <span className="text-white font-medium">{planTransport}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase block">Duration scale</span>
                      <span className="text-white font-medium">{planDuration}</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gold-gold/35 pt-4 flex justify-between items-center bg-navy-dark/40 px-3.5 py-2.5 rounded-lg">
                    <div>
                      <span className="text-[8px] text-gray-500 uppercase block">Standard Dispatch ID</span>
                      <span className="text-[10px] font-bold text-gray-400">KH-#{Math.floor(1000 + Math.random() * 9000)}-DEOSAI</span>
                    </div>
                    {/* Fake barcode block */}
                    <div className="flex space-x-0.5 h-6 opacity-60">
                      {[1, 3, 1, 2, 4, 1, 3, 2, 1, 2, 5, 2, 1].map((w, i) => (
                        <div key={i} className="bg-white" style={{ width: `${w}px` }}></div>
                      ))}
                    </div>
                  </div>

                </div>

                <p className="text-xs text-gray-300">
                  Your premium custom itinerary ticket is validated! Submit this ticket directly to our Chief Executive Dispatcher on WhatsApp to calculate pricing options.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      setCustomTicketGenerated(false);
                      setPlanDestinations([]);
                      setPlannerStep(1);
                    }}
                    className="px-5 py-2.5 bg-navy-light text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-gold-gold/20 hover:bg-navy-dark transition cursor-pointer"
                  >
                    Build another ticket
                  </button>
                  <button
                    onClick={handleCustomTicketWhatsApp}
                    className="px-6 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#20b858] transition flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Send Custom Ticket to WhatsApp</span>
                  </button>
                </div>

              </motion.div>
            )}

          </div>

        </div>

      </section>

      {/* SECTION 8: Luxury Newsletter subscription section */}
      <section id="newsletter" className="py-20 bg-gradient-to-b from-navy-deep to-navy-dark relative z-10 border-t border-navy-light">
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          
          <div className="inline-flex p-3 rounded-full bg-gold-gold/10 border border-gold-gold/20 mb-6 text-gold-gold">
            <Mail className="w-8 h-8" />
          </div>

          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-2 tracking-tight">
            Subscribe To Khasman Private Gazette
          </h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto mb-8 font-light leading-relaxed">
            Join 12,000+ elegant travelers and mountain enthusiasts. Receive seasonal discounts of up to 15% on Prado TZ rentals and private Hunza packages. No clutter, only beauty.
          </p>

          <AnimatePresence>
            {!newsletterSubscribed ? (
              <motion.form 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setNewsletterSubscribed(true);
                }}
                className="flex flex-col sm:flex-row items-stretch max-w-lg mx-auto bg-navy-light border border-gold-gold/30 rounded-xl p-1.5 focus-within:border-gold-gold/60 transition group font-sans text-left"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Enter your premium email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent border-0 flex-grow px-4 py-3 text-sm text-white focus:outline-none placeholder:text-gray-600 block"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gold-dark to-gold-gold text-navy-dark px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
                >
                  Join Gazette
                </button>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold-gold/10 border border-gold-gold/30 p-6 rounded-2xl max-w-md mx-auto text-center"
              >
                <CheckCircle className="w-8 h-8 text-gold-gold mx-auto mb-2 animate-bounce" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Welcome aboard the Khasman Gazette</h4>
                <p className="text-[11px] text-gray-300">
                  We have dispatched a welcome travel log book to <span className="font-mono text-gold-gold font-bold">{newsletterEmail}</span> containing rare photos of Deosai Plains. Enjoy your journey!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </section>

      {/* SECTION 9: Combined Contact Landing & Booking Request section */}
      <section id="contact" className="py-24 bg-navy-dark relative z-10 border-t border-navy-light">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <span className="text-gold-gold text-xs font-mono tracking-widest uppercase font-extrabold mb-3 block">
                  📍 Regional Presence
                </span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
                  Get In Touch
                </h2>
                <div className="w-16 h-1 bg-gold-gold mb-6"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Have a custom corporate team retreat dynamic requirement, specialized diplomatic crew protocols, or wanting to design an elaborate filming expedition with drone permissions? Let Khasman group specialists orchestrate your needs.
                </p>
              </div>

              {/* Direct Address Indicators */}
              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-start space-x-3.5">
                  <div className="bg-gold-gold/10 p-2 rounded-lg text-gold-gold shrink-0">
                    <MapPin className="w-5 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider mb-0.5">Islamabad Capital HQ Office</h5>
                    <p className="text-gray-300">Centaurus Corporate Office Tower, Sector F-8, Islamabad, Pakistan.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="bg-gold-gold/10 p-2 rounded-lg text-gold-gold shrink-0">
                    <MapPin className="w-5 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider mb-0.5">Skardu AD Office location</h5>
                    <p className="text-gray-300">Skardu Sadpara Road, Parishan Chok, AD Office, Skardu, Pakistan.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="bg-gold-gold/10 p-2 rounded-lg text-gold-gold shrink-0">
                    <Phone className="w-5 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider mb-0.5">Official Direct Support Hotlines</h5>
                    <p className="text-gray-300 font-mono flex flex-col sm:flex-row gap-x-4">
                      <span>Phone: <a href={`tel:${PHONE_NUMBER}`} className="hover:text-gold-gold font-bold transition">0312-5771406</a></span>
                      <span>WhatsApp: <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-gold font-bold transition">0355-5014497</a></span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="bg-gold-gold/10 p-2 rounded-lg text-gold-gold shrink-0">
                    <Clock className="w-5 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider mb-0.5">Satellite Dispatch Availability</h5>
                    <p className="text-gray-300">Daily: 08:30 AM to 11:30 PM (Local PKT timezone)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels in Contact */}
              <div className="flex items-center space-x-4 pt-6 border-t border-navy-light/40">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Diplomatic Connect:</span>
                <a href="https://www.facebook.com/share/1XQWsiZEKs/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-gold-gold hover:bg-gold-gold hover:text-navy-dark transition duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/khasman_travel_and_tours/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-gold-gold hover:bg-gold-gold hover:text-navy-dark transition duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Comprehensive Booking Inquiry Form */}
            <div className="lg:col-span-7 bg-navy-light/50 border border-gold-gold/15 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md relative">
              <h3 className="font-display font-extrabold text-xl text-white mb-2">
                Submit Luxury Itinerary Inquiry
              </h3>
              <p className="text-xs text-gray-400 mb-8">
                Tell us about your ultimate mountain blueprint. We reply within 2 hours with customized lodging options and active route recommendations.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for choosing KHASMAN TRAVEL & TOURS! We have created your diplomatic inquiry index. Please check your contact phone or click the floating WhatsApp icon for direct consultation.");
              }} className="space-y-6 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gold-gold tracking-wider mb-1.5">Traveler Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Faisal Karim" 
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gold-gold tracking-wider mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. faisal@luxurytourist.com" 
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gold-gold tracking-wider mb-1.5">Phone (with WhatsApp)</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +92 355 5014497" 
                      className="w-full bg-navy-dark border border-gold-gold/20 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gold-gold tracking-wider mb-1.5">Approximate group budget</label>
                    <select className="w-full bg-navy-dark border border-gold-gold/20 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-gold">
                      <option value="luxury">Luxury Standard (Premium Hotels + Prado TZ)</option>
                      <option value="royal">Sovereign Royal Class (Serena Palace suites + Helicopter ferry slots)</option>
                      <option value="corporate">Bespoke Corporate Executive Retreat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gold-gold tracking-wider mb-1.5">Custom Itinerary Outline & Dietary Needs</label>
                  <textarea 
                    rows={4}
                    placeholder="e.g. We require wheelchair friendly transport, single rooms for senior citizens, and a private candlelight Balti cuisine dinner overlooking Attabad Lake in Passu..."
                    className="w-full bg-navy-dark border border-gold-gold/20 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-gold"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-dark via-gold-gold to-gold-light text-navy-dark font-display font-extrabold text-xs uppercase tracking-wider hover:scale-[1.01] transition-transform duration-200 cursor-pointer shadow-lg shadow-gold-gold/15"
                >
                  Secure Direct Reservation Queue
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* SECTION 10: Extensive Luxury Footer */}
      <footer id="footer" className="bg-navy-deep text-gray-400 py-16 border-t border-gold-gold/20 relative z-10 font-sans text-xs">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Logo brand info column */}
          <div className="md:col-span-4 space-y-4">
            <KhasmanLogo size="md" showText={true} />
            <p className="text-[11px] leading-relaxed font-light text-gray-400">
              The premier certified luxury mountain management network. Operating elite custom tours across Skardu, Hunza, Fairy Meadows, and Deosai high-altitudes under deep blue skies.
            </p>
            <div className="text-[10px] uppercase font-mono tracking-widest text-gold-gold flex items-center">
              <CheckCircle className="w-3.5 h-3.5 text-gold-gold mr-1.5" /> Licensed Travel Operator #GB-4920
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider font-display font-medium text-xs">Major Locations</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#packages" onClick={() => { setActiveLocation("Hunza"); }} className="hover:text-gold-gold transition-colors">Hunza Valley Splendor</a></li>
              <li><a href="#packages" onClick={() => { setActiveLocation("Skardu"); }} className="hover:text-gold-gold transition-colors">Skardu Shangrila Paradise</a></li>
              <li><a href="#packages" onClick={() => { setActiveLocation("Deosai"); }} className="hover:text-gold-gold transition-colors">Deosai National Bears Safari</a></li>
              <li><a href="#packages" onClick={() => { setActiveLocation("Fairy Meadows"); }} className="hover:text-gold-gold transition-colors">Fairy Meadows & Nanga Parbat</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider font-display font-medium text-xs">Agency Themes</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#honeymoon" className="hover:text-gold-gold transition-colors">Royal Romantic Honeymoons</a></li>
              <li><a href="#family" className="hover:text-gold-gold transition-colors">Spacious Family Comfort Tours</a></li>
              <li><a href="#prado" className="hover:text-gold-gold transition-colors">Toyota Prado TZ Luxury Fleet</a></li>
              <li><a href="#planner" className="hover:text-gold-gold transition-colors text-gold-gold font-bold">Interactive Custom Planner</a></li>
            </ul>
          </div>

          {/* Corporate Badges columns */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider font-display font-medium text-xs">Elite Verification</h4>
            <div className="space-y-2 text-[10px] text-gray-400 font-mono leading-relaxed">
              <div>
                <span className="text-white block uppercase">Govt Bonded</span>
                GB Permit Standard-2038
              </div>
              <div>
                <span className="text-white block uppercase">Active Insurance</span>
                Himalayan Mutual Coverage
              </div>
            </div>
          </div>

        </div>

        {/* Outer credit lines */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-gray-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-mono">
          <div>
            © 2026 KHASMAN TRAVEL & TOURS (PVT) LTD. ALL SOVEREIGN RIGHTS RESERVED.
          </div>
          <div className="flex space-x-4">
            <a href="#contact" className="hover:text-gold-gold">Privacy Bond</a>
            <span>•</span>
            <a href="#contact" className="hover:text-gold-gold">Terms of Expedition</a>
            <span>•</span>
            <a href="#contact" className="hover:text-gold-gold">Satellite Dispatch</a>
          </div>
        </div>

      </footer>

      {/* RENDER MODAL: Tour Package Details */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-navy-light text-left text-white max-w-2xl w-full rounded-2xl overflow-hidden border border-gold-gold/30 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full cursor-pointer transition border border-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 bg-gold-dark text-navy-dark px-3 py-1 rounded text-xs font-bold uppercase">
                  {selectedPackage.category} Choice
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex items-center space-x-1 text-xs text-gold-gold mb-2 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-white uppercase font-bold">{selectedPackage.location} Region</span>
                    <span>•</span>
                    <span>{selectedPackage.duration}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                    {selectedPackage.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {selectedPackage.description}
                  </p>
                </div>

                {/* Package Highlights Grid */}
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gold-gold mb-3">Expedition Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPackage.highlights.map((hlt, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{hlt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing summary widget */}
                <div className="bg-navy-dark/90 border border-gold-gold/20 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Curated Rate Scale</div>
                    <div className="text-2xl font-black text-gold-gold">
                      {formatPrice(selectedPackage.price)}
                    </div>
                    <div className="text-[9px] text-gray-400 mt-0.5">Includes luxury ground guide services</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handlePackageWhatsAppInquiry(selectedPackage)}
                      className="bg-[#25D366] hover:bg-[#20b858] text-white flex items-center gap-1.5 px-4 py-3 rounded-lg text-xs font-bold transition shadow-lg cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Start Chat Inquiry</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENDER MODAL: Blog Immersive Post Details */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-navy-light text-left text-white max-w-2xl w-full rounded-2xl overflow-hidden border border-gold-gold/30 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-60">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full cursor-pointer transition border border-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-3 text-[10px] text-gold-gold font-mono uppercase">
                  <span>Author: {selectedBlog.author}</span>
                  <span>•</span>
                  <span>{selectedBlog.date}</span>
                </div>

                <h3 className="font-display font-extrabold text-xl md:text-2xl text-white leading-tight">
                  {selectedBlog.title}
                </h3>

                <div className="w-full h-px bg-gold-gold/10 my-4"></div>

                <p className="text-xs text-gray-200 leading-relaxed font-light whitespace-pre-line">
                  {selectedBlog.content}
                </p>

                <div className="pt-6">
                  <button 
                    onClick={() => {
                      setSelectedBlog(null);
                      const textEncoded = encodeURIComponent(`Hi Khasman Travel, I read your intriguing article "${selectedBlog.title}" and would love to consult with Faisal/Zainab about seasonal itineraries!`);
                      window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${textEncoded}`, "_blank");
                    }}
                    className="bg-gradient-to-r from-gold-dark to-gold-gold text-navy-dark px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 cursor-pointer flex items-center space-x-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-navy-dark" />
                    <span>Talk to the Author on WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
