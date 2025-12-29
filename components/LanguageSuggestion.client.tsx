"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LanguageSuggestionClient({
  suggestedLocale,
  currentLocale,
}: {
  suggestedLocale: "en" | "sr";
  currentLocale: "en" | "sr";
}) {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 bg-white shadow-lg rounded-xl p-4 z-50">
      <p className="text-sm mb-3">
        We noticed you’re visiting from your region. Would you like to switch to{" "}
        <strong>{suggestedLocale.toUpperCase()}</strong>?
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => router.push(`/${suggestedLocale}`)}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Yes
        </button>
        <button
          onClick={() => setVisible(false)}
          className="px-4 py-2 text-gray-600"
        >
          No
        </button>
      </div>
    </div>
  );
}
