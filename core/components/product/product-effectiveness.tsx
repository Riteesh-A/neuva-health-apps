"use client";

const ProductEffectiveness = ({
  title,
  description,
  children,
}: {
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center section-y">
      <section className="flex flex-col items-center container text-center w-full gap-4 md:flex-row md:items-center md:gap-10">
        <div className="flex flex-col items-start text-left w-full gap-4 md:gap-6">
          <h1 className="text-3xl md:type-display-md font-bold w-full tracking-tight">
            {title}
          </h1>
          <h2 className="w-full">{description}</h2>
        </div>
        <div className="flex items-center w-full gap-4 md:gap-6">
          {children}
        </div>
      </section>
    </div>
  );
};

export default ProductEffectiveness;
