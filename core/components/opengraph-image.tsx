"use server";

import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  const file = await readFile(
    join(process.cwd(), "./core/fonts/YoungSerif-Regular.ttf")
  );
  const font = Uint8Array.from(file).buffer;

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-[url('/screenshots/mobile-preview.jpeg')] bg-cover bg-center" />
    ),
    {
      width: 1200,
      height: 900,
      fonts: [
        {
          name: "YoungSerif",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
