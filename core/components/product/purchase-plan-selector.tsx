import { Product, ProductVariant } from "@/core/lib/shopify/types";
import { useState } from "react";

function PurchasePlanSelector({ sellingPlanGroups, selectedVariant }: { sellingPlanGroups: Product["sellingPlanGroups"], selectedVariant: ProductVariant | null;}) {
  const [selectedPlan, setSelectedPlan] = useState<null | string>(null);
  const [selectedFrequency, setSelectedFrequency] = useState("Deliver every 3 months");
  if (!sellingPlanGroups?.edges?.length) return null;

  const group = sellingPlanGroups.edges[0]?.node;
  if (!group) return null;
  const frequencyOptions = group.options[0]?.values ?? [];

  const planMap: Record<string, any> = {};
  group.sellingPlans.edges.forEach(({ node }) => {
    const match = frequencyOptions.find((val) => node.name.includes(val));
    if (match) planMap[match] = node;
  });

  const selectedSellingPlan = planMap[selectedFrequency];
  const discount = selectedSellingPlan?.priceAdjustments?.[0]?.adjustmentValue?.adjustmentPercentage ?? 0;
  const originalPrice = parseFloat(selectedVariant?.price.amount || "0");
  const discountedPrice = originalPrice * (1 - discount / 100);
  const sellingPlanTitle = sellingPlanGroups.edges[0]?.node.name || "Subscribe & Save";

  // Determine which plan is selected
  const isOneTime = selectedPlan === null;
  const isSubscription = !isOneTime;

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <label
          className={`flex items-center gap-2 p-3 rounded-md cursor-pointer border ${isOneTime ? "border-[#2F5F8D]" : "border-gray-300"}`}
          style={{ color: "#2F5F8D", fontSize: "1.1rem" }}
        >
          <input
            type="radio"
            name="purchase-plan"
            value="onetime"
            checked={isOneTime}
            onChange={() => setSelectedPlan(null)}
            style={{ accentColor: "#2F5F8D", width: "1em", height: "1em" }}
          />
          <div className="flex justify-between w-full">
            <span
              className={`font-bold text-base ${isOneTime ? "text-[#2F5F8D]" : "text-black"}`}
            >
              One-Time Purchase
            </span>
            <span className="font-[400] text-base text-[#42474F]">₹{originalPrice}</span>
          </div>
        </label>

        <label className={`flex flex-col gap-2 p-3 rounded-md cursor-pointer border ${isSubscription ? "border-[#2F5F8D]" : "border-gray-300"}`}>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="purchase-plan"
              value="subscribe"
              checked={isSubscription}
              onChange={() => setSelectedPlan(selectedSellingPlan?.id)}
              style={{ accentColor: "#2F5F8D", width: "1em", height: "1em" }}
            />
            <div className="flex align-middle justify-between w-full">
              <div className="flex flex-col gap-0">
                <span
                  className={`font-bold text-base ${isSubscription ? "text-[#2F5F8D]" : "text-black"}`}
                >
                  {sellingPlanTitle}
                </span>
                <span className="font-light">Save upto {discount}%</span>
              </div>
              <select
                value={selectedFrequency}
                onChange={(e) => {
                  setSelectedFrequency(e.target.value);
                  setSelectedPlan(planMap[e.target.value]?.id || null);
                }}
                className="mt-1 p-2 border rounded"
              >
                {frequencyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="font-semibold align-middle py-auto">₹{discountedPrice.toFixed(0)}</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default PurchasePlanSelector;