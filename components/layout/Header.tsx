"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const pathname = usePathname();

  // Detect current locale from URL
  const currentLocale = pathname.split("/")[1] as Locale;

  // Build URL for another locale
  const getLocalizedPath = (locale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-200">
              <Image
                src="/logo.svg"
                alt="Talu logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-[var(--primary)]">
              Talu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${currentLocale}`}
              className="text-gray-700 hover:text-[var(--primary)] font-medium"
            >
              Home
            </Link>
            <Link
              href={`/${currentLocale}/pricing`}
              className="text-gray-700 hover:text-[var(--primary)] font-medium"
            >
              Pricing
            </Link>

            {/* 🌍 Language switcher (desktop) */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-[var(--primary)] font-medium"
              >
                {currentLocale.toUpperCase()}
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg overflow-hidden">
                  {locales.map((locale) => (
                    <Link
                      key={locale}
                      href={getLocalizedPath(locale)}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                        locale === currentLocale
                          ? "font-semibold text-[var(--primary)]"
                          : "text-gray-700"
                      }`}
                      onClick={() => setIsLangOpen(false)}
                    >
                      {locale === "en" ? "English" : "Srpski"}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              href="#download"
              size="md"
              className="bg-[var(--primary)] hover:bg-[var(--primary-strong)] text-white"
            >
              Download the App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="py-4 space-y-4">
              <Link
                href={`/${currentLocale}`}
                className="block px-4 py-2 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href={`/${currentLocale}/pricing`}
                className="block px-4 py-2 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* 🌍 Language switcher (mobile) */}
              <div className="px-4 pt-2 border-t">
                {locales.map((locale) => (
                  <Link
                    key={locale}
                    href={getLocalizedPath(locale)}
                    className={`block py-2 ${
                      locale === currentLocale
                        ? "font-semibold text-[var(--primary)]"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {locale === "en" ? "English" : "Srpski"}
                  </Link>
                ))}
              </div>

              <div className="px-4">
                <Button
                  href="#download"
                  className="w-full bg-[var(--primary)] hover:bg-[var(--primary-strong)] text-white"
                  size="md"
                >
                  Download the App
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
