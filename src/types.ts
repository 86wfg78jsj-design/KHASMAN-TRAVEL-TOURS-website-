export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string; // "5 Days, 4 Nights"
  price: {
    PKR: number;
    USD: number;
  };
  image: string;
  rating: number;
  description: string;
  category: "featured" | "honeymoon" | "family";
  highlights: string[];
}

export interface TransportOption {
  id: string;
  name: string;
  type: string;
  image: string;
  dailyRate: {
    PKR: number;
    USD: number;
  };
  seating: number;
  features: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
  tourName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
}
