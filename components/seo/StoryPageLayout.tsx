import React from "react";

type StoryPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function StoryPageLayout({
  title,
  children,
}: StoryPageLayoutProps) {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>

        <div className="prose prose-gray max-w-none prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-xl">
          {children}
        </div>
      </article>
    </main>
  );
}
