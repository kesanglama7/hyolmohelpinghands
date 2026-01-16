// lib/data/teams.ts

export type SocialLink = {
  label: "facebook" | "instagram" | "linkedin" | "website" | "email";
  href: string;
};

export type TeamPerson = {
  id: string;
  name: string;
  role: string;
  group: "team" | "volunteer";
  location?: string;

  bio?: string;

  avatar?: {
    src: string; // put under /public/images/team/...
    alt?: string;
  };

  socials?: SocialLink[];
};

export const people: TeamPerson[] = [
  {
    id: "treasurer",
    name: "Tshering Netup Lama",
    role: "Treasurer",
    group: "team",
    location: "Kathmandu, Nepal",
    // bio: "Treasurer: Safeguards financial integrity with rigorous oversight, transparent reporting, and strategies for sustainable funding to amplify community impact.",
    avatar: { src: "/images/team/treasurer.jpg", alt: "Chairperson" },
    socials: [{ label: "website", href: "https://tsheringnetuplama.com.np" }],
  },

  // Volunteers
  // {
  //   id: "vol-1",
  //   name: "Sonam Dorje Lama",
  //   role: "Volunteer",
  //   group: "volunteer",
  //   location: "Nepal",
  //   bio: "Supports field activities, distribution programs, and awareness campaigns.",
  //   avatar: { src: "/images/team/vol-1.jpg", alt: "Volunteer" },
  //   socials: [{ label: "website", href: "https://sonamdorjelama.com.np" }],
  // },
];
