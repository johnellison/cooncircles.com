export const plans = [
  {
    id: "reflect",
    name: "Reflect",
    price: 400,
    replies: 100,
    description: "For the moments you want to think through.",
    rhythm: "A little space, when you need it.",
    usd: 136,
    eur: 124,
  },
  {
    id: "practice",
    name: "Practice",
    price: 700,
    replies: 250,
    description: "For making reflection part of your week.",
    rhythm: "Room to return to the work.",
    usd: 238,
    eur: 217,
  },
  {
    id: "deepen",
    name: "Deepen",
    price: 950,
    replies: 450,
    description: "For a fuller rhythm of reflection and rehearsal.",
    rhythm: "More space for what is unfolding.",
    usd: 323,
    eur: 295,
  },
] as const;

// Foreign-currency amounts are illustrative only; no live checkout is connected.
export type CompanionOffer = (typeof plans)[number];
