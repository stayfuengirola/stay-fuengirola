import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = [
  "src/config/excursionsGuide.ts",
  "src/config/shoppingGuide.ts",
  "src/config/supermarketGuide.ts",
  "src/components/ExcursionPlanner.tsx",
  "src/components/ShoppingStoreDirectory.tsx",
  "src/components/SupermarketGuideTools.tsx"
];

const forbidden = [
  { locale: "fi", phrases: ["A good half-day option", "Ideal for combining", "Works as a relaxed", "See details", "Half day", "Full day", "Type of plan", "Children"] },
  { locale: "sv", phrases: ["A good half-day option", "Ideal for combining", "Works as a relaxed", "See details", "Half day", "Full day", "Type of plan", "Children", "Peruslista", "Takaisin oppaaseen", "Käytännöllisin", "Mistä ostaa"] },
  { locale: "no", phrases: ["A good half-day option", "Ideal for combining", "Works as a relaxed", "See details", "Half day", "Full day", "Type of plan", "Children", "Peruslista"] },
  { locale: "es", phrases: ["See details", "Half day", "Full day", "Type of plan", "Children"] },
  { locale: "en", phrases: ["Ver detalles", "Medio día", "Día completo", "Niños", "Compras"] }
];

const dangerousPatterns = [
  "const fi = translate(en",
  "const sv = translate(en",
  "const no = translate(en",
  "...shoppingGuideContent.en",
  "...shoppingGuideContent.fi",
  "...shoppingGuideContent.sv"
];

let failed = false;

for (const file of files) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) continue;
  const text = fs.readFileSync(fullPath, "utf8");

  for (const pattern of dangerousPatterns) {
    if (text.includes(pattern) && !text.includes("applyExcursionLocale") && !text.includes("applyShoppingLocale")) {
      fail(`${file}: dangerous visible fallback pattern found: ${pattern}`);
    }
  }

  for (const { locale, phrases } of forbidden) {
    const localeBlock = extractLocaleBlock(text, locale);
    if (!localeBlock) continue;
    for (const phrase of phrases) {
      if (localeBlock.includes(phrase)) {
        fail(`${file}: forbidden phrase for ${locale}: ${phrase}`);
      }
    }
  }

  const emptyStringMatches = [...text.matchAll(/:\s*["'`]["'`]/g)];
  for (const match of emptyStringMatches) {
    fail(`${file}: empty translation-like string near index ${match.index}`);
  }
}

if (failed) process.exit(1);
console.log("Translation checks passed.");

function extractLocaleBlock(text, locale) {
  const markers = [
    `const ${locale} =`,
    `shoppingGuideContent.${locale} =`,
    `${locale}: {`
  ];
  const start = markers.map((marker) => text.indexOf(marker)).find((index) => index >= 0);
  if (start === undefined) return "";
  const nextStarts = ["const es =", "const en =", "const fi =", "const sv =", "const no =", "shoppingGuideContent.en =", "shoppingGuideContent.fi =", "shoppingGuideContent.sv =", "shoppingGuideContent.no =", "export const"]
    .map((marker) => text.indexOf(marker, start + 1))
    .filter((index) => index > start);
  const end = nextStarts.length ? Math.min(...nextStarts) : text.length;
  return text.slice(start, end);
}

function fail(message) {
  failed = true;
  console.error(`Missing translation guard: ${message}`);
}
