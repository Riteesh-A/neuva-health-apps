import CommonQuestions from "@/core/components/home/CommonQuestions";
import MeetTheExpert from "@/core/components/home/meet-the-expert";
import { SlugHeader } from "@/core/components/home/slug-header";
import TimelineComponent from "@/core/components/product/timeline";
import { Separator } from "@/core/components/ui/separator";

interface HomeSlugLayoutProps {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

export default async function HomeSlugLayout({
  params,
  children,
}: HomeSlugLayoutProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col overflow-x-hidden">
      <SlugHeader slug={slug} />
      {children}

      {/* Only show additional components for 'lose-weight' slug */}
      {slug === "lose-weight" && (
        <>
          {/* <Separator /> */}
          {/* <HowThisMedicineWorks
          id="how-this-medicine-works"
          className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
          /> */}
          <MeetTheExpert />

          <TimelineComponent
            header="The progress you can expect"
            steps={[
              {
                value: "Today",
                title: "Simple assessment",
                description:
                  "Upload your prescription or Schedule your online consultation. If eligible, you'll receive your clinically-prescribed medication swiftly, delivered to your home.",
              },
              {
                value: "1-6 Months",
                title: "Healthy weight loss",
                description:
                  "Lose weight and learn how to reframe your relationship with food. Expect increased fitness, energy, and confidence.",
              },
              {
                value: "6-12 Months",
                title: "Lasting change",
                description:
                  "With continued support from Neuva Health, adopt healthier lifestyle habits to help maintain weight loss.",
              },
            ]}
          />
          {/* <TrustedByMen
            id="trusted-by-men"
            className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
          /> */}
          <CommonQuestions
            id="common-questions"
            className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
          />
          {/* <CTACards
            id="cta-cards"
            className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
          /> */}
          {/* <TakeFirstStep
            id="take-first-step"
            className="p-20 w-full px-4 md:px-10 mx-auto"
          /> */}
          <Separator />
        </>
      )}
    </div>
  );
}
