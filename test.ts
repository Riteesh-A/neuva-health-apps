import { AzureKeyCredential, SearchIndexClient } from "@azure/search-documents";

const searchIndexClient = new SearchIndexClient(
  `https://${process.env.AZURE_SEARCH_SERVICE_NAME}.search.windows.net`,
  new AzureKeyCredential(process.env.AZURE_SEARCH_ADMIN_KEY || ""),
  { apiVersion: "2023-07-01-preview" }
);

export async function GET(req) {
  try {
    const indexIterator = searchIndexClient.listIndexes();
    const indexList = [];

    for await (const index of indexIterator) {
      indexList.push({ name: index.name });
    }

    return new Response(JSON.stringify(indexList), { status: 200 });
  } catch (error) {
    console.error("Azure AI Search Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to fetch indexes" }), { status: 500 });
  }
}

export default async function handler(req) {
  if (req.method === "GET") {
    return GET(req);
  } else {
    return new Response(null, { status: 405 }); // Method Not Allowed
  }
}
