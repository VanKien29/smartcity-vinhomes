export interface PricingByType {
  type: string;
  count: number;
  priceRange: string;
}

export const pricingByType: PricingByType[] = [
  { type: "Studio (28 - 35 m²)", count: 46, priceRange: "5.5 – 10 tr/tháng" },
  { type: "1 Phòng ngủ (43 m²)", count: 13, priceRange: "7.5 – 12 tr/tháng" },
  { type: "1 Phòng ngủ + (47 - 49 m²)", count: 43, priceRange: "7.0 – 14 tr/tháng" },
  { type: "2 Phòng ngủ (54 - 64 m²)", count: 84, priceRange: "8.0 – 17 tr/tháng" },
  { type: "2 Phòng ngủ + (64 - 70 m²)", count: 55, priceRange: "8.5 – 18.5 tr/tháng" },
  { type: "3 Phòng ngủ (75 - 98 m²)", count: 28, priceRange: "10.0 – 18 tr/tháng" },
];

export interface CategoryQuickPill {
  label: string;
  priceFrom: string;
  count: number;
}

export const categoryPills: CategoryQuickPill[] = [
  { label: "Studio", priceFrom: "Từ 5.5 tr/th", count: 46 },
  { label: "1 Phòng ngủ", priceFrom: "Từ 7.5 tr/th", count: 13 },
  { label: "1 Ngủ +", priceFrom: "Từ 7.0 tr/th", count: 43 },
  { label: "2 Phòng ngủ", priceFrom: "Từ 8.0 tr/th", count: 84 },
  { label: "2 Ngủ +", priceFrom: "Từ 8.5 tr/th", count: 55 },
  { label: "3 Phòng ngủ", priceFrom: "Từ 10.0 tr/th", count: 28 },
];
