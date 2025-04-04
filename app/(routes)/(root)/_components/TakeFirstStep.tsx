"use client";

import Marquee from "@/core/components/animata/container/marquee";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent } from "@/core/components/ui/card";
import { cn } from "@/core/lib/utils";

type TestimonialCardType = {
  type: "testimonial";
  testimonial: { quote: string; user: string; age: number; location: string };
};

type ImageCardType = {
  type: "image";
  imageUrl: string;
};

type BottomCardProps = TestimonialCardType | ImageCardType;

const data: BottomCardProps[] = [
  {
    type: "testimonial",
    testimonial: {
      quote:
        '"The online consultation was professional and discreet. The doctor was knowledgeable and helped me understand my options."',
      user: "Arjun T.",
      age: 35,
      location: "Delhi",
    },
  },
  {
    type: "image",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/47e4/a07c/b6a9e12c77b65daa0d541acfa7e4d322?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CYYiZj42oRpSRou61C1jhvkoz40BFlAJAswUcQMIrIXK3h~otzEucfHiKqzjie8vrznVjSyyUgyXpWjDhXvCXCrtCkYDcRrv7gwXliMs6~Q4DL1JCnkgBWzCTH420Jl~cn4Y0AlFtDW4gVx3ZSfBU4n9CJmQO0EhDbP4rJ5ra~894ccpv4P-MGLPZARlU2kHfvUbli04VMoYoTa4CbJG3JTsRFI006yYM7l4cjyfKiSh63KTZx-kRqUbk5AtA81ThT~wEQwi6tbm2fQzPA2SJ22zZGFScXK33e9WMwwYTomhQiD0L96VLpIHQszGhsIXZ4x3enCqhw~MCVOuqmAEYQ__",
  },
  {
    type: "image",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d3d0/3109/1f0b6bc1d5a9be6e9425bf709f2037e3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oXYEC~whVUMDiTUaWo74S909X3RrMynuxOO-ndKN4aFysKGXiSEIAkfj2PuOrV0qMjegXYUcJfXNdi7BrUrHqRPhFI6lPnewJBNYoFmli5epdsRrwMMYHHnVg4-LzFIAfUL32sv6Mja~rSR2VFNfapwW89-QoqmM0a5L5Vs6yEfbqEdswpBrllwSTYx5cISbC1czgETxtVrOAx9G3KzW1ftX0vUrCltMEKgIyJD4G7~~SA02vYt9GFliU8LgvQcAnymw-8bbiVOpjqMMGsDq94-0K3Wmr-g~Nb3MJcZHeUgwqSvz11qk5O8qHWbJ-NoF0mxn4pYBQpZ81TnfAZ9vJQ__",
  },
  {
    type: "image",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/f293/462a/f1bef3b957e41022e523870ba8130aad?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CY4SFyIEEB4xv4UvvdPEAWugq~D75TqIwSS2o~7EicgmvWd0BNimMPgsbWaGid0YkQNtD-g5J2MdtsHBjR5RfrdiHxWLZ79wVpRD~GNvEfsqTqDgtlnJUMNF62jwTM7Axfy61bN~xy7FYwCvjSAZgAlHiCi-8OuLZh92TqPW0UeyH9VL6sWlTdhsR94d5ERX45x3LUIF1-ldpBtO7YJdd-Vh8okqRhBWQnSaZgSHNbiTtx3p7iEbjo~zgDiGNvjjx1qVypM9rXN17U6QcsHWRHHrVn~aFaG6iFifB7ZJgnWF8GC7NpTTyfbKyxzeOBMi6BollUGv6tM4xv88gm~EFA__",
  },
  {
    type: "testimonial",
    testimonial: {
      quote:
        '"The online consultation was professional and discreet. The doctor was knowledgeable and helped me understand my options."',
      user: "Arjun T.",
      age: 35,
      location: "Delhi",
    },
  },
  {
    type: "image",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/47e4/a07c/b6a9e12c77b65daa0d541acfa7e4d322?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CYYiZj42oRpSRou61C1jhvkoz40BFlAJAswUcQMIrIXK3h~otzEucfHiKqzjie8vrznVjSyyUgyXpWjDhXvCXCrtCkYDcRrv7gwXliMs6~Q4DL1JCnkgBWzCTH420Jl~cn4Y0AlFtDW4gVx3ZSfBU4n9CJmQO0EhDbP4rJ5ra~894ccpv4P-MGLPZARlU2kHfvUbli04VMoYoTa4CbJG3JTsRFI006yYM7l4cjyfKiSh63KTZx-kRqUbk5AtA81ThT~wEQwi6tbm2fQzPA2SJ22zZGFScXK33e9WMwwYTomhQiD0L96VLpIHQszGhsIXZ4x3enCqhw~MCVOuqmAEYQ__",
  },
  {
    type: "testimonial",
    testimonial: {
      quote:
        '"The online consultation was professional and discreet. The doctor was knowledgeable and helped me understand my options."',
      user: "Arjun T.",
      age: 35,
      location: "Delhi",
    },
  },
  {
    type: "image",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/47e4/a07c/b6a9e12c77b65daa0d541acfa7e4d322?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CYYiZj42oRpSRou61C1jhvkoz40BFlAJAswUcQMIrIXK3h~otzEucfHiKqzjie8vrznVjSyyUgyXpWjDhXvCXCrtCkYDcRrv7gwXliMs6~Q4DL1JCnkgBWzCTH420Jl~cn4Y0AlFtDW4gVx3ZSfBU4n9CJmQO0EhDbP4rJ5ra~894ccpv4P-MGLPZARlU2kHfvUbli04VMoYoTa4CbJG3JTsRFI006yYM7l4cjyfKiSh63KTZx-kRqUbk5AtA81ThT~wEQwi6tbm2fQzPA2SJ22zZGFScXK33e9WMwwYTomhQiD0L96VLpIHQszGhsIXZ4x3enCqhw~MCVOuqmAEYQ__",
  },
  {
    type: "testimonial",
    testimonial: {
      quote:
        '"The online consultation was professional and discreet. The doctor was knowledgeable and helped me understand my options."',
      user: "Arjun T.",
      age: 35,
      location: "Delhi",
    },
  },
  {
    type: "image",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/47e4/a07c/b6a9e12c77b65daa0d541acfa7e4d322?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CYYiZj42oRpSRou61C1jhvkoz40BFlAJAswUcQMIrIXK3h~otzEucfHiKqzjie8vrznVjSyyUgyXpWjDhXvCXCrtCkYDcRrv7gwXliMs6~Q4DL1JCnkgBWzCTH420Jl~cn4Y0AlFtDW4gVx3ZSfBU4n9CJmQO0EhDbP4rJ5ra~894ccpv4P-MGLPZARlU2kHfvUbli04VMoYoTa4CbJG3JTsRFI006yYM7l4cjyfKiSh63KTZx-kRqUbk5AtA81ThT~wEQwi6tbm2fQzPA2SJ22zZGFScXK33e9WMwwYTomhQiD0L96VLpIHQszGhsIXZ4x3enCqhw~MCVOuqmAEYQ__",
  },
];

