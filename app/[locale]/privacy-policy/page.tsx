import { dictionaries, Locale } from "@/lib/i18n/index";

export default function PrivacyPolicyPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = dictionaries[params.locale].privacy;

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold mb-2">{dict.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{dict.updated}</p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>{dict.intro}</p>

        <section>
          <h2 className="text-xl font-semibold mb-2">{dict.dataTitle}</h2>
          <p>{dict.dataText}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{dict.usageTitle}</h2>
          <p>{dict.usageText}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{dict.sharingTitle}</h2>
          <p>{dict.sharingText}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{dict.rightsTitle}</h2>
          <p>{dict.rightsText}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{dict.contactTitle}</h2>
          <p>{dict.contactText}</p>
        </section>
      </div>
    </main>
  );
}
