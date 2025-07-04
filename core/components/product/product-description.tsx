"use client"
import Prose from "@/core/components/prose";
import { Product, ProductVariant } from "@/core/lib/shopify/types";
import { ChevronDownCircle, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { BuyNow } from './../cart/buy-now';
import PurchasePlanSelector from "./purchase-plan-selector";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  console.log(product);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  // useEffect(() => {
  //   if (product.variants.length > 0 && product.variants[0]) {
  //     setSelectedVariant(product.variants[0]);
  //   } else {
  //     setSelectedVariant(null);
  //   }
  // }, [product.variants]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  return (
    <div>
      <div className="mb-6 flex flex-col pb-6 gap-7">
        <Button variant="outline" className="w-fit" asChild>
          <a href="/home/have-better-sex">
            <ChevronLeft /> Back to Products
          </a>
        </Button>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-4 align-middle">
            <h1 className=" text-4xl text-[#42474F] font-bold">{product.title}</h1>
            {product.best_seller.value && (
              <span className="rounded-full bg-[#F8738F] px-3 py-2 text-xs text-white h-fit w-fit">
                Bestseller
              </span>
            )}
          </div>
          {product.descriptionHtml ? (
            <Prose
              className="font-light text-lg tracking-normal leading-[24px] dark:text-white/[60%]"
              html={product.descriptionHtml}
            />
          ) : null}
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => {
                const rating = product.average_review.value;
                let fillPercent = 0;
                fillPercent = Math.max(0, Math.min(1, rating - (star - 1))) * 100;
                return (
                  <svg
                    key={star}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="inline"
                  >
                    <defs>
                      <linearGradient
                        id={`star-gradient-${star}-${fillPercent}`} // ensures true uniqueness
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#2F5F8D" />
                        <stop offset={`${fillPercent}%`} stopColor="#2F5F8D" />
                        <stop offset={`${fillPercent}%`} stopColor="white" />
                        <stop offset="100%" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2         9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      fill={fillPercent === 100 ? "#2F5F8D" : `url(#star-gradient-${star}-${fillPercent})`}
                      stroke="#2F5F8D"
                      strokeWidth={1.5}
                    />
                  </svg>

                );
              })}
              
              
              {/* <span className="ml-2 text-sm text-gray-500">({product.average_review.value})</span> */}
            </div>
            <span className="text-[#2F5F8D] font-bold text-base">{product.numberOfReviews.value} reviews</span>
          </div>
        </div>
        <VariantSelector selectedVariant={selectedVariant} setSelectedVariantAction={setSelectedVariant} options={product.options} variants={product.variants} />
        <PurchasePlanSelector selectedVariant={selectedVariant} sellingPlanGroups={product.sellingPlanGroups} />
        <div className="flex flex-row h-12 gap-4 w-full">
          <div className="w-1/3 flex items-center">
            <div className="flex items-center justify-between w-full rounded-full border border-gray-300 px-2 py-1 bg-white">
              <button
                type="button"
                className="text-[#2F5F8D] text-xl px-2 rounded-full focus:outline-none"
                aria-label="Decrease quantity"
                onClick={() => {
                  const input = document.getElementById("quantity") as HTMLInputElement;
                  if (input) {
                    const min = Number(input.min) || 1;
                    const val = Math.max(Number(input.value) - 1, min);
                    input.value = val.toString();
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                  }
                }}
              >
                -
                </button>
              <input
                id="quantity"
                type="text"
                min={product.minimum_quantity.value || 1}
                defaultValue={product.minimum_quantity.value || 1}
                className="w-12 text-center bg-transparent outline-none border-none appearance-none"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                  appearance: "textfield",
                }}
                onWheel={e => (e.target as HTMLInputElement).blur()}
              />
              <button
                type="button"
                className="text-[#2F5F8D] text-xl px-2 rounded-full focus:outline-none"
                aria-label="Increase quantity"
                onClick={() => {
                  const input = document.getElementById("quantity") as HTMLInputElement;
                  if (input) {
                    const val = Number(input.value) + 1;
                    input.value = val.toString();
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="w-2/3 flex items-center">
            {/* <Button className="w-full" variant="default">
              Buy Now
            </Button> */}
            <BuyNow product={product}/>
          </div>
        </div>
        <div className="rounded-md bg-[#D1E4FF] p-4 flex justify-between">
          <div className="flex flex-row gap-2">
              <img src="/icons/info.svg" alt="minimum quantity" />
              <span className="font-bold" >Minimum Quantity for this product</span>
          </div>
          <span className="font-light text-[#42474F]">{product.minimum_quantity.value} units</span>
        </div>
        
        <hr className="border-t border-gray-200 dark:border-neutral-700" />

        <Accordion product={product} />
      </div>
      {/* <AddToCart product={product} /> */}
    </div>
  );
}

function Accordion({ product }: { product: Product }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const accordionData = [
    
    {
      key: "how_it_works",
      label: "How It Works",
      show: !!product.how_it_works,
      content: (
        <p>
          {JSON.parse(product.how_it_works.value).children
            .map((child: any) =>
              child.children.map((innerChild: any) => innerChild.value).join("")
            )
            .join("\n")}
        </p>
      ),
    },
    {
      key: "benefits",
      label: "Benefits",
      show: !!product.benefits.value,
      content: <p>
              {JSON.parse(product.benefits.value).children
                .map((child: any) =>
                  child.children.map((innerChild: any) => innerChild.value).join("")
                )
                .join("\n")}
            </p>,
    },
    {
      key: "ingredients",
      label: "Ingredients",
      show: !!product.ingredients.value,
      content: <p>{product.ingredients.value}</p>,
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {accordionData.map(
        (section) =>
          section.show && (
            <div key={section.key} className="border-b">
                <button
                type="button"
                className="w-full flex justify-between items-center py-3 text-left leading-[20px] tracking-[0.1%] font-bold text-base focus:outline-none"
                onClick={() =>
                  setOpenKey(openKey === section.key ? null : section.key)
                }
                >
                <span>{section.label}</span>
                <ChevronDownCircle
                  className={`transition-transform duration-200 ${openKey === section.key ? "rotate-180" : ""}`}
                  size={24}
                  fill="black"
                  stroke="white"
                />
                </button>
              {openKey === section.key && (
                <div className="px-4 pb-4 font-[300] text-[14px] text-[#42474F]">{section.content}</div>
              )}
            </div>
          )
      )}
    </div>
  );
}