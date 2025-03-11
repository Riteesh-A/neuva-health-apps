import OpengraphImage from "@/core/components/opengraph-image";
import { getPage } from "@/core/lib/shopify";

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
