import ClientTeachingView from "@/components/client-view/teaching";
import Teaching from "@/models/Teaching";
import { getData } from "@/services";

export const metadata = {
  title: "Teaching",
  description: "Teaching Page",
};

export default async function ClientTeachingPage() {
  const result = await getData("teaching");

  console.log("RESULT fetch teaching:", result);

  if (!result || !result.data) {
    return <div>Nu am găsit datele.</div>;
  }
  return <ClientTeachingView data={result.data} />;
}
