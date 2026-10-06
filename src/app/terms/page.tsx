import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getLegalPage } from "@/lib/content";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { LegalContent } from "@/components/sections/legal-content";

const page = getLegalPage("terms");

export const metadata = buildMetadata({
  title: page?.title ?? "Terms and Conditions",
  description: page?.description,
  path: "/terms/",
});

export default function TermsPage() {
  if (!page) notFound();
  return (
    <>
      <PageHeader title={page.title} trail={[{ name: page.title, path: "/terms/" }]} />
      <Section>
        <LegalContent page={page} />
      </Section>
    </>
  );
}
