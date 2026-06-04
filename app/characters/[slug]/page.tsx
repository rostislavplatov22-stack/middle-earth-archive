import { notFound } from "next/navigation";
import { V70DetailPage } from "@/components/v70-detail-page";
import { v70Records } from "@/lib/v70-detail-data";
import { getV77CharacterDetailRecord } from "@/lib/v77-character-data";

type PageProps = { params: Promise<{ slug: string }> };

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const record = v70Records.find((item) => item.slug === slug && item.kind === "character") ?? getV77CharacterDetailRecord(slug);
  if (!record) notFound();
  return <V70DetailPage record={record} />;
}
