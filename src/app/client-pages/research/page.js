import ClientResearchView from "@/components/client-view/research";
import { getData } from "@/services";

export const metadata = {
  title: "Research",
  description: "Research page",
};

export default async function ClientResearchPage() {
  const result = await getData("research");

  console.log("RESULT fetch research:", result);

  if (!result || !result.data) {
    return <div>Nu am găsit datele.</div>;
  }

  return <ClientResearchView data={result.data} />;
}
