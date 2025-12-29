import { getCountry } from "@/lib/getCountry";
import { getSuggestedLocale } from "@/lib/languageSuggestion";
import LanguageSuggestionClient from "./LanguageSuggestion.client";

export default function LanguageSuggestionServer({
  currentLocale,
}: {
  currentLocale: "en" | "sr";
}) {
  const country = getCountry();
  const suggested = getSuggestedLocale(country);

  if (!suggested || suggested === currentLocale) {
    return null;
  }

  return (
    <LanguageSuggestionClient
      suggestedLocale={suggested}
      currentLocale={currentLocale}
    />
  );
}
