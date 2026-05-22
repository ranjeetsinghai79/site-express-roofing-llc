import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Express Roofing LLC",
    tagline: "Your Roof, Our Priority. Guaranteed.",
    phone: "(480) 226-4245",
    phoneHref: "tel:+14802264245",
    email: "info@expressroofing.com",
    address: "1640 S Davis, Mesa, AZ 85210, USA",
    city: "Mesa",
    serviceAreas: ["Mesa", "Tempe", "Chandler", "Gilbert", "Scottsdale", "Phoenix"],
    license: "AZ ROC #321098",
    since: "2008",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "forest",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Roof Replacement", desc: "Expert installation of new roofing systems for lasting protection.", urgent: false },
    { icon: "shield-check", title: "Storm Damage Repair", desc: "Fast and reliable repairs for roofs damaged by severe weather.", urgent: true },
    { icon: "briefcase", title: "Insurance Claims", desc: "We assist with navigating insurance claims for a smooth repair process.", urgent: false },
    { icon: "truck", title: "Emergency Tarping", desc: "Immediate tarping services to prevent further damage after an emergency.", urgent: true },
    { icon: "droplets", title: "Gutter Installation", desc: "Professional gutter installation to protect your home's foundation.", urgent: false },
    { icon: "star", title: "Free Inspections", desc: "Comprehensive roof inspections at no cost to assess your roof's condition.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Mesa, AZ", stars: 5, text: "Express Roofing did an amazing job replacing our old, leaky roof. From the initial free inspection to the final cleanup, their team was professional, efficient, and incredibly thorough. They even helped us understand the insurance process. Our new roof looks fantastic and we feel so much safer now. Highly recommend them!" },
    { name: "David L.", location: "Chandler, AZ", stars: 5, text: "When a monsoon storm damaged our roof, Express Roofing was there within hours for emergency tarping. Their quick response saved us from further interior damage. The repair work was completed promptly and to a very high standard. They truly live up to their name!" },
    { name: "Jessica P.", location: "Gilbert, AZ", stars: 5, text: "We needed new gutters, and Express Roofing provided a competitive quote and excellent service. The crew was polite, worked cleanly, and finished the job in one day. The new gutters blend perfectly with our home's exterior and are working great. Very satisfied with the outcome." }
  ],

  trustBadges: [
    "GAF Master Elite Contractor", "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency", "BBB A+ Rated"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent calls, ensuring rapid response for your roofing needs." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, detailed estimates with no hidden fees, so you know what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI receptionist is available around the clock to assist you." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and materials for efficient service." }
  ],

  formServiceOptions: ["Roof Replacement", "Storm Damage Repair", "Insurance Claims", "Emergency Tarping", "Gutter Installation", "Free Inspections"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!