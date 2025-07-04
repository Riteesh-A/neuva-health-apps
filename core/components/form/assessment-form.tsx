"use client";

import { createClient } from '@/app/lib/client';
import { zodResolver } from "@hookform/resolvers/zod";
import { Circle, CircleDot, Square, SquareCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { Progress } from "../ui/progress";
import AssessmentResult from './assessment-result';

type SelectTypeQuestion = {
  title: string;
  question: string;
  multiselect: boolean;
  options: { key: string; value: string; inactiveIcon?: any; activeIcon?: any }[];
  type: "select";
  answer?: string;
};

type RangeTypeQuestion = {
  title: string
  question: string;
  type: "range";
  min: number;
  max: number;
  minText?: string;
  maxText?: string;
  interval: number;
  answer?: string;
};

type QuestionType = SelectTypeQuestion | RangeTypeQuestion;

const questions: QuestionType[] = [
  {
    title: "Let's start with your goals",
    question: "What would you like help with today?",
    multiselect: true,
    options: [
      { key: "better-sex", value: "Improve intimate life", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "lose-weight", value: "Weight management", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "regrow-hair", value: "Hair restoration", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "tackle-anxiety", value: "Mental wellness", inactiveIcon: Square, activeIcon: SquareCheck },
    ],
    type: "select",
  },
  {
    title: "Understanding your situation",
    question: "Have you tried any treatments or medications before for this?",
    multiselect: false,
    options: [
      { key: "never", value: "No, this is my first time seeking help", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "tried-otc", value: "Yes, tried over-the-counter solutions", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "tried-prescription", value: "Yes, tried prescription medications", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "currently-using", value: "Currently using medication", inactiveIcon: Circle, activeIcon: CircleDot },
    ],
    type: "select",
  },
  {
    title: "Impact Assessment",
    question: "How much is this affecting your quality of life?",
    min: 1,
    minText: "Mild concern",
    max: 5,
    maxText: "Significant impact",
    interval: 1,
    type: "range",
  },
  {
    title: "Medical Background",
    question: "Please select any conditions you have been diagnosed with:",
    multiselect: true,
    options: [
      { key: "heart", value: "Heart or blood pressure issues", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "liver", value: "Liver problems", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "depression", value: "Depression or mood disorders", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "medications", value: "Currently taking other medications", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "none", value: "None of these apply to me", inactiveIcon: Square, activeIcon: SquareCheck },
    ],
    type: "select",
  },
  {
    title: "Frequency Check",
    question: "How often do you experience this concern?",
    multiselect: false,
    options: [
      { key: "daily", value: "Daily", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "few-times-week", value: "Few times a week", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "occasionally", value: "Occasionally", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "rarely", value: "Rarely", inactiveIcon: Circle, activeIcon: CircleDot },
    ],
    type: "select",
  }
];

const schema = z.object({
  questions: z.array(
    z.union([
      z.object({
        question: z.string(),
        type: z.literal("select"),
        answer: z.string().optional(),
      }),
      z.object({
        question: z.string(),
        type: z.literal("range"),
        answer: z.string().optional(),
      }),
    ])
  ),
});

export const AssessmentForm = () => {
  const [checkpoint, setCheckpoint] = useState(-1);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      questions: questions.map((q) => ({
        question: q.question,
        type: q.type,
        answer: undefined,
      })),
    },
  });

  const arrayBetweenMinMax = (
    min: number,
    max: number,
    interval: number
  ): number[] => {
    const result: number[] = [];
    for (let i = min; i <= max; i += interval) {
      result.push(i);
    }
    return result;
  };

  const QuestionView = ({
    question,
    index,
  }: {
    question: QuestionType;
    index: number;
  }) => {
    const [answer, setAnswer] = useState<string | undefined>(question.answer);

    const NextButton = () => {
      return (
        <div className="flex flex-col gap-2">
        <Button
          disabled={!answer}
          type="button"
          onClick={() => {
            form.setValue(
              "questions",
              form.getValues("questions").map((q, i) => {
                if (index === i) {
                  return { ...q, answer };
                }
                return q;
              })
            );

            setCheckpoint((prev) => prev + 1);
          }}
        >
          Next
        </Button>
        <Button
          type="button"
          variant="link"
          onClick={() => {
            form.setValue(
              "questions",
              form.getValues("questions").map((q, i) => {
                if (index === i) {
                  return { ...q, answer: "default" };
                }
                return q;
              })
            );
            setCheckpoint((prev) => prev + 1);
          }}
        >
          Skip
        </Button>
        </div>
      );
    };

    return (
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="uppercase text-base text-[#2F5F8D]">{question.title}</h1>
        <h1 className="font-bold text-lg">{question.question}</h1>
        {question.type === "range" && (
          <div className="flex flex-col">
        <div className="flex flex-col gap-10">
          <div className="flex md:flex-col flex-row gap-10">
            <div className="flex md:flex-col justify-between md:justify-baseline w-full gap-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {arrayBetweenMinMax(
              question.min,
              question.max,
              question.interval
            ).map((optionValue) => (
              <Button
            key={optionValue}
            variant={
              answer === optionValue.toString()
                ? "default"
                : "outline"
            }
            size={"icon"}
            type="button"
            className="rounded-full"
            onClick={() => setAnswer(optionValue.toString())}
              >
            {optionValue}
              </Button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-2">
            <p className="text-lg md:text-xs text-gray-500">
              {question.minText}
            </p>
            <p className="text-lg md:text-xs text-gray-500">
              {question.maxText}
            </p>
          </div>
            </div>
          </div>

          <NextButton />
        </div>
          </div>
        )}

        {question.type === "select" && (
          <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {question.options.map((option) => {
            const isSelected = (answer || "").split(",").includes(option.key);
            const Icon = isSelected ? option.activeIcon : option.inactiveIcon;
            return (
          <button
            key={option.key}
            type="button"
            className={`border rounded-full px-4 py-2 text-left text-sm font-medium flex items-center gap-2 ${
              isSelected
            ? "border-blue-500 bg-blue-100 text-blue-800"
            : "border-gray-300 bg-white text-gray-600"
            }`}
            onClick={() => {
              const current = (answer || "").split(",").filter(Boolean);
              let updated;
              if (question.multiselect) {
            updated = isSelected
              ? current.filter((key) => key !== option.key)
              : [...current, option.key];
              } else {
            updated = isSelected ? [] : [option.key];
              }
              setAnswer(updated.join(","));
            }}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {option.value}
          </button>
            );
          })}
        </div>
        <NextButton />
          </div>
        )}
      </div>
    );
  };

  const RenderIncompleteQuestion = () => {
    let { incompleteQuestion, index } = useMemo(() => {
      let _res = undefined;

      let index = 0;

      for (const question of form.getValues("questions")) {
        console.log(question, index);
        if (!question.answer) {
          _res = questions[index];
          break;
        }
        index = index + 1;
      }

      return { incompleteQuestion: _res, index };
    }, [form.watch("questions")]);

    if (!incompleteQuestion) {
      return null;
    }

    return <QuestionView question={incompleteQuestion} index={index} />;
  };
  const supabase = createClient(
  );

  async function saveAssessment(answers: any) {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      console.error("Authentication error:", authError);
      redirect("/auth/login");
    }
    const { error } = await supabase.from("assessments").insert([
      {
        user_id: user.id,
        answers,
      },
    ]);
    if (error) {
      throw error;
    }
  }

  // Example usage after form submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const answers = form.getValues("questions");
    try {
      await saveAssessment(answers);
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
      // redirect("/home");
    }
  };
  return (
    <Form {...form}>
      <form className="flex flex-col h-full">
        <FormField
          name="questions"
          control={form.control}
          render={({ field }) => (
            <Progress
              value={
                (field.value.filter((q) => q.answer).length * 100) /
                field.value.length
              }
            />
          )}
        />
        <div className="flex flex-col  md:mt-16 h-full max-w-screen-sm mx-auto w-full p-4">
          {checkpoint === -1 &&
            form.getValues("questions").every((q) => !q.answer) && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <h1 className="uppercase text-base text-[#2F5F8D]">Health Assessment</h1>
                  <h1 className="font-bold text-4xl">Let's Talk</h1>
                  <p className="font-light whitespace-pre-line">
                    {"Answer these three questions to ensure the \nmedication is safe for you"}
                  </p>
                </div>

                <Button type="button" className="mt-4" onClick={() => setCheckpoint(0)}>
                  Continue
                </Button>
              </div>
            )}

          {checkpoint >= 0 && checkpoint < questions.length && (
            <RenderIncompleteQuestion />
          )}

          {checkpoint >= questions.length && !submitted && 
            (form.getValues("questions").every((q) => q.answer) && (
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h1 className="uppercase text-xs">Health Assessment</h1>
                  <h1 className="font-bold text-2xl">
                    Thank you for submitting
                  </h1>
                  <p className="font-light">
                    We appreciate your time and effort in completing this
                    assessment.
                  </p>
                  <p className='font-light'>
                    Your assessment is ready
                    </p>
                </div>
                {/* <Button>Continue</Button> */}
                <Button
                  type="button"
                  onClick={() => {
                  handleSubmit();
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "View Assessment"}
                </Button>
              </div>
            ))}
          
          {submitted && (
            <div className="flex flex-col gap-3">
              <AssessmentResult answers={form.getValues("questions")}/>
              </div>)}
          
        </div>
      </form>
    </Form>
  );
};
