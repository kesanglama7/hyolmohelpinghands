// export type Work = {
//   slug: string;
//   title: string;
//   shortDesc: string;
//   detailedDesc: string;

//   featured?: boolean;

//   // Images
//   coverImage?: { src: string; alt: string };
//   gallery?: { src: string; alt: string }[];

//   // Detail content blocks
//   blocks: Array<
//     | { type: "text"; title?: string; content: string }
//     | { type: "list"; title?: string; items: string[] }
//     | { type: "stats"; title?: string; items: { label: string; value: string }[] }
//   >;
// };

// export const works: Work[] = [
//   {
//     slug: "education-literacy",
//     title: "Education & Literacy",
//     shortDesc: "Scholarships, school supplies, and learning programs.",
//     detailedDesc:
//       "Providing underprivileged children with the resources and support they need to succeed in school and beyond.",
//     featured: true,
//     coverImage: { src: "/images/works/education/cover.jpg", alt: "Education program" },
//     gallery: [
//       { src: "/images/works/education/1.png", alt: "Community learning session" },
//       { src: "/images/works/education/2.jpg", alt: "Classroom activity" },
//       { src: "/images/works/education/3.jpg", alt: "Students receiving supplies" },
//     ],
//     blocks: [
//       { type: "text", title: "What we do", content: "We support children and youth with school materials and learning access." },
//       { type: "list", title: "Key activities", items: ["Scholarships", "School supplies", "Learning support"] },
//     //   { type: "stats", title: "Focus", items: [{ label: "Area", value: "Rural & underserved" }, { label: "Goal", value: "Keep kids learning" }] },
//     ],
//   },
// ];










// lib/data/works.ts

export type WorkImage = { src: string; alt: string };

export type WorkBlock =
  | { type: "text"; title?: string; content: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "stats"; title?: string; items: { label: string; value: string }[] };

export type Work = {
  slug: string;
  title: string;
  shortDesc: string;
  detailedDesc?: string;

  featured?: boolean;

  coverImage?: WorkImage;
  gallery?: WorkImage[];

  // Detail page sections (you already render these)
  blocks: WorkBlock[];

  // Extra helpers for future UI (filters, badges, etc.)
  category?: "Education" | "Health" | "Environment" | "Relief" | "Social" | "Animals" | "Rural";
  tags?: string[];
};

