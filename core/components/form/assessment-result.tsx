
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/core/components/ui/accordion";
import { Button } from "@/core/components/ui/button";
import { useEffect, useState } from "react";
import ProductCards from "../home/ProductCards";
export default function AssessmentResult({
    answers }: {
        answers: any[];
    }
) {
    const [assessmentCompleted, setAssessmentCompleted] = useState(false);
    const [assessmentResult, setAssessmentResult] = useState<{ product_name: string; products: string; accordion_title: string }[] | null>(null);
        const computeAssessment = async () => {
            // Define product mappings, names, and accordion titles
            const productMapping: { [key: string]: { name: string; accordion: string } } = {
                'have-better-sex': { 
                    name: 'Neuva Extend', 
                    accordion: 'For Longer Sex'
                },
                'tackle-anxiety': { 
                    name: 'Neuva Calm', 
                    accordion: 'For Calmer Mind'
                },
                'lose-weight': { 
                    name: 'Neuva Slim', 
                    accordion: 'For Weight Loss'
                },
                'regrow-hair': { 
                    name: 'Neuva Grow', 
                    accordion: 'For Hair Regrowth'
                }
            };

            let recommendedProducts = [];

            // Get primary goals from first question (can be multiple)
            const primaryGoals = Array.isArray(answers[0].answer) 
                ? answers[0].answer 
                : [answers[0].answer];
            
            recommendedProducts.push(...primaryGoals);

            // Add additional recommendations based on medical conditions
            const medicalConditions = Array.isArray(answers[3].answer)
                ? answers[3].answer
                : [answers[3].answer];

            if (medicalConditions.includes('depression')) {
                recommendedProducts.push('tackle-anxiety');
            }

            // Consider severity (question 3)
            const severity = parseInt(answers[2].answer);
            if (severity >= 4) {
                // For high impact cases, consider additional support
                if (!recommendedProducts.includes('tackle-anxiety')) {
                    recommendedProducts.push('tackle-anxiety');
                }
            }

            // Remove duplicates and format result
            const uniqueProducts = [...new Set(recommendedProducts)];
            
            return uniqueProducts.map(product => {
                const productKey = product === 'better-sex' ? 'have-better-sex' : product;
                const mapping = productMapping[productKey] || { name: 'Unknown Product', accordion: 'Unknown Category' };
                return {
                    product_name: mapping.name,
                    products: productKey,
                    accordion_title: mapping.accordion
                };
            });
        }
    useEffect(() => {
        const fetchAssessment = async () => {
            const result = await computeAssessment();
            setAssessmentResult(result);
            setAssessmentCompleted(true);
        };
        fetchAssessment();
    }, []);
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
                <h1 className="uppercase text-xs">Health Assessment</h1>
                {!assessmentCompleted ? (
                    <div>Loading assessment...</div>
                ) : (
                    <>
                        {assessmentResult && assessmentResult.length > 0 ? (
                            <>
                                <h1 className="font-bold text-2xl">
                                    Based on your responses,{" "}
                                    {assessmentResult.map((result, idx) => (
                                        <span className="text-[#2F5F8D]" key={idx}>
                                            {result.product_name}
                                            {idx < assessmentResult.length - 1 ? ', ' : ' '}
                                        </span>
                                    ))}appears to be compatible with your health profile.
                                </h1>
                                <Accordion type="single" collapsible className="w-full">
                                    {assessmentResult.map((result, idx) => (
                                        <AccordionItem key={idx} value={`item-${idx}`}>
                                            <AccordionTrigger>
                                                {result.accordion_title}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ProductCards slug={result.products} />
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                                <div className="mt-6">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            window.dispatchEvent(new Event("openConsultationModal"));
                                        }}
                                    >
                                        Not sure? Talk to a Doctor
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-start gap-4">
                                <h2 className="font-bold text-xl text-[#2F5F8D]">
                                    We couldn't find a suitable product based on your responses.
                                </h2>
                                <p>
                                    Schedule a call with our doctors to get personalized advice for free and recommendations.
                                </p>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        window.dispatchEvent(new Event("openConsultationModal"));
                                    }}
                                >
                                    Schedule a Call with Our Doctors
                                </Button>
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    );
}