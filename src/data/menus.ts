export interface Dish {
  id: string;
  name: string;
  image: string;
  extraPricePerPortion: number; // Preis für zusätzliche Portion
}

export interface Menu {
  id: string;
  title: string;
  description: string;
  image: string;
  basePricePerPerson: number;   // Basispreis des Menüs
  dishes: Dish[];
}

export const menus: Menu[] = [
  {
    id: "buffet-klassik",
    title: "Buffet Klassik",
    description:
      "Ein klassisches Buffet mit kalten und warmen Speisen – ideal für Familienfeiern und Firmenveranstaltungen.",
    image: "/images/buffet-klassik.jpg",
    basePricePerPerson: 19.9,
    dishes: [
      {
        id: "frikadellen",
        name: "Mini-Frikadellen",
        image: "/images/dishes/frikadellen.jpg",
        extraPricePerPortion: 2.5,
      },
      {
        id: "nudelsalat",
        name: "Nudelsalat",
        image: "/images/dishes/nudelsalat.jpg",
        extraPricePerPortion: 1.8,
      },
      {
        id: "brotkorb",
        name: "Brötchenkorb",
        image: "/images/dishes/brotkorb.jpg",
        extraPricePerPortion: 1.2,
      },
    ],
  },
  {
    id: "buffet-mediterran",
    title: "Buffet Mediterran",
    description:
      "Frische Antipasti, gegrilltes Gemüse und mediterrane Fleischgerichte – ein Hauch von Urlaub.",
    image: "/images/buffet-mediterran.jpg",
    basePricePerPerson: 22.5,
    dishes: [
      {
        id: "antipasti",
        name: "Antipasti-Platte",
        image: "/images/dishes/antipasti.jpg",
        extraPricePerPortion: 3.5,
      },
      {
        id: "hähnchen",
        name: "Zitronen-Hähnchen",
        image: "/images/dishes/hähnchen.jpg",
        extraPricePerPortion: 4.2,
      },
      {
        id: "couscous",
        name: "Couscous-Salat",
        image: "/images/dishes/couscous.jpg",
        extraPricePerPortion: 2.0,
      },
    ],
  },
  {
    id: "fingerfood-deluxe",
    title: "Fingerfood Deluxe",
    description: "Kleine Häppchen, große Wirkung: Ideal für Stehempfänge, Events und Business- Veranstaltungen",
    image: "/images/fingerfood.jpg",
    basePricePerPerson: 16.0,
    dishes: [
      {
        id: "würstchen",
        name: "Würstchen",
        image: "/image/dishes/würstchen.jpg",
        extraPricePerPortion: 2.5,
      },
    ],
  },
];