export const works: Work[] = [
  {
    slug: "education-literacy",
    title: "Education & Literacy",
    shortDesc: "Scholarships, school supplies, and learning programs.",
    detailedDesc:
      "Education is the foundation for long-term change. Through our Education & Literacy initiatives, we work to ensure that children from underprivileged and marginalized communities are not left behind due to poverty, lack of access, or social barriers. We provide essential school supplies, learning materials, and financial support such as scholarships to help students continue their education with dignity and confidence.\n\nBeyond material support, we focus on creating a supportive learning environment by encouraging community involvement, awareness among parents, and motivation for children to pursue their dreams. Our programs aim not only to improve academic access but also to nurture curiosity, self-belief, and hope—empowering children to build a better future for themselves and their communities.",
    featured: true,
    category: "Education",
    tags: ["Scholarships", "Supplies", "Literacy", "Children"],
    coverImage: {
      src: "/images/works/education/cover.jpg",
      alt: "Education program",
    },
    gallery: [
      { src: "/images/works/education/1.png", alt: "Community learning session" },
      { src: "/images/works/education/2.jpg", alt: "Classroom activity" },
      { src: "/images/works/education/3.jpg", alt: "Students receiving supplies" },
    ],
    blocks: [
      {
        type: "text",
        title: "What we do",
        content:
          "We support children and youth with school materials, learning access, and community encouragement so education remains continuous and meaningful.",
      },
      {
        type: "list",
        title: "Key activities",
        items: [
          "Scholarships and education support for deserving students",
          "School supplies and learning materials distribution",
          "Community learning programs and literacy encouragement",
          "Motivational support to help students stay in school",
        ],
      },
      {
        type: "stats",
        title: "Goals",
        items: [
          { label: "Keep children learning", value: "Access" },
          { label: "Reduce dropouts", value: "Support" },
          { label: "Promote literacy", value: "Awareness" },
          { label: "Strengthen communities", value: "Hope" },
        ],
      },
    ],
  },

  {
    slug: "old-age-home-support",
    title: "Old Age Home Support",
    shortDesc: "Care visits, essential supplies, and celebration with seniors.",
    detailedDesc:
      "Our support for old age homes focuses on restoring dignity, care, and companionship to senior citizens who often feel forgotten or neglected. We visit old age homes to provide essential supplies and spend meaningful time with the residents.\n\nWe also celebrate special occasions such as Mother’s Day and festivals, creating moments of joy and belonging. These initiatives go beyond material help—bringing emotional support, respect, and connection to elders who deserve warmth, attention, and care.",
    featured: true,
    category: "Social",
    tags: ["Elders", "Mother's Day", "Festivals", "Care"],
    coverImage: {
      src: "/images/works/old-age/cover.jpg",
      alt: "Supporting seniors at an old age home",
    },
    gallery: [
      { src: "/images/works/old-age/1.jpg", alt: "Celebrating with seniors" },
      { src: "/images/works/old-age/2.jpg", alt: "Sharing meals and conversations" },
      { src: "/images/works/old-age/3.jpg", alt: "Festival celebration at the home" },
    ],
    blocks: [
      {
        type: "text",
        title: "What we do",
        content:
          "We visit old age homes to provide essentials and create joyful, respectful moments through celebrations, shared meals, and companionship.",
      },
      {
        type: "list",
        title: "Key activities",
        items: [
          "Old age home visits and companionship",
          "Celebrating Mother’s Day and major festivals together",
          "Providing essential supplies and support",
          "Community engagement to promote respect for elders",
        ],
      },
      {
        type: "stats",
        title: "Goals",
        items: [
          { label: "Emotional support", value: "Care" },
          { label: "Dignity and respect", value: "Value" },
          { label: "Joyful moments", value: "Connection" },
          { label: "Community awareness", value: "Respect" },
        ],
      },
    ],
  },

  {
    slug: "orphanage-child-welfare",
    title: "Orphanage Support & Child Welfare",
    shortDesc: "Supplies, wish fulfillment, and festivals with children.",
    detailedDesc:
      "We support orphanages to help children grow with confidence, care, and stability. Our initiatives include providing daily essentials, educational materials, clothing, and basic supplies.\n\nWe also focus on emotional well-being by celebrating festivals and important days with the children, and fulfilling meaningful wishes whenever possible. Through consistent support and warmth, we aim to create a sense of family, joy, and hope.",
    featured: true,
    category: "Social",
    tags: ["Children", "Orphanage", "Supplies", "Wish Fulfillment"],
    coverImage: {
      src: "/images/works/orphanage/cover.png",
      alt: "Supporting children at an orphanage",
    },
    gallery: [
      { src: "/images/works/orphanage/1.png", alt: "Distribution of supplies" },
      { src: "/images/works/orphanage/2.jpg", alt: "Celebrating festival with children" },
      { src: "/images/works/orphanage/3.jpg", alt: "Group activity and engagement" },
    ],
    blocks: [
      {
        type: "text",
        title: "What we do",
        content:
          "We provide essentials and emotional support for children through supplies, celebrations, and wish-fulfillment moments that build happiness and confidence.",
      },
      {
        type: "list",
        title: "Key activities",
        items: [
          "Providing education materials and daily essentials",
          "Wish fulfillment and special moments for children",
          "Festival celebrations to build inclusion and joy",
          "Support through ongoing engagement and care",
        ],
      },
      {
        type: "stats",
        title: "Goals",
        items: [
          { label: "Child well-being", value: "Care" },
          { label: "Support education", value: "Learning" },
          { label: "Create belonging", value: "Family" },
          { label: "Bring happiness", value: "Hope" },
        ],
      },
    ],
  },
  //Environmental Works
  // {
  //   slug: "environment-cleanup-campaigns",
  //   title: "Environmental Clean-Up Campaigns",
  //   shortDesc: "Cleaning rivers, roads, and public spaces for healthier communities.",
  //   detailedDesc:
  //     "Protecting the environment is a shared responsibility. Our clean-up campaigns focus on removing waste from rivers, roads, and public spaces to reduce pollution and improve community health.\n\nBy involving local volunteers and communities, we encourage long-term responsibility toward nature and inspire people to keep their surroundings clean and safe.",
  //   category: "Environment",
  //   tags: ["Clean-up", "Rivers", "Roads", "Community"],
  //   coverImage: {
  //     src: "/images/works/environment/cleanup/cover.jpg",
  //     alt: "Community cleanup campaign",
  //   },
  //   gallery: [
  //     { src: "/images/works/environment/cleanup/1.jpg", alt: "River cleanup activity" },
  //     { src: "/images/works/environment/cleanup/2.jpg", alt: "Road cleanup campaign" },
  //     { src: "/images/works/environment/cleanup/3.jpg", alt: "Volunteers collecting waste" },
  //   ],
  //   blocks: [
  //     {
  //       type: "text",
  //       title: "What we do",
  //       content:
  //         "We organize clean-up drives in riversides, roads, and public places, and promote awareness about waste management and environmental responsibility.",
  //     },
  //     {
  //       type: "list",
  //       title: "Key activities",
  //       items: [
  //         "River and roadside clean-up drives",
  //         "Community awareness on cleanliness and waste reduction",
  //         "Volunteer engagement and youth participation",
  //         "Promoting responsible disposal habits",
  //       ],
  //     },
  //     {
  //       type: "stats",
  //       title: "Goals",
  //       items: [
  //         { label: "Reduce pollution", value: "Clean" },
  //         { label: "Safer public spaces", value: "Health" },
  //         { label: "Community ownership", value: "Action" },
  //         { label: "Protect nature", value: "Future" },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   slug: "tree-plantation-green-support",
  //   title: "Tree Plantation & Green Support",
  //   shortDesc: "Planting trees and promoting greener, sustainable living.",
  //   detailedDesc:
  //     "To support a greener and healthier future, we conduct tree plantation programs in both urban and rural areas. These activities help improve air quality, protect soil, and support local ecosystems.\n\nBy involving students, volunteers, and local communities, we encourage long-term environmental responsibility and collective action toward sustainability.",
  //   category: "Environment",
  //   tags: ["Tree Plantation", "Green", "Sustainability"],
  //   coverImage: {
  //     src: "/images/works/environment/plantation/cover.jpg",
  //     alt: "Tree plantation program",
  //   },
  //   gallery: [
  //     { src: "/images/works/environment/plantation/1.jpg", alt: "Planting trees with volunteers" },
  //     { src: "/images/works/environment/plantation/2.jpg", alt: "Community participation" },
  //     { src: "/images/works/environment/plantation/3.jpg", alt: "Saplings ready for plantation" },
  //   ],
  //   blocks: [
  //     {
  //       type: "text",
  //       title: "What we do",
  //       content:
  //         "We organize plantation programs and awareness campaigns to encourage greener habits and long-term care for nature.",
  //     },
  //     {
  //       type: "list",
  //       title: "Key activities",
  //       items: [
  //         "Tree plantation drives in local communities",
  //         "Promoting long-term care of planted trees",
  //         "Environmental awareness for youth and volunteers",
  //         "Supporting greener community practices",
  //       ],
  //     },
  //     {
  //       type: "stats",
  //       title: "Goals",
  //       items: [
  //         { label: "Greener communities", value: "Grow" },
  //         { label: "Better air quality", value: "Health" },
  //         { label: "Environmental awareness", value: "Learn" },
  //         { label: "Sustainable future", value: "Protect" },
  //       ],
  //     },
  //   ],
  // },

  {
    slug: "rural-medical-camps",
    title: "Rural Medical Camps",
    shortDesc: "Free checkups and health awareness in underserved communities.",
    detailedDesc:
      "Access to basic healthcare remains a challenge in many rural areas. We organize medical camps that provide free health check-ups, consultations, and basic medical support to underserved communities.\n\nThese camps help identify health issues early, promote preventive care, and spread awareness about hygiene, nutrition, and general well-being—bringing healthcare closer to those who need it most.",
    featured: true,
    category: "Health",
    tags: ["Medical Camp", "Rural", "Checkup", "Awareness"],
    coverImage: {
      src: "/images/works/medical-camp/cover.jpg",
      alt: "Medical camp in a rural area",
    },
    gallery: [
      { src: "/images/works/medical-camp/1.jpg", alt: "Doctor consultation" },
      { src: "/images/works/medical-camp/2.jpg", alt: "Health screening and checkup" },
      { src: "/images/works/medical-camp/3.jpg", alt: "Community health awareness session" },
    ],
    blocks: [
      {
        type: "text",
        title: "What we do",
        content:
          "We bring healthcare services closer to rural communities through check-ups, consultations, and awareness on preventive health practices.",
      },
      {
        type: "list",
        title: "Key activities",
        items: [
          "Free health check-ups and consultations",
          "Basic screenings and early detection support",
          "Health awareness sessions (hygiene, nutrition, prevention)",
          "Connecting patients to further care when needed",
        ],
      },
      {
        type: "stats",
        title: "Goals",
        items: [
          { label: "Early detection", value: "Check" },
          { label: "Health awareness", value: "Learn" },
          { label: "Rural access", value: "Reach" },
          { label: "Community well-being", value: "Care" },
        ],
      },
    ],
  },
  //TODO: uncomment these works later
  // {
  //   slug: "animal-welfare-support",
  //   title: "Animal Welfare Support",
  //   shortDesc: "Feeding stray animals and promoting humane protection.",
  //   detailedDesc:
  //     "Compassion extends beyond humans. We support animal welfare through feeding programs for stray dogs and awareness initiatives that encourage humane treatment of animals.\n\nWe also aim to protect local ecosystems by discouraging harmful practices and promoting respect for all living beings. Our efforts are guided by kindness, responsibility, and community participation.",
  //   category: "Animals",
  //   tags: ["Stray Dogs", "Feeding", "Humane Care"],
  //   coverImage: {
  //     src: "/images/works/animals/cover.jpg",
  //     alt: "Feeding stray animals",
  //   },
  //   gallery: [
  //     { src: "/images/works/animals/1.jpg", alt: "Feeding stray dogs" },
  //     { src: "/images/works/animals/2.jpg", alt: "Caring for an injured animal" },
  //     { src: "/images/works/animals/3.jpg", alt: "Animal welfare awareness activity" },
  //   ],
  //   blocks: [
  //     {
  //       type: "text",
  //       title: "What we do",
  //       content:
  //         "We support stray animals through feeding and care, and encourage communities to treat animals with kindness and responsibility.",
  //     },
  //     {
  //       type: "list",
  //       title: "Key activities",
  //       items: [
  //         "Feeding programs for stray dogs and animals",
  //         "Basic rescue and support for injured animals (as possible)",
  //         "Awareness to promote humane treatment",
  //         "Encouraging community-led animal care",
  //       ],
  //     },
  //     {
  //       type: "stats",
  //       title: "Goals",
  //       items: [
  //         { label: "Reduce suffering", value: "Care" },
  //         { label: "Promote kindness", value: "Respect" },
  //         { label: "Community awareness", value: "Action" },
  //         { label: "Protect life", value: "Hope" },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   slug: "disaster-pandemic-relief",
  //   title: "Disaster & Pandemic Relief",
  //   shortDesc: "Emergency response during floods, earthquakes, and pandemics.",
  //   detailedDesc:
  //     "During crises such as pandemics and natural disasters, we support affected communities with immediate relief. Our efforts include distributing food, hygiene kits, medical supplies, and essential equipment.\n\nWhether responding to COVID-19, earthquakes, floods, or other emergencies, our focus is on quick action, compassion, and helping families recover with dignity and hope.",
  //   category: "Relief",
  //   tags: ["Disaster Relief", "COVID-19", "Flood", "Earthquake"],
  //   coverImage: {
  //     src: "/images/works/relief/cover.jpg",
  //     alt: "Disaster relief distribution",
  //   },
  //   gallery: [
  //     { src: "/images/works/relief/1.jpg", alt: "Distribution of relief materials" },
  //     { src: "/images/works/relief/2.jpg", alt: "Food and supply support" },
  //     { src: "/images/works/relief/3.jpg", alt: "Community help during emergency" },
  //   ],
  //   blocks: [
  //     {
  //       type: "text",
  //       title: "What we do",
  //       content:
  //         "We respond during emergencies by distributing essential supplies and supporting families affected by disasters and health crises.",
  //     },
  //     {
  //       type: "list",
  //       title: "Key activities",
  //       items: [
  //         "Food and essential item distribution",
  //         "Medical and hygiene support during outbreaks",
  //         "Emergency response for floods/earthquakes and similar crises",
  //         "Community coordination and volunteer mobilization",
  //       ],
  //     },
  //     {
  //       type: "stats",
  //       title: "Goals",
  //       items: [
  //         { label: "Rapid response", value: "Act" },
  //         { label: "Support recovery", value: "Rebuild" },
  //         { label: "Protect health", value: "Care" },
  //         { label: "Community resilience", value: "Strength" },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   slug: "menstrual-health-awareness",
  //   title: "Menstrual Health Awareness & Reusable Pads",
  //   shortDesc: "Reusable sanitary pad distribution and menstrual health education.",
  //   detailedDesc:
  //     "Menstrual health and hygiene are essential yet often neglected topics, especially in rural and underserved communities. Through our reusable sanitary cloth pad distribution program, we provide sustainable and affordable menstrual solutions while reducing environmental waste.\n\nAlongside distribution, we conduct awareness sessions to educate girls and women about menstrual health, hygiene practices, and breaking social taboos—helping them live with confidence, comfort, and dignity.",
  //   category: "Health",
  //   tags: ["Menstrual Health", "Reusable Pads", "Awareness", "Dignity"],
  //   coverImage: {
  //     src: "/images/works/health/menstrual/cover.jpg",
  //     alt: "Menstrual health awareness session",
  //   },
  //   gallery: [
  //     { src: "/images/works/health/menstrual/1.jpg", alt: "Awareness session with participants" },
  //     { src: "/images/works/health/menstrual/2.jpg", alt: "Reusable pad distribution program" },
  //     { src: "/images/works/health/menstrual/3.jpg", alt: "Community discussion and education" },
  //   ],
  //   blocks: [
  //     {
  //       type: "text",
  //       title: "What we do",
  //       content:
  //         "We distribute reusable sanitary pads and provide education sessions to promote menstrual health, hygiene, and dignity.",
  //     },
  //     {
  //       type: "list",
  //       title: "Key activities",
  //       items: [
  //         "Reusable sanitary pad distribution",
  //         "Menstrual health awareness sessions",
  //         "Hygiene education and breaking taboos",
  //         "Sustainable and eco-friendly menstrual solutions",
  //       ],
  //     },
  //     {
  //       type: "stats",
  //       title: "Goals",
  //       items: [
  //         { label: "Dignity for women", value: "Respect" },
  //         { label: "Better hygiene", value: "Health" },
  //         { label: "Reduce taboos", value: "Awareness" },
  //         { label: "Eco-friendly support", value: "Sustain" },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   slug: "rural-development-support",
  //   title: "Rural Development Support",
  //   shortDesc: "Grassroots initiatives for long-term community development.",
  //   detailedDesc:
  //     "Our rural development initiatives focus on improving quality of life through education support, health awareness, sanitation education, and community engagement. We work closely with local residents to understand their needs and to support practical, sustainable improvements.\n\nWe believe long-term development happens when communities are empowered and involved—so we prioritize participation, awareness, and continuous support at the grassroots level.",
  //   category: "Rural",
  //   tags: ["Rural", "Development", "Community", "Sustainability"],
  //   coverImage: {
  //     src: "/images/works/rural/cover.jpg",
  //     alt: "Rural community support initiative",
  //   },
  //   gallery: [
  //     { src: "/images/works/rural/1.jpg", alt: "Community engagement in rural area" },
  //     { src: "/images/works/rural/2.jpg", alt: "Local development activity" },
  //     { src: "/images/works/rural/3.jpg", alt: "Volunteer support and outreach" },
  //   ],
  //   blocks: [
  //     {
  //       type: "text",
  //       title: "What we do",
  //       content:
  //         "We support rural communities through grassroots initiatives that improve awareness, access, and quality of life in practical ways.",
  //     },
  //     {
  //       type: "list",
  //       title: "Key activities",
  //       items: [
  //         "Community awareness and engagement programs",
  //         "Support in education, health, and sanitation initiatives",
  //         "Volunteer outreach and needs-based support",
  //         "Encouraging sustainable local development",
  //       ],
  //     },
  //     {
  //       type: "stats",
  //       title: "Goals",
  //       items: [
  //         { label: "Empower communities", value: "Grow" },
  //         { label: "Improve well-being", value: "Care" },
  //         { label: "Promote sustainability", value: "Future" },
  //         { label: "Stronger rural access", value: "Support" },
  //       ],
  //     },
  //   ],
  // },
];
