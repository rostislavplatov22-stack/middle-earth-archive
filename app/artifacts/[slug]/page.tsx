import { notFound } from "next/navigation";
import { V70DetailPage } from "@/components/v70-detail-page";
import { v70Records } from "@/lib/v70-detail-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const record = v70Records.find((item) => item.slug === slug && item.kind === "artifact");

  if (!record) notFound();

  return <V70DetailPage record={record} />;
}
