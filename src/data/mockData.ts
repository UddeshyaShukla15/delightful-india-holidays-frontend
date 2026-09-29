export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  accommodation?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  category: string;
  duration: string;
  route: string;
  startingPrice: string;
  originalPrice?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  bannerImage?: string;
  overview: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CustomerReview {
  id: string;
  name: string;
  platform: "Google" | "Tripadvisor";
  date: string;
  avatar?: string;
  rating: number;
  text: string;
  tourName?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  heroSubtext: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  locationDetails: string;
  whatsappUrl: string;
  socialLinks: {
    tripadvisor: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    pinterest: string;
    tumblr: string;
  };
  stats: {
    yearsInBusiness: string;
    happyGuests: string;
    avgRating: string;
    tourPackages: string;
    recommended: string;
  };
}

export interface EnquirySubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  tourId?: string;
  tourName?: string;
  travelDate: string;
  adults: number;
  children: number;
  message: string;
  status: "new" | "contacted" | "confirmed" | "closed";
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Central Company Information
// ---------------------------------------------------------------------------
export const companyInfo: CompanyInfo = {
  name: "Delightful India Holidays",
  tagline: "Tailor-Made Tours of India",
  heroSubtext:
    '"Helping your way to Travel & Blissfull Experience" — Craft your Perfect India Trip Planning & Itinerary',
  phone: "+91-9636784713",
  phoneFormatted: "+91 96367 84713",
  email: "delightfulindiaholidays@gmail.com",
  address: "Near Airforce Circle, Dhibba Para, Jaisalmer, Rajasthan 345001",
  locationDetails: "Operating across Golden Triangle, Rajasthan, South India, and Ladakh",
  whatsappUrl: "https://wa.me/919636784713?text=Hi%20Delightful%20India%20Holidays%2C%20I%20am%20interested%20in%20planning%20a%20tour",
  socialLinks: {
    tripadvisor:
      "https://www.tripadvisor.in/Attraction_Review-g297667-d19933036-Reviews-Delightful_India_Holidays-Jaisalmer_Jaisalmer_District_Rajasthan.html",
    facebook: "https://www.facebook.com/DelightfulIndiaHolidays",
    twitter: "https://x.com/DIH_Holidays",
    instagram: "https://www.instagram.com/delightful_india_holidays/",
    youtube: "https://www.youtube.com/@delightfulindiaholidays/",
    pinterest: "https://in.pinterest.com/delightfulindiaholidays/",
    tumblr: "https://delightfulindiaholidays.tumblr.com/",
  },
  stats: {
    yearsInBusiness: "15+",
    happyGuests: "51,000+",
    avgRating: "5.0",
    tourPackages: "350+",
    recommended: "100%",
  },
};

// ---------------------------------------------------------------------------
// Tour Categories
// ---------------------------------------------------------------------------
export const tourCategories = [
  "All Tours",
  "Golden Triangle Tours",
  "Rajasthan Tour Packages",
  "Same Day Tours",
  "Honeymoon Tour Packages",
  "Group Tour Packages",
  "Wildlife Tours",
  "Jaisalmer Tour Packages",
] as const;

// ---------------------------------------------------------------------------
// Standard Inclusions and Exclusions
// ---------------------------------------------------------------------------
export const defaultInclusions = [
  "Private AC car with an experienced, verified English-speaking chauffeur for the entire trip",
  "Pick-up and drop-off from Airport / Railway Station / Hotel in private vehicle",
  "All toll tax, parking fees, interstate road taxes, and driver allowances",
  "Sightseeing tours as per itinerary with licensed local monuments guides",
  "Daily breakfast at comfortable 3-star, 4-star, or heritage hotels (based on package)",
  "Mineral water bottles and complimentary WiFi in the private vehicle",
  "24x7 dedicated emergency and concierge assistance during the journey",
];

export const defaultExclusions = [
  "Monument entry tickets and camera fees at sightseeing places",
  "Lunches, dinners, and personal beverages not mentioned in inclusions",
  "Tips / gratuities for drivers, guides, and hotel staff",
  "International or domestic flight tickets and train fares",
  "Personal expenses such as laundry, phone calls, travel insurance, and shopping",
  "Any costs arising from unforeseen circumstances like weather delays or roadblocks",
];

