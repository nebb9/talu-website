import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { PricingCard } from '@/components/ui/PricingCard';
import { FAQ } from '@/components/ui/FAQ';
import { Card } from '@/components/ui/Card';
import { DownloadCTA } from '@/components/ui/DownloadCTA';

const faqItems = [
  {
    question: "Do I need a credit card for the trial?",
    answer: "No—try Talu free for 7 days without a credit card. Start creating magical stories immediately."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, Premium is month-to-month with no contract. Cancel anytime from your account settings."
  },
  {
    question: "What happens if I cancel?",
    answer: "Your stories remain in your account forever. Premium features like illustrations and voice narration are disabled, but you can still read your existing stories."
  },
  {
    question: "Do you offer family discounts?",
    answer: "Yes! Contact us at support@taluapp.com for family plans and multi-child discounts."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely."
  },
  {
    question: "Is there a free version?",
    answer: "Yes! Our free plan includes 1 story per day (text only) with basic lesson packs. Perfect to try Talu before upgrading."
  }
];

export default function PricingPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Affordable Plans for Families
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Start free and unlock magical bedtime adventures with your child.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <PricingCard
            title="Free"
            price="$0"
            period="/month"
            description="Perfect for trying Talu"
            features={[
              "1 story per day (text only)",
              "Ads included",
              "Basic lesson packs",
              "Community support"
            ]}
            ctaText="Get Started Free"
            ctaVariant="ghost"
          />

          <PricingCard
            title="Premium"
            price="$5"
            period="/month"
            description="Full magical experience"
            features={[
              "Unlimited stories with illustrations",
              "Ad-free experience",
              "Voice narration",
              "Full lesson pack library",
              "Priority support",
              "Early access to new features"
            ]}
            ctaText="Upgrade to Premium"
            ctaVariant="primary"
            featured={true}
            badge="Most Popular"
          />
        </div>

      </Section>

      {/* Feature Comparison */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compare Plans
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Premium</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Lifetime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Stories per day", free: "1", premium: "Unlimited", lifetime: "Unlimited" },
                    { feature: "Illustrations", free: "✗", premium: "✓", lifetime: "✓" },
                    { feature: "Voice narration", free: "✗", premium: "✓", lifetime: "✓" },
                    { feature: "Ad-free experience", free: "✗", premium: "✓", lifetime: "✓" },
                    { feature: "Full lesson library", free: "Basic", premium: "✓", lifetime: "✓" },
                    { feature: "Priority support", free: "✗", premium: "✓", lifetime: "✓" }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.free}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.premium}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.lifetime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing Questions?
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about our plans</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="gradient" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose a plan and start your first story tonight.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of families creating magical bedtime memories with Talu.
          </p>
          <DownloadCTA 
            variant="closing"
            buttonText="Download Talu Now"
          />
        </div>
      </Section>

      <Footer />
    </>
  );
}