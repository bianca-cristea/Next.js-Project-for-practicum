import ClientCompetitiveProgrammingView from "@/components/client-view/competitive-programming";
import { getData } from "@/services";

export default async function ClientCompetitiveProgrammingPage() {
  const result = await getData("competitive-programming");

  console.log("RESULT fetch comp-programming:", result);

  if (!result || !result.data) {
    return <div>Nu am găsit datele.</div>;
  }
  return <ClientCompetitiveProgrammingView data={result.data} />;
}
