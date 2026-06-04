import { redirect } from "next/navigation";

export default function CharactersIndexPage() {
  redirect("/catalog?type=characters");
}
