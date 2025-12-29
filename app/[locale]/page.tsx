import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Testimonial } from "@/components/ui/Testimonial";
import {
  Stars,
  Heart,
  BookOpen,
  Moon,
  UserCheck,
  Palette,
  Mic,
} from "lucide-react";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

const faqItems = [
  {
    question: "What ages are these bedtime stories for kids?",
    answer:
      "Talu is designed for children ages 3–8, when bedtime stories play an important role in calming down before sleep.",
  },
  {
    question: "When will Talu be available?",
    answer:
      "We’re launching soon on iOS and Android. Join the waitlist to get early access.",
  },
  {
    question: "Do parents read the bedtime stories?",
    answer:
      "Yes. Talu is designed to support parent–child bonding at bedtime. Voice narration will also be available later.",
  },
  {
    question: "Is Talu free?",
    answer:
      "Early users on the waitlist will receive special launch access and pricing.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO — Focus keyword */}
      <Section background="gradient" padding="xl" className="pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Bedtime stories for kids
              <br />
              <span className="text-[var(--primary)]">made personal</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Talu creates bedtime stories for kids using your child’s name and
              moments from their day - helping children relax and fall asleep
              naturally.
            </p>

            {/* WAITLIST CTA */}
            <div className="mb-6">
              <WaitlistForm />
            </div>

            <p className="text-sm text-gray-500">
              Launching soon on iOS & Android · Early access for waitlist
              members
            </p>
          </div>

          {/* Visual */}
          <div className="relative lg:pl-8">
            <div className="relative max-w-sm mx-auto">
              <Image
                src="/hero-phone-3.png"
                alt="Bedtime stories for kids app preview"
                width={375}
                height={812}
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* INTRO PARAGRAPH — SEO */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Finding the right bedtime stories for kids can be difficult —
            especially stories that help children calm down before sleep. Talu
            offers a new approach to bedtime stories for kids by turning real
            moments from your child’s day into gentle, personalized stories that
            feel familiar and comforting.
          </p>
        </div>
      </Section>

      {/* WHY IT MATTERS */}
      <Section padding="lg">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why bedtime stories for kids matter before sleep
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Bedtime stories for kids are more than entertainment. They help
            children slow down, feel safe, and transition into sleep. Stories
            that feel personal can make bedtime calmer and something children
            look forward to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "🌙 Help children relax naturally before sleep",
              "💜 Strengthen parent–child connection",
              "📖 Encourage imagination and emotional safety",
              "💤 Create a predictable, calming bedtime routine",
            ].map((item, i) => (
              <p key={i} className="text-lg text-gray-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Talu creates bedtime stories for kids
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps before sleep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: BookOpen,
              title: "Share a moment",
              text: "Tell Talu about your child’s day in one or two sentences.",
            },
            {
              icon: Heart,
              title: "Choose a value",
              text: "Pick a gentle theme like kindness, bravery, or gratitude.",
            },
            {
              icon: Stars,
              title: "Read together",
              text: "Enjoy a calm bedtime story created just for your child.",
            },
          ].map((step, i) => (
            <Card key={i} className="p-8 text-center">
              <step.icon className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FEATURES (REFRAMED, LESS SALESY) */}
      <Section background="stars" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Designed for calm, meaningful bedtime stories for kids
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: UserCheck,
              title: "Personalized",
              description:
                "Every bedtime story includes your child’s name and experiences.",
            },
            {
              icon: Moon,
              title: "Sleep-friendly",
              description:
                "Stories are gentle, slow, and designed to help kids wind down.",
            },
            {
              icon: Mic,
              title: "Parent-first",
              description:
                "Encourages reading together instead of passive screen time.",
            },
          ].map((feature, i) => (
            <Card key={i} className="p-6">
              <feature.icon className="h-10 w-10 text-[var(--primary)] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parents love the idea of Talu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Testimonial
            quote="My child asks for a story about their own day every night. It makes bedtime calm again."
            author="Milena"
            role="Mom of 2"
          />
          <Testimonial
            quote="Finally, bedtime stories for kids that feel personal and not repetitive."
            author="David"
            role="Dad"
          />
        </div>
      </Section>

      {/* WAITLIST CTA */}
      <Section background="gradient" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Be the first to try a new kind of bedtime stories for kids
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the waitlist to get early access when Talu launches.
          </p>

          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bedtime stories for kids — FAQs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </Section>

      <Footer />
    </>
  );
}
