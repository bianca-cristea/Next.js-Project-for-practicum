import ClientCompetitiveProgrammingView from "@/components/client-view/competitive-programming";
import { getData } from "@/services";

export const metadata = {
  title: "Competitive Programming",
  description: "Competitive Programming page",
};

export default async function ClientCompetitiveProgrammingPage() {
  const result = await getData("competitive-programming");

  console.log("RESULT fetch competitive-programming:", result);

  if (!result || !result.data) {
    return <div>Nu am găsit datele.</div>;
  }

  return <ClientCompetitiveProgrammingView data={result.data} />;
}
