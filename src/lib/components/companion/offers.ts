export const plans = [
  {
    id: "reflect",
    name: "Reflect",
    price: 300,
    replies: 100,
    description: "For the moments you want to think through.",
    rhythm: "A little space, when you need it.",
    usd: 102,
    eur: 93,
  },
  {
    id: "practice",
    name: "Practice",
    price: 600,
    replies: 250,
    description: "For making reflection part of your week.",
    rhythm: "Room to return to the work.",
    usd: 204,
    eur: 186,
  },
  {
    id: "deepen",
    name: "Deepen",
    price: 900,
    replies: 450,
    description: "For a fuller rhythm of reflection and rehearsal.",
    rhythm: "More space for what is unfolding.",
    usd: 306,
    eur: 279,
  },
] as const;

// Foreign-currency amounts are illustrative only; no live checkout is connected.
export type CompanionOffer = (typeof plans)[number];