// ---------------------------------------------------------------------------
// All Tour Packages
// ---------------------------------------------------------------------------
export const tourPackages: TourPackage[] = [
  // --- Golden Triangle Tours ---
  {
    id: "2-days-jaipur-agra-tour",
    title: "2 Days Jaipur Agra Tour",
    category: "Golden Triangle Tours",
    duration: "2 Days / 1 Night",
    route: "Jaipur – Agra – Delhi",
    startingPrice: "₹7,169",
    originalPrice: "₹9,500",
    rating: 5.0,
    reviewsCount: 78,
    image: "/assets/images/Jaipur-Agra-img-1024x684.jpg",
    bannerImage: "/assets/images/Jaipur-Agra-img.jpg",
    featured: true,
    bestSeller: true,
    overview:
      "Visit the great cities of India’s famous Golden Triangle on a private tour from Jaipur on this 2-day tour. See the most magnificent monuments of Agra and Jaipur with unforgettable memories including the Taj Mahal, Amber Fort, and Fatehpur Sikri.",
    highlights: [
      "Private guided tour of the UNESCO World Heritage Taj Mahal at sunrise",
      "Explore the majestic Amber Fort Palace with elephant or jeep ride",
      "Visit City Palace, Hawa Mahal (Palace of Winds), and Jantar Mantar",
      "Stop en route at Fatehpur Sikri, the famous abandoned Mughal capital",
      "Drop-off in Delhi, Agra, or Jaipur with seamless door-to-door comfort",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Jaipur & Jaipur Sightseeing",
        description:
          "Reach Jaipur airport or station, where you will be warmly welcomed by our representative and transferred to your hotel. After brief relaxation, proceed towards Jaipur sightseeing. Marvel at Amber Fort Palace, the classic romantic Rajasthani fort with unique Mughal and Hindu architecture. Continue to City Palace with its Chandra Mahal and City Palace Museum, followed by photo stops at the intricate Hawa Mahal (Palace of Winds) and Jal Mahal. Evening at leisure to stroll through the vibrant colorful pink city bazaars. Overnight stay in Jaipur.",
        meals: "Breakfast included at hotel",
        accommodation: "Heritage or 4-Star Hotel in Jaipur",
      },
      {
        day: 2,
        title: "Jaipur to Agra via Fatehpur Sikri & Agra Sightseeing to Delhi",
        description:
          "Early morning departure by private air-conditioned car towards Agra. En route, visit Fatehpur Sikri, the deserted red-sandstone city founded by Emperor Akbar, preserving magnificent Mughal halls and the Buland Darwaza. Arrive in Agra and visit the world-renowned UNESCO World Heritage site — the Taj Mahal. Built in the 17th century by Emperor Shah Jahan for Mumtaz Mahal, it remains the ultimate symbol of eternal love. After sightseeing and lunch, transfer comfortably to New Delhi Airport or Railway Station for your onward journey.",
        meals: "Breakfast included",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "3-days-agra-jaipur-tour",
    title: "3 Days Agra & Jaipur Tour",
    category: "Golden Triangle Tours",
    duration: "3 Days / 2 Nights",
    route: "Delhi – Agra – Jaipur – Delhi",
    startingPrice: "₹10,500",
    originalPrice: "₹13,999",
    rating: 5.0,
    reviewsCount: 64,
    image: "/assets/images/Agra-Jaipur-Tour-img-1024x684.jpg",
    bannerImage: "/assets/images/Agra-Jaipur-Tour-img.jpg",
    featured: true,
    bestSeller: true,
    overview:
      "A complete 3-day express journey through Mughal splendor in Agra and royal Rajput heritage in Jaipur. Ideal for travelers with short timelines who desire a luxury, stress-free private experience.",
    highlights: [
      "Taj Mahal sunrise viewing and Agra Fort exploration",
      "Ghost city of Fatehpur Sikri guided excursion",
      "Amber Fort Palace with elephant/jeep transfer in Jaipur",
      "City Palace, Jantar Mantar observatory, and Hawa Mahal",
      "Private air-conditioned car with dedicated English-speaking chauffeur",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Pick-up & Drive to Agra - Agra Sightseeing",
        description:
          "Morning pick-up from your Delhi hotel or airport. Drive to Agra via the Yamuna Expressway. Check into hotel and visit Agra Fort, the red sandstone stronghold of the Mughal emperors, and Mehtab Bagh for sunset views of the Taj Mahal across the Yamuna River. Overnight in Agra.",
        meals: "Breakfast",
        accommodation: "Agra Luxury Hotel",
      },
      {
        day: 2,
        title: "Taj Mahal at Sunrise & Drive to Jaipur via Fatehpur Sikri",
        description:
          "Witness the sublime sunrise at the Taj Mahal. Return to hotel for breakfast, then drive to Jaipur with a stop at Fatehpur Sikri and the historic stepwell of Abhaneri (Chand Baori). Arrive in Jaipur and check into hotel. Overnight in Jaipur.",
        meals: "Breakfast",
        accommodation: "Jaipur Heritage Hotel",
      },
      {
        day: 3,
        title: "Jaipur Sightseeing & Return Drive to Delhi",
        description:
          "Morning tour of Amber Fort, followed by City Palace, Jantar Mantar, and Hawa Mahal. Enjoy local handicraft shopping before driving back to Delhi for evening drop-off.",
        meals: "Breakfast",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "4-days-golden-triangle-tour",
    title: "4 Days Golden Triangle Tour",
    category: "Golden Triangle Tours",
    duration: "4 Days / 3 Nights",
    route: "Delhi – Agra – Jaipur – Delhi",
    startingPrice: "₹14,200",
    originalPrice: "₹18,500",
    rating: 5.0,
    reviewsCount: 92,
    image: "/assets/images/Golden-Triangle-Tour-img-1024x684.jpg",
    featured: true,
    bestSeller: true,
    overview:
      "India's iconic Golden Triangle covering Delhi, Agra, and Jaipur in a perfectly paced 4-day itinerary. Discover ancient monuments, UNESCO world heritage sites, bustling bazaars, and royal palaces.",
    highlights: [
      "Comprehensive Delhi tour: India Gate, Qutub Minar, Humayun's Tomb",
      "Taj Mahal sunrise and Agra Fort guided exploration",
      "Fatehpur Sikri royal complex & Abhaneri stepwell",
      "Jaipur Amber Fort, Jal Mahal, City Palace, and astronomical observatory",
      "Luxury private transport with 24/7 travel concierge",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Sightseeing & Drive to Agra",
        description:
          "Meet your guide in Delhi. Explore Old and New Delhi highlights including India Gate, President House, and Qutub Minar. Afternoon expressway drive to Agra. Overnight in Agra.",
      },
      {
        day: 2,
        title: "Agra Sunrise Taj Mahal & Travel to Jaipur",
        description:
          "Early morning visit to Taj Mahal. Later explore Agra Fort, then travel to Jaipur with a stop at UNESCO World Heritage Fatehpur Sikri. Overnight in Jaipur.",
      },
      {
        day: 3,
        title: "Full Day Royal Jaipur Tour",
        description:
          "Ascend to Amber Fort, photo stop at Jal Mahal, visit City Palace Museum, and explore Jantar Mantar. Experience shopping for gems and textiles. Overnight in Jaipur.",
      },
      {
        day: 4,
        title: "Jaipur Morning Tour & Return to Delhi",
        description:
          "Visit Hawa Mahal and Albert Hall Museum. Enjoy lunch and return drive to Delhi for your onward flight or hotel drop.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "7-days-golden-triangle-tour",
    title: "7 Days Golden Triangle Tour",
    category: "Golden Triangle Tours",
    duration: "7 Days / 6 Nights",
    route: "Delhi – Agra – Jaipur – Ranthambore – Delhi",
    startingPrice: "₹24,500",
    originalPrice: "₹31,000",
    rating: 5.0,
    reviewsCount: 54,
    image: "/assets/images/Golden-Triangle-Tour-img-2-1024x684.jpg",
    featured: false,
    overview:
      "An extended Golden Triangle experience combining the classic cultural triangle of Delhi, Agra, and Jaipur with thrilling tiger safaris at Ranthambore National Park.",
    highlights: [
      "All classic Golden Triangle landmarks with in-depth local guides",
      "Open-top gypsy jungle safari in Ranthambore Tiger Reserve",
      "Visit royal heritage forts and stepwells off the tourist track",
      "Authentic culinary and cultural experiences in each destination",
    ],
    itinerary: [
      { day: 1, title: "Arrive in Delhi", description: "Arrival greeting, hotel transfer, and Old Delhi heritage tour." },
      { day: 2, title: "Delhi Sightseeing & Drive to Agra", description: "New Delhi monuments and afternoon drive to Agra." },
      { day: 3, title: "Agra to Ranthambore via Fatehpur Sikri", description: "Taj Mahal sunrise, Agra Fort, and scenic drive to Ranthambore." },
      { day: 4, title: "Ranthambore Jungle Safari", description: "Morning and afternoon wildlife game drives inside Ranthambore National Park." },
      { day: 5, title: "Ranthambore to Jaipur", description: "Morning drive to Jaipur, check-in, and evening cultural village visit." },
      { day: 6, title: "Jaipur Royal Sightseeing", description: "Amber Fort, City Palace, Hawa Mahal, and local bazaar explorations." },
      { day: 7, title: "Jaipur to Delhi Departure", description: "Return drive to Delhi and departure transfer." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "8-days-spritual-ganges-tour",
    title: "8 Days Spritual Ganges Tour",
    category: "Golden Triangle Tours",
    duration: "8 Days / 7 Nights",
    route: "Delhi – Agra – Jaipur – Varanasi – Delhi",
    startingPrice: "₹28,900",
    originalPrice: "₹36,000",
    rating: 5.0,
    reviewsCount: 43,
    image: "/assets/images/Spritual-Ganges-Tour-img-1024x684.jpg",
    featured: false,
    overview:
      "A deeply soul-stirring journey blending the cultural wonders of Delhi, Agra, and Jaipur with the spiritual capital of India — ancient Varanasi along the holy River Ganges.",
    highlights: [
      "Taj Mahal sunrise and Jaipur royal forts",
      "Evening Ganga Aarti ceremony at Dashashwamedh Ghat, Varanasi",
      "Dawn boat ride along the sacred Ganges river witnessing morning rituals",
      "Excursion to Sarnath, where Lord Buddha gave his first sermon",
    ],
    itinerary: [
      { day: 1, title: "Arrive Delhi", description: "Welcome and transfer to Delhi hotel." },
      { day: 2, title: "Delhi to Agra Sightseeing", description: "Drive to Agra, visit Taj Mahal and Agra Fort." },
      { day: 3, title: "Agra to Jaipur via Fatehpur Sikri", description: "Fatehpur Sikri en route to Jaipur." },
      { day: 4, title: "Jaipur Sightseeing", description: "Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar." },
      { day: 5, title: "Jaipur to Delhi - Fly or Train to Varanasi", description: "Transfer to Varanasi, check-in." },
      { day: 6, title: "Spiritual Varanasi & Ganga Aarti", description: "Temple visits, silk weaving tour, evening Aarti on the Ghats." },
      { day: 7, title: "Varanasi Sunrise Boat Ride & Sarnath", description: "Morning boat ride, visit Sarnath museum and stupa." },
      { day: 8, title: "Varanasi to Delhi Departure", description: "Flight to Delhi for connection home." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "taj-mahal-with-khajuraho",
    title: "Taj Mahal With Khajuraho Tour",
    category: "Golden Triangle Tours",
    duration: "5 Days / 4 Nights",
    route: "Delhi – Agra – Orchha – Khajuraho – Delhi",
    startingPrice: "₹19,800",
    originalPrice: "₹24,000",
    rating: 5.0,
    reviewsCount: 38,
    image: "/assets/images/Taj-Mahal-With-Khajuraho-img-1024x684.jpg",
    featured: false,
    overview:
      "Witness architectural masterpieces from two golden eras: the celestial marble symmetry of the Taj Mahal in Agra and the intricate erotic temple carvings of Khajuraho.",
    highlights: [
      "Taj Mahal and Agra Fort guided tour",
      "Medieval palace-fortresses and cenotaphs of Orchha on the Betwa river",
      "UNESCO Western and Eastern group of temples in Khajuraho",
    ],
    itinerary: [
      { day: 1, title: "Delhi to Agra", description: "Express drive to Agra and visit Agra Fort." },
      { day: 2, title: "Agra Taj Mahal Sunrise & Train to Jhansi/Orchha", description: "Taj Mahal visit followed by train to Jhansi and transfer to medieval Orchha." },
      { day: 3, title: "Orchha to Khajuraho", description: "Visit Orchha Fort, Raja Mahal, and drive to Khajuraho." },
      { day: 4, title: "Khajuraho UNESCO Temples", description: "Full-day guided tour of the world-famous Chandela temples." },
      { day: 5, title: "Khajuraho to Delhi Departure", description: "Flight or express train back to Delhi." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },

  // --- Rajasthan Tour Packages ---
  {
    id: "3-days-udaipur-tour",
    title: "3 Days Udaipur Tour",
    category: "Rajasthan Tour Packages",
    duration: "3 Days / 2 Nights",
    route: "Udaipur & Surrounds",
    startingPrice: "₹9,800",
    originalPrice: "₹12,500",
    rating: 5.0,
    reviewsCount: 47,
    image: "/assets/images/Udaipur-Tour-img-1024x684.jpg",
    featured: true,
    overview:
      "Discover the 'City of Lakes' and 'Venice of the East'. Experience romantic boat rides on Lake Pichola, towering palaces, vibrant gardens, and sunset vistas.",
    highlights: [
      "City Palace Udaipur, the largest palace complex in Rajasthan",
      "Sunset boat cruise on Lake Pichola with views of Jag Mandir",
      "Saheliyon-ki-Bari (Courtyard of Maidens) and Jagdish Temple",
      "Bhartiya Lok Kala Mandal folk museum and Bagore Ki Haveli show",
    ],
    itinerary: [
      { day: 1, title: "Arrive in Udaipur & Lake Pichola Boat Cruise", description: "Arrive in Udaipur, check into hotel, evening boat cruise on Lake Pichola." },
      { day: 2, title: "Udaipur City Palace & Cultural Exploration", description: "Visit City Palace, Jagdish Temple, Saheliyon-ki-Bari, and cultural dance show." },
      { day: 3, title: "Monsoon Palace & Departure", description: "Drive up to Sajjangarh Monsoon Palace and departure transfer." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "7-days-mewar-tour",
    title: "7 Days Mewar Tour",
    category: "Rajasthan Tour Packages",
    duration: "7 Days / 6 Nights",
    route: "Udaipur – Kumbhalgarh – Ranakpur – Chittorgarh – Jodhpur",
    startingPrice: "₹23,500",
    originalPrice: "₹29,000",
    rating: 5.0,
    reviewsCount: 41,
    image: "/assets/images/Mewar-Tour-img-1024x684.jpg",
    featured: false,
    overview:
      "Immerse yourself in the valiant history of Mewar. Explore the invincible forts of Chittorgarh and Kumbhalgarh, the Jain marble temples of Ranakpur, and royal palaces.",
    highlights: [
      "Chittorgarh Fort, the grandest fortress in India",
      "Kumbhalgarh Fort with the second longest wall in the world",
      "Ranakpur Jain Temple with 1,444 uniquely carved marble pillars",
      "Udaipur lakeside palaces and Jodhpur Blue City vistas",
    ],
    itinerary: [
      { day: 1, title: "Arrive in Udaipur", description: "Airport pickup and relaxing lake view evening." },
      { day: 2, title: "Udaipur Royal Palaces", description: "City Palace, Jagdish Temple, and Saheliyon-ki-Bari." },
      { day: 3, title: "Excursion to Chittorgarh Fort", description: "Full-day tour of Vijay Stambh, Kirti Stambh, and Padmini Palace." },
      { day: 4, title: "Udaipur to Kumbhalgarh", description: "Scenic Aravalli hills drive to Kumbhalgarh fortress." },
      { day: 5, title: "Kumbhalgarh to Ranakpur & Jodhpur", description: "Marvel at Ranakpur marble temples en route to Jodhpur." },
      { day: 6, title: "Jodhpur Blue City & Mehrangarh", description: "Explore towering Mehrangarh Fort and Jaswant Thada." },
      { day: 7, title: "Departure from Jodhpur", description: "Farewell transfer to Jodhpur airport or railway station." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "colourful-rajasthan-tour",
    title: "Colourful Rajasthan Tour",
    category: "Rajasthan Tour Packages",
    duration: "10 Days / 9 Nights",
    route: "Jaipur – Bikaner – Jaisalmer – Jodhpur – Udaipur",
    startingPrice: "₹34,500",
    originalPrice: "₹42,000",
    rating: 5.0,
    reviewsCount: 89,
    image: "/assets/images/Colourful-Rajasthan-Tour-img-1024x684.jpg",
    bannerImage: "/assets/images/Colourful-Rajasthan-Tour-img.jpg",
    featured: true,
    bestSeller: true,
    overview:
      "A grand odyssey through Rajasthan's kaleidoscopic imperial cities: Pink City Jaipur, Desert Oasis Bikaner, Golden City Jaisalmer, Blue City Jodhpur, and Lake City Udaipur.",
    highlights: [
      "Complete royal circuit of Rajasthan with private car & expert guides",
      "Overnight luxury desert camp in Thar Desert with camel safari",
      "Visit living forts: Jaisalmer Fort, Mehrangarh Fort, Amber Fort",
      "Boat ride on Lake Pichola and traditional Rajasthani cultural evenings",
    ],
    itinerary: [
      { day: 1, title: "Arrive in Jaipur", description: "Welcome to Rajasthan. Hotel check-in and evening light & sound show." },
      { day: 2, title: "Jaipur Palaces & Bazaars", description: "Amber Fort, City Palace, Hawa Mahal, and local markets." },
      { day: 3, title: "Jaipur to Bikaner", description: "Drive to Bikaner, visit Junagarh Fort and Camel Breeding Farm." },
      { day: 4, title: "Bikaner to Jaisalmer", description: "Drive through Thar Desert to the Golden City Jaisalmer." },
      { day: 5, title: "Jaisalmer Fort & Thar Desert Camping", description: "Explore the Golden Fort and Patwon Ki Haveli. Evening camel safari and desert camp." },
      { day: 6, title: "Jaisalmer to Jodhpur", description: "Drive to the Blue City, explore Clock Tower and Sadar Bazaar." },
      { day: 7, title: "Jodhpur Mehrangarh Fort", description: "Visit majestic Mehrangarh Fort and Jaswant Thada memorial." },
      { day: 8, title: "Jodhpur to Udaipur via Ranakpur", description: "Stop at Ranakpur Jain Temples en route to Udaipur." },
      { day: 9, title: "Udaipur Sightseeing & Lake Cruise", description: "City Palace, Jag Mandir, and sunset cruise." },
      { day: 10, title: "Udaipur Departure", description: "Departure transfer to Udaipur airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "rajasthan-wildlife-tour",
    title: "Rajasthan Wildlife Tour",
    category: "Rajasthan Tour Packages",
    duration: "6 Days / 5 Nights",
    route: "Jaipur – Ranthambore – Bharatpur – Sariska",
    startingPrice: "₹21,000",
    originalPrice: "₹26,500",
    rating: 5.0,
    reviewsCount: 36,
    image: "/assets/images/Rajasthan-Wildlife-Tour-img-1024x684.jpg",
    featured: false,
    overview:
      "Experience Rajasthan’s untamed wilderness. Spot Royal Bengal Tigers in Ranthambore, exotic migratory birds in Keoladeo Ghana (Bharatpur), and leopards in Jhalana.",
    highlights: [
      "Multiple tiger tracking safaris in Ranthambore National Park",
      "Bird watching cycle-rickshaw safari in Keoladeo National Park (UNESCO)",
      "Leopard safari in Jhalana Reserve Forest near Jaipur",
    ],
    itinerary: [
      { day: 1, title: "Arrive Jaipur & Jhalana Leopard Safari", description: "Afternoon open-top gypsy leopard safari in Jhalana." },
      { day: 2, title: "Jaipur to Ranthambore", description: "Drive to Ranthambore, evening wildlife briefing and dinner." },
      { day: 3, title: "Ranthambore Jungle Safaris", description: "Dawn and dusk jungle game drives with expert naturalist." },
      { day: 4, title: "Ranthambore to Bharatpur", description: "Travel to Keoladeo National Park, evening bird watching." },
      { day: 5, title: "Bharatpur to Sariska Wildlife Sanctuary", description: "Explore Sariska tiger reserve and ancient ruins." },
      { day: 6, title: "Return to Jaipur or Delhi Departure", description: "Transfer to airport for departure." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "royal-palaces-of-rajasthan",
    title: "Royal Palaces of Rajasthan",
    category: "Rajasthan Tour Packages",
    duration: "8 Days / 7 Nights",
    route: "Jaipur – Mandawa – Bikaner – Jodhpur – Udaipur",
    startingPrice: "₹27,800",
    originalPrice: "₹34,000",
    rating: 5.0,
    reviewsCount: 52,
    image: "/assets/images/Royal-Palaces-of-Rajasthan-img-1024x684.jpg",
    featured: false,
    overview:
      "Live like royalty in India’s most opulent palace hotels and heritage havelis. An exclusive journey celebrating architectural majesty and regal desert hospitality.",
    highlights: [
      "Open-air art gallery of Shekhawati havelis in Mandawa",
      "Junagarh Fort palaces and Umaid Bhawan Palace museum",
      "Udaipur lakeside heritage stays with personalized Butler service",
    ],
    itinerary: [
      { day: 1, title: "Jaipur Arrival", description: "Check in to luxury heritage property." },
      { day: 2, title: "Jaipur Palatial Wonders", description: "Private tour of City Palace and Amber Fort." },
      { day: 3, title: "Jaipur to Mandawa Havelis", description: "Frescoed merchant mansions of Shekhawati." },
      { day: 4, title: "Mandawa to Bikaner", description: "Junagarh Fort and Lalgarh Palace." },
      { day: 5, title: "Bikaner to Jodhpur", description: "Mehrangarh Fort and Umaid Bhawan Palace." },
      { day: 6, title: "Jodhpur to Udaipur", description: "Ranakpur marble marvels en route to Lake Pichola." },
      { day: 7, title: "Udaipur Royal Day", description: "City Palace and romantic evening lake dinner." },
      { day: 8, title: "Departure", description: "Transfer to Udaipur Airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "exotic-rajasthan-tour",
    title: "Exotic Rajasthan Tour",
    category: "Rajasthan Tour Packages",
    duration: "9 Days / 8 Nights",
    route: "Delhi – Mandawa – Bikaner – Jaisalmer – Jodhpur – Jaipur",
    startingPrice: "₹30,900",
    originalPrice: "₹38,000",
    rating: 5.0,
    reviewsCount: 45,
    image: "/assets/images/Exotic-Rajasthan-Tour-img-1024x684.jpg",
    featured: false,
    overview:
      "A desert caravan route reimagined with modern comfort. From the silk-route havelis of Mandawa to the golden sands of Sam and the grand palaces of Jaipur.",
    highlights: [
      "Private desert safari and dune bashing in Thar desert",
      "Traditional folk dance performance under the starry desert sky",
      "In-depth explorations of Bikaner, Jaisalmer, and Jodhpur",
    ],
    itinerary: [
      { day: 1, title: "Delhi to Mandawa", description: "Drive to Shekhawati region and painted havelis." },
      { day: 2, title: "Mandawa to Bikaner", description: "Visit Junagarh fort and desert village." },
      { day: 3, title: "Bikaner to Jaisalmer", description: "Scenic desert drive into the heart of the Golden City." },
      { day: 4, title: "Jaisalmer Heritage & Sam Dunes", description: "Fort exploration and sunset camel safari at Sam Dunes." },
      { day: 5, title: "Jaisalmer to Jodhpur", description: "Drive to Jodhpur and explore Mehrangarh Fort." },
      { day: 6, title: "Jodhpur to Pushkar & Jaipur", description: "Holy lake of Pushkar and Brahma temple en route to Jaipur." },
      { day: 7, title: "Jaipur Sightseeing", description: "Amber Fort, City Palace, Hawa Mahal." },
      { day: 8, title: "Jaipur Crafts & Leisure", description: "Shopping and cultural experiences." },
      { day: 9, title: "Jaipur to Delhi Departure", description: "Return transfer to Delhi Airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },

  // --- Same Day Tours ---
  {
    id: "agra-sightseeing-tour",
    title: "Agra Sightseeing Tour",
    category: "Same Day Tours",
    duration: "Same Day (12-14 Hours)",
    route: "Delhi – Agra – Delhi",
    startingPrice: "₹7,169",
    originalPrice: "₹8,999",
    rating: 5.0,
    reviewsCount: 110,
    image: "/assets/images/Agra-Sightseeing-Tour-img-1024x684.jpg",
    bannerImage: "/assets/images/Agra-Sightseeing-Tour-img.jpg",
    featured: true,
    bestSeller: true,
    overview:
      "The perfect same-day Taj Mahal express tour from Delhi. Travel comfortably via the Yamuna Expressway in your private air-conditioned vehicle with dedicated driver and guide.",
    highlights: [
      "Guided tour of the Taj Mahal with skip-the-line assistance",
      "Explore the majestic Agra Fort and Itimad-ud-Daulah (Baby Taj)",
      "Lunch at a premium multi-cuisine Agra restaurant",
      "Hassle-free pick-up and drop-off anywhere in Delhi / NCR",
    ],
    itinerary: [
      {
        day: 1,
        title: "Same Day Delhi to Agra and Return",
        description:
          "06:00 AM: Pick up from your hotel or airport in Delhi / Gurugram / Noida. Drive smoothly along the Yamuna Expressway (approx. 3.5 hrs). 09:30 AM: Meet your licensed tour guide in Agra and head straight to the Taj Mahal. Spend 2.5 hours exploring this architectural wonder. 12:30 PM: Lunch at a 5-star hotel restaurant. 02:00 PM: Visit the historic Agra Fort. 03:30 PM: Visit Baby Taj or view Taj Mahal from Mehtab Bagh across the river. 05:00 PM: Relax in your private vehicle for the return journey to Delhi. 08:30 PM: Drop-off at your hotel or Delhi Airport.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "delhi-sightseeing-tour",
    title: "Delhi Sightseeing Tour",
    category: "Same Day Tours",
    duration: "Full Day (8-9 Hours)",
    route: "Old & New Delhi",
    startingPrice: "₹7,169",
    originalPrice: "₹8,500",
    rating: 5.0,
    reviewsCount: 94,
    image: "/assets/images/Delhi-Sightseeing-Tour-img-1024x684.jpg",
    bannerImage: "/assets/images/Delhi-Sightseeing-Tour-img.jpg",
    featured: true,
    overview:
      "A comprehensive single-day journey through the vibrant contrasts of Old Delhi and New Delhi. From Mughal monuments and bustling spice markets to colonial boulevards.",
    highlights: [
      "Rickshaw ride through Chandni Chowk and Khari Baoli Spice Market",
      "Visit Jama Masjid, one of India's largest mosques",
      "Drive past India Gate, Parliament House, and Rashtrapati Bhavan",
      "Guided tours of Qutub Minar and Humayun's Tomb (UNESCO sites)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Full Day Old & New Delhi Highlights",
        description:
          "09:00 AM: Hotel pickup. Begin in Old Delhi at Jama Masjid. Take an exciting cycle-rickshaw ride through the narrow lanes of Chandni Chowk. Drive past Red Fort. Proceed to New Delhi to see India Gate, Rashtrapati Bhavan, and Humayun's Tomb. After lunch, visit the 12th-century Qutub Minar minaret complex and the serene Lotus Temple. Return to hotel by 06:00 PM.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "jhalana-leopard-safari-tour",
    title: "Jhalana Leopard Safari Tour",
    category: "Same Day Tours",
    duration: "Half Day (4-5 Hours)",
    route: "Jaipur",
    startingPrice: "₹7,169",
    originalPrice: "₹8,800",
    rating: 5.0,
    reviewsCount: 34,
    image: "/assets/images/Jhalana-Leopard-img-1024x684.jpg",
    featured: false,
    overview:
      "Jhalana Leopard Reserve is India’s premier destination for leopard spotting in their natural rocky scrub habitat right next to Jaipur. Experience thrilling close encounters in an open gypsy.",
    highlights: [
      "High probability leopard sightings with experienced wildlife tracker",
      "Spot hyenas, blue bulls (nilgai), desert foxes, and exotic birds",
      "Private transfers from and to your Jaipur hotel",
    ],
    itinerary: [
      {
        day: 1,
        title: "Morning or Afternoon Jungle Gypsy Safari",
        description:
          "Pick-up from your Jaipur hotel. Arrive at Jhalana Reserve gate and board an authorized 4x4 open-top gypsy with an expert naturalist driver. Enjoy a 3-hour game drive through rocky tracks. Return transfer to hotel.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "pink-city-jaipur-shopping-tour",
    title: "Pink City Jaipur Shopping Tour",
    category: "Same Day Tours",
    duration: "Full Day (6-7 Hours)",
    route: "Jaipur Bazaars & Artisan Workshops",
    startingPrice: "₹7,169",
    originalPrice: "₹8,500",
    rating: 5.0,
    reviewsCount: 46,
    image: "/assets/images/Pink-City-img-1024x684.jpg",
    featured: false,
    overview:
      "Jaipur is a shopper’s paradise. Discover authentic hand-block printing, blue pottery, precious gems, jewelry, traditional leheriya textiles, and handcrafted leather mojari shoes.",
    highlights: [
      "Guided walk through Johari Bazaar, Bapu Bazaar, and Tripolia Bazaar",
      "Live demonstration of traditional block printing and carpet weaving",
      "Reputable certified stores with transparent pricing and export shipping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Curated Jaipur Shopping & Artisan Experience",
        description:
          "10:00 AM: Hotel pickup. Visit a traditional block printing and textile workshop in Sanganer. Browse authentic blue pottery craft. Explore Johari Bazaar for silver jewelry and gems, followed by Bapu Bazaar for textiles, perfumes, and handicrafts. Enjoy afternoon masala chai and street snacks. 05:00 PM: Return transfer.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "pink-city-jaipur-tuktuk-tour",
    title: "Pink City Jaipur TukTuk Tour",
    category: "Same Day Tours",
    duration: "Full Day (6-7 Hours)",
    route: "Jaipur Historic Walled City",
    startingPrice: "₹7,169",
    originalPrice: "₹8,200",
    rating: 5.0,
    reviewsCount: 88,
    image: "/assets/images/Jaipur-TukTuk-Tour-img-1024x684.jpg",
    featured: true,
    overview:
      "Experience Jaipur like a true local on an authentic TukTuk tour led by friendly local drivers like Rauf. Maneuver through colorful alleys, hidden temples, spice markets, and pink walls.",
    highlights: [
      "Authentic TukTuk ride with highly rated friendly local driver",
      "Stop at Hawa Mahal, City Palace, Jal Mahal, and Albert Hall",
      "Sample famous Jaipur lassi at Lassiwala and kachori at local sweet shops",
    ],
    itinerary: [
      {
        day: 1,
        title: "Jaipur TukTuk Explorer",
        description:
          "Pick-up by customized TukTuk at your hotel. Zip through the pink-washed gates of the old city. Stop for iconic photos at Hawa Mahal and Jal Mahal. Explore local alleys, watch artisans at work, and enjoy famous local culinary stops. Return to hotel.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "same-day-pushkar-tour-from-jaipur",
    title: "Same Day Pushkar Tour From Jaipur",
    category: "Same Day Tours",
    duration: "Same Day (10-11 Hours)",
    route: "Jaipur – Pushkar – Ajmer – Jaipur",
    startingPrice: "₹7,169",
    originalPrice: "₹9,000",
    rating: 5.0,
    reviewsCount: 42,
    image: "/assets/images/Pushkar-Tour-img-1024x684.jpg",
    featured: false,
    overview:
      "Visit the sacred oasis town of Pushkar, home to the rare Lord Brahma Temple, 52 holy bathing ghats around Pushkar Lake, and optional visit to the Ajmer Sharif Dargah.",
    highlights: [
      "Lord Brahma Temple, one of the few temples dedicated to Brahma in the world",
      "Walk the peaceful ghats around holy Pushkar Lake",
      "Ajmer Sharif Sufi shrine of Khwaja Moinuddin Chishti",
    ],
    itinerary: [
      {
        day: 1,
        title: "Same Day Pushkar & Ajmer Pilgrimage",
        description:
          "08:00 AM: Depart Jaipur by private car. Arrive in Pushkar (approx. 2.5 hrs). Visit Brahma Temple and take a serene walk along Pushkar Lake Ghats. Experience a camel ride across nearby dunes. Stop at Ajmer Sharif Dargah on the return journey. Arrive back in Jaipur by 07:00 PM.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },

  // --- Honeymoon Tour Packages ---
  {
    id: "goa-honeymoon-tour",
    title: "Goa Honeymoon Tour",
    category: "Honeymoon Tour Packages",
    duration: "5 Days / 4 Nights",
    route: "North & South Goa",
    startingPrice: "₹18,500",
    originalPrice: "₹24,000",
    rating: 5.0,
    reviewsCount: 65,
    image: "/assets/images/Goa-Honeymoon-Tour-img-1024x684.jpg",
    featured: true,
    overview:
      "A sun-kissed romantic escape on the golden shores of Goa. Relax in luxury beachfront resorts, enjoy candlelit dinners by the Arabian Sea, and cruise on the Mandovi River.",
    highlights: [
      "Beachfront resort stay with romantic floral room decor",
      "Sunset dinner cruise on the Mandovi River with Goan music and dance",
      "Private day tour of South Goa heritage churches and secluded beaches",
      "Candlelight beach dinner with wine on a private beach stretch",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Goa", description: "Airport pickup, transfer to beach resort, romantic evening at leisure." },
      { day: 2, title: "North Goa Beaches & Fort Aguada", description: "Baga, Calangute, Anjuna beach views, and sunset at Chapora Fort." },
      { day: 3, title: "South Goa Heritage & Mandovi Cruise", description: "Old Goa Basilica of Bom Jesus, Mangueshi Temple, and evening river cruise." },
      { day: 4, title: "Romantic Day at Leisure & Candlelight Dinner", description: "Resort spa day, sunset beach walk, and 4-course candlelight dinner." },
      { day: 5, title: "Departure", description: "Transfer to Goa Airport or Mopa." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "udaipur-honeymoon-tour",
    title: "Udaipur Honeymoon Tour",
    category: "Honeymoon Tour Packages",
    duration: "4 Days / 3 Nights",
    route: "Udaipur – Lake Pichola",
    startingPrice: "₹16,800",
    originalPrice: "₹22,000",
    rating: 5.0,
    reviewsCount: 71,
    image: "/assets/images/udaipur-Honeymoon-Tour-img-1024x684.jpg",
    featured: true,
    overview:
      "Celebrate your love in India's most romantic royal city. Stay in grand heritage palaces overlooking Lake Pichola, cruise past marble islands, and dine under palace chandeliers.",
    highlights: [
      "Private boat cruise on Lake Pichola with champagne/mocktails",
      "Special rooftop candlelight dinner overlooking the illuminated City Palace",
      "Royal couple spa treatment and professional vacation photo session",
    ],
    itinerary: [
      { day: 1, title: "Royal Welcome in Udaipur", description: "Arrive in Udaipur, luxury hotel check-in, sunset walk at Ambrai Ghat." },
      { day: 2, title: "Palaces & Private Lake Cruise", description: "City Palace, Jagdish Temple, private sunset boat charter." },
      { day: 3, title: "Monsoon Palace & Romantic Rooftop Dinner", description: "Scenic drive to Sajjangarh fort, evening fine dining by the lake." },
      { day: 4, title: "Departure", description: "Morning shopping and transfer to airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "uttarakhand-honeymoon-tour",
    title: "Uttarakhand Honeymoon Tour",
    category: "Honeymoon Tour Packages",
    duration: "6 Days / 5 Nights",
    route: "Dehradun – Mussoorie – Rishikesh",
    startingPrice: "₹22,000",
    originalPrice: "₹28,500",
    rating: 5.0,
    reviewsCount: 39,
    image: "/assets/images/Uttarakhand-Honeymoon-Tour-img-1024x684.jpg",
    featured: false,
    overview:
      "A dreamy Himalayan retreat amidst pine-clad mountains, mist-covered valleys of Mussoorie 'Queen of the Hills', and the spiritual tranquility of Rishikesh along the holy Ganges.",
    highlights: [
      "Panoramic views of the snow-clad Garhwal Himalayas from Gun Hill",
      "Stroll hand-in-hand along Camel's Back Road and Mall Road Mussoorie",
      "Private cottage stay with mountain valley balcony views",
      "Evening Ganga Aarti and riverside cafe hopping in Rishikesh",
    ],
    itinerary: [
      { day: 1, title: "Arrive Dehradun & Drive to Mussoorie", description: "Scenic hill drive, hotel check-in, Mall Road evening walk." },
      { day: 2, title: "Mussoorie Scenic Wonders", description: "Kempty Falls, Gun Hill cable car, Company Garden." },
      { day: 3, title: "Mussoorie to Dhanaulti", description: "Eco Park pine forests and romantic valley viewpoints." },
      { day: 4, title: "Mussoorie to Rishikesh", description: "Drive to Rishikesh, Laxman Jhula, and Ganga Aarti." },
      { day: 5, title: "Rishikesh Riverside Serenity", description: "Beatles Ashram, river cafe breakfast, optional gentle rafting." },
      { day: 6, title: "Departure from Dehradun", description: "Airport transfer." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },

  // --- Group Tour Packages ---
  {
    id: "golden-triangle-group-tour",
    title: "Golden Triangle Group Tour",
    category: "Group Tour Packages",
    duration: "6 Days / 5 Nights",
    route: "Delhi – Agra – Jaipur – Delhi",
    startingPrice: "₹15,500",
    originalPrice: "₹19,999",
    rating: 5.0,
    reviewsCount: 82,
    image: "/assets/images/Golden-Triangle-Group-Tour-img-1024x684.png",
    featured: true,
    overview:
      "Join fellow travelers on this fun, sociable, and budget-friendly small group tour through Delhi, Agra, and Jaipur with luxury coach transport, expert guides, and handpicked stays.",
    highlights: [
      "Small groups (max 14 travelers) for a personalized group experience",
      "All major landmarks: Taj Mahal, Amber Fort, Qutub Minar, City Palace",
      "Group cooking class & cultural welcome dinner included",
    ],
    itinerary: [
      { day: 1, title: "Delhi Welcome & Group Dinner", description: "Meet tour leader and fellow travelers at hotel." },
      { day: 2, title: "Delhi Exploration & Drive to Agra", description: "Old and New Delhi highlights before scenic drive." },
      { day: 3, title: "Taj Mahal & Fatehpur Sikri to Jaipur", description: "Sunrise at Taj Mahal and journey to the Pink City." },
      { day: 4, title: "Jaipur Amber Fort & Bazaars", description: "Group excursion to Amber Fort, City Palace, and local bazaar." },
      { day: 5, title: "Jaipur Cultural Heritage Day", description: "Hawa Mahal, Jantar Mantar, and farewell dinner." },
      { day: 6, title: "Jaipur to Delhi Departure", description: "Comfortable drive back to Delhi Airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "best-of-kerala-group-tour",
    title: "Best Of Kerala Group Tour",
    category: "Group Tour Packages",
    duration: "7 Days / 6 Nights",
    route: "Cochin – Munnar – Thekkady – Alleppey – Cochin",
    startingPrice: "₹21,500",
    originalPrice: "₹27,000",
    rating: 5.0,
    reviewsCount: 68,
    image: "/assets/images/kerala-group-tour-img-1024x684.png",
    featured: false,
    overview:
      "Travel through 'God's Own Country' with friends or family. Lush rolling tea estates of Munnar, spice plantations of Thekkady, and traditional backwater houseboat cruises in Alleppey.",
    highlights: [
      "Overnight stay on a traditional deluxe Kerala houseboat with all meals",
      "Guided walk through aromatic Munnar tea gardens and Tea Museum",
      "Spice plantation walk and Kathakali traditional dance show in Thekkady",
    ],
    itinerary: [
      { day: 1, title: "Arrive Cochin", description: "Fort Kochi Chinese fishing nets and colonial streets." },
      { day: 2, title: "Cochin to Munnar Tea Hills", description: "Scenic waterfalls en route to rolling tea country." },
      { day: 3, title: "Munnar Tea Gardens & Eravikulam", description: "Spot Nilgiri Tahr mountain goats and visit tea estates." },
      { day: 4, title: "Munnar to Thekkady Spice Sanctuary", description: "Spice plantation tour and Periyar lake boat ride." },
      { day: 5, title: "Thekkady to Alleppey Houseboat", description: "Board traditional houseboat for serene backwater cruise." },
      { day: 6, title: "Alleppey to Cochin", description: "Disembark and return to Cochin for shopping." },
      { day: 7, title: "Departure", description: "Transfer to Cochin International Airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "wonders-of-ladakh-group-tour",
    title: "Wonders Of Ladakh Group Tour",
    category: "Group Tour Packages",
    duration: "7 Days / 6 Nights",
    route: "Leh – Sham Valley – Nubra Valley – Pangong Lake – Leh",
    startingPrice: "₹26,900",
    originalPrice: "₹34,000",
    rating: 5.0,
    reviewsCount: 57,
    image: "/assets/images/Ladakh-Group-Tour-img-1024x684.png",
    featured: false,
    overview:
      "An adventurous high-altitude expedition across the 'Land of High Passes'. Traverse Khardung La, ride double-humped Bactrian camels at Hunder dunes, and camp by azure Pangong Lake.",
    highlights: [
      "Drive across Khardung La (one of the world's highest motorable passes at 17,982 ft)",
      "Overnight Swiss tent camping beside shimmering Pangong Tso Lake",
      "Double-humped camel safari at Hunder white sand dunes in Nubra Valley",
      "Visit ancient Hemis and Thiksey monasteries with monks",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh & Acclimatization", description: "Rest day to acclimatize to high altitude, gentle evening walk to Shanti Stupa." },
      { day: 2, title: "Leh Sham Valley Tour", description: "Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar confluence." },
      { day: 3, title: "Leh to Nubra Valley via Khardung La", description: "Cross Khardung La pass, arrive in Nubra, double-humped camel safari." },
      { day: 4, title: "Nubra Valley to Pangong Lake via Shyok", description: "Scenic mountain drive directly to turquoise Pangong Lake." },
      { day: 5, title: "Pangong Lake Sunrise & Return to Leh", description: "Dawn over Pangong, cross Chang La pass to return to Leh." },
      { day: 6, title: "Monasteries & Leh Market", description: "Thiksey and Shey monasteries, evening shopping in Leh Main Bazaar." },
      { day: 7, title: "Departure from Leh", description: "Transfer to Kushok Bakula Rimpochee Airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },

  // --- Wildlife Tours ---
  {
    id: "corbett-wildlife-tour",
    title: "Corbett WildLife Tour",
    category: "Wildlife Tours",
    duration: "4 Days / 3 Nights",
    route: "Delhi – Jim Corbett National Park – Delhi",
    startingPrice: "₹14,900",
    originalPrice: "₹19,000",
    rating: 5.0,
    reviewsCount: 48,
    image: "/assets/images/corbett-wildLife-tour-1024x684.png",
    featured: true,
    overview:
      "India's oldest national park and birthplace of Project Tiger. Explore the dense sal forests and riverine grasslands of Jim Corbett in an open 4x4 jeep safari.",
    highlights: [
      "Multiple jeep safaris in Bijrani / Dhikala / Dhela wildlife zones",
      "Spot tigers, wild Asian elephants, leopards, and over 600 bird species",
      "Luxury forest resort stay along the Kosi River with bonfire evenings",
    ],
    itinerary: [
      { day: 1, title: "Delhi to Jim Corbett National Park", description: "Morning scenic drive to Ramnagar, check in to jungle resort." },
      { day: 2, title: "Morning & Afternoon Jeep Safaris", description: "Two deep-forest safaris with trained forest department naturalists." },
      { day: 3, title: "Corbett Falls & Nature Walk", description: "Visit Corbett Museum, Corbett Falls, and evening bonfire by Kosi River." },
      { day: 4, title: "Morning Safari & Return to Delhi", description: "Final early morning safari and comfortable return drive to Delhi." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "wildlife-of-south-india",
    title: "Wildlife of South India",
    category: "Wildlife Tours",
    duration: "7 Days / 6 Nights",
    route: "Bangalore – Mysore – Kabini – Nagarhole – Bandipur",
    startingPrice: "₹27,500",
    originalPrice: "₹35,000",
    rating: 5.0,
    reviewsCount: 33,
    image: "/assets/images/Wildlife-of-South-India-1024x684.png",
    featured: false,
    overview:
      "The Nilgiri biosphere is one of the most biodiverse regions on earth. Track black panthers, Asian elephants, tigers, and dholes in Kabini and Bandipur.",
    highlights: [
      "Boat safari on the Kabini River for close-up elephant herds",
      "Open gypsy tracking inside Bandipur and Nagarhole Tiger Reserves",
      "Mysore Palace heritage stopover en route",
    ],
    itinerary: [
      { day: 1, title: "Bangalore to Mysore", description: "Pickup and visit Mysore Palace and Chamundi Hill." },
      { day: 2, title: "Mysore to Kabini", description: "Drive to legendary Kabini wildlife lodge, afternoon boat safari." },
      { day: 3, title: "Kabini Jungle Safaris", description: "Morning and evening land jeep safaris." },
      { day: 4, title: "Kabini to Bandipur National Park", description: "Transfer to Bandipur and evening game drive." },
      { day: 5, title: "Bandipur Deep Forest Tracking", description: "Dawn safari and wildlife photography." },
      { day: 6, title: "Bandipur to Bangalore", description: "Scenic drive back to the Silicon Valley." },
      { day: 7, title: "Departure", description: "Transfer to Kempegowda International Airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },

  // --- Jaisalmer Tour Packages ---
  {
    id: "blissful-jaisalmer-honeymoon-tour",
    title: "Blissful Jaisalmer Honeymoon Tour",
    category: "Jaisalmer Tour Packages",
    duration: "4 Days / 3 Nights",
    route: "Jaisalmer & Sam Sand Dunes",
    startingPrice: "₹14,999",
    originalPrice: "₹18,500",
    rating: 5.0,
    reviewsCount: 76,
    image: "/assets/images/Romantic-Jaisalmer1-1024x683.jpeg",
    featured: true,
    bestSeller: true,
    overview:
      "Crafted specially by our local Jaisalmer team at Delightful India Holidays. Fall in love under the starry desert sky with a private luxury tent camp, sunset camel ride, and heritage fort walk.",
    highlights: [
      "Luxury desert Swiss tent stay with attached bathroom and private veranda",
      "Private sunset camel trek on pristine dunes away from crowded commercial camps",
      "Traditional Kalbelia folk dance, music performance, and gala Rajasthani dinner",
      "Comprehensive walking tour of Jaisalmer Golden Fort with our veteran guide Padam Singh",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Jaisalmer", description: "Station/Airport greeting, check into golden sandstone heritage hotel, evening visit to Gadisar Lake." },
      { day: 2, title: "Living Fort & Patwon Ki Haveli", description: "Explore the 12th-century living fort, Jain temples, and intricate havelis." },
      { day: 3, title: "Sam Sand Dunes Luxury Camping", description: "Drive to Sam dunes, sunset camel ride, cultural folk night around campfire." },
      { day: 4, title: "Kuldhara Ghost Village & Departure", description: "Visit the haunted 300-year-old abandoned village of Kuldhara and departure." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "private-full-day-tour-of-golden-city-jaisalmer-with-guide",
    title: "Private Full-Day Tour of Golden City Jaisalmer with Guide",
    category: "Jaisalmer Tour Packages",
    duration: "Full Day (8 Hours)",
    route: "Jaisalmer City Highlights",
    startingPrice: "₹5,500",
    originalPrice: "₹7,000",
    rating: 5.0,
    reviewsCount: 104,
    image: "/assets/images/Best-Places-to-Visit-in-Jaisalmer-1024x577.jpg",
    featured: true,
    bestSeller: true,
    overview:
      "An immersive in-depth private tour of Jaisalmer led by certified local guides. Walk through the golden sandstone living fort, ornate merchant havelis, and tranquil cenotaphs.",
    highlights: [
      "Guided walk inside the Jaisalmer Fort (Sonar Qila), India's only living fort",
      "Exquisite stone carving at Patwon Ki Haveli, Nathmal Ki Haveli, Salim Singh Ki Haveli",
      "Royal cenotaphs at Bada Bagh with panoramic desert sunset photography",
      "Peaceful boat ride or walk around 14th-century Gadisar Lake",
    ],
    itinerary: [
      {
        day: 1,
        title: "Full Day Jaisalmer City Heritage Tour",
        description:
          "09:00 AM: Hotel pickup. Head to the majestic Jaisalmer Fort perched atop Trikuta Hill. Explore the royal palace (Raj Mahal) and 7 interconnected medieval Jain temples. 12:00 PM: Walk down into the narrow streets to visit Patwon Ki Haveli, a cluster of 5 grand mansions. 01:30 PM: Lunch at a traditional rooftop restaurant with fort views. 03:00 PM: Visit Salim Singh Ki Haveli with its peacock roof. 04:30 PM: Drive to Bada Bagh to witness the golden sunset reflecting on the royal cenotaphs. 06:30 PM: End with a serene evening at Gadisar Lake. Return to hotel.",
      },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
  {
    id: "honeymoon-at-thar-desert",
    title: "Honeymoon at Thar Desert",
    category: "Jaisalmer Tour Packages",
    duration: "3 Days / 2 Nights",
    route: "Jaisalmer & Thar Desert",
    startingPrice: "₹12,800",
    originalPrice: "₹16,000",
    rating: 5.0,
    reviewsCount: 59,
    image: "/assets/images/Romantic-Jaisalmer3-1024x683.jpeg",
    featured: false,
    overview:
      "An unforgettable desert escape created for couples. Enjoy the seclusion of golden dunes, private candlelit dinner under a million stars, and authentic desert hospitality.",
    highlights: [
      "Overnight luxury Swiss cottage tent with modern amenities",
      "Private camel ride to secluded dunes for sunset viewing",
      "Live desert folk music and Rajasthani buffet dinner",
      "Morning jeep safari across rolling sand dunes",
    ],
    itinerary: [
      { day: 1, title: "Arrive Jaisalmer & Gadisar Lake", description: "Pickup and check into Jaisalmer hotel. Evening boat ride at Gadisar Lake." },
      { day: 2, title: "Fort Tour & Thar Desert Camp", description: "Visit Jaisalmer Fort in morning, afternoon transfer to Thar desert camp, camel safari, folk dance, and star gazing." },
      { day: 3, title: "Dune Jeep Safari & Departure", description: "Morning sunrise over dunes, thrilling jeep safari, and transfer to station/airport." },
    ],
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
  },
];

// ---------------------------------------------------------------------------
// Verified Customer Reviews (Google & TripAdvisor)
// ---------------------------------------------------------------------------
export const customerReviews: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Scott Rohlfs",
    platform: "Google",
    date: "A month ago",
    rating: 5,
    tourName: "Jaipur TukTuk & Sightseeing Tour",
    text: "I hired Rauf to show me around Jaipur in his tuk tuk. He was very friendly and professional and knew the city inside out. He took me to all the great spots, recommended great local food, and was never pushy. Truly an unforgettable experience with Delightful India Holidays!",
  },
  {
    id: "rev-2",
    name: "Kinga A",
    platform: "Google",
    date: "2 months ago",
    rating: 5,
    tourName: "Golden Triangle Tour",
    text: "The tour was amazing! Rauf is a great driver and guide to local attractions. He is always on time, has a very clean car with AC, and knows so much history. We felt safe throughout our entire trip across Agra, Delhi, and Jaipur. Highly recommended to everyone traveling to India!",
  },
  {
    id: "rev-3",
    name: "Aleksandra Nowak",
    platform: "Google",
    date: "3 months ago",
    rating: 5,
    tourName: "Jaisalmer Desert Safari Tour",
    text: "Rauf and Kamal were great! Will definitely recommend the desert experience with camel riding, desert camps, and stargazing. The folk dancing and food in the Thar desert were authentic and truly spectacular.",
  },
  {
    id: "rev-4",
    name: "Smriti Sharma",
    platform: "Google",
    date: "4 months ago",
    rating: 5,
    tourName: "Jaisalmer Heritage Tour",
    text: "It was a wonderful tour. Kamal and his team even took us to Bada Bagh at the golden hour to get breathtaking pictures. The history shared about the living fort was fascinating. 10/10 service!",
  },
  {
    id: "rev-5",
    name: "Vijay",
    platform: "Google",
    date: "5 months ago",
    rating: 5,
    tourName: "2 Days Jaipur Agra Tour",
    text: "Mr. Rauf is a very good man, smart, active, friendly, English-speaking driver. We enjoyed our trip with him so much. Everything from pickup to drop was coordinated with absolute perfection. Delightful India Holidays is the best agency!",
  },
  {
    id: "rev-6",
    name: "Harini M",
    platform: "Tripadvisor",
    date: "Recent",
    rating: 5,
    tourName: "Colourful Rajasthan Tour",
    text: "We booked a 10-day Rajasthan trip for our family. Every hotel was top-notch, the car was pristine, and having 24/7 WhatsApp support gave us complete peace of mind. Truly living up to their name 'Delightful'!",
  },
  {
    id: "rev-7",
    name: "Lorenzo Fong Ponce",
    platform: "Tripadvisor",
    date: "Recent",
    rating: 5,
    tourName: "Agra Sightseeing Day Tour",
    text: "Traveling from Spain, we wanted a reliable private tour for the Taj Mahal. Kamal planned everything seamlessly. Our guide explained the Mughal history with immense passion, and the car was very comfortable.",
  },
  {
    id: "rev-8",
    name: "Play Warrior",
    platform: "Google",
    date: "6 months ago",
    rating: 5,
    tourName: "Thar Desert Camping Experience",
    text: "Top quality hospitality in Jaisalmer! The desert camp was clean, hot water was provided, and the food was delicious. Kamal is an honest and genuine host who makes you feel like family.",
  },
  {
    id: "rev-9",
    name: "Megumi",
    platform: "Google",
    date: "Recent",
    rating: 5,
    tourName: "Jaipur Shopping & Day Tour",
    text: "As a solo female traveler from Japan, safety was my highest priority. Delightful India Holidays took care of me so warmly. The driver was respectful, polite, and made sure I saw the real beauty of Jaipur.",
  },
];

// ---------------------------------------------------------------------------
// Team Members (From About Us)
// ---------------------------------------------------------------------------
export const teamMembers: TeamMember[] = [
  {
    name: "Kamal Kishor",
    role: "Founder & Travel Expert",
    experience: "15+ Years Experience",
    bio: "With over 15 years of deep expertise in crafting bespoke luxury experiences across India, Kamal is passionate about showcasing authentic culture, hidden gems, and royal desert hospitality.",
    specialties: ["Golden Triangle", "Jaisalmer", "Thar Desert", "Rajasthan Luxury Heritage"],
    image: "/assets/images/kamal-1024x757.png",
  },
  {
    name: "Mr. Padam Singh",
    role: "Senior Tour Guide & Historian",
    experience: "24+ Years Experience",
    bio: "Renowned multilingual government-licensed guide from Jaisalmer with over 24 years of experience guiding international travelers through Rajasthan's living forts, palaces, and desert legends.",
    specialties: ["Jaisalmer Living Fort", "English", "French", "Spanish", "Italian"],
    image: "/assets/images/Best-Places-to-Visit-in-Jaisalmer-1024x577.jpg",
  },
];

// ---------------------------------------------------------------------------
// Why Choose Us Pillars
// ---------------------------------------------------------------------------
export const whyChooseUsFeatures = [
  {
    number: "01",
    title: "Tailor-Made Holiday Experiences",
    description:
      "Every traveler is unique. We create personalized itineraries based on your interests, travel style, budget, and schedule — from solo explorers to family vacations and luxury honeymoons.",
  },
  {
    number: "02",
    title: "Experienced Local Drivers & Guides",
    description:
      "Travel with licensed, English-speaking chauffeurs and certified local historians who know every city inside out, offering insider access, safe driving, and deep historical stories.",
  },
  {
    number: "03",
    title: "Transparent Pricing & No Hidden Costs",
    description:
      "Honest quotes with no hidden charges. All fuel, toll taxes, parking, interstate permits, and driver allowances are included upfront so you can travel with complete financial peace of mind.",
  },
  {
    number: "04",
    title: "24/7 Dedicated Trip Assistance",
    description:
      "From your very first enquiry until you board your flight home, our team provides 24x7 real-time WhatsApp and phone support to handle any questions or changes on the go.",
  },
];

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------
export const blogPosts: BlogPost[] = [
  {
    id: "shopping-in-agra",
    title: "Shopping in Agra: The Only Guide You Need for Handicrafts, Marble, and Textiles",
    slug: "shopping-in-agra",
    date: "June 3, 2026",
    author: "Delightful India Holidays",
    category: "Travel Guide",
    readTime: "6 min read",
    excerpt:
      "Discover the best local markets in Agra for authentic marble inlay work (Pietra Dura), leather goods, Zardozi embroidery, and famous Agra Petha sweets without tourist traps.",
    image: "/assets/images/jaipur-shop-768x367.jpg",
  },
  {
    id: "international-yoga-festival-rishikesh",
    title: "International Yoga Festival Rishikesh 2027: Dates, Schedule",
    slug: "international-yoga-festival-rishikesh",
    date: "May 30, 2026",
    author: "Delightful India Holidays",
    category: "Rajasthan Festival",
    readTime: "8 min read",
    excerpt:
      "Everything you need to know about attending the sacred International Yoga Festival on the banks of holy River Ganges in Rishikesh: master classes, spiritual lectures, and travel tips.",
    image: "/assets/images/international-yoga-festival-768x512.webp",
  },
  {
    id: "hemis-festival-ladakh",
    title: "Hemis Festival Ladakh 2026",
    slug: "hemis-festival",
    date: "May 26, 2026",
    author: "Delightful India Holidays",
    category: "Blog",
    readTime: "7 min read",
    excerpt:
      "Experience the vibrant colors and sacred Cham mask dances of the historic Hemis Monastery in Ladakh celebrating the birth anniversary of Guru Padmasambhava.",
    image: "/assets/images/hemis-festival-768x397.webp",
  },
  {
    id: "jaipur-elephant-festival",
    title: "Jaipur Elephant Festival: History, Significance & What Travellers Should Know",
    slug: "jaipur-elephant-festival",
    date: "May 25, 2026",
    author: "Delightful India Holidays",
    category: "Travel Guide",
    readTime: "6 min read",
    excerpt:
      "A complete guide to the majestic Jaipur Elephant Festival: royal traditions, cultural significance, timings, and photography tips for international visitors.",
    image: "/assets/images/jaipur-elephant-festival-768x397.webp",
  },
  {
    id: "jaisalmer-desert-festival",
    title: "Jaisalmer Desert Festival 2027",
    slug: "jaisalmer-desert-festival",
    date: "May 22, 2026",
    author: "Delightful India Holidays",
    category: "Destination",
    readTime: "7 min read",
    excerpt:
      "Everything you need to know about the annual Jaisalmer Desert Festival in the Thar Desert: folk dances, camel races, turban tying, and golden dune camping.",
    image: "/assets/images/jaisalmer-desert-festival-768x397.webp",
  },
  {
    id: "shopping-places-in-jodhpur",
    title: "Shopping Places in Jodhpur: Your Complete Guide to Antiques & Handicrafts (2026)",
    slug: "shopping-places-in-jodhpur",
    date: "May 19, 2026",
    author: "Delightful India Holidays",
    category: "Activities",
    readTime: "8 min read",
    excerpt:
      "Uncover the finest shopping bazaars in the Blue City of Jodhpur for antique furniture, Bandhej tie-and-dye fabrics, traditional spices, and mojari footwear.",
    image: "/assets/images/jaipur-shop-768x367.jpg",
  },
  {
    id: "things-to-do-in-rajasthan-for-a-perfect-vacation",
    title: "Things to Do in Rajasthan for a Perfect Vacation",
    slug: "things-to-do-in-rajasthan-for-a-perfect-vacation",
    date: "October 29, 2025",
    author: "Delightful India Holidays",
    category: "Blog",
    readTime: "9 min read",
    excerpt:
      "From majestic hill forts and luxury palace stays to tiger safaris in Ranthambore and sunset camel safaris in Jaisalmer, here are the top experiences in Rajasthan.",
    image: "/assets/images/image-37.png",
  },
  {
    id: "explore-india-in-style-4-day-golden-triangle-luxury-tour-2",
    title: "Explore India in Style: 4-Day Golden Triangle Luxury Tour",
    slug: "explore-india-in-style-4-day-golden-triangle-luxury-tour-2",
    date: "September 23, 2025",
    author: "Delightful India Holidays",
    category: "Blog",
    readTime: "5 min read",
    excerpt:
      "Experience Delhi, Agra, and Jaipur in ultimate comfort with five-star heritage hotels, private chauffeured luxury sedans, and expert private local historians.",
    image: "/assets/images/3ed1e1_1df3bffaca4149ce8ffcb6e3d51a1ea3mv2-768x403.jpg",
  },
  {
    id: "samode-escape-experience-the-timeless-charm-jaipur",
    title: "Same Day Trip Around Jaipur – Exploring the Timeless Charm of Samode",
    slug: "samode-escape-experience-the-timeless-charm-jaipur",
    date: "September 20, 2025",
    author: "Delightful India Holidays",
    category: "Blog",
    readTime: "6 min read",
    excerpt:
      "Escape the city bustle for a day in Samode: explore the magnificent Samode Palace, intricate mirror work, royal courtyards, and tranquil village heritage.",
    image: "/assets/images/22490247-768x518.jpg",
  },
  {
    id: "same-day-mandawa-jaipur",
    title: "Same Day Trips Around Jaipur: Discovering Mandawa and Beyond",
    slug: "same-day-mandawa-jaipur",
    date: "September 20, 2025",
    author: "Delightful India Holidays",
    category: "Blog",
    readTime: "7 min read",
    excerpt:
      "Step into the open-air art gallery of Rajasthan in Mandawa and the Shekhawati region, renowned for centuries-old frescoed havelis and rich merchant history.",
    image: "/assets/images/Jaipur-to-Mandawa.jpg",
  },
];

// ---------------------------------------------------------------------------
// Mock Enquiries for Admin Dashboard
// ---------------------------------------------------------------------------
export const mockEnquiries: EnquirySubmission[] = [
  {
    id: "ENQ-1001",
    name: "Elena Rostova",
    email: "elena.rostova@gmail.com",
    phone: "+44 7911 123456",
    tourId: "2-days-jaipur-agra-tour",
    tourName: "2 Days Jaipur Agra Tour",
    travelDate: "2026-10-15",
    adults: 2,
    children: 0,
    message: "Looking for pickup from Delhi Aerocity hotel and drop off at Jaipur airport.",
    status: "new",
    createdAt: "2026-09-27T10:30:00Z",
  },
  {
    id: "ENQ-1002",
    name: "Marcus Vance",
    email: "mvance@wanderlust.com",
    phone: "+1 415 555 0199",
    tourId: "colourful-rajasthan-tour",
    tourName: "Colourful Rajasthan Tour",
    travelDate: "2026-11-04",
    adults: 4,
    children: 1,
    message: "We need 2 double rooms at luxury heritage properties and private Innova Crysta.",
    status: "contacted",
    createdAt: "2026-09-26T14:15:00Z",
  },
  {
    id: "ENQ-1003",
    name: "Siddharth Verma",
    email: "siddharth.v@outlook.com",
    phone: "+91 98201 44552",
    tourId: "blissful-jaisalmer-honeymoon-tour",
    tourName: "Blissful Jaisalmer Honeymoon Tour",
    travelDate: "2026-10-22",
    adults: 2,
    children: 0,
    message: "Honeymoon package inquiry with luxury desert camp and candlelight dinner.",
    status: "confirmed",
    createdAt: "2026-09-25T09:00:00Z",
  },
  {
    id: "ENQ-1004",
    name: "Charlotte Dubois",
    email: "charlotte.dubois@free.fr",
    phone: "+33 6 12 34 56 78",
    tourId: "agra-sightseeing-tour",
    tourName: "Agra Sightseeing Tour",
    travelDate: "2026-10-02",
    adults: 2,
    children: 0,
    message: "English or French guide required for Taj Mahal sunrise tour.",
    status: "contacted",
    createdAt: "2026-09-24T16:45:00Z",
  },
  {
    id: "ENQ-1005",
    name: "David Miller",
    email: "dmiller92@yahoo.com",
    phone: "+61 400 123 456",
    tourId: "4-days-golden-triangle-tour",
    tourName: "4 Days Golden Triangle Tour",
    travelDate: "2026-12-10",
    adults: 3,
    children: 0,
    message: "Can we customize the tour to include 1 day at Ranthambore Tiger Reserve?",
    status: "new",
    createdAt: "2026-09-28T08:12:00Z",
  },
];
