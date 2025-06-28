import ClientPassionsView from "@/components/client-view/passions";
import { getData } from "@/services";

export const metadata = {
  title: "Passions",
  description: "Passions Page",
};

export default async function ClientPassionsPage() {
  const result = await getData("passions");

  console.log("RESULT fetch passions:", result);

  if (!result || !result.data) {
    return <div>Nu am găsit datele.</div>;
  }
  return <ClientPassionsView data={result.data} />;
}
