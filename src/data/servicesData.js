/**
 * Services Data & Rate Configuration
 * 
 * ============================================================================
 * HOW TO UPDATE BUSINESS DETAILS:
 * 1. Shop Name: Update `shopName` below once verified.
 * 2. WhatsApp Number: Update `whatsappNumber` using the full international format
 *    without any plus sign, spaces, or dashes (e.g., '919876543210' for India).
 * 3. Phone & Address: Update `phoneDisplay` and `addressDisplay` accordingly.
 * 4. Rate Cards: Replace demo base rates with confirmed shop rate cards.
 * ============================================================================
 */

export const DEMO_PRICE_DISCLAIMER = 
  "Notice: Displayed prices are illustrative demonstration estimates based on standard regional rates. Contact our shop directly or click 'Request Custom Quote' for confirmed order pricing.";

export const SHOP_CONTACT_INFO = {
  shopName: "PrintCraft Studio (Placeholder)",
  phoneDisplay: "+91 98765 43210 (Placeholder Number)",
  phoneRaw: "919876543210",
  whatsappNumber: "919876543210", // REPLACE WITH REAL WHATSAPP NUMBER (Digits only, e.g., 919876543210)
  addressDisplay: "Shop No. 14, Commercial Plaza, Market Road (Placeholder Location)",
  hoursDisplay: "Monday – Saturday: 9:30 AM – 8:30 PM (Subject to Owner Confirmation)",
  emailDisplay: "orders@printcraft-placeholder.com",
};

