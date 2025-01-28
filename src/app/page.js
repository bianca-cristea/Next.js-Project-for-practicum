import ClientCompetitiveProgrammingView from "@/components/client-view/competitive-programming";
import ClientEducationView from "@/components/client-view/education";
import ClientHomeView from "@/components/client-view/home";
import ClientPassionsView from "@/components/client-view/passions";
import ClientResearchView from "@/components/client-view/research";
import ClientSoftwareEngineeringView from "@/components/client-view/software-engineering";
import ClientTeachingView from "@/components/client-view/teaching";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ClientHomeView />
      <ClientSoftwareEngineeringView />
      <ClientEducationView />
      <ClientResearchView />
      <ClientTeachingView />
      <ClientCompetitiveProgrammingView />
      <ClientPassionsView />
    </div>
  );
}
