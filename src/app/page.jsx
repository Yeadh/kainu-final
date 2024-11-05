import Bookapp from "@/components/Bookapp";
import Collective from "@/components/Collective";
import EarningOpportunity from "@/components/EarningOpportunity";
import Faq from "@/components/Faq";
import GamingPlatform from "@/components/GamingPlatform";
import Multichain from "@/components/Multichain";
import Started from "@/components/Started";
import Statistics from "@/components/Statistics";
import SuperCharged from "@/components/SuperCharged";
import Banner from "@/components/banner/Banner";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import Features from "@/components/features/Features";
import JoinParty from "@/components/join/JoinParty";
import JoinGame from "@/components/joinGame/JoinGame";
import ProjectConcept from "@/components/projectConcept/ProjectConcept";
import CardContainer from "@/components/secondSection/CardContainer";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main>
      {/* <div className="max-page-screen"> */}
      <Banner />
      <CardContainer />
      {/* </div> */}
      <SuperCharged />
      <div className="bg-[url('/assets/images/3-sec-bg.png')] bg-cover bg-no-repeat">
        <Features />
        <EarningOpportunity />
        <Bookapp />
      </div>
      <Multichain />
      <Collective />
      <div className="bg-[url('/assets/images/bg-img.webp')] bg-cover bg-no-repeat">
        <GamingPlatform />
        <ProjectConcept />
        {/* <Started /> */}
        <JoinParty />
      </div>
      <Team />
      {/* <Faq /> */}
      <DashboardPreview />
      <JoinGame />
      <Statistics />
      {/* </div> */}
    </main>
  );
}
