import { absoluteUrl, buildLocalBusinessJsonLd, SITE_URL } from "./site";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceRelatedPost = {
  title: string;
  href: string;
  description: string;
};

export type ServiceRateRow = {
  label: string;
  value: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  updatedAt: string;
  heroLabel: string;
  h1: string;
  intro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  serviceType: string;
  routeSummary?: string;
  fareGuidance: string;
  rateRows?: ServiceRateRow[];
  bestFor: string[];
  benefits: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  relatedPosts?: ServiceRelatedPost[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "tempo-traveller-on-rent-nashik",
    title: "Tempo Traveller on Rent in Nashik",
    metaTitle: "Tempo Traveller on Rent in Nashik | 13-26 Seater Booking",
    metaDescription:
      "Book 13, 17, 20, and 26 seater tempo traveller rentals in Nashik for family trips, pilgrimages, weddings, and outstation tours.",
    updatedAt: "2026-04-29",
    heroLabel: "Tempo Traveller Rental Nashik",
    h1: "Tempo traveller on rent in Nashik for comfortable group travel.",
    intro:
      "Choose AC and non-AC tempo travellers from Nashik with experienced drivers, clear per-km rates, and direct call or WhatsApp booking support.",
    primaryKeyword: "tempo traveller on rent in Nashik",
    secondaryKeywords: [
      "13 seater tempo traveller on rent Nashik",
      "17 seater tempo traveller rent Nashik",
      "20 seater tempo traveller on rent Nashik",
      "26 seater tempo traveller Nashik",
    ],
    serviceType: "Tempo Traveller Rental",
    fareGuidance:
      "Tempo traveller pricing generally starts from listed per-km rates by seating capacity. Final fare depends on route, trip date, tolls, parking, permits, driver allowance, and AC/non-AC choice.",
    bestFor: ["Family tours", "Pilgrimage trips", "Wedding guest travel", "Corporate outings"],
    benefits: [
      "13, 17, 20, and 26 seater options",
      "AC and non-AC availability",
      "Drivers familiar with Nashik routes",
      "Suitable for one-day and multi-day trips",
    ],
    faqs: [
      {
        question: "Which tempo traveller sizes are available in Nashik?",
        answer:
          "You can enquire for 13, 17, 20, and 26 seater tempo travellers depending on passenger count and route.",
      },
      {
        question: "Can I book a tempo traveller for Shirdi or Trimbakeshwar?",
        answer:
          "Yes, tempo travellers are commonly booked from Nashik for Shirdi, Trimbakeshwar, Saptashrungi, Bhimashankar, and Maharashtra tours.",
      },
      {
        question: "How do I confirm availability?",
        answer:
          "Call or WhatsApp your travel date, starting location, destination, passenger count, and AC preference for availability and fare guidance.",
      },
    ],
    relatedSlugs: [
      "12-seater-tempo-traveller-nashik",
      "17-seater-tempo-traveller-nashik",
      "nashik-to-shirdi-tempo-traveller",
    ],
  },
  {
    slug: "bus-on-rent-nashik",
    title: "Bus on Rent in Nashik",
    metaTitle: "Bus on Rent in Nashik | 35-49 Seater Luxury Bus Hire",
    metaDescription:
      "Hire 35, 40, 45, and 49 seater buses in Nashik for weddings, school trips, corporate travel, pilgrimages, and outstation tours.",
    updatedAt: "2026-04-29",
    heroLabel: "Bus Rental Nashik",
    h1: "Bus on rent in Nashik for large groups, tours, and events.",
    intro:
      "Book luxury buses from Nashik with professional drivers for local events, long-distance tours, religious trips, and group transport.",
    primaryKeyword: "bus on rent in Nashik",
    secondaryKeywords: [
      "luxury bus rental Nashik",
      "45 seater bus on rent Nashik",
      "49 seater bus on rent Nashik",
      "AC bus hire Nashik",
    ],
    serviceType: "Bus Rental",
    fareGuidance:
      "Bus rental fares vary by seating capacity, route, AC/non-AC requirement, trip duration, and outstation charges such as tolls, permits, parking, and driver allowance.",
    bestFor: ["Wedding transport", "School and college trips", "Corporate travel", "Pilgrimage tours"],
    benefits: [
      "35 to 49 seater coach options",
      "Group-friendly seating and luggage space",
      "Useful for local and outstation travel",
      "Clear fare discussion before confirmation",
    ],
    faqs: [
      {
        question: "What bus sizes can I book in Nashik?",
        answer:
          "You can enquire for 35, 40, 45, and 49 seater buses depending on group size and route requirements.",
      },
      {
        question: "Do you provide buses for weddings?",
        answer:
          "Yes, buses can be arranged for wedding guest travel, intercity journeys, local functions, and group tours from Nashik.",
      },
      {
        question: "Are tolls and permits included?",
        answer:
          "Trip extras such as tolls, permits, parking, and driver allowance are discussed separately before confirmation.",
      },
    ],
    relatedSlugs: [
      "45-seater-bus-rent-nashik",
      "wedding-bus-hire-nashik",
      "corporate-bus-hire-nashik",
    ],
  },
  {
    slug: "nepal-tour-package-from-nashik",
    title: "Nepal Tour Package from Nashik",
    metaTitle: "Nepal Tour Package from Nashik | Kathmandu Pokhara Muktinath",
    metaDescription:
      "Plan Nepal tour packages from Nashik for Kathmandu, Pokhara, Pashupatinath, and Muktinath with vehicle support, group planning, and pilgrimage guidance.",
    updatedAt: "2026-04-29",
    heroLabel: "Nepal Tour Package Nashik",
    h1: "Nepal tour package from Nashik for families, groups, and pilgrims.",
    intro:
      "Plan a Nepal trip from Nashik with route guidance for Kathmandu, Pokhara, Pashupatinath, Muktinath, and custom family or group itineraries.",
    primaryKeyword: "Nepal tour package from Nashik",
    secondaryKeywords: [
      "Nepal package from Nashik",
      "Kathmandu Pokhara tour from Nashik",
      "Muktinath tour package from Nashik",
      "Nepal pilgrimage package Nashik",
    ],
    serviceType: "Nepal Tour Package",
    routeSummary:
      "Popular Nepal itineraries include Kathmandu, Pashupatinath, Pokhara, Manakamana, Chitwan, and Muktinath depending on available days.",
    fareGuidance:
      "Nepal package pricing depends on group size, travel dates, hotel category, route, permits, local transfers, and whether the plan includes Kathmandu, Pokhara, Muktinath, or Chitwan.",
    bestFor: ["Family holidays", "Senior citizen groups", "Pilgrimage tours", "Custom Nepal itineraries"],
    benefits: [
      "Route planning from Nashik",
      "Kathmandu and Pokhara itinerary support",
      "Pilgrimage-friendly planning",
      "Direct call and WhatsApp assistance",
    ],
    faqs: [
      {
        question: "Can you plan a Nepal trip from Nashik?",
        answer:
          "Yes, share your travel month, passenger count, preferred places, and days available so we can guide a practical Nepal itinerary from Nashik.",
      },
      {
        question: "Which Nepal places are commonly included?",
        answer:
          "Kathmandu, Pashupatinath, Pokhara, Manakamana, Chitwan, and Muktinath are common options depending on trip duration and traveller comfort.",
      },
      {
        question: "Is Nepal suitable for senior citizens?",
        answer:
          "Yes, but route pacing matters. We recommend a relaxed itinerary, comfortable halts, and clear planning for Muktinath or hill routes.",
      },
    ],
    relatedSlugs: [
      "muktinath-tour-package-from-nashik",
      "pilgrimage-tour-packages-from-nashik",
      "tempo-traveller-on-rent-nashik",
    ],
    relatedPosts: [
      {
        title: "Nepal tour planning from Nashik",
        href: "/blogs/nepal-tour-package-from-nashik-guide",
        description:
          "A practical guide to Kathmandu, Pokhara, Pashupatinath, Muktinath, and group itinerary planning.",
      },
    ],
  },
  {
    slug: "muktinath-tour-package-from-nashik",
    title: "Muktinath Tour Package from Nashik",
    metaTitle: "Muktinath Tour Package from Nashik | Nepal Pilgrimage Plan",
    metaDescription:
      "Book a Muktinath tour package from Nashik with Nepal pilgrimage planning for Pashupatinath, Pokhara, Jomsom, and senior citizen groups.",
    updatedAt: "2026-04-29",
    heroLabel: "Muktinath Nepal Yatra",
    h1: "Muktinath tour package from Nashik with practical pilgrimage planning.",
    intro:
      "Get guidance for Muktinath yatra from Nashik including Nepal route planning, temple stops, group comfort, and realistic travel pacing.",
    primaryKeyword: "Muktinath tour package from Nashik",
    secondaryKeywords: [
      "Muktinath yatra from Nashik",
      "Pashupatinath Muktinath package Nashik",
      "Nepal pilgrimage tour Nashik",
      "senior citizen Nepal yatra Nashik",
    ],
    serviceType: "Pilgrimage Tour Package",
    routeSummary:
      "Typical Muktinath plans combine Kathmandu or Pashupatinath with Pokhara and onward Muktinath route planning based on weather and traveller age.",
    fareGuidance:
      "Muktinath fares vary by travel season, group size, hotel plan, local transfers, permits, flight or road choices, and the number of Nepal destinations included.",
    bestFor: ["Devotee groups", "Senior citizens", "Family yatras", "Nepal temple tours"],
    benefits: [
      "Pilgrimage-focused itinerary help",
      "Comfort-first route discussion",
      "Support for group planning",
      "Clear inclusions before confirmation",
    ],
    faqs: [
      {
        question: "How many days are needed for Muktinath from Nashik?",
        answer:
          "The ideal duration depends on travel mode and included places. A relaxed plan is recommended because Nepal hill routes need buffer time.",
      },
      {
        question: "Can Pashupatinath be included?",
        answer:
          "Yes, many Muktinath plans include Pashupatinath in Kathmandu and Pokhara before onward travel toward Muktinath.",
      },
      {
        question: "When should we book?",
        answer:
          "Book early for peak pilgrimage seasons so hotels, route connections, and group travel arrangements can be planned properly.",
      },
    ],
    relatedSlugs: [
      "nepal-tour-package-from-nashik",
      "pilgrimage-tour-packages-from-nashik",
      "tempo-traveller-on-rent-nashik",
    ],
  },
  {
    slug: "nashik-to-shirdi-tempo-traveller",
    title: "Nashik to Shirdi Tempo Traveller",
    metaTitle: "Nashik to Shirdi Tempo Traveller | Sai Baba Darshan Trip",
    metaDescription:
      "Book a tempo traveller from Nashik to Shirdi for Sai Baba darshan, family groups, pilgrims, and one-day return trips with driver.",
    updatedAt: "2026-04-29",
    heroLabel: "Nashik to Shirdi Group Travel",
    h1: "Nashik to Shirdi tempo traveller for Sai Baba darshan groups.",
    intro:
      "Travel from Nashik to Shirdi with a suitable tempo traveller for family darshan, senior citizen groups, and comfortable one-day pilgrimage plans.",
    primaryKeyword: "Nashik to Shirdi tempo traveller",
    secondaryKeywords: [
      "Nashik to Shirdi cab",
      "Shirdi travel Nashik",
      "Sai Baba darshan tempo traveller",
      "Nashik to Shirdi group travel",
    ],
    serviceType: "Route Tempo Traveller Rental",
    routeSummary:
      "Nashik to Shirdi is about 90 km and usually takes around 2 to 2.5 hours one way, making it a popular same-day Sai Baba darshan trip.",
    fareGuidance:
      "Fare depends on seating capacity, pickup point in Nashik, waiting time, AC/non-AC vehicle choice, tolls, parking, and final itinerary.",
    rateRows: [
      { label: "Approx distance", value: "About 90 km one way from Nashik" },
      { label: "Expected travel time", value: "Around 2 to 2.5 hours one way depending on traffic and darshan timing" },
      { label: "Recommended vehicles", value: "12, 17, 20, or 26 seater tempo traveller; bus for larger pilgrim groups" },
    ],
    bestFor: ["Sai Baba darshan", "Family groups", "Senior citizen travel", "One-day pilgrimage"],
    benefits: [
      "Drivers familiar with Shirdi route",
      "Group seating in one vehicle",
      "Flexible pickup in Nashik",
      "Useful for same-day return plans",
    ],
    faqs: [
      {
        question: "Can we do Nashik to Shirdi and return the same day?",
        answer:
          "Yes, Nashik to Shirdi is commonly planned as a same-day trip, subject to darshan timing and group pickup schedule.",
      },
      {
        question: "Which vehicle is best for a Shirdi group?",
        answer:
          "Small families may choose a cab, while 10 or more passengers usually prefer a tempo traveller for comfort and per-head value.",
      },
      {
        question: "Can Trimbakeshwar be added with Shirdi?",
        answer:
          "Yes, but timing should be planned carefully. Share your darshan priorities so we can suggest a realistic route.",
      },
    ],
    relatedSlugs: [
      "tempo-traveller-on-rent-nashik",
      "pilgrimage-tour-packages-from-nashik",
      "nashik-to-trimbakeshwar-bus-hire",
    ],
  },
  {
    slug: "nashik-to-trimbakeshwar-tempo-traveller",
    title: "Nashik to Trimbakeshwar Tempo Traveller",
    metaTitle: "Nashik to Trimbakeshwar Tempo Traveller | Jyotirlinga Darshan",
    metaDescription:
      "Hire a tempo traveller from Nashik to Trimbakeshwar for Jyotirlinga darshan, family pilgrimages, and group temple trips.",
    updatedAt: "2026-04-29",
    heroLabel: "Trimbakeshwar Jyotirlinga Trip",
    h1: "Nashik to Trimbakeshwar tempo traveller for Jyotirlinga darshan.",
    intro:
      "Book comfortable group travel from Nashik to Trimbakeshwar with pickup planning, driver support, and route guidance for temple darshan.",
    primaryKeyword: "Nashik to Trimbakeshwar tempo traveller",
    secondaryKeywords: [
      "Trimbakeshwar tour package Nashik",
      "Nashik to Trimbakeshwar taxi",
      "Jyotirlinga tour from Nashik",
      "Trimbakeshwar darshan vehicle Nashik",
    ],
    serviceType: "Pilgrimage Vehicle Rental",
    routeSummary:
      "Trimbakeshwar is about 30 km from Nashik and usually takes around 1 to 1.5 hours one way, especially popular for Jyotirlinga darshan.",
    fareGuidance:
      "Trip cost depends on vehicle type, pickup location, waiting time near the temple, seasonal traffic, tolls, parking, and any extra sightseeing stops.",
    rateRows: [
      { label: "Approx distance", value: "About 30 km one way from Nashik" },
      { label: "Expected travel time", value: "Around 1 to 1.5 hours one way depending on pickup point and crowd" },
      { label: "Recommended vehicles", value: "Tempo traveller for small groups; 32 or 45 seater bus for larger groups" },
    ],
    bestFor: ["Jyotirlinga darshan", "Family temple trips", "Senior citizen groups", "Half-day pilgrimage"],
    benefits: [
      "Route knowledge for temple travel",
      "Half-day and full-day planning",
      "AC and non-AC vehicle options",
      "Direct booking support",
    ],
    faqs: [
      {
        question: "How far is Trimbakeshwar from Nashik?",
        answer:
          "Trimbakeshwar is close to Nashik and is often planned as a half-day or full-day temple visit depending on darshan time.",
      },
      {
        question: "Can we include Panchavati sightseeing?",
        answer:
          "Yes, Panchavati, Kalaram Temple, Ramkund, and local Nashik stops can be added if your schedule allows.",
      },
      {
        question: "Do you provide vehicles for groups?",
        answer:
          "Yes, tempo travellers and buses can be arranged based on passenger count and comfort requirements.",
      },
    ],
    relatedSlugs: [
      "nashik-to-shirdi-tempo-traveller",
      "pilgrimage-tour-packages-from-nashik",
      "nashik-to-trimbakeshwar-bus-hire",
    ],
  },
  {
    slug: "nashik-to-saptashrungi-tempo-traveller",
    title: "Nashik to Saptashrungi Tempo Traveller",
    metaTitle: "Nashik to Saptashrungi Tempo Traveller | Devi Darshan Trip",
    metaDescription:
      "Book Nashik to Saptashrungi tempo traveller rental for Devi darshan, family groups, monsoon trips, and one-day pilgrimage travel.",
    updatedAt: "2026-04-29",
    heroLabel: "Saptashrungi Devi Darshan",
    h1: "Nashik to Saptashrungi tempo traveller for Devi darshan groups.",
    intro:
      "Plan a comfortable Nashik to Saptashrungi trip with tempo traveller options for families, devotees, and group pilgrimage travel.",
    primaryKeyword: "Nashik to Saptashrungi tempo traveller",
    secondaryKeywords: [
      "Saptashrungi tour Nashik",
      "Nashik to Saptashrungi bus hire",
      "Devi darshan trip Nashik",
      "Saptashrungi one day trip Nashik",
    ],
    serviceType: "Temple Route Rental",
    routeSummary:
      "Saptashrungi Gad is a major Shaktipeeth route from Nashik and works well for one-day family or devotee group trips.",
    fareGuidance:
      "Fare varies with vehicle size, pickup location, waiting time, route conditions, tolls, parking, and whether extra stops are included.",
    bestFor: ["Devi darshan", "Family groups", "Monsoon pilgrimage", "One-day trips"],
    benefits: [
      "Suitable vehicle selection",
      "Driver support for hill route travel",
      "Group-friendly seating",
      "Flexible Nashik pickup",
    ],
    faqs: [
      {
        question: "Can Saptashrungi be completed in one day from Nashik?",
        answer:
          "Yes, most groups plan Saptashrungi as a one-day trip from Nashik with early pickup for smoother darshan timing.",
      },
      {
        question: "Is a tempo traveller suitable for Saptashrungi?",
        answer:
          "Yes, tempo travellers are commonly used for family and devotee groups travelling together from Nashik.",
      },
      {
        question: "Can we add Vani or nearby stops?",
        answer:
          "Share your preferred stops before booking so route time and fare can be discussed clearly.",
      },
    ],
    relatedSlugs: [
      "pilgrimage-tour-packages-from-nashik",
      "tempo-traveller-on-rent-nashik",
      "nashik-to-trimbakeshwar-tempo-traveller",
    ],
  },
  {
    slug: "wedding-bus-hire-nashik",
    title: "Wedding Bus Hire in Nashik",
    metaTitle: "Wedding Bus Hire in Nashik | Guest Transport & Luxury Bus",
    metaDescription:
      "Hire buses and tempo travellers in Nashik for wedding guest transport, baraat movement, hotel pickup, venue transfers, and outstation wedding trips.",
    updatedAt: "2026-04-29",
    heroLabel: "Wedding Transport Nashik",
    h1: "Wedding bus hire in Nashik for guest transport and venue transfers.",
    intro:
      "Arrange comfortable buses and tempo travellers for wedding guests, family functions, venue transfers, and outstation wedding travel from Panchavati, Nashik Road, Gangapur Road, CIDCO, and nearby Nashik areas.",
    primaryKeyword: "wedding bus hire Nashik",
    secondaryKeywords: [
      "bus on rent for marriage Nashik",
      "luxury bus rental for wedding Nashik",
      "wedding tempo traveller Nashik",
      "guest transport Nashik wedding",
      "luxury AC bus rent Nashik for wedding",
    ],
    serviceType: "Wedding Transport",
    fareGuidance:
      "Wedding transport pricing depends on vehicle count, seating capacity, pickup points, venue distance, waiting hours, night travel, tolls, parking, and driver allowance.",
    bestFor: ["Wedding guest pickup", "Baraat movement", "Hotel to venue transfers", "Outstation wedding travel"],
    benefits: [
      "Multiple vehicle sizes",
      "Pickup-point planning",
      "Useful for local and outstation events",
      "Clear schedule discussion",
    ],
    faqs: [
      {
        question: "Can you provide multiple buses for a wedding?",
        answer:
          "Yes, vehicle planning can be discussed based on guest count, pickup locations, function timing, and venue distance.",
      },
      {
        question: "Do you handle hotel-to-venue transfers?",
        answer:
          "Yes, buses and tempo travellers can be arranged for guest transfers between hotels, homes, ceremony venues, and reception halls.",
      },
      {
        question: "How early should wedding transport be booked?",
        answer:
          "Book as early as possible, especially during peak wedding season, to secure suitable vehicle sizes and pickup schedules.",
      },
    ],
    relatedSlugs: [
      "bus-on-rent-nashik",
      "luxury-ac-bus-rental-nashik",
      "tempo-traveller-on-rent-nashik",
    ],
    relatedPosts: [
      {
        title: "Wedding and group transport planning",
        href: "/blogs/wedding-bus-hire-in-nashik-guide",
        description:
          "How to plan buses, tempo travellers, pickup points, and guest movement for Nashik weddings.",
      },
    ],
  },
  {
    slug: "corporate-bus-hire-nashik",
    title: "Corporate Bus Hire in Nashik",
    metaTitle: "Corporate Bus Hire in Nashik | Employee Trips & Outings",
    metaDescription:
      "Book corporate bus hire in Nashik for employee outings, office travel, industrial visits, airport transfers, and team group trips.",
    updatedAt: "2026-04-29",
    heroLabel: "Corporate Group Travel",
    h1: "Corporate bus hire in Nashik for employee outings and group travel.",
    intro:
      "Plan employee transport, office outings, industrial visits, team trips, and group transfers with buses and tempo travellers from Nashik Road, Gangapur Road, Panchavati, CIDCO, and nearby business areas.",
    primaryKeyword: "corporate bus hire Nashik",
    secondaryKeywords: [
      "employee outing bus Nashik",
      "corporate tempo traveller Nashik",
      "office picnic bus Nashik",
      "industrial visit bus Nashik",
      "vehicle rental Gangapur Road Nashik",
    ],
    serviceType: "Corporate Bus Rental",
    fareGuidance:
      "Corporate fares depend on seating capacity, route, reporting time, waiting duration, AC preference, tolls, permits, parking, and repeat booking requirements.",
    bestFor: ["Employee outings", "Industrial visits", "Office transfers", "Corporate events"],
    benefits: [
      "Suitable for small and large teams",
      "Professional driver support",
      "Clear timing and route planning",
      "Useful for one-day and multi-day trips",
    ],
    faqs: [
      {
        question: "Can we book buses for employee outings?",
        answer:
          "Yes, buses and tempo travellers can be arranged for office picnics, retreats, industrial visits, and outstation corporate travel.",
      },
      {
        question: "Do you support early morning reporting?",
        answer:
          "Yes, share the reporting time and pickup points while enquiring so availability and driver planning can be confirmed.",
      },
      {
        question: "Can invoice or trip details be shared?",
        answer:
          "Trip details and billing requirements can be discussed before booking confirmation.",
      },
    ],
    relatedSlugs: [
      "bus-on-rent-nashik",
      "luxury-ac-bus-rental-nashik",
      "school-picnic-bus-nashik",
    ],
  },
  {
    slug: "school-picnic-bus-nashik",
    title: "School Picnic Bus in Nashik",
    metaTitle: "School Picnic Bus in Nashik | College Trip Bus Rental",
    metaDescription:
      "Hire school picnic buses and college trip buses in Nashik for educational tours, local sightseeing, one-day picnics, and outstation student travel.",
    updatedAt: "2026-04-29",
    heroLabel: "School and College Trips",
    h1: "School picnic bus in Nashik for student trips and educational tours.",
    intro:
      "Book buses from Nashik for school picnics, college trips, industrial visits, temple tours, vineyard outings, Nashik Darshan, and educational travel.",
    primaryKeyword: "school picnic bus Nashik",
    secondaryKeywords: [
      "college trip bus rent Nashik",
      "one day picnic bus hire Nashik",
      "student tour bus Nashik",
      "educational trip bus rental Nashik",
      "bus rental Nashik Road",
    ],
    serviceType: "School Trip Bus Rental",
    fareGuidance:
      "School and college trip fares depend on bus capacity, route, pickup points, reporting time, trip duration, tolls, parking, and any outstation permit needs.",
    bestFor: ["School picnics", "College trips", "Industrial visits", "One-day educational tours"],
    benefits: [
      "Large group seating",
      "Driver route familiarity",
      "Clear schedule planning",
      "Options for local and outstation trips",
    ],
    faqs: [
      {
        question: "Can schools book buses for one-day picnics?",
        answer:
          "Yes, buses can be planned for one-day school picnics, local sightseeing, educational tours, and nearby outstation destinations.",
      },
      {
        question: "What details are needed for a quote?",
        answer:
          "Share student count, teachers count, pickup point, destination, date, reporting time, and return time for accurate guidance.",
      },
      {
        question: "Are buses available for college industrial visits?",
        answer:
          "Yes, buses can be arranged for college trips, industrial visits, and educational group travel from Nashik.",
      },
    ],
    relatedSlugs: [
      "bus-on-rent-nashik",
      "corporate-bus-hire-nashik",
      "tempo-traveller-on-rent-nashik",
    ],
  },
  {
    slug: "pilgrimage-tour-packages-from-nashik",
    title: "Pilgrimage Tour Packages from Nashik",
    metaTitle: "Pilgrimage Tour Packages from Nashik | Shirdi Trimbakeshwar",
    metaDescription:
      "Book pilgrimage bus rent Nashik and pilgrimage tour packages for Shirdi, Trimbakeshwar, Saptashrungi, Bhimashankar, and Pandharpur groups.",
    updatedAt: "2026-04-29",
    heroLabel: "Pilgrimage Tours Nashik",
    h1: "Pilgrimage tour packages from Nashik for temple routes and yatras.",
    intro:
      "Plan temple routes from Nashik with suitable cabs, tempo travellers, and buses for families, devotee groups, senior citizens, and Nashik Darshan travellers.",
    primaryKeyword: "pilgrimage tour packages from Nashik",
    secondaryKeywords: [
      "Shirdi Trimbakeshwar tour Nashik",
      "Bhimashankar tour from Nashik",
      "Pandharpur bus hire Nashik",
      "temple tour package Nashik",
      "pilgrimage bus rent Nashik",
      "Nashik darshan tempo traveller",
    ],
    serviceType: "Pilgrimage Tour Package",
    routeSummary:
      "Popular routes include Shirdi, Trimbakeshwar, Saptashrungi, Bhimashankar, Pandharpur, Shani Shingnapur, and Nepal yatra plans.",
    fareGuidance:
      "Pilgrimage fares depend on route distance, vehicle type, passenger count, darshan waiting time, hotel halts, tolls, permits, parking, and driver allowance.",
    bestFor: ["Temple darshan", "Senior citizen groups", "Family yatras", "Multi-day pilgrimage tours"],
    benefits: [
      "Practical temple route planning",
      "Vehicle options by group size",
      "Experienced route drivers",
      "Clear fare discussion",
    ],
    faqs: [
      {
        question: "Which pilgrimage routes can be planned from Nashik?",
        answer:
          "Common routes include Shirdi, Trimbakeshwar, Saptashrungi, Bhimashankar, Pandharpur, Shani Shingnapur, and Nepal pilgrimage itineraries.",
      },
      {
        question: "Can senior citizen groups travel comfortably?",
        answer:
          "Yes, we suggest suitable vehicles, realistic pickup timing, and route pacing based on passenger age and comfort needs.",
      },
      {
        question: "Can we plan a custom yatra?",
        answer:
          "Yes, share your preferred temples, travel dates, group size, and days available for custom route guidance.",
      },
    ],
    relatedSlugs: [
      "nashik-to-shirdi-tempo-traveller",
      "nashik-to-trimbakeshwar-tempo-traveller",
      "nepal-tour-package-from-nashik",
    ],
    relatedPosts: [
      {
        title: "Pilgrimage routes from Nashik",
        href: "/blogs/pilgrimage-tour-packages-from-nashik",
        description:
          "Compare Shirdi, Trimbakeshwar, Saptashrungi, Bhimashankar, Pandharpur, and Nepal yatra routes.",
      },
    ],
  },
  {
    slug: "luxury-ac-bus-rental-nashik",
    title: "Luxury AC Bus Rental in Nashik",
    metaTitle: "Luxury AC Bus Rental in Nashik | 45-49 Seater Bus Hire",
    metaDescription:
      "Book luxury AC bus rental in Nashik for 35, 45, and 49 seater group travel, weddings, corporate trips, school tours, and pilgrimages.",
    updatedAt: "2026-04-29",
    heroLabel: "Luxury AC Bus Nashik",
    h1: "Luxury AC bus rental in Nashik for comfortable large group travel.",
    intro:
      "Hire spacious AC buses from Nashik for weddings, corporate outings, school trips, pilgrimages, and long-distance group tours.",
    primaryKeyword: "luxury AC bus rental Nashik",
    secondaryKeywords: [
      "45 seater AC bus Nashik",
      "49 seater bus on rent Nashik",
      "luxury bus hire Nashik",
      "AC bus hire Nashik",
    ],
    serviceType: "Luxury Bus Rental",
    fareGuidance:
      "Luxury AC bus fares depend on seating capacity, route distance, trip duration, AC usage, tolls, permits, parking, and driver allowance.",
    bestFor: ["Large family trips", "Wedding transport", "Corporate tours", "Long-distance group travel"],
    benefits: [
      "35 to 49 seater options",
      "Comfortable group travel",
      "Useful for local and outstation trips",
      "Professional driver support",
    ],
    faqs: [
      {
        question: "Which AC bus sizes are available?",
        answer:
          "You can enquire for 35, 40, 45, and 49 seater bus options depending on date, route, and group size.",
      },
      {
        question: "Can I book a luxury bus for outstation travel?",
        answer:
          "Yes, luxury AC buses can be arranged for outstation tours, pilgrimages, weddings, and corporate trips from Nashik.",
      },
      {
        question: "How is bus fare calculated?",
        answer:
          "Fare is discussed based on route, kilometres, travel dates, seating capacity, AC requirement, tolls, permits, parking, and driver allowance.",
      },
    ],
    relatedSlugs: [
      "bus-on-rent-nashik",
      "wedding-bus-hire-nashik",
      "corporate-bus-hire-nashik",
    ],
  },
  {
    slug: "12-seater-tempo-traveller-nashik",
    title: "12 Seater Tempo Traveller Rent in Nashik",
    metaTitle: "12 Seater Tempo Traveller Rent Nashik | Per Km Rates",
    metaDescription:
      "Book 12 seater tempo traveller rent in Nashik for family trips, Shirdi, Trimbakeshwar, weddings, and outstation group travel with AC and non-AC options.",
    updatedAt: "2026-04-29",
    heroLabel: "12 Seater Tempo Traveller Nashik",
    h1: "12 seater tempo traveller rent in Nashik for family and group trips.",
    intro:
      "Hire a 12 seater tempo traveller in Nashik for compact groups travelling from Panchavati, Nashik Road, Gangapur Road, CIDCO, and nearby Nasik areas.",
    primaryKeyword: "12 seater tempo traveller rent Nashik",
    secondaryKeywords: [
      "tempo traveller 12 seater rent per km Nashik",
      "12 seater tempo traveller on rent in Nashik",
      "family picnic tempo traveller Nashik",
      "tempo traveller hire Panchavati Nashik",
    ],
    serviceType: "12 Seater Tempo Traveller Rental",
    fareGuidance:
      "12 seater tempo traveller pricing is usually discussed on a per-km basis with AC/non-AC choice, minimum kilometres, tolls, parking, permits, and driver allowance confirmed before booking.",
    rateRows: [
      { label: "Suggested group size", value: "10 to 12 passengers with light luggage" },
      { label: "Indicative per-km basis", value: "Comparable to 13 seater tempo traveller rates; confirm live AC/non-AC fare on call" },
      { label: "Best routes", value: "Shirdi, Trimbakeshwar, Saptashrungi, Mumbai, Pune, and one-day picnics" },
    ],
    bestFor: ["Family trips", "Small pilgrimage groups", "One-day picnic travel", "Local Nashik Darshan"],
    benefits: [
      "Compact group vehicle",
      "AC and non-AC fare discussion",
      "Useful for local and outstation trips",
      "Pickup from major Nashik areas",
    ],
    faqs: [
      {
        question: "What is the 12 seater tempo traveller rent per km in Nashik?",
        answer:
          "Per-km fare depends on AC/non-AC choice, route, date, minimum kilometres, tolls, parking, permits, and driver allowance. Call or WhatsApp for the latest quote.",
      },
      {
        question: "Is a 12 seater tempo traveller good for family picnic travel?",
        answer:
          "Yes, it works well for family picnic tempo traveller Nashik searches, especially for Shirdi, Trimbakeshwar, Igatpuri, and local Nasik sightseeing.",
      },
      {
        question: "Can you arrange pickup from Panchavati or Nashik Road?",
        answer:
          "Yes, pickup can be discussed from Panchavati, Nashik Road, Gangapur Road, CIDCO, and nearby Nashik locations.",
      },
    ],
    relatedSlugs: [
      "tempo-traveller-on-rent-nashik",
      "17-seater-tempo-traveller-nashik",
      "nashik-to-shirdi-tempo-traveller",
    ],
  },
  {
    slug: "17-seater-tempo-traveller-nashik",
    title: "17 Seater Tempo Traveller Nashik",
    metaTitle: "17 Seater Tempo Traveller Nashik | AC Non-AC Rent",
    metaDescription:
      "Book 17 seater tempo traveller Nashik rentals for family groups, corporate outings, college trips, pilgrimages, and outstation travel.",
    updatedAt: "2026-04-29",
    heroLabel: "17 Seater Tempo Traveller",
    h1: "17 seater tempo traveller Nashik rental for mid-size groups.",
    intro:
      "Choose a 17 seater tempo traveller in Nashik for family tours, corporate group travel, college trips, and pilgrimage routes from Panchavati, Nashik Road, or CIDCO.",
    primaryKeyword: "17 seater tempo traveller Nashik",
    secondaryKeywords: [
      "17 seater tempo traveller rent Nashik",
      "best tempo traveller service Nashik",
      "college trip bus rent Nashik",
      "group travel Nashik",
    ],
    serviceType: "17 Seater Tempo Traveller Rental",
    fareGuidance:
      "17 seater tempo traveller fares are normally based on kilometres, AC/non-AC selection, minimum daily run, outstation charges, tolls, parking, and driver allowance.",
    rateRows: [
      { label: "Indicative AC fare style", value: "Often discussed around the listed 17 seater AC per-km rate; confirm live rate before booking" },
      { label: "Indicative non-AC fare style", value: "Lower than AC pricing, subject to vehicle availability and route" },
      { label: "Popular use cases", value: "Corporate outings, family tours, Shirdi, Trimbakeshwar, Pune, and Mumbai travel" },
    ],
    bestFor: ["Mid-size family groups", "Corporate outings", "College trips", "Pilgrimage tours"],
    benefits: [
      "Spacious seating for mid-size groups",
      "AC and non-AC options",
      "Professional driver support",
      "Comfortable for local and outstation routes",
    ],
    faqs: [
      {
        question: "When should I choose a 17 seater tempo traveller?",
        answer:
          "Choose it when your group is larger than a cab but does not need a full bus. It is practical for family, corporate, pilgrimage, and college travel.",
      },
      {
        question: "Can a 17 seater tempo traveller go from Nashik to Mumbai or Pune?",
        answer:
          "Yes, 17 seater tempo travellers are commonly used for Nashik to Mumbai, Pune, Shirdi, Trimbakeshwar, and other outstation trips.",
      },
      {
        question: "Do you serve Nashik Road and Gangapur Road pickups?",
        answer:
          "Yes, pickups can be planned from Nashik Road, Gangapur Road, Panchavati, CIDCO, and nearby local areas.",
      },
    ],
    relatedSlugs: [
      "12-seater-tempo-traveller-nashik",
      "26-seater-tempo-traveller-nashik",
      "corporate-bus-hire-nashik",
    ],
  },
  {
    slug: "20-seater-bus-rent-nashik",
    title: "20 Seater Bus Rent in Nashik",
    metaTitle: "20 Seater Bus Rent Nashik | Group Travel Vehicle Hire",
    metaDescription:
      "Book 20 seater bus rent Nashik options for corporate trips, family groups, school travel, pilgrimages, and local or outstation group travel.",
    updatedAt: "2026-04-29",
    heroLabel: "20 Seater Group Vehicle",
    h1: "20 seater bus rent Nashik option for compact group travel.",
    intro:
      "Plan 20 seater group travel in Nashik for corporate outings, family tours, pilgrimage routes, school trips, and one-day picnic bookings.",
    primaryKeyword: "20 seater bus rent Nashik",
    secondaryKeywords: [
      "20 seater tempo traveller on rent Nashik",
      "group travel Nashik",
      "one day picnic bus hire Nashik",
      "affordable bus hire Nashik",
    ],
    serviceType: "20 Seater Group Vehicle Rental",
    fareGuidance:
      "20 seater group vehicle fare depends on AC/non-AC choice, kilometres, trip duration, route, tolls, permits, parking, and driver allowance.",
    rateRows: [
      { label: "Vehicle fit", value: "Best for groups that need more space than 17 seater but less than a full bus" },
      { label: "Fare basis", value: "Per-km or package pricing depending on route and trip duration" },
      { label: "Common trips", value: "Nashik Darshan, Shirdi, Trimbakeshwar, corporate outings, and school trips" },
    ],
    bestFor: ["Compact corporate groups", "School trips", "Family tours", "Pilgrimage routes"],
    benefits: [
      "Balanced seating and fare value",
      "Useful for one-day and outstation trips",
      "AC/non-AC availability discussion",
      "Pickup from Nashik local areas",
    ],
    faqs: [
      {
        question: "Is 20 seater bus rent available in Nashik?",
        answer:
          "Yes, 20 seater group vehicle options can be discussed based on your travel date, passenger count, and route.",
      },
      {
        question: "Can I book it for one day picnic bus hire in Nashik?",
        answer:
          "Yes, it is suitable for one-day picnic bus hire Nashik searches, especially for Igatpuri, Bhandardara, Saptashrungi, and local sightseeing.",
      },
      {
        question: "How is the price calculated?",
        answer:
          "Pricing depends on kilometres, route, AC/non-AC choice, waiting time, tolls, permits, parking, and driver allowance.",
      },
    ],
    relatedSlugs: [
      "17-seater-tempo-traveller-nashik",
      "32-seater-bus-rent-nashik",
      "school-picnic-bus-nashik",
    ],
  },
  {
    slug: "26-seater-tempo-traveller-nashik",
    title: "26 Seater Tempo Traveller Nashik",
    metaTitle: "26 Seater Tempo Traveller Nashik | Large Group Rental",
    metaDescription:
      "Hire 26 seater tempo traveller Nashik rentals for large family groups, weddings, pilgrimages, corporate tours, and outstation journeys.",
    updatedAt: "2026-04-29",
    heroLabel: "26 Seater Tempo Traveller",
    h1: "26 seater tempo traveller Nashik rental for large family and wedding groups.",
    intro:
      "Book a 26 seater tempo traveller in Nashik for large groups travelling together for weddings, pilgrimages, family tours, and corporate outings.",
    primaryKeyword: "26 seater tempo traveller Nashik",
    secondaryKeywords: [
      "26 seater tempo traveller rent Nashik",
      "wedding tempo traveller Nashik",
      "pilgrimage bus rent Nashik",
      "trusted tour operator Nashik",
    ],
    serviceType: "26 Seater Tempo Traveller Rental",
    fareGuidance:
      "26 seater tempo traveller fare is calculated by seating capacity, AC/non-AC option, kilometres, route, trip duration, tolls, parking, permits, and driver allowance.",
    rateRows: [
      { label: "Group fit", value: "Best for 22 to 26 passengers with coordinated pickup planning" },
      { label: "Fare basis", value: "Per-km and package quotes available depending on local or outstation plan" },
      { label: "Best routes", value: "Shirdi, Trimbakeshwar, Saptashrungi, Pune, Mumbai, Aurangabad, and wedding travel" },
    ],
    bestFor: ["Wedding travel", "Pilgrimage groups", "Large family tours", "Corporate trips"],
    benefits: [
      "Large tempo traveller capacity",
      "Keeps the group together",
      "Clear fare discussion before booking",
      "Suitable for long-distance journeys",
    ],
    faqs: [
      {
        question: "Is 26 seater tempo traveller available for wedding travel in Nashik?",
        answer:
          "Yes, 26 seater tempo travellers are useful for wedding guest movement, family functions, and outstation marriage travel from Nashik.",
      },
      {
        question: "Can it be used for pilgrimage bus rent Nashik requirements?",
        answer:
          "Yes, it works for pilgrimage groups visiting Shirdi, Trimbakeshwar, Saptashrungi, Bhimashankar, Pandharpur, and other temple routes.",
      },
      {
        question: "Does 26 seater fare change for AC and non-AC?",
        answer:
          "Yes, AC/non-AC choice affects per-km pricing along with route, kilometres, tolls, permits, parking, and driver allowance.",
      },
    ],
    relatedSlugs: [
      "tempo-traveller-on-rent-nashik",
      "wedding-bus-hire-nashik",
      "pilgrimage-tour-packages-from-nashik",
    ],
  },
  {
    slug: "32-seater-bus-rent-nashik",
    title: "32 Seater Mini Bus Rent in Nashik",
    metaTitle: "32 Seater Mini Bus Rent Nashik | Corporate School Trips",
    metaDescription:
      "Book 32 seater mini bus rent Nashik for corporate outings, school picnics, college trips, pilgrimage routes, and affordable group travel.",
    updatedAt: "2026-04-29",
    heroLabel: "32 Seater Mini Bus Nashik",
    h1: "32 seater mini bus rent Nashik for corporate, school, and family groups.",
    intro:
      "Hire a 32 seater mini bus in Nashik for employee outings, school picnics, college trips, family functions, and pilgrimage travel.",
    primaryKeyword: "32 seater mini bus rent Nashik",
    secondaryKeywords: [
      "corporate bus hire Nashik",
      "school picnic bus Nashik",
      "college trip bus rent Nashik",
      "affordable bus hire Nashik",
    ],
    serviceType: "32 Seater Mini Bus Rental",
    fareGuidance:
      "32 seater mini bus pricing depends on AC/non-AC vehicle availability, kilometres, route, pickup points, trip duration, tolls, permits, parking, and driver allowance.",
    rateRows: [
      { label: "Best group size", value: "Around 25 to 32 passengers" },
      { label: "Fare pattern", value: "Per-km or day package depending on local, picnic, corporate, or outstation route" },
      { label: "Common demand", value: "School picnic bus Nashik, corporate bus hire Nashik, and college trip bus rent Nashik" },
    ],
    bestFor: ["Corporate outings", "School picnics", "College trips", "Pilgrimage groups"],
    benefits: [
      "Good bridge between tempo traveller and full bus",
      "Efficient for multiple pickup points",
      "Useful for budget-conscious groups",
      "Route planning support",
    ],
    faqs: [
      {
        question: "Can I book a 32 seater mini bus for school picnic in Nashik?",
        answer:
          "Yes, 32 seater mini buses are suitable for school picnic bus Nashik and college trip bus rent Nashik requirements.",
      },
      {
        question: "Is this good for corporate bus hire in Nashik?",
        answer:
          "Yes, it is practical for employee outings, office picnics, industrial visits, and team transfers.",
      },
      {
        question: "Can pickup be planned from Nashik Road or CIDCO?",
        answer:
          "Yes, pickup points can be planned from Nashik Road, CIDCO, Panchavati, Gangapur Road, and other Nashik locations.",
      },
    ],
    relatedSlugs: [
      "20-seater-bus-rent-nashik",
      "45-seater-bus-rent-nashik",
      "corporate-bus-hire-nashik",
    ],
  },
  {
    slug: "45-seater-bus-rent-nashik",
    title: "45 Seater Bus on Rent in Nashik",
    metaTitle: "45 Seater Bus on Rent Nashik | AC Bus Hire",
    metaDescription:
      "Hire 45 seater bus on rent Nashik for weddings, pilgrimages, corporate tours, school trips, and AC bus hire Nashik 40 seater searches.",
    updatedAt: "2026-04-29",
    heroLabel: "45 Seater Bus Nashik",
    h1: "45 seater bus on rent Nashik for large groups and events.",
    intro:
      "Book a 45 seater bus in Nashik for wedding guest travel, pilgrimage groups, corporate tours, school trips, and large outstation journeys.",
    primaryKeyword: "45 seater bus on rent Nashik",
    secondaryKeywords: [
      "AC bus hire Nashik 40 seater",
      "luxury AC bus rent Nashik for wedding",
      "pilgrimage bus rent Nashik",
      "affordable bus hire Nashik",
    ],
    serviceType: "45 Seater Bus Rental",
    fareGuidance:
      "45 seater bus fares depend on AC/non-AC choice, route distance, trip duration, reporting time, tolls, permits, parking, and driver allowance.",
    rateRows: [
      { label: "Best group size", value: "35 to 45 passengers with comfortable group coordination" },
      { label: "Fare basis", value: "Per-km or full-trip quote depending on route, season, and AC/non-AC requirement" },
      { label: "Common uses", value: "Weddings, pilgrimages, school trips, corporate events, and long-distance tours" },
    ],
    bestFor: ["Large pilgrimages", "Wedding guest transport", "Corporate groups", "School and college tours"],
    benefits: [
      "Large seating capacity",
      "AC and non-AC fare options",
      "Good for long-distance group travel",
      "Clear route and timing discussion",
    ],
    faqs: [
      {
        question: "Can I hire a 45 seater bus for wedding in Nashik?",
        answer:
          "Yes, 45 seater buses are commonly booked for wedding guest transport, hotel transfers, baraat movement, and outstation wedding travel.",
      },
      {
        question: "Do you provide AC bus hire Nashik 40 seater options?",
        answer:
          "Yes, 40 and 45 seater AC bus hire can be discussed based on vehicle availability, route, and travel date.",
      },
      {
        question: "Is 45 seater bus suitable for pilgrimage groups?",
        answer:
          "Yes, it is suitable for Shirdi, Trimbakeshwar, Saptashrungi, Pandharpur, Bhimashankar, and multi-day pilgrimage routes.",
      },
    ],
    relatedSlugs: [
      "bus-on-rent-nashik",
      "32-seater-bus-rent-nashik",
      "wedding-bus-hire-nashik",
    ],
  },
  {
    slug: "nashik-to-trimbakeshwar-bus-hire",
    title: "Nashik to Trimbakeshwar Bus Hire",
    metaTitle: "Nashik to Trimbakeshwar Bus Hire | Jyotirlinga Trip",
    metaDescription:
      "Book Nashik to Trimbakeshwar bus hire for Jyotirlinga darshan, family groups, pilgrimages, school trips, and one-day temple travel.",
    updatedAt: "2026-04-29",
    heroLabel: "Trimbakeshwar Bus Hire",
    h1: "Nashik to Trimbakeshwar bus hire for Jyotirlinga darshan groups.",
    intro:
      "Hire a bus from Nashik to Trimbakeshwar for temple darshan groups travelling from Panchavati, Nashik Road, Gangapur Road, CIDCO, and nearby areas.",
    primaryKeyword: "Nashik to Trimbakeshwar bus hire",
    secondaryKeywords: [
      "Nashik to Trimbakeshwar taxi",
      "Trimbakeshwar tour package Nashik",
      "pilgrimage bus rent Nashik",
      "Nashik darshan tempo traveller",
    ],
    serviceType: "Trimbakeshwar Bus Hire",
    routeSummary:
      "Approx distance is about 30 km from Nashik to Trimbakeshwar, usually around 1 to 1.5 hours one way depending on pickup point and traffic.",
    fareGuidance:
      "Trimbakeshwar bus hire fares depend on seating capacity, pickup location, waiting time near temple, AC/non-AC choice, tolls, parking, and any Nashik Darshan stops.",
    rateRows: [
      { label: "Approx distance", value: "About 30 km one way from central Nashik" },
      { label: "Expected travel time", value: "Around 1 to 1.5 hours one way, subject to traffic and temple crowd" },
      { label: "Recommended vehicles", value: "12, 17, 26 seater tempo travellers or 32 to 45 seater buses" },
    ],
    bestFor: ["Jyotirlinga darshan", "Pilgrimage bus groups", "Senior citizen travel", "Nashik Darshan add-ons"],
    benefits: [
      "Short temple route planning",
      "Suitable for small and large groups",
      "Pickup from local Nashik areas",
      "Can combine with Panchavati or local sightseeing",
    ],
    faqs: [
      {
        question: "Can we hire a bus from Nashik to Trimbakeshwar for one day?",
        answer:
          "Yes, Nashik to Trimbakeshwar bus hire is commonly planned as a one-day or half-day temple trip depending on darshan timing.",
      },
      {
        question: "Can Panchavati be included with Trimbakeshwar?",
        answer:
          "Yes, Panchavati, Kalaram Temple, Ramkund, and other Nashik Darshan stops can be added if the schedule allows.",
      },
      {
        question: "Which vehicle is best for Trimbakeshwar darshan?",
        answer:
          "Small groups can choose tempo travellers, while larger devotee groups usually prefer 32, 40, or 45 seater buses.",
      },
    ],
    relatedSlugs: [
      "nashik-to-trimbakeshwar-tempo-traveller",
      "pilgrimage-tour-packages-from-nashik",
      "45-seater-bus-rent-nashik",
    ],
  },
  {
    slug: "nashik-to-mumbai-tempo-traveller",
    title: "Nashik to Mumbai Tempo Traveller Rent",
    metaTitle: "Nashik to Mumbai Tempo Traveller Rent | Group Travel",
    metaDescription:
      "Book Nashik to Mumbai tempo traveller rent for airport transfers, family trips, corporate travel, weddings, and outstation group journeys.",
    updatedAt: "2026-04-29",
    heroLabel: "Nashik to Mumbai Group Travel",
    h1: "Nashik to Mumbai tempo traveller rent for comfortable outstation travel.",
    intro:
      "Travel from Nashik to Mumbai with tempo traveller options for family groups, corporate teams, wedding guests, airport transfers, and outstation travel.",
    primaryKeyword: "Nashik to Mumbai tempo traveller rent",
    secondaryKeywords: [
      "Nashik to Mumbai tempo traveller",
      "tempo traveller rent Nashik to Mumbai",
      "vehicle rental Nashik",
      "group travel Nashik",
    ],
    serviceType: "Nashik to Mumbai Tempo Traveller",
    routeSummary:
      "Approx distance from Nashik to Mumbai is 165 to 180 km, usually 4 to 5 hours depending on pickup point, destination, traffic, and ghat movement.",
    fareGuidance:
      "Nashik to Mumbai fare depends on seating size, one-way or return plan, AC/non-AC choice, pickup/drop points, tolls, parking, permits, and driver allowance.",
    rateRows: [
      { label: "Approx distance", value: "About 165 to 180 km one way" },
      { label: "Expected travel time", value: "Around 4 to 5 hours depending on Mumbai destination and traffic" },
      { label: "Recommended vehicles", value: "12, 17, 20, or 26 seater tempo traveller based on group size" },
    ],
    bestFor: ["Airport transfers", "Corporate travel", "Wedding guest travel", "Family outstation trips"],
    benefits: [
      "Comfortable long-route seating",
      "AC/non-AC fare options",
      "Pickup from Nashik local areas",
      "Useful for one-way and return trips",
    ],
    faqs: [
      {
        question: "Can I book Nashik to Mumbai tempo traveller for airport drop?",
        answer:
          "Yes, tempo travellers can be planned for Mumbai airport drops, pickups, family travel, and corporate transfers from Nashik.",
      },
      {
        question: "What details are needed for a Nashik to Mumbai quote?",
        answer:
          "Share travel date, pickup point, Mumbai destination, passenger count, luggage, AC preference, and one-way or return requirement.",
      },
      {
        question: "Can pickup be from Nashik Road or Gangapur Road?",
        answer:
          "Yes, pickup can be planned from Nashik Road, Gangapur Road, Panchavati, CIDCO, and nearby local areas.",
      },
    ],
    relatedSlugs: [
      "12-seater-tempo-traveller-nashik",
      "17-seater-tempo-traveller-nashik",
      "26-seater-tempo-traveller-nashik",
    ],
  },
  {
    slug: "nashik-to-pune-bus-rent",
    title: "Nashik to Pune Bus on Rent",
    metaTitle: "Nashik to Pune Bus on Rent | Corporate & Group Travel",
    metaDescription:
      "Book Nashik to Pune bus on rent for corporate travel, family groups, college trips, weddings, and outstation group transport.",
    updatedAt: "2026-04-29",
    heroLabel: "Nashik to Pune Bus Rental",
    h1: "Nashik to Pune bus on rent for corporate, family, and group travel.",
    intro:
      "Hire a bus from Nashik to Pune for corporate outings, employee travel, family functions, college trips, wedding guest movement, and group travel.",
    primaryKeyword: "Nashik to Pune bus on rent",
    secondaryKeywords: [
      "Nashik to Pune bus rent",
      "corporate bus hire Nashik",
      "college trip bus rent Nashik",
      "affordable bus hire Nashik",
    ],
    serviceType: "Nashik to Pune Bus Rental",
    routeSummary:
      "Approx distance from Nashik to Pune is around 210 km, usually 5 to 6 hours depending on route, traffic, pickup point, and Pune destination.",
    fareGuidance:
      "Nashik to Pune bus rental fares depend on bus size, AC/non-AC choice, route, pickup points, trip duration, tolls, parking, permits, and driver allowance.",
    rateRows: [
      { label: "Approx distance", value: "Around 210 km one way" },
      { label: "Expected travel time", value: "About 5 to 6 hours depending on traffic and destination" },
      { label: "Recommended vehicles", value: "32, 35, 40, or 45 seater bus for large groups; tempo traveller for smaller groups" },
    ],
    bestFor: ["Corporate travel", "College trips", "Wedding movement", "Family group travel"],
    benefits: [
      "Suitable for office and event groups",
      "Multiple seating capacity options",
      "AC/non-AC fare discussion",
      "Clear outstation trip planning",
    ],
    faqs: [
      {
        question: "Can I book a bus from Nashik to Pune for corporate travel?",
        answer:
          "Yes, Nashik to Pune bus rentals are useful for corporate outings, employee travel, industrial visits, and event transfers.",
      },
      {
        question: "Which bus size is best for Nashik to Pune?",
        answer:
          "For large groups, 32 to 45 seater buses work well. For smaller groups, a 17 or 26 seater tempo traveller may be more practical.",
      },
      {
        question: "Can multiple pickup points be planned?",
        answer:
          "Yes, pickup points across Nashik can be discussed before quote confirmation.",
      },
    ],
    relatedSlugs: [
      "32-seater-bus-rent-nashik",
      "45-seater-bus-rent-nashik",
      "corporate-bus-hire-nashik",
    ],
  },
  {
    slug: "nashik-to-aurangabad-tempo-traveller",
    title: "Nashik to Aurangabad Tempo Traveller",
    metaTitle: "Nashik to Aurangabad Tempo Traveller | Ellora Ajanta Trips",
    metaDescription:
      "Book Nashik to Aurangabad tempo traveller for Ellora, Ajanta, Grishneshwar, family tours, pilgrimage circuits, and outstation group travel.",
    updatedAt: "2026-04-29",
    heroLabel: "Nashik to Aurangabad Route",
    h1: "Nashik to Aurangabad tempo traveller for Ellora, Ajanta, and pilgrimage routes.",
    intro:
      "Plan Nashik to Aurangabad group travel with tempo traveller options for Ellora, Ajanta, Grishneshwar, family tours, and pilgrimage circuits.",
    primaryKeyword: "Nashik to Aurangabad tempo traveller",
    secondaryKeywords: [
      "Nashik to Aurangabad group travel",
      "Aurangabad group travel Nashik",
      "Grishneshwar tour from Nashik",
      "Ellora Ajanta tempo traveller Nashik",
    ],
    serviceType: "Nashik to Aurangabad Tempo Traveller",
    routeSummary:
      "Approx distance from Nashik to Aurangabad is around 190 km, usually 4 to 5 hours depending on route, stops, traffic, and destination.",
    fareGuidance:
      "Fare depends on seating capacity, AC/non-AC option, one-day or multi-day plan, Ellora/Ajanta stops, tolls, parking, permits, and driver allowance.",
    rateRows: [
      { label: "Approx distance", value: "Around 190 km one way" },
      { label: "Expected travel time", value: "About 4 to 5 hours, subject to route and stops" },
      { label: "Recommended vehicles", value: "17, 20, or 26 seater tempo traveller for families and pilgrim groups" },
    ],
    bestFor: ["Ellora Ajanta tours", "Grishneshwar pilgrimage", "Family groups", "Outstation sightseeing"],
    benefits: [
      "Route support for temple and heritage stops",
      "Comfortable group seating",
      "Useful for one-day and multi-day plans",
      "AC/non-AC fare options",
    ],
    faqs: [
      {
        question: "Can Ellora and Grishneshwar be included?",
        answer:
          "Yes, Ellora Caves and Grishneshwar Jyotirlinga can be planned depending on available time and route preference.",
      },
      {
        question: "Is Ajanta possible in the same plan?",
        answer:
          "Ajanta usually needs more time, so it is better planned as part of a longer itinerary instead of a rushed same-day trip.",
      },
      {
        question: "Which vehicle is best for Nashik to Aurangabad group travel?",
        answer:
          "Tempo travellers work well for family and medium-size groups, while buses suit larger pilgrim or school groups.",
      },
    ],
    relatedSlugs: [
      "17-seater-tempo-traveller-nashik",
      "26-seater-tempo-traveller-nashik",
      "pilgrimage-tour-packages-from-nashik",
    ],
  },
];

export const SERVICE_NAV_LINKS = SERVICE_PAGES.map((page) => ({
  label: page.title.replace(" in Nashik", ""),
  href: `/${page.slug}`,
}));

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function buildServiceJsonLd(page: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildLocalBusinessJsonLd(),
      {
        "@type": "Service",
        "@id": `${SITE_URL}/${page.slug}#service`,
        name: page.title,
        serviceType: page.serviceType,
        description: page.metaDescription,
        keywords: [page.primaryKeyword, ...page.secondaryKeywords],
        provider: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        areaServed: {
          "@type": "City",
          name: "Nashik",
        },
        url: `${SITE_URL}/${page.slug}`,
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/${page.slug}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: absoluteUrl(`/${page.slug}`),
          },
        ],
      },
    ],
  };
}

export function buildRelatedServices(page: ServicePage) {
  return page.relatedSlugs
    .map((slug) => getServicePage(slug))
    .filter((entry): entry is ServicePage => Boolean(entry));
}
