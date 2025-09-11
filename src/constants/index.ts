import {
  CheckCircle,
  Clock,
  CreditCard,
  MapPin,
  ShieldCheck,
  UserMinus,
  Users,
} from "lucide-react";

export const whyChooseUs = [
  {
    title: "Trusted & Reliable",
    description:
      "We always provide secure and dependable services you can count on.",
    icon: ShieldCheck,
    bg: "bg-[#FBB563]/20",
  },
  {
    title: "Customer First",
    description:
      "Your needs come first — we focus on delivering the best possible experience.",
    icon: Users,
    bg: "bg-[#29CEF6]/20",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you anytime.",
    icon: Clock,
    mxAuto: true,
    bg: "bg-[#E94444]/20",
  },
];

export const features = [
  {
    title: "Find Best Priced Tours",
    desc: "Pick a tour package at the lowest possible price — we scout, compare and serve competitive deals so you get maximum value.",
    icon: CheckCircle,
  },
  {
    title: "Advanced Filtering & Search",
    desc: "Filter tours by country and search by location name or tour place name to quickly find what suits you.",
    icon: MapPin,
  },
  {
    title: "Secure Payments",
    desc: "Buy tours securely using SSLCommerz or Stripe — both trusted payment gateways supporting multiple payment methods.",
    icon: CreditCard,
  },
  {
    title: "Personal Dashboard",
    desc: "A dedicated dashboard to view and manage your bookings, update profile, and select tour guides.",
    icon: Users,
  },
  {
    title: "Manage & Cancel Easily",
    desc: "If a tour status is pending you can cancel anytime from dashboard. Manage your bookings with a single click.",
    icon: UserMinus,
  },
  {
    title: "30-Day Money-Back Guarantee",
    desc: "We offer a 30 days money-back guarantee — if you're unsatisfied, get a refund within the policy window.",
    icon: ShieldCheck,
  },
];

export const steps = [
  {
    title: "Discover Tours",
    desc: "Browse tours by country, search by location and compare packages.",
  },
  {
    title: "Choose & Book",
    desc: "Select your preferred package, choose guide (optional) and proceed to payment.",
  },
  {
    title: "Manage in Dashboard",
    desc: "Track bookings, cancel pending tours, and update your profile anytime.",
  },
  {
    title: "Travel & Review",
    desc: "Enjoy your trip — leave a review to help others pick the best tours.",
  },
];

export const faqs = [
  {
    q: "Which payment methods do you support?",
    a: "We support SSLCommerz and Stripe. Both gateways accept cards, mobile banking (regional) and other popular methods depending on availability.",
  },
  {
    q: "How does the 30-day money back guarantee work?",
    a: "If you cancel an eligible booking within 30 days and it meets guarantee terms (e.g., not already started or non-refundable vendor policy), we process a refund following our refund workflow.",
  },
  {
    q: "Can I change the selected tour guide after booking?",
    a: "Yes — depending on guide availability you can change or request a different guide via your dashboard or by contacting support.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We follow modern security practices; payments are handled by secure gateways and personal data is stored with encryption.",
  },
];

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
  GUIDE = "GUIDE",
}
