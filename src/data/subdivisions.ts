export interface Subdivision {
  id: string;
  name: string;
  count: number;
  priceRange: string;
}

export const subdivisions: Subdivision[] = [
  { id: "sapphire", name: "The Sapphire (S1, S2, S3, S4)", count: 54, priceRange: "5.8 – 18 tr/tháng" },
  { id: "masteri", name: "Masteri West Heights", count: 56, priceRange: "7.5 – 18.5 tr/tháng" },
  { id: "lumiere", name: "Lumière Evergreen", count: 41, priceRange: "8.0 – 18 tr/tháng" },
  { id: "miami", name: "The Miami (Grand Sapphire)", count: 30, priceRange: "5.5 – 18 tr/tháng" },
  { id: "sakura", name: "The Sakura (Chuẩn Nhật)", count: 27, priceRange: "6.0 – 15 tr/tháng" },
  { id: "imperia", name: "Imperia Smart City", count: 24, priceRange: "7.5 – 17.5 tr/tháng" },
  { id: "canopy", name: "The Canopy Residences", count: 22, priceRange: "6.0 – 14 tr/tháng" },
  { id: "tonkin", name: "The Tonkin (Indochine)", count: 15, priceRange: "8.0 – 14 tr/tháng" },
];
