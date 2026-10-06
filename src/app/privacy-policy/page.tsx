import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getLegalPage } from "@/lib/content";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { LegalContent } from "@/components/sections/legal-content";

const page = getLegalPage("privacy-policy");

export const metadata = buildMetadata({
  title: page?.title ?? "Privacy Policy",
  description: page?.description,
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  if (!page) notFound();
  return (
    <>
      <PageHeader title={page.title} trail={[{ name: page.title, path: "/privacy-policy/" }]} />
      <Section>
        <LegalContent page={page} />
      </Section>
    </>
  );
}
