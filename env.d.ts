declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COMPANY_NAME: string;
      SITE_NAME: string;
      SHOPIFY_REVALIDATION_SECRET: string;
      SHOPIFY_STOREFRONT_ACCESS_TOKEN: string;
      SHOPIFY_STORE_DOMAIN: string;
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
      MIXPANEL_TOKEN: string;
      MIXPANEL_API_SECRET: string;
    }
  }
}

export {}
