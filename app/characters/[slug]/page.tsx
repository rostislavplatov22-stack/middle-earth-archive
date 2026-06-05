import { notFound } from "next/navigation";
import V85CharacterDossierPage from "@/components/v85-character-dossier-page";
import { getAllV85CharacterSlugs, getV85CharacterDossier } from "@/lib/v85-character-dossiers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllV85CharacterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const entry = getV85CharacterDossier(slug);

  if (!entry) {
    return {
      title: "Character Dossier",
    };
  }

  return {
    title: `${entry.name} — Character Dossier`,
    description: entry.summary,
  };
}

export default async function CharacterPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getV85CharacterDossier(slug);

  if (!entry) {
    notFound();
  }

  return <V85CharacterDossierPage slug={slug} />;
}
