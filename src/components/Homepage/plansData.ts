export interface PlanFeature {
  text: string;
  available: boolean;
}

export interface Plan {
  tag?: string;
  title: string;
  price: string;
  period: string;
  highlight: boolean;
  features: PlanFeature[];
}

export const plans: Plan[] = [
  {
    tag: "Special Offer Price ",
    title: "Offer Plan",
    price: "Rs. 499",
    period: "Annum",
    highlight: false,
    features: [
      { text: "Max Products: 199", available: true },
      { text: "Duration: Annum (365 days)", available: true },
      { text: "Today's Special: Not Available", available: false },
      { text: "Campaign: Not Available", available: false },
      { text: "Event: Not Available", available: false },
      { text: "Ncard Profile: Not Available", available: false },
    ],
  },
  {
    tag: "New Year Offer",
    title: "Premium Plan",
    price: "Rs. 2082",
    period: "First Year",
    highlight: false,
    features: [
      { text: "Max Products: 500", available: true },
      { text: "Duration: 365 days", available: true },
      { text: "Today's Special: Available", available: true },
      { text: "Campaign: Available", available: true },
      { text: "Event: Available", available: true },
      { text: "Ncard Profile: Available", available: true },
    ],
  },
  {
    tag: "MOST POPULAR",
    title: "Basic",
    price: "Rs. 1999",
    period: "Annum",
    highlight: true,
    features: [
      { text: "Max Products: 500", available: true },
      { text: "Duration: 365 days", available: true },
      { text: "Today's Special: Available", available: true },
      { text: "Campaign: Available", available: true },
      { text: "Event: Not Available", available: false },
      { text: "Ncard Profile: Not Available", available: false },
    ],
  },
  {
    tag: "Best Value",
    title: "Premium",
    price: "Rs. 2999",
    period: "Annum",
    highlight: false,
    features: [
      { text: "Max Products: 1000", available: true },
      { text: "Duration: 365 days", available: true },
      { text: "Today's Special: Available", available: true },
      { text: "Campaign: Available", available: true },
      { text: "Event: Available", available: true },
      { text: "Ncard Profile: Available", available: true },
    ],
  },
];
