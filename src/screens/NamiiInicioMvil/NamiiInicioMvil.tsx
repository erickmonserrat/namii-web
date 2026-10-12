import {
  ChildcareExperienceSection,
  ContactCallToActionSection,
  GettingStartedGuideSection,
  WelcomeHeroSection,
} from "../NamiiInicio/NamiiInicio";
import { CareApproachSection } from "./sections/CareApproachSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
export const NamiiInicioMvil = (): JSX.Element => {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-start relative bg-white"
      data-model-id="509:2951"
    >
      <WelcomeHeroSection />
      <CareApproachSection />
      <ChildcareExperienceSection />
      <GettingStartedGuideSection />
      <FrequentlyAskedQuestionsSection />
      <ContactCallToActionSection />
    </main>
  );
};
