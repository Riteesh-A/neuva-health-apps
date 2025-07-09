"use client";
import {
  useProduct,
  useUpdateURL,
} from "@/core/components/product/product-context";
import { ProductOption, ProductVariant } from "@/core/lib/shopify/types";
import clsx from "clsx";
import React from "react";
import { Button } from "../ui/button";
type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants,
  selectedVariant,
  setSelectedVariantAction,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
  selectedVariant?: ProductVariant | null;
  setSelectedVariantAction: React.Dispatch<React.SetStateAction<ProductVariant | null>>;
}) {
  const { state, updateOption } = useProduct();
  
  const updateURL = useUpdateURL();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {}
    ),
  }));

  return options.map((option) => (
    <div key={option.id}>
      <div className="">
        <div className="flex gap-2 items-center mb-4">
          <div className="text-sm uppercase tracking-wide">{option.name}</div>
          {selectedVariant && (
            <div className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {selectedVariant.price.currencyCode === 'INR' ? '₹' : selectedVariant.price.currencyCode}
              {selectedVariant.price.amount}
            </div>
          )}
        </div>
        <div className="flex flex-row gap-2 w-full">
          {option.values.map((value, idx) => {
            const optionNameLowerCase = option.name.toLowerCase();

            // Base option params on current selectedOptions so we can preserve any other param state.
            const optionParams = { ...state, [optionNameLowerCase]: value };

            // Filter out invalid options and check if the option combination is available for sale.
            const filtered = Object.entries(optionParams).filter(
              ([key, value]) =>
                options.find(
                  (option) =>
                    option.name.toLowerCase() === key &&
                    option.values.includes(value)
                )
            );
            const isAvailableForSale = combinations.find((combination) =>
              filtered.every(
                ([key, value]) =>
                  combination[key] === value && combination.availableForSale
              )
            );

            // The option is active if it's in the selected options.
            // const isActive = state[optionNameLowerCase] === value;
            const isActive =
              selectedVariant?.selectedOptions.some(
                (opt) =>
                  opt.name.toLowerCase() === optionNameLowerCase && opt.value === value
              ) ?? false;
            // let isActive = false;

            return (
              <Button
                variant="outline"
                onClick={() => {
                  console.log("Clicked option:", value);
                  // Use startTransition to wrap state updates
                    React.startTransition(() => {
                  //   Only update the product context, do not update the URL
                    const selected = variants.find((variant) =>
                      variant.selectedOptions.every(
                      (opt) =>
                        (opt.name.toLowerCase() === optionNameLowerCase
                        ? value
                        : state[opt.name.toLowerCase()]) === opt.value
                      )
                    );
                    if (selected) setSelectedVariantAction(selected);

                    const newState = updateOption(optionNameLowerCase, value);
                    updateURL(newState)
                    });
                }}
                key={value}
                aria-disabled={!isAvailableForSale}
                disabled={!isAvailableForSale}
                title={`${option.name} ${value}${!isAvailableForSale ? " (Out of Stock)" : ""}`}
                className={clsx(
                  "flex-1 min-w-0 flex items-center justify-start gap-2 border px-auto py-5 text-base font-bold rounded-md",
                  {
                    // Active (selected)
                    "border-[#2F5F8D] text-[#2F5F8D]": isActive && isAvailableForSale,
                    // Inactive (not selected, available)
                    "border-[#C2C7D0] text-[#42474F]": !isActive && isAvailableForSale,
                    // Out of stock
                    "border-[#C2C7D0] text-muted-foreground cursor-not-allowed bg-neutral-100 dark:bg-neutral-900":
                      !isAvailableForSale,
                  }
                )}
              >
                <span
                  className={clsx(
                    "inline-block w-4 h-4 rounded-full border mr-1 flex-shrink-0",
                    {
                      // Active (selected)
                      "border-[#2F5F8D]": isActive && isAvailableForSale,
                      // Inactive (not selected, available)
                      "border-[#C2C7D0]": !isActive && isAvailableForSale,
                      // Out of stock
                      "border-[#C2C7D0] bg-neutral-200 dark:bg-neutral-800": !isAvailableForSale,
                    }
                  )}
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  {isActive && isAvailableForSale && (
                    <span
                      className="block w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "#2F5F8D",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )}
                </span>
                {value}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  ));
}
