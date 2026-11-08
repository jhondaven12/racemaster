export type Sponsor = {
    id: number;
    name: string;
    /** path under /public, e.g. "/images/sponsors/acme.png"; falls back to the name when omitted */
    logo?: string;
};

export const sponsors: Sponsor[] = [
    { id: 1, name: "Acme Outdoors" },
    { id: 2, name: "Summit Gear" },
    { id: 3, name: "TrailFuel" },
    { id: 4, name: "Highland Energy" },
    { id: 5, name: "Ridge Apparel" },
    { id: 6, name: "Peak Nutrition" },
];
