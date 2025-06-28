import ClientSoftwareEngineeringView from "@/components/client-view/software-engineering";
import { getData } from "@/services";

export const metadata = {
  title: "Software Engineering",
  description: "Software Engineering Page",
};

export default async function ClientSoftwareEngineeringPage() {
  const result = await getData("software-engineering");

  console.log("RESULT fetch software engineering:", result);

  if (!result || !result.data) {
    return <div>Nu am găsit datele.</div>;
  }
  return <ClientSoftwareEngineeringView data={result.data} />;
}
