import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Props = {
  params: {
    locale: string;
  };
};

export default function PurchaseFailedPage({ params }: Props) {
  const isSr = params.locale === "sr";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-violet-50 px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <XCircle className="h-8 w-8 text-red-600" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900">
          {isSr ? "Plaćanje nije uspelo" : "Payment failed"}
        </h1>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          {isSr
            ? "Nažalost, došlo je do problema prilikom obrade plaćanja. Molimo pokušajte ponovo ili proverite podatke za plaćanje."
            : "Something went wrong while processing your payment. Please try again or check your payment details."}
        </p>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <Link
            href="talu://purchase-failed"
            className="block text-sm text-gray-500 hover:text-gray-700"
          >
            {isSr ? "Nazad na početnu stranicu" : "Back to home"}
          </Link>
        </div>
      </div>
    </main>
  );
}
