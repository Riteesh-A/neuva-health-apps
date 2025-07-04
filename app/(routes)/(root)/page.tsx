import { categories } from "@/app/lib/categories";
import { redirect } from "next/navigation";

export default async function HomeSlugPage() {
  const category = categories.find((cat) => cat.slug === "have-better-sex");
  redirect("/home");
  // return (
  //   <div className="flex flex-col overflow-x-hidden">
  //     <div className="flex flex-col pb-20 max-w-screen-xl w-full px-4 md:px-6 mx-auto">
  //       <HeroCards />
  //     </div>
  //     {/* <div className="flex flex-col items-center p-20 gap-20 max-w-screen-lg w-full px-4 md:px-6 mx-auto">
  //       <div className="flex flex-col items-center text-center w-full gap-6">
  //         <h1 className="text-2xl md:text-4xl font-medium md:w-1/2 tracking-tight">
  //           {category?.heroSubTitle}
  //         </h1>
  //         <p className="font-medium text-muted-foreground">
  //           {category?.heroDescription}
  //         </p>
  //       </div>

  //       <div className="flex flex-wrap items-center justify-center gap-4">
  //         {category?.products.map((product, index) => (
  //           <Card
  //             key={index}
  //             className="p-0 gap-0 overflow-hidden w-60 lg:w-72 aspect-[3/4] bg-primary-98"
  //           >
  //             <CardContent className="p-6 pb-0 flex flex-col h-full relative z-0">
  //               <div className="flex flex-col justify-between">
  //                 <h1 className="text-xl">{product.title}</h1>
  //                 <h2 className="text-xs font-extralight">
  //                   Starting from {product.price}
  //                 </h2>
  //               </div>
  //               <div
  //                 className="h-full bg-contain bg-bottom bg-no-repeat"
  //                 style={{
  //                   backgroundImage: `url(${product.imageUrl})`,
  //                 }}
  //               />
  //             </CardContent>
  //             <CardFooter className="flex flex-col items-stretch p-6">
  //               <Button>Buy now</Button>
  //             </CardFooter>
  //           </Card>
  //         ))}
  //       </div>
  //     </div> */}

  //     {/* <Separator /> */}

  //     <div className="flex flex-col p-10 md:p-20 gap-10 md:gap-20 max-w-screen-lg w-full px-4 md:px-6 mx-auto">
  //       <div className="flex flex-col items-center text-center w-full gap-6">
  //         <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
  //           How do these medications work?
  //         </h1>
  //         <p className="font-extralight text-lg">
  //           Daily treatments to help manage symptoms and improve wellbeing.
  //         </p>
  //       </div>

  //       <div className="flex flex-col gap-2">
  //         <div className="flex px-6 flex-col items-left text-left w-full gap-2">
  //           <h2 className="text-lg md:text-2xl font-medium">
  //             Weight Loss Medications
  //           </h2>
  //         </div>
  //         <div
  //           className="h-64 md:h-[900px] scale-100 md:scale:90 bg-[#FCF9F9] bg-cover bg-center rounded-xl"
  //           style={{
  //             backgroundImage: `url(/assets/how_it_works.jpg)`,
  //             scale: typeof window !== "undefined" && window.innerWidth >= 768 ? "1" : "0.9",
  //           }}
  //         />
  //         <div className="flex  px-6 flex-col items-left text-left w-full gap-2">
  //           <h3 className="text-lg md:text-xl font-semibold">
  //            Lose up to 20% of initial body weight
  //           </h3>
  //           <p className="text-sm text-left md:text-base font-light text-muted-foreground">
  //             Based on clinical studies of Mounjaro (Tirzepatide)
  //           </p>
  //         </div>
  //         <div className="flex justify-center items-center gap-3 mt-4">
  //           <Button
  //             className="text-sm md:text-base"
  //             asChild
  //           >
  //             <a href="https://wa.me/918904967444?text=LoseWeight" target="_blank" rel="noopener noreferrer">
  //             Buy now
  //             </a>
  //           </Button>
  //           <Button
  //             variant="outline"
  //             className="text-sm md:text-base"
  //             asChild
  //           >
  //             <a href="https://wa.me/918904967444?text=Consultation" target="_blank" rel="noopener noreferrer">
  //             Is this right for me?
  //             </a>
  //           </Button>
  //         </div>
  //       </div>

  //       <div className="flex flex-col gap-2">
  //         <div className="flex px-6 flex-col items-left text-left w-full gap-2">
  //           <h2 className="text-lg md:text-2xl font-medium">
  //             How tadalafil (cialis) or sildenafil (viagra) works for erectile dysfunction
  //           </h2>
  //         </div>
  //         <div
  //           className="h-64 md:h-[900px] scale-100 md:scale:90 bg-[#FCF9F9] bg-cover bg-center rounded-xl"
  //           style={{
  //             backgroundImage: `url(/assets/how_tadalifil.jpg)`,
  //             scale: typeof window !== "undefined" && window.innerWidth >= 768 ? "1" : "0.9",
  //           }}
  //         />
  //         <div className="flex  px-6 flex-col items-left text-left w-full gap-2">
  //           {/* <h3 className="text-lg md:text-xl font-semibold">
  //            Lose up to 20% of initial body weight
  //           </h3> */}
  //           <p className="text-sm text-left md:text-base font-light text-muted-foreground">
  //           Tadalafil (Cialis) and sildenafil (Viagra) help increase blood flow to the penis, making it easier to get and keep an erection when sexually aroused. They work by relaxing the muscles in blood vessels and blocking an enzyme that restricts blood flow. These medicines don’t cause an erection on their own—they just make it easier when the moment is right.
  //           </p>
  //         </div>
  //         <div className="flex justify-center items-center gap-3 mt-4">
  //         <Button
  //             className="text-sm md:text-base"
  //             asChild
  //           >
  //             <a href="https://wa.me/918904967444?text=BetterSex" target="_blank" rel="noopener noreferrer">
  //             Buy now
  //             </a>
  //           </Button>
  //           <Button
  //             variant="outline"
  //             className="text-sm md:text-base"
  //             asChild
  //           >
  //             <a href="https://wa.me/918904967444?text=Consultation" target="_blank" rel="noopener noreferrer">
  //             Is this right for me?
  //             </a>
  //           </Button>
  //         </div>
  //       </div>

        
  //     </div>
  //   </div>
  // );
}
