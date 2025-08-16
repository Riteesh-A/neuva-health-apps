"use client";

import { usePathname } from "next/navigation";
import NeuvaTirzepatideChart from "../product/effective-graph";
import ProductEffectiveness from "../product/product-effectiveness";
import ProductEligibility from "../product/product-eligibility";
import ProductReason from "../product/product-reason";
import ProductUsage from "../product/product-usage";
import TimelineComponent from "../product/timeline";
import WhatIsProduct from "../product/what-is-product";
// import WhatIsWegovy from "./WhatIsWegovy";

export default function ConditionalProductInfo() {
  const pathname = usePathname();

  if (pathname.includes("tirzepatide-mounjaro")) {
    return (
      <div>
        <WhatIsProduct
          title="What is Mounjaro?"
          description={
            <div className="space-y-3">
              <div className="type-body-md md:type-body-lg font-light">
                Mounjaro (tirzepatide) is a new medication licensed for weight
                loss in certain groups of people. The active ingredient
                (tirzepatide) was originally designed for use in the treatment
                of type 2 diabetes,¹ used to help manage blood sugar levels more
                effectively, but due to positive impact on peoples weight being
                seen it was approved for use in the treatment of obesity in
                2023.
              </div>
              <div className="type-body-md md:type-body-lg font-light">
                Taken once a week through a simple injection, Mounjaro is now
                licensed for use as a weight loss medication.¹
              </div>
            </div>
          }
          children={
            <div className="flex flex-col text-destructive/80 items-center text-left w-full gap-4 md:gap-6">
              Insert Doctor card
            </div>
          }
        />
        <ProductEffectiveness
          title="How effective is Mounjaro?"
          description={
            <div className="space-y-3">
              <div className="type-body-md md:type-body-lg font-light">
                Mounjaro has shown great results for weight loss. Clinical
                studies have shown that people using Mounjaro lose more weight
                compared to those on other weight loss medications.
              </div>
              <ul className="my-5 list-disc pl-4 list-inside space-y-3 type-body-md md:type-body-lg font-light tracking-tight">
                <li>
                  Patients lost an average of 9.81 kg (about 21.6 lbs) compared
                  to placebo, with even higher reductions at higher doses.
                  <sup>2</sup>
                </li>
                <li>
                  Weight loss increased with higher doses (5 mg, 10 mg, and 15
                  mg), demonstrating a clear dose-response relationship.
                  <sup>2</sup>
                </li>
                <li>
                  More participants achieved at least 5%, 10%, and 15% body
                  weight reductions compared to those on placebo or other
                  diabetes medications.<sup>2</sup>
                </li>
              </ul>
            </div>
          }
          children={<NeuvaTirzepatideChart />}
        />
        <ProductReason
          title="Why choose Mounjaro?"
          description={
            <div>
              <div className="md:type-body-lg font-light">
                Mounjaro has a unique approach to weight loss, as it targets two
                key pathways in the body. Here’s how it works:¹
              </div>
              <ul className="my-5 list-disc pl-4 list-inside space-y-3 type-body-md md:type-body-lg font-light tracking-tight">
                <li>
                  <strong className="font-bold">Reduces appetite:</strong>{" "}
                  Mounjaro helps to control hunger by affecting hormones that
                  signal fullness, so you feel satisfied with less food.
                </li>
                <li>
                  <strong className="font-bold">
                    Boosts insulin sensitivity:
                  </strong>{" "}
                  It improves how your body uses insulin, which helps keep blood
                  sugar levels stable and prevents energy crashes.
                </li>
                <li>
                  <strong className="font-bold">
                    Increases adiponectin levels:
                  </strong>{" "}
                  This hormone plays a role in regulating glucose levels and
                  breaking down fatty acids, further supporting weight loss.
                </li>
                <li>
                  <strong className="font-bold">Long-lasting effects:</strong>{" "}
                  With a half-life of five days, Mounjaro stays active in your
                  system, allowing for convenient once-weekly injections.
                </li>
                <li>
                  <strong className="font-bold">Proven Results:</strong>{" "}
                  Clinical studies have shown weight reductions of 16.5% to
                  22.4% over 72 weeks, even in patients without diabetes.
                </li>
              </ul>
            </div>
          }
          children={
            <div className="flex flex-col text-destructive/80 items-center text-left w-full gap-4 md:gap-6">
              Insert Picture
            </div>
          }
        />
        <TimelineComponent
          header="Mounjaro doses"
          steps={[
            {
              value: "2.5mg",
              title: "Starting dose",
              description: "Starting dose",
            },
            {
              value: "5–7.5mg",
              title: "Maintenance dose",
              description:
                "5mg is the first maintenance dose, often prescribed after 4 weeks. 7.5mg is then available via a dose increase request",
            },
            {
              value: "10–15mg",
              title: "Higher maintenance",
              description:
                "10mg and 15mg are the higher maintenance doses, achieved by titrating up by 2.5mg every 4 weeks",
            },
          ]}
        />
        <ProductEligibility
          title="Who is eligible for Mounjaro?"
          description={
            <div className="space-y-5">
              <div className="type-body-md md:type-body-lg font-light">
                Mounjaro is recommended for managing obesity as part of a
                comprehensive plan that includes a reduced-calorie diet and
                increased physical activity. To be eligible for Mounjaro, you
                must meet the following criteria:
              </div>
              <ul className="my-5 list-disc pl-4 list-inside space-y-3 type-body-md md:type-body-lg font-light tracking-tight">
                <li>An initial BMI of at least 30 kg/m².</li>
                <li>
                  Or a BMI of 27 kg/m² to &lt;30 kg/m² (overweight) in the
                  presence of at least one weight-related comorbid condition.
                </li>
              </ul>
              <div className="type-body-md md:type-body-lg font-light">
                Mounjaro is designed to support significant weight loss
                alongside lifestyle changes, helping to improve health outcomes
                for those at higher risk due to obesity. If you fit these
                criteria, then you may be eligible for treatment.
              </div>
              <div className="space-y-3">
                <h2 className="type-label-lg-prominent md:type-headline-sm">
                  Who should not take Mounjaro?
                </h2>
                <div className="type-body-md md:type-body-lg font-light">
                  You shouldn't take Mounjaro if you:
                </div>
                <ul className="my-3 list-disc pl-4 list-inside space-y-3 type-body-md md:type-body-lg font-light tracking-tight">
                  <li>Are pregnant or breastfeeding.</li>
                  <li>
                    Have a history of medullary thyroid cancer or MEN2 syndrome.
                  </li>
                  <li>Have severe gastrointestinal disease or pancreatitis.</li>
                  <li>Are allergic to tirzepatide or any pen components.</li>
                </ul>
              </div>
            </div>
          }
          children={
            <div className="flex flex-col text-destructive/80 items-center text-left w-full gap-4 md:gap-6">
              Insert Picture
            </div>
          }
        />
        <ProductUsage
          title="How to use Mounjaro?"
          description={
            <div>
              <div className="type-body-md md:type-body-lg font-light">
                Taking Mounjaro is simple and straightforward. It comes in a
                pre-filled injection pen that you take once a week. You can
                inject Mounjaro in the following areas:
              </div>
              <ul className="my-5 list-disc pl-4 list-inside space-y-3 type-body-md md:type-body-lg font-light tracking-tight">
                <li>
                  <strong className="font-bold">Stomach:</strong> At least 2
                  inches away from your belly button.
                </li>
                <li>
                  <strong className="font-bold">Thighs:</strong> Either thigh is
                  suitable, just avoid the inner thigh.
                </li>
                <li>
                  <strong className="font-bold">Upper arm:</strong> The back of
                  the upper arm if someone else is administering the injection.
                </li>
              </ul>
              <div className="type-body-md md:type-body-lg font-light">
                Make sure to rotate the injection site each week to prevent
                irritation. Avoid areas that are bruised, red, or sore. After
                use, simply dispose of the pen safely in a yellow sharps bin and
                you’re good to go.
              </div>
            </div>
          }
          faqs={[
            {
              question: "How do I store Mounjaro?",
              answer:
                "Mounjaro should be stored at room temperature, between 20°C and 25°C (68°F to 77°F). Keep it away from direct sunlight and heat sources.",
            },
            {
              question: "Mounjaro step-by-step instructions",
              answer: "Todo",
            },
            {
              question: "What if I miss a dose?",
              answer:
                "If you miss a dose of Mounjaro, you should take it within 4 days. If more than 4 days have passed you should skip the dose and take your next one on your usual day.",
            },
          ]}
        />
      </div>
    );
  }

  // TODO: Add Wegovy Description
  if (pathname.includes("wegovy-ozempic")) {
    return (
      <div>
        <WhatIsProduct
          title="What is Wegovy?"
          description={
            <div className="space-y-3">
              <div className="type-body-md md:type-body-lg font-light space-y-5">
                <p>
                  <span className="md:type-body-lg font-light">
                    Wegovy is a prescription weight loss treatment that contains
                    the active ingredient semaglutide, belonging to a group of
                    medications called GLP-1 inhibitors.¹
                  </span>
                </p>
                <p>
                  <span className="md:type-body-lg font-light">
                    It works by mimicking a naturally occurring hormone in the
                    body called GLP-1, stimulating nerve receptors in the brain
                    that control appetite, so you feel less hungry and have
                    fewer cravings.¹
                  </span>
                </p>
                <p>
                  <span className="md:type-body-lg font-light">
                    Additionally, it stimulates the release of insulin from
                    pancreatic beta cells, as GLP-1 is present in both the
                    pancreas and the brain.³ Implementing behavioural change
                    strategies alongside the treatment is known to be an
                    effective method for weight loss.
                  </span>
                  <span className="md:type-body-lg font-light">
                    <sup>2</sup>
                  </span>
                </p>
              </div>
            </div>
          }
          children={
            <div className="flex flex-col text-destructive/80 items-center text-left w-full gap-4 md:gap-6">
              Insert Doctor card
            </div>
          }
        />
        <ProductEffectiveness
          title="How effective is Wegovy?"
          description={
            <div className="space-y-3">
              <div className="type-body-md md:type-body-lg font-light space-y-3">
                <p>
                  In a major clinical trial, participants who received the full
                  therapeutic dose of 2.4 mg per week lost an average of{" "}
                  <strong>15% of their body weight over 68 weeks</strong>,
                  compared to just <strong>2.4%</strong> in those who received a
                  placebo. This level of weight loss is significantly greater
                  than what’s typically seen with lifestyle changes alone.
                  <sup>1</sup>
                </p>
                <p>
                  The study found a clear dose-response relationship, whereby
                  lower doses of semaglutide (such as 1.0 mg or 1.7 mg) led to
                  less weight loss, while the 2.4 mg dose produced the most
                  substantial effects.<sup>1</sup>
                </p>
              </div>
            </div>
          }
          children={
            <div className="flex flex-col text-destructive/80 items-center text-left w-full gap-4 md:gap-6">
              Insert Picture
            </div>
          }
        />
        <ProductReason
          title="Why choose Wegovy?"
          description={
            <div>
              <div className="md:type-body-lg font-light">
                Wegovy works by targeting the GLP-1 receptor pathway in the
                body, which plays a crucial role in appetite regulation. Here's
                how it works:¹
              </div>
              <ul className="my-5 list-disc pl-4 list-inside space-y-3 type-body-md md:type-body-lg font-light tracking-tight">
                <li>
                  <strong className="font-bold">Reduces appetite:</strong>{" "}
                  Wegovy helps to control hunger by affecting hormones that
                  signal fullness, so you feel satisfied with less food.
                </li>
                <li>
                  <strong className="font-bold">Slows gastric emptying:</strong>{" "}
                  It slows down how quickly food leaves your stomach, helping
                  you feel full for longer periods.
                </li>
                <li>
                  <strong className="font-bold">
                    Improves blood sugar control:
                  </strong>{" "}
                  It helps regulate blood sugar levels, which can reduce
                  cravings and improve overall metabolic health.
                </li>
                <li>
                  <strong className="font-bold">Long-lasting effects:</strong>{" "}
                  With a half-life of about one week, Wegovy stays active in
                  your system, allowing for convenient once-weekly injections.
                </li>
                <li>
                  <strong className="font-bold">Proven Results:</strong>{" "}
                  Clinical studies have shown average weight reductions of
                  15-18% over 68 weeks, making it one of the most effective
                  weight loss medications available.
                </li>
              </ul>
            </div>
          }
          children={
            <div className="flex flex-col text-destructive/80 items-center text-left w-full gap-4 md:gap-6">
              Insert Picture
            </div>
          }
        />
        <TimelineComponent
          header="Wegovy doses"
          steps={[
            {
              value: "0.25mg",
              title: "Starting dose",
              description: "Starting dose for the first 4 weeks",
            },
            {
              value: "0.5mg",
              title: "Maintenance dose",
              description:
                "0.5mg is the first maintenance dose, prescribed after 4 weeks",
            },
            {
              value: "1.0mg",
              title: "Higher maintenance",
              description: "1.0mg is achieved by titrating up every 4 weeks",
            },
          ]}
        />
        <ProductEligibility
          title="Who is eligible for Wegovy?"
          description={
            <div className="space-y-5">
              <div className="type-body-md md:type-body-lg font-light">
                Wegovy is suitable for people struggling with weight management
                who meet specific criteria. To be eligible, you need to have a
                BMI of 30 or more, or over 27 if you have a weight-related
                condition like high blood pressure, cardiovascular disease, or
                type 2 diabetes. It should only be taken alongside making
                lifestyle and dietary changes.<sup>4</sup>
              </div>
              <div className="type-body-md md:type-body-lg font-light">
                It’s designed for those who have already tried traditional
                weight loss methods without success and are ready for a new
                approach to achieving their health goals.<sup>4</sup>
              </div>
              <div className="type-body-md md:type-body-lg font-light">
                To be considered for Wegovy, you’ll need to complete an online
                questionnaire that gathers key information about your health and
                weight management journey.<sup>4</sup> Following this, you’ll
                have a consultation with a Numan clinician who will assess your
                eligibility based on their clinical judgement and your medical
                history.
              </div>
            </div>
          }
          children={
            <div className="flex flex-col text-destructive/80 items-center text-left w-full gap-4 md:gap-6">
              Insert Picture
            </div>
          }
        />
        <ProductUsage
          title="How to use Wegovy?"
          description={
            <div className="type-body-md md:type-body-lg font-light">
              Taking Wegovy is straightforward with the right guidance. It comes
              as a pre-filled injection pen that you use once a week. To take
              Wegovy, you first prepare (prime) the pen, choose an injection
              site - like your stomach or thigh - and inject the dose following
              the instructions. Dispose of the needle safely in the yellow
              sharps bin, and store your pen with the cap on until the next use.
            </div>
          }
          faqs={[
            {
              question: "How do I store Wegovy?",
              answer:
                "Wegovy should be stored at room temperature, between 20°C and 25°C (68°F to 77°F). Keep it away from direct sunlight and heat sources.",
            },
            {
              question: "Wegovy step-by-step instructions",
              answer: "Todo",
            },
            {
              question: "What if I miss a dose?",
              answer:
                "If you miss a dose of Wegovy, you should take it within 5 days. If more than 5 days have passed you should skip the dose and take your next one on your usual day.",
            },
          ]}
        />
      </div>
    );
  }

  return null;
}
