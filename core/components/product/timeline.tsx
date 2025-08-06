// core/components/product/product-dosage.tsx

export default function TimelineComponent({
  steps,
  header,
}: {
  steps?: { value: string; title: string; description: string }[];
  header?: string;
}) {
  // 4 dots for 3 columns
  const dotCount = steps?.length ? steps.length + 1 : 0;

  return (
    <div className="w-full container flex flex-col items-center section-y">
      <h2 className="type-headline-sm md:type-headline-lg mb-10">{header}</h2>
      <div className="relative">
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center mb-12 gap-6 md:gap-0">
          {steps?.map((step, idx) => (
            <div key={idx} className="px-4">
              <div className="type-headline-sm md:type-headline-md font-bold mb-2">
                {step.value}
              </div>
              <div className="type-body-md md:type-body-lg font-semibold mb-2">
                {step.title}
              </div>
              <div className="text-gray-600">{step.description}</div>
              {/* Horizontal break on mobile - hidden on desktop */}
              {idx < steps?.length - 1 && (
                <div className="md:hidden border-b border-gray-300 mt-6 pb-6"></div>
              )}
            </div>
          ))}
        </div>
        {/* Timeline - hidden on mobile, shown on desktop */}
        <div className="relative h-8 hidden md:block">
          {/* Line */}
          <div
            className="absolute left-0 right-0 top-1/2 border-b border-gray-400 z-0"
            style={{ height: 0 }}
          ></div>
          {/* Dots */}
          {[...Array(dotCount || 0)].map((_, idx) => (
            <div
              key={idx}
              className="absolute z-10 w-5 h-5 bg-gray-700 rounded-full border-2 border-white"
              style={{
                left: `calc(${(idx / (dotCount - 1)) * 100}% - 10px)`,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
