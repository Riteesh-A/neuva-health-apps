"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { Progress } from "../ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectTypeQuestion = {
  question: string;
  options: { key: string; value: string }[];
  type: "select";
  answer?: string;
};

type RangeTypeQuestion = {
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
    question: "What is your primary health concern?",
    options: [
      { key: "general-check-up", value: "General Check-up" },
      { key: "mental-health", value: "Mental Health" },
      { key: "chronic-pain", value: "Chronic Pain" },
      { key: "other", value: "Other" },
    ],
    type: "select",
  },
  {
    question: "How often do you experience this?",
    options: [
      { key: "always", value: "Always" },
      { key: "more-than-half-the-time", value: "More than half the time" },
      { key: "sometimes", value: "Sometimes" },
      { key: "rarely", value: "Rarely" },
      { key: "never", value: "Never" },
    ],
    type: "select",
  },
  {
    question: "Rate the severity of your issue.",
    min: 1,
    minText: "Inconvenient",
    max: 5,
    maxText: "Unbearable",
    interval: 1,
    type: "range",
  },
  {
    question: "Do you have any of the following health issues?",
    options: [
      { key: "diabetes", value: "Diabetes" },
      { key: "hypertension", value: "Hypertension" },
      { key: "erectile-dysfunction", value: "Erectile Dysfunction" },
      { key: "other", value: "Other" },
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
          Continue
        </Button>
      );
    };

    return (
      <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-10">
            <Select onValueChange={setAnswer}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {question.options.map((option) => (
                    <SelectItem key={option.key} value={option.key}>
                      {option.value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

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
        <div className="flex flex-col h-full max-w-screen-sm mx-auto w-full p-4">
          {checkpoint === -1 &&
            form.getValues("questions").every((q) => !q.answer) && (
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h1 className="uppercase text-xs">Health Assessment</h1>
                  <h1 className="font-bold text-2xl">Let's Talk</h1>
                  <p className="font-light">
                    Answer these three questions to ensure the medication is
                    safe for you
                  </p>
                </div>

                <Button type="button" onClick={() => setCheckpoint(0)}>
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