const TakeFirstStep = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      <div className="flex flex-col gap-8 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl tracking-tight">
          Take the First Step Today
        </h1>
        <h2 className="font-extralight text-lg">
          Begin your journey to better health with a free online consultation
          and discover personalized solutions designed for your specific needs.
        </h2>
      </div>
      <div className="flex flex-col w-full md:flex-row md:justify-center gap-4">
        <Button className="text-white">Start Free Assessment</Button>
        <Button variant={"outline"}>Book Consultation</Button>
      </div>
      <div className="w-dvw overflow-hidden">
        {/* <ScrollingCards data={content} /> */}
        <div className="w-full">
          <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
            {data.map((card, index) => {
              if (card.type === "testimonial") {
                return <TestimonialCard key={index} {...card} />;
              }
              return <ImageCard key={index} {...card} />;
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = (details: TestimonialCardType) => {
  const { quote, user, age, location } = details.testimonial;
  return (
    <Card className="p-0 gap-0 w-72 aspect-[3/4] overflow-hidden bg-[#E3EDFB]">
      <CardContent className="flex flex-col h-full justify-center gap-3">
        <p className="text-xl">{quote}</p>
        <div className="flex flex-col">
          <h1 className="text-base">{user}</h1>
          <h1 className="text-sm font-light">
            {age}, {location}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

const ImageCard = (details: ImageCardType) => {
  return (
    <Card className="p-0 gap-0 w-72 aspect-[3/4] overflow-hidden bg-[#E3EDFB]">
      <CardContent
        className="p-0 flex flex-col h-full relative z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${details.imageUrl})`,
        }}
      />
    </Card>
  );
};

export default TakeFirstStep;
