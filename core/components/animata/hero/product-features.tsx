import { hankenGrotesk } from "@/core/fonts";
import { HTMLMotionProps, motion, useSpring, useTransform } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { cn } from "@/core/lib/utils";

interface FeatureCardProps extends HTMLMotionProps<"div"> {
    feature: {
        name: string;
        qualifications: string;
        experience: string;
        imageUrl: string;
    };
    zIndexOffset?: number;
}

export default function FeatureCard({ feature, className, zIndexOffset = 0, ...props }: FeatureCardProps) {
    const { name, qualifications, experience, imageUrl } = feature;
    const springValue = useSpring(0, {
        bounce: 0,
    });
    const zIndex = useTransform(springValue, (value) => +Math.floor(value * 10) + 10 + zIndexOffset);
    const scale = useTransform(springValue, [0, 1], [1, 1.1]);

    const content = (
        <>
            <img src={imageUrl} alt="" className="-z-1 absolute inset-0 brightness-90 h-full w-full object-cover rounded-3xl border-[12px] border-[#E4EFFF]" />
            <div className={cn(hankenGrotesk.className, "z-10 flex h-full w-full flex-col gap-2  p-3 ")}>
                <div className="flex-1" />
                <div className="bg-gradient-to-t from-zinc-800/60 from-55% to-transparent overflow-hidden rounded-b-2xl">
                <div className="px-3 my-2 text-base text-center leading-none text-white ">
                    {name}
                </div>
                <div className="px-3 my-2 text-xs text-center font-light leading-none text-white ">
                    {qualifications}
                </div>
                <div className="px-3 my-2 text-xs pb-4 text-center font-light leading-none text-white ">
                    {experience}
                </div>
                </div>
            </div>
        </>
    );

    const containerClassName = cn(
        "z-0 relative flex h-[80vh] w-[18vw] flex-col  overflow-hidden rounded-3xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl",
        className,
    );

    return (
        <>
            <motion.div
                onMouseEnter={() => springValue.set(1)}
                onMouseLeave={() => springValue.set(0)}
                style={{
                    zIndex,
                    scale,
                }}
                className={cn(containerClassName, "hidden sm:flex")}
                {...props}
            >
                {content}
            </motion.div>
            <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 0.5 } }}
                className={cn(containerClassName, "flex sm:hidden")}
            >
                {content}
            </motion.div>
        </>
    );
}

function ProductFeatures() {
    const cardWidth = 48 * 4; // w-48 x 4
    const angle = 6;
    const yOffset = 30;

    return (
        <section className="storybook-fix flex w-full flex-col items-center gap-4 bg-orange-50 py-10">
            <motion.header
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
                className="flex max-w-md flex-col items-center gap-2 text-center"
            >
                <h1 className="text-3xl font-black text-orange-600">Pots of Joy: Ceramic Chic!</h1>
                <Balancer className="block text-lg text-neutral-500">
                    Quirky ceramics for happy spaces. From sleek vases to funky mugs, we&apos;ve got your
                    shelves covered.
                </Balancer>
            </motion.header>

            <motion.div
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
            >
                <button
                    className="box-border inline-block h-11 transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-full border-b-4 border-solid border-transparent bg-orange-600 px-4 py-3 text-center text-sm font-bold uppercase leading-5 tracking-wider text-white shadow-2xl outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto"
                    role="button"
                >
                    Ready to clay &rarr;
                    <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-orange-500" />
                </button>
            </motion.div>

            {/* <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:flex-row sm:gap-0">
        <FeatureCard
          feature={{
            category: "Vases",
            imageUrl:
              "https://assets.lummi.ai/assets/QmSxHGeLuiXMzUSFM9hhVJToRXVeQCBEtno96zgAXB3uVN?auto=format&w=400",
            title: "Elegant Swirling Glass Vase",
          }}
          initial={{
            x: cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: yOffset,
            y: 10,
            opacity: 1,
            scale: 0.95,
            rotate: -angle,
            transition: {
              type: "spring",
              delay: 0.8,
            },
          }}
        />

        <FeatureCard
          feature={{
            category: "Jugs",
            title: "Artisanal Ceramic Jug",
            imageUrl:
              "https://assets.lummi.ai/assets/QmaUXibkkKYu6Y3TzwE71ytVrPqecXiG4URAPZuqqzxz6R?auto=format&w=400",
          }}
          initial={{
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.4,
            },
          }}
          zIndexOffset={1}
        />

        <FeatureCard
          feature={{
            category: "Bottles",
            title: "Colorful Gradient Glass Bottle",
            imageUrl:
              "https://assets.lummi.ai/assets/QmYXzaoAXsA71sz3Uv3fXytMKDoBHs1twQN3eCcrvr7AJf?auto=format&w=400",
          }}
          initial={{
            x: -cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: -yOffset,
            y: 10,
            opacity: 1,
            rotate: angle,
            scale: 0.95,
            transition: {
              type: "spring",
              delay: 0.6,
            },
          }}
        />
      </div> */}
        </section>
    );
}


