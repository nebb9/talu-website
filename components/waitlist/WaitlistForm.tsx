"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function WaitlistForm() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] as Locale;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl bg-white/70 border px-6 py-5 text-center">
        <p className="text-lg font-semibold mb-1">🎉 You’re on the waitlist!</p>
        <p className="text-gray-600 text-sm">
          We’ll email you as soon as Talu is ready.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className="w-full sm:max-w-sm px-5 py-4 rounded-xl border border-gray-300 text-lg"
      />

      <Button
        size="lg"
        onClick={submit}
        disabled={loading}
        className="whitespace-nowrap"
      >
        {loading ? "Joining..." : "Join the waitlist"}
      </Button>

      {error && (
        <p className="text-sm text-red-600 mt-2 sm:mt-0 sm:ml-2">{error}</p>
      )}
    </div>
  );
}
