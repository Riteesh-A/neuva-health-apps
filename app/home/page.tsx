import CommonQuestions from "@/core/components/home/CommonQuestions";
import ExpertMedicalTeam from "@/core/components/home/ExpertMedicalTeam";
import HeroCards from "@/core/components/home/HeroCards";
import HeroText from "@/core/components/home/HeroText";
import JourneyBetterHealth from "@/core/components/home/JourneyBetterHealth";
import PrivacyMatters from "@/core/components/home/PrivacyMatters";
import QualityTreatment from "@/core/components/home/QualityTreatment";
import TakeFirstStep from "@/core/components/home/TakeFirstStep";
import TrustedByMen from "@/core/components/home/TrustedByMen";
import { Separator } from "@/core/components/ui/separator";

export default async function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col pb-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto">
        <HeroText />
        <HeroCards />
      </div>
      <Separator />
      <JourneyBetterHealth className="w-full mx-auto" />
      <Separator />
      {/* <SolutionsEveryNeed /> */}
      <ExpertMedicalTeam className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <Separator />
      <QualityTreatment className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <Separator />
      <PrivacyMatters className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <Separator />
      <TrustedByMen className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <Separator />
      <CommonQuestions className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <Separator />
      <TakeFirstStep className="p-20 w-full px-4 md:px-10 mx-auto" />
    </div>
  );
}
