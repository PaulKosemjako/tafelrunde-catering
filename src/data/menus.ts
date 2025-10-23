export interface Menu {
    id: string;
    title: string;
    description: string;
    image: string;
    pricePerPerson: number;
}

export const menus: Menu[] = [
    {
        id: "buffet-klassik",
        title: "Buffet Klassik",
        description: "Ein klassisches Buffet mit kalten und warmen Speisen - ideal für Familienfeiern und Firmenveranstaltungen.",
        image: "/images/buffet-klassik.jpg",
        pricePerPerson: 18.5,
    },
    {
        id: "buffet-mediterran",
        title: "Buffet Mediterran",
        description: "Frische Antipasti, gegrilltes Gemüse und mediterrane Fleischgerichte - ein Hauch von Urlaub für Ihre Gäste.",
        image: "/image/buffet-mediterran.jpg",
        pricePerPerson: 21.9,
    },
    {
        id: "fingerfood-deluxe",
        title: "Fingerfood Deluxe",
        description: "Kleine Häppchen, große Wirkung - perfekt für Stehempfänge und Business-Events.",
        image: "/image/fingerfood-deluxe.jpg",
        pricePerPerson: 16.0
    },
];