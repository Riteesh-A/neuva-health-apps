export const getWelcomeEmailTemplate = ({
  email,
  websiteUrl = "www.neuvahealth.com",
  supportEmail = "info@neuvahealth.com",
}: {
  email: string;
  websiteUrl?: string;
  supportEmail?: string;
}) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to Our Website</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100">
        <div class="flex items-center justify-center min-h-screen py-12">
          <div class="max-w-md w-full bg-white shadow-lg rounded-2xl overflow-hidden">
            <div class="p-6">
              <div class="text-center">
                <a href="${websiteUrl}" class="flex flex-col text-2xl lowercase leading-6 young-serif">
                  <h1>neuva</h1>
                  <h1>health</h1>
                </a>
                <h2 class="text-2xl font-bold text-gray-800 mt-4">
                  Welcome, ${email}!
                </h2>
                <p class="text-gray-600 mt-2">
                  We're excited to have you on board. We will notify you about the latest updates and promotions.
                </p>
              </div>
              <div class="mt-6">
                <a
                  href="${websiteUrl}"
                  class="block text-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-500 transition duration-300"
                >
                  Get Started
                </a>
              </div>
              <p class="text-center text-gray-500 text-sm mt-4">
                Need help? <a href="mailto:${supportEmail}" class="text-blue-500 hover:underline">Contact Support</a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
