"use client";

import { addItem } from "@/core/components/cart/actions";
import { useProduct } from "@/core/components/product/product-context";
import { Product, ProductVariant } from "@/core/lib/shopify/types";
import { cn } from "@/core/lib/utils";
import { useActionState } from "react";
import { Button } from "../ui/button";
import { useCart } from "./cart-context";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  if (!availableForSale) {
    return <Button disabled>Out Of Stock</Button>;
  }

  if (!selectedVariantId) {
    return (
      <Button aria-label="Please select an option" disabled className="w-full">
        Select a variant
      </Button>
      // <Button className="w-full" variant="default">
      //         Buy Now
      //       </Button>
    );
  }

  return (
    // <Button className="w-full" variant="default">
    //           Buy Now
    //         </Button>
    <Button aria-label="Add to cart" className={cn("hover:opacity-90 w-full ")}>
      Buy Now
    </Button>
  );
}

export function BuyNow({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const addItemAction = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  )!;

  return (
    <form
     className="w-full align-middle"
      action={async () => {
        addCartItem(finalVariant, product);
        addItemAction();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
