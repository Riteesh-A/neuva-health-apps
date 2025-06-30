import imageFragment from './image';
import seoFragment from './seo';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    minimum_quantity: metafield(namespace: "custom", key: "minimum_quantity") {
      value
    }
    benefits: metafield(namespace: "custom", key: "benefits") {
      value
    }
    ingredients: metafield(namespace: "custom", key: "ingredients") {
      value
    }
    how_it_works: metafield(namespace: "custom", key: "how_it_works") {
      value
    }
    best_seller: metafield(namespace: "custom", key: "bestseller") {
      value
    }
    numberOfReviews: metafield(namespace: "custom", key: "number_of_reviews") {
      value
    }
    average_review: metafield(namespace: "custom", key: "average_review") {
      value
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    requiresSellingPlan
    sellingPlanGroups(first: 5) {
      edges {
        node {
          name
          options { name values }
          sellingPlans(first: 10) {
            edges {
              node {
                id
                name
                description
                recurringDeliveries
                priceAdjustments {
                  adjustmentValue {
                    __typename
                    ... on SellingPlanPercentagePriceAdjustment {
                      adjustmentPercentage
                    }
                    ... on SellingPlanFixedAmountPriceAdjustment {
                      adjustmentAmount { amount currencyCode }
                    }
                    ... on SellingPlanFixedPriceAdjustment {
                      price { amount currencyCode }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${imageFragment}
  ${seoFragment}
`;

export default productFragment;
