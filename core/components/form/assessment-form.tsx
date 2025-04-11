"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Circle, CircleDot, Square, SquareCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { Progress } from "../ui/progress";

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
    title: "QUESTION 1 OF 4",
    question: "What is your primary health concern?",
    multiselect: true,
    options: [
      { key: "general-check-up", value: "General Check-up", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "mental-health", value: "Mental Health", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "chronic-pain", value: "Chronic Pain", inactiveIcon: Square,  activeIcon: SquareCheck },
      { key: "other", value: "Other", inactiveIcon: Square, activeIcon: SquareCheck },
    ],
    type: "select",
  },
  {
    title: "QUESTION 2 OF 4",
    question: "How often do you experience this?",
    multiselect: false,
    options: [
      { key: "always", value: "Always", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "more-than-half-the-time", value: "More than half the time", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "sometimes", value: "Sometimes", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "rarely", value: "Rarely", inactiveIcon: Circle, activeIcon: CircleDot },
      { key: "never", value: "Never", inactiveIcon: Circle, activeIcon: CircleDot },
    ],
    type: "select",
  },
  {
    title: "QUESTION 3 OF 4",
    question: "Rate the severity of your issue.",
    min: 1,
    minText: "Inconvenient",
    max: 5,
    maxText: "Unbearable",
    interval: 1,
    type: "range",
  },
  {
    title: "QUESTION 4 OF 4",
    question: "Do you have any of the following health issues?",
    multiselect: true,
    options: [
      { key: "diabetes", value: "Diabetes", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "hypertension", value: "Hypertension", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "erectile-dysfunction", value: "Erectile Dysfunction", inactiveIcon: Square, activeIcon: SquareCheck },
      { key: "other", value: "Other", inactiveIcon: Square, activeIcon: SquareCheck },
    ],
    type: "select",
  },
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

          {checkpoint >= questions.length &&
            form.getValues("questions").every((q) => q.answer) && (
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
                </div>
                <Button>Continue</Button>
              </div>
            )}
        </div>
      </form>
    </Form>
  );
};