export const SERVICES = [
  {
    id: "visiting-cards",
    title: "Visiting Cards",
    shortDesc: "Premium commercial and personal visiting cards with luxury cardstocks, matte/gloss lamination, and metallic accents.",
    category: "Stationery",
    icon: "📇",
    hasSizeInput: false,
    options: {
      cardType: [
        { id: "standard", name: "Standard (3.5\" × 2.0\")", priceMultiplier: 1.0 },
        { id: "square", name: "Square Format (2.5\" × 2.5\")", priceMultiplier: 1.15 },
        { id: "slim", name: "European Slim (3.3\" × 2.1\")", priceMultiplier: 1.1 },
      ],
      paperStock: [
        { id: "art-300", name: "300 GSM Premium Art Card", addPerUnit: 0 },
        { id: "art-350", name: "350 GSM Heavyweight Board", addPerUnit: 0.35 },
        { id: "metallic", name: "300 GSM Metallic Shimmer", addPerUnit: 0.85 },
        { id: "textured", name: "300 GSM Fine Textured Linen", addPerUnit: 1.10 },
      ],
      sides: [
        { id: "single", name: "Single-Sided Print", multiplier: 1.0 },
        { id: "double", name: "Double-Sided Print", multiplier: 1.45 },
      ],
      finish: [
        { id: "none", name: "Standard (No Lamination)", addTotal: 0 },
        { id: "matte", name: "Velvet Matte Lamination", addTotal: 80 },
        { id: "gloss", name: "High Gloss Lamination", addTotal: 70 },
        { id: "spot-uv", name: "Spot UV Gloss Accents", addTotal: 240 },
      ],
      quantities: [100, 250, 500, 1000, 2000],
      defaultQuantity: 500,
      baseRatePer100: 190, // Demo base: 190 INR per 100 cards
    },
  },
  {
    id: "flex-banners",
    title: "Flex Banners & Signboards",
    shortDesc: "Durable, high-tensile outdoor flex banners, hoardings, and event backdrops printed with weather-resistant solvent inks.",
    category: "Signage",
    icon: "📐",
    hasSizeInput: true,
    sizeConfig: {
      unit: "feet",
      minWidth: 2,
      maxWidth: 60,
      minHeight: 2,
      maxHeight: 20,
      defaultWidth: 6,
      defaultHeight: 4,
    },
    options: {
      materialGrade: [
        { id: "normal-flex", name: "Normal Flex (240 GSM)", ratePerSqFt: 18 },
        { id: "star-flex", name: "Star Flex (High Tear Resistance - 320 GSM)", ratePerSqFt: 28 },
        { id: "blackout-flex", name: "Blackout / Blockout Banner (Double Sided Capable)", ratePerSqFt: 42 },
        { id: "backlit-flex", name: "Backlit Signboard Film (For Light Boxes)", ratePerSqFt: 55 },
      ],
      finishing: [
        { id: "eyelets", name: "Brass Eyelets / Grommets on 4 corners & edges", addTotal: 40 },
        { id: "hemming", name: "Reinforced Border Hemming + Eyelets", addTotal: 80 },
        { id: "pocket", name: "Pole Pockets (Top & Bottom)", addTotal: 90 },
        { id: "raw", name: "Raw Cut Edge (No grommets)", addTotal: 0 },
      ],
      quantities: [1, 2, 3, 5, 10],
      defaultQuantity: 1,
    },
  },
  {
    id: "flyers-brochures",
    title: "Flyers, Pamphlets & Brochures",
    shortDesc: "Vibrant promotional flyers and folded brochures printed on imported gloss/matte paper for retail and corporate marketing.",
    category: "Marketing",
    icon: "📄",
    hasSizeInput: false,
    options: {
      paperSize: [
        { id: "a5", name: "A5 Size (5.8\" × 8.3\")", baseRatePer1000: 950 },
        { id: "a4", name: "A4 Size (8.3\" × 11.7\")", baseRatePer1000: 1750 },
        { id: "dl", name: "DL Envelope Size (3.9\" × 8.3\")", baseRatePer1000: 780 },
      ],
      paperWeight: [
        { id: "100-gsm", name: "100 GSM Bond Leaflet", multiplier: 0.9 },
        { id: "130-gsm", name: "130 GSM Gloss Art Paper", multiplier: 1.0 },
        { id: "170-gsm", name: "170 GSM Premium Art Paper", multiplier: 1.25 },
      ],
      sides: [
        { id: "single", name: "Single-Sided Full Color", multiplier: 1.0 },
        { id: "double", name: "Double-Sided Full Color", multiplier: 1.6 },
      ],
      foldType: [
        { id: "flat", name: "Flat Sheet (No Fold)", addTotal: 0 },
        { id: "bifold", name: "Half / Bi-Fold Crease", addTotal: 120 },
        { id: "trifold", name: "Tri-Fold / Z-Fold Crease", addTotal: 180 },
      ],
      quantities: [500, 1000, 2000, 5000],
      defaultQuantity: 1000,
    },
  },
  {
    id: "stickers-labels",
    title: "Stickers & Product Labels",
    shortDesc: "Waterproof vinyl stickers, paper packaging seals, and precision die-cut product labels for retail goods and packaging.",
    category: "Labels",
    icon: "🏷️",
    hasSizeInput: false,
    options: {
      stickerSize: [
        { id: "2x2", name: "2\" × 2\" (Round or Square)", base100: 160 },
        { id: "3x3", name: "3\" × 3\" (Round or Square)", base100: 240 },
        { id: "4x2", name: "4\" × 2\" (Rectangular Product Label)", base100: 220 },
      ],
      materialType: [
        { id: "gloss-paper", name: "Gloss Paper Sticker (Indoor)", multiplier: 1.0 },
        { id: "vinyl-waterproof", name: "Waterproof Vinyl (White)", multiplier: 1.4 },
        { id: "transparent", name: "Clear Transparent Film", multiplier: 1.6 },
      ],
      cutType: [
        { id: "sheet", name: "Kiss-Cut on A4/A3 Sheets", addTotal: 0 },
        { id: "individual", name: "Individual Die-Cut Shape", addTotal: 90 },
      ],
      quantities: [100, 250, 500, 1000, 2500],
      defaultQuantity: 500,
    },
  },
  {
    id: "office-stationery",
    title: "Office Letterheads & Stationery",
    shortDesc: "Official executive letterheads, branded envelopes, vouchers, and customized duplicate invoice bill books.",
    category: "Corporate",
    icon: "📑",
    hasSizeInput: false,
    options: {
      productType: [
        { id: "letterhead", name: "Executive Letterheads (A4)", baseRatePer500: 850 },
        { id: "envelopes", name: "Branded Envelopes (9.5\" × 4.25\")", baseRatePer500: 1100 },
        { id: "billbook", name: "Bill Books (Duplicate, 50 Sets/Book)", baseRatePer500: 1400 },
      ],
      paperGrade: [
        { id: "85-gsm", name: "85 GSM Standard Executive Bond", multiplier: 1.0 },
        { id: "100-gsm", name: "100 GSM Superfine Watermark Bond", multiplier: 1.25 },
      ],
      quantities: [250, 500, 1000, 2000],
      defaultQuantity: 500,
    },
  },
  {
    id: "custom-print",
    title: "Custom Printing & Specialized Orders",
    shortDesc: "Wedding invitations, certificates, laminated identity cards, canvas prints, and custom-dimension projects.",
    category: "Bespoke",
    icon: "✉️",
    hasSizeInput: false,
    isCustomQuoteOnly: true,
    customMessage: "Custom orders involve varied paper stocks, manual binding, foil stamping, or special sizing. Contact our shop directly to discuss proofs and receive an exact quote.",
  },
];
