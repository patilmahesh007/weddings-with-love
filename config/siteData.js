// Main site data configuration
// Replace these URLs with actual images from houseontheclouds.com

export const siteData = {
  // Hero section data
  hero: {
    mainImage:
      "https://sjc.microlink.io/k5gntBoYZIYhKOPy534rgiX0Yy0I7Kx3A_37rNC3L1ATbL2n2YjnpP_bel7CoM0cSEjE5YtuTsQMnpCWdGbOWg.jpeg", // Using the provided couple image
    alt: "Elegant couple portrait in black and white",
    title: "House on the Clouds",
    subtitle: "Capturing Life's Most Beautiful Moments",
  },

  // About section data
  about: {
    title: "A MODERN APPROACH",
    subtitle: "to an AGE OLD TRADITION",
    description: [
      "Considered to be the epitome of Modern Photography and Filmmaking, HOTC has transformed the Indian Wedding landscape on a regular basis. For almost a decade House On The Clouds has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.",
      "Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards HOTC is the only company listed on IMDB for its award winning films.",
    ],
    leftImage:
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1db82b11-0d5e-446f-bfef-3bee15ed4f8a/P1+small.jpg?format=750w",
    rightImage:
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/306b3c30-8166-4514-82d9-1c1263929d2c/0H1A4354+%281%29+small.jpg?format=750w",
  },

  // Featured work section
  featuredWork: {
    title: "Featured Work",
    subtitle:
      "A curated selection of our most cherished projects, each telling a unique story of love and celebration.",
    portfolios: [
      {
        id: "1",
        title: "Romantic Garden Wedding",
        category: "Wedding Photography",
        image: "/placeholder.svg?height=400&width=400",
        slug: "romantic-garden-wedding",
      },
      {
        id: "2",
        title: "Vineyard Celebration",
        category: "Wedding Photography",
        image: "/placeholder.svg?height=400&width=400",
        slug: "vineyard-celebration",
      },
      {
        id: "3",
        title: "Intimate Elopement",
        category: "Elopement",
        image: "/placeholder.svg?height=400&width=400",
        slug: "intimate-elopement",
      },
      {
        id: "4",
        title: "Destination Wedding",
        category: "Destination",
        image: "/placeholder.svg?height=400&width=400",
        slug: "destination-wedding",
      },
      {
        id: "5",
        title: "Engagement Session",
        category: "Engagement",
        image: "/placeholder.svg?height=400&width=400",
        slug: "engagement-session",
      },
      {
        id: "6",
        title: "Anniversary Shoot",
        category: "Anniversary",
        image: "/placeholder.svg?height=400&width=400",
        slug: "anniversary-shoot",
      },
    ],
  },

  // Services section
  services: {
    title: "Our Services",
    services: [
      {
        name: "Wedding Photography",
        description: "Complete wedding day coverage with artistic storytelling and timeless elegance.",
        icon: "💒",
      },
      {
        name: "Engagement Sessions",
        description: "Intimate pre-wedding sessions to capture your love story in beautiful locations.",
        icon: "💍",
      },
      {
        name: "Wedding Films",
        description: "Cinematic wedding films that bring your special day to life with emotion and artistry.",
        icon: "🎬",
      },
      {
        name: "Destination Weddings",
        description: "Travel photography services for weddings in exotic and beautiful destinations worldwide.",
        icon: "✈️",
      },
    ],
  },

  // Contact section
  contact: {
    title: "Let's Create Something Beautiful",
    subtitle:
      "Ready to capture your special moments? We'd love to hear from you and discuss how we can bring your vision to life.",
    email: "hello@houseontheclouds.com",
    phone: "+1 (555) 123-4567",
    social: {
      instagram: "https://instagram.com/houseontheclouds",
      facebook: "https://facebook.com/houseontheclouds",
      twitter: "https://twitter.com/houseontheclouds",
    },
  },
}
