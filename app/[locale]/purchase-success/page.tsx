import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Purchase Successful | Talu",
  description:
    "Your Talu subscription is active. Tap the button below to open the app and start reading.",
  robots: {
    index: false,
    follow: false,
  },
};

const copy = {
  en: {
    title: "Purchase successful",
    body: "Thanks for subscribing to Talu Premium. Tap below to open the app and start exploring your stories.",
    button: "Open Talu",
  },
  sr: {
    title: "Uspešna kupovina",
    body: "Hvala što ste se pretplatili na Talu Premium. Dodirnite dole da otvorite aplikaciju i počnete da istražujete priče.",
    button: "Otvori Talu",
  },
  de: {
    title: "Kauf erfolgreich",
    body: "Danke für dein Talu Premium-Abo. Tippe unten, um die App zu öffnen und deine Geschichten zu entdecken.",
    button: "Talu öffnen",
  },
};

type CopyKey = keyof typeof copy;

export default function PurchaseSuccessPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const lang = searchParams?.lang?.toLowerCase() as CopyKey | undefined;
  const t = (lang && copy[lang]) || copy.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[var(--primary-50)] via-[var(--primary-100)] to-[var(--accent-50)] flex items-center">
      <div className="w-full max-w-md mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1 className="text-3xl font-semibold text-gray-900 mb-3">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{t.body}</p>

        <Button
          href="https://talustories.com/home"
          size="lg"
          className="w-full"
        >
          {t.button}
        </Button>
      </div>
    </main>
  );
}
