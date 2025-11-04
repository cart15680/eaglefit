import { 
  AirVent, 
  Hammer, 
  Droplets, 
  Paintbrush, 
  Wallpaper as WallpaperIcon,
  Zap,
  HardHat,
  Layers,
  Waves,
  Wrench,
  Palette
} from "lucide-react";

export const services = [
  {
    id: "air-conditioning",
    icon: AirVent,
    title: "Air Conditioning Services",
    shortDesc: "Professional AC installation, maintenance, and repair services for optimal climate control.",
    description: "We specialize in providing comprehensive air conditioning solutions with state-of-the-art technology."
  },
  {
    id: "carpentry",
    icon: Hammer,
    title: "Carpentry & Wood Flooring",
    shortDesc: "Expert carpentry services and premium wood flooring installation for residential and commercial spaces.",
    description: "From custom furniture to elegant wood flooring, we bring craftsmanship to every project."
  },
  {
    id: "sanitary",
    icon: Droplets,
    title: "Sanitary Installation & Pipe Repairing",
    shortDesc: "Professional plumbing and sanitary installation services with quality materials.",
    description: "Complete sanitary solutions including installation, maintenance, and emergency repairs."
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Painting Contracting",
    shortDesc: "Professional painting services for interior and exterior surfaces with premium finishes.",
    description: "Transform your spaces with our expert painting services using high-quality materials."
  },
  {
    id: "wallpaper",
    icon: WallpaperIcon,
    title: "Wallpaper Fixing Works",
    shortDesc: "Professional wallpaper installation and customization for stunning wall designs.",
    description: "Expert wallpaper installation services for both residential and commercial properties."
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Fitting & Fixture",
    shortDesc: "Complete electrical solutions including installation, maintenance, and safety inspections.",
    description: "Reliable electrical services ensuring safety and efficiency for all your power needs."
  },
  {
    id: "plaster",
    icon: HardHat,
    title: "Plaster Works",
    shortDesc: "Professional plastering services for smooth and durable wall finishes.",
    description: "Expert plastering for walls and ceilings with attention to detail and quality."
  },
  {
    id: "false-ceiling",
    icon: Layers,
    title: "False Ceiling & Light Partition",
    shortDesc: "Modern false ceiling designs and light partition installations for elegant interiors.",
    description: "Create stunning ceiling designs with our expert false ceiling and partition services."
  },
  {
    id: "swimming-pool",
    icon: Waves,
    title: "Swimming Pool Installation",
    shortDesc: "Complete swimming pool installation and maintenance services for luxury properties.",
    description: "Design and build your dream swimming pool with our comprehensive installation services."
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Building Maintenance",
    shortDesc: "Comprehensive building maintenance services to keep your property in perfect condition.",
    description: "Regular maintenance and emergency repairs for residential and commercial buildings."
  },
  {
    id: "decoration",
    icon: Palette,
    title: "Decoration Design & Implementation",
    shortDesc: "Creative decoration design and flawless implementation for stunning interiors.",
    description: "Transform your space with our innovative decoration designs and expert implementation."
  }
];

export const projects = [
  {
    id: "luxury-villa-interior",
    title: "Luxury Villa Interior",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    description: "Complete interior renovation of a luxury villa in Dubai featuring modern MEP solutions and elegant decoration.",
    details: {
      location: "Dubai Marina",
      duration: "6 months",
      cost: "AED 500,000",
      services: ["AC Installation", "Electrical Works", "Interior Design", "False Ceiling"]
    }
  },
  {
    id: "commercial-office-fit-out",
    title: "Commercial Office Fit-out",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Modern office space transformation with advanced MEP systems and contemporary design.",
    details: {
      location: "Business Bay",
      duration: "4 months",
      cost: "AED 350,000",
      services: ["HVAC Systems", "Lighting Design", "Carpentry", "Paint Works"]
    }
  },
  {
    id: "hotel-renovation",
    title: "Boutique Hotel Renovation",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Complete renovation of boutique hotel with luxury finishes and state-of-the-art facilities.",
    details: {
      location: "Downtown Dubai",
      duration: "8 months",
      cost: "AED 1,200,000",
      services: ["Full MEP", "Interior Design", "Swimming Pool", "Building Maintenance"]
    }
  },
  {
    id: "residential-apartment",
    title: "Premium Apartment Makeover",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    description: "Elegant apartment transformation with modern amenities and stylish interiors.",
    details: {
      location: "Palm Jumeirah",
      duration: "3 months",
      cost: "AED 250,000",
      services: ["Painting", "Wallpaper", "Electrical", "Plumbing"]
    }
  },
  {
    id: "retail-store",
    title: "Luxury Retail Store",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "High-end retail store design and fit-out with premium finishes.",
    details: {
      location: "Dubai Mall",
      duration: "2 months",
      cost: "AED 180,000",
      services: ["Lighting", "False Ceiling", "Decoration", "AC"]
    }
  },
  {
    id: "restaurant-interior",
    title: "Fine Dining Restaurant",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Sophisticated restaurant interior with ambient lighting and elegant design.",
    details: {
      location: "JBR",
      duration: "3 months",
      cost: "AED 320,000",
      services: ["Full Interior", "Kitchen MEP", "Lighting Design", "Decoration"]
    }
  }
];

export const blogPosts = [
  {
    id: "sustainable-mep-solutions",
    title: "Sustainable MEP Solutions for Modern Buildings",
    excerpt: "Explore how sustainable MEP solutions are transforming the construction industry in Dubai.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    date: "2025-10-15",
    category: "MEP",
    author: "Mohammed Elrefaey"
  },
  {
    id: "luxury-interior-trends",
    title: "2025 Luxury Interior Design Trends in UAE",
    excerpt: "Discover the latest interior design trends shaping luxury properties in the UAE.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    date: "2025-10-10",
    category: "Design",
    author: "Design Team"
  },
  {
    id: "smart-home-integration",
    title: "Smart Home Integration: The Future of Living",
    excerpt: "Learn how smart home technologies are revolutionizing residential properties in Dubai.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    date: "2025-10-05",
    category: "Technology",
    author: "Tech Team"
  }
];

export const galleryItems = [
  {
    id: "gallery-1",
    title: "Modern Living Room",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    type: "image"
  },
  {
    id: "gallery-2",
    title: "Luxury Bathroom",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    type: "image"
  },
  {
    id: "gallery-3",
    title: "Office Space",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    type: "image"
  },
  {
    id: "gallery-4",
    title: "Kitchen Design",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    type: "image"
  },
  {
    id: "gallery-5",
    title: "Bedroom Suite",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    type: "image"
  },
  {
    id: "gallery-6",
    title: "Swimming Pool",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
    type: "image"
  }
];
