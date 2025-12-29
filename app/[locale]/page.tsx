import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Testimonial } from "@/components/ui/Testimonial";
import { DownloadCTA } from "@/components/ui/DownloadCTA";
import {
  Stars,
  Heart,
  BookOpen,
  Mic,
  Globe,
  Moon,
  UserCheck,
  Palette,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const faqItems = [
  {
    question: "Do I need a credit card for the trial?",
    answer: "No—try Talu free for 7 days without a credit card.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, Premium is month-to-month with no contract.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "Your stories remain in your account. Premium features are disabled.",
  },
  {
    question: "Family discounts?",
    answer: "Email support@taluapp.com for family discount information.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Bedtime stories your child will{" "}
              <span className="text-[var(--primary)]">never forget</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Simply enter your child&apos;s name and a moment from their day,
              and Talu turns it into a unique bedtime story.
            </p>

            <DownloadCTA
              variant="hero"
              buttonText="Download the App"
              className="mb-8"
            />

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-[var(--primary)] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">👶</span>
                  </div>
                  <div className="w-8 h-8 bg-[var(--accent-100)] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-[var(--accent-800)] text-xs font-bold">
                      👧
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-[var(--accent-200)] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">👦</span>
                  </div>
                </div>
                <span>Loved by 10,000+ families</span>
              </div>
            </div>
          </div>

          {/* Right Column - iPhone Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative max-w-sm mx-auto rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/hero-phone.png"
                alt="Talu bedtime story mobile preview"
                width={375}
                height={812}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bedtime deserves
            <span className="text-[var(--primary)]">
              {" "}
              more than the same old story.
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Parents want to spark imagination and closeness, but after a long
            day it&apos;s hard to invent new stories. Books are wonderful, but
            they don&apos;t reflect your child&apos;s world—their name, their
            family, their day.
          </p>
        </div>
      </Section>

      {/* How It Works */}
      <Section padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            How it works ✨
          </h2>

          <p className="text-2xl text-gray-600 text-left">
            Three simple steps to magical bedtime stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              step: "1",
              title: "Describe today",
              description:
                'Tell us about your child\'s day: "Luka went cycling with Grandpa."',
              icon: BookOpen,
              mockup: (
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl max-w-[200px] mx-auto">
                  <div className="bg-black rounded-[2rem] p-1">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
                      {/* Status Bar */}
                      <div className="bg-gray-50 px-4 py-1.5 flex justify-between items-center text-xs font-medium">
                        <span>9:41</span>
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      </div>

                      {/* App Content */}
                      <div className="p-4 bg-gradient-to-br from-[#6050d6]/5 to-[#fbeafa]/5 h-full">
                        <div className="text-center mb-4">
                          <div className="w-10 h-10 bg-[var(--primary)] rounded-xl flex items-center justify-center mx-auto mb-2">
                            <Stars className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-sm font-bold text-gray-900">
                            Create Story
                          </h3>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="text-xs text-gray-600 block mb-1">
                              Child&apos;s name
                            </label>
                            <div className="bg-white rounded-lg p-2 border border-gray-200">
                              <span className="text-xs text-gray-900">
                                Luka
                              </span>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs text-gray-600 block mb-1">
                              What happened today?
                            </label>
                            <div className="bg-white rounded-lg p-2 border border-gray-200 min-h-[40px]">
                              <span className="text-xs text-gray-900">
                                Went cycling with Grandpa in the park...
                              </span>
                            </div>
                          </div>

                          <div className="bg-[var(--primary)] rounded-lg py-2 px-3 text-center mt-4">
                            <span className="text-xs text-white font-medium">
                              Next Step
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              step: "2",
              title: "Choose a lesson",
              description:
                "Pick values like Bravery, Kindness, Gratitude, or write your own.",
              icon: Heart,
              mockup: (
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl max-w-[200px] mx-auto">
                  <div className="bg-black rounded-[2rem] p-1">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
                      {/* Status Bar */}
                      <div className="bg-gray-50 px-4 py-1.5 flex justify-between items-center text-xs font-medium">
                        <span>9:41</span>
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      </div>

                      {/* App Content */}
                      <div className="p-4 bg-gradient-to-br from-[#6050d6]/5 to-[#fbeafa]/5 h-full">
                        <div className="text-center mb-4">
                          <div className="w-10 h-10 bg-[var(--primary)] rounded-xl flex items-center justify-center mx-auto mb-2">
                            <Heart className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-sm font-bold text-gray-900">
                            Choose Lesson
                          </h3>
                        </div>

                        <div className="space-y-2">
                          <div className="bg-[var(--primary)] rounded-lg p-3 border-2 border-[var(--primary)]">
                            <div className="flex items-center">
                              <span className="text-lg mr-2">💪</span>
                              <span className="text-xs font-medium text-white">
                                Bravery
                              </span>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <div className="flex items-center">
                              <span className="text-lg mr-2">❤️</span>
                              <span className="text-xs font-medium text-gray-700">
                                Kindness
                              </span>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <div className="flex items-center">
                              <span className="text-lg mr-2">🙏</span>
                              <span className="text-xs font-medium text-gray-700">
                                Gratitude
                              </span>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <div className="flex items-center">
                              <span className="text-lg mr-2">✨</span>
                              <span className="text-xs font-medium text-gray-700">
                                Custom...
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              step: "3",
              title: "Enjoy the story",
              description: "Get a safe, magical bedtime adventure in seconds.",
              icon: Stars,
              mockup: (
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl max-w-[200px] mx-auto">
                  <div className="bg-black rounded-[2rem] p-1">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
                      {/* Status Bar */}
                      <div className="bg-gray-50 px-4 py-1.5 flex justify-between items-center text-xs font-medium">
                        <span>9:41</span>
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      </div>

                      {/* App Content */}
                      <div className="p-4 bg-gradient-to-br from-[#6050d6]/5 to-[#fbeafa]/5 h-full">
                        <div className="text-center mb-4">
                          <div className="w-10 h-10 bg-[var(--primary)] rounded-xl flex items-center justify-center mx-auto mb-2">
                            <Stars className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-sm font-bold text-gray-900">
                            Luka&apos;s Story
                          </h3>
                          <p className="text-xs text-gray-600">
                            Ready to read!
                          </p>
                        </div>

                        <div className="bg-white rounded-xl p-3 shadow-sm mb-3">
                          <div className="aspect-video bg-gradient-to-br from-[#fbeafa]/20 to-[#a3a8e8]/20 rounded-lg flex items-center justify-center mb-2">
                            <div className="text-center">
                              <span className="text-2xl">🚴‍♂️</span>
                              <div className="text-xs text-gray-600 mt-1">
                                Luka & Grandpa&apos;s
                                <br />
                                Brave Adventure
                              </div>
                            </div>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-xs mb-1">
                            The Cycling Hero
                          </h4>
                          <p className="text-xs text-gray-600">
                            A story about courage and family...
                          </p>
                        </div>

                        <div className="flex space-x-2">
                          <div className="flex-1 bg-[var(--primary)] rounded-lg py-2 px-3 text-center">
                            <Mic className="h-3 w-3 text-white mx-auto mb-1" />
                            <span className="text-xs text-white font-medium">
                              Listen
                            </span>
                          </div>
                          <div className="flex-1 bg-white border border-gray-200 rounded-lg py-2 px-3 text-center">
                            <BookOpen className="h-3 w-3 text-gray-600 mx-auto mb-1" />
                            <span className="text-xs text-gray-600 font-medium">
                              Read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              {/* iPhone Mockup */}
              <div className="mb-6 p-2 bg-[#fff6ed] rounded-lg">
                {item.mockup}
              </div>

              {/* Step Info */}
              <div className="max-w-xs mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="gray" padding="lg">
        <div className="text-center max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Talu transforms everyday moments into bedtime magic.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Instead of the same old bedtime routine, Talu gives parents a simple
            way to turn daily memories into meaningful stories. Whether it’s a
            bike ride with Grandpa or a funny moment at school, Talu makes your
            child the star of their own adventure.
          </p>
          <div className="space-y-6 flex flex-col">
            {[
              "🌙 Strengthen the bond between parent and child",
              "📖 Encourage imagination and curiosity",
              "💡 Teach life lessons like kindness, bravery, and gratitude",
              "💤 Create a calming bedtime ritual your child will look forward to",
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <p className="text-xl text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      {/* <Section background="gray" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Talu transforms everyday moments into bedtime magic.
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">Instead of the same old bedtime routine, Talu gives parents a simple way to turn daily memories into meaningful stories. Whether it’s a bike ride with Grandpa or a funny moment at school, Talu makes your child the star of their own adventure.</p>
            
            <div className="space-y-6">
              {[
                "🌙 Strengthen the bond between parent and child",
                "📖 Encourage imagination and curiosity", 
                "💡 Teach life lessons like kindness, bravery, and gratitude",
                "💤 Create a calming bedtime ritual your child will look forward to"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8">
              <div className="aspect-square bg-gradient-to-br from-[#6050d6]/10 to-[#fbeafa]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-20 w-20 text-[var(--primary)] mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Story Creation Preview</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section> */}

      {/* Features */}
      <Section background="stars" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need for magical bedtime
          </h2>
          <p className="text-xl text-gray-600">
            Features designed with families in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: UserCheck,
              title: "Personalized Stories",
              description:
                "Tailored to your child's name, family, and daily adventures.",
            },
            {
              icon: Palette,
              title: "Whimsical Illustrations",
              description: "Beautiful images that bring each story to life.",
            },
            {
              icon: Mic,
              title: "Voice Narration",
              description:
                "Relax with soothing AI narration for hands-free bedtime.",
            },
            {
              icon: Heart,
              title: "Moral Packs",
              description:
                "Choose lessons like Kindness, Bravery, Honesty, Gratitude.",
            },
            {
              icon: Globe,
              title: "Multilingual",
              description:
                "English, Spanish, German, French, Serbian, and more.",
            },
            {
              icon: Moon,
              title: "Bedtime Mode",
              description:
                "Every story ends gently, perfect for peaceful sleep.",
            },
          ].map((feature, index) => (
            <Card key={index} className="p-6" hover>
              <feature.icon className="h-10 w-10 text-[var(--primary)] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parents love Talu
          </h2>
          <p className="text-xl text-gray-600">See what families are saying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Testimonial
            quote="My son asks for his Talu story every night — and the best part is, it's always about him!"
            author="Milena"
            role="Mom of 2"
          />
          <Testimonial
            quote="Talu makes bedtime fun and calming. I love that the stories teach kindness and bravery."
            author="David"
            role="Dad of Emma"
          />
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, affordable plans for families
          </h2>
          <p className="text-xl text-gray-600">
            Start free and unlock more magic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
            <div className="text-4xl font-bold text-[var(--primary)] mb-4">
              $0<span className="text-lg text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                1 story per day (text only)
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Ads included
              </li>
            </ul>
            <Button variant="ghost" className="w-full">
              Get Started Free
            </Button>
          </Card>

          <Card className="p-8 ring-2 ring-[var(--primary)]">
            <div className="text-center mb-4">
              <span className="bg-[var(--accent-50)] text-[var(--accent-800)] px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
            <div className="text-4xl font-bold text-[var(--primary)] mb-4">
              $4.99<span className="text-lg text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Unlimited stories with illustrations
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                No ads
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Voice narration
              </li>
            </ul>
            <Button className="w-full">Upgrade to Premium</Button>
          </Card>
        </div>

        <div className="mb-8">
          <DownloadCTA
            buttonText="Get Talu on iOS & Android"
            showButton={true}
          />
        </div>

        <div className="text-center">
          <Button variant="ghost" href="/pricing">
            See Full Pricing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Talu
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="gradient" padding="xl" id="download">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Make bedtime the best part of the day.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your child&apos;s world, told through magical stories.
          </p>
          <DownloadCTA variant="closing" buttonText="Download Talu Now" />
        </div>
      </Section>

      <Footer />
    </>
  );
}
