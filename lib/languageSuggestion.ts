export function getSuggestedLocale(country: string | null) {
  if (!country) return null;

  const srCountries = ["RS", "BA", "ME"];

  if (srCountries.includes(country)) {
    return "sr";
  }

  return "en";
}