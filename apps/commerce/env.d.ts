declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COMPANY_NAME: string;
      SITE_NAME: string;
      SHOPIFY_REVALIDATION_SECRET: string;
      SHOPIFY_STOREFRONT_ACCESS_TOKEN: string;
      SHOPIFY_STORE_DOMAIN: string;
      SITE_URL: string;
      NEXT_PUBLIC_SITE_URL: string;
    }
  }
}

export {}
