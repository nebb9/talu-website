import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

const SITE_URL = "https://taluapp.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const isSR = params.locale === "sr";

  return {
    title: isSR
      ? "Talu – Priče za decu koje se pamte"
      : "Talu - Bedtime Stories Your Child Will Never Forget",

    description: isSR
      ? "Unesite ime svog deteta i trenutak iz njegovog dana, a Talu ga pretvara u jedinstvenu priču za laku noć."
      : "Simply enter your child's name and a moment from their day, and Talu turns it into a unique bedtime story.",

    alternates: {
      canonical: `${SITE_URL}/${params.locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        sr: `${SITE_URL}/sr`,
        "x-default": `${SITE_URL}/${defaultLocale}`,
      },
    },

    openGraph: {
      locale: isSR ? "sr_RS" : "en_US",
      siteName: "Talu",
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
