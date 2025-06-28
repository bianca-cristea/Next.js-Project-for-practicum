import ClientEducationView from "@/components/client-view/education";
import { getData } from "@/services";

export default async function ClientEducationPage() {
  const result = await getData("education");

  console.log("RESULT fetch education:", result);

  if (!result || !result.data) {
    return <div>Nu am găsit datele.</div>;
  }
  return <ClientEducationView data={result.data} />;
}
