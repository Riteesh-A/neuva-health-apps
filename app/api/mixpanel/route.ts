import Mixpanel from "mixpanel";
import { NextRequest, NextResponse } from "next/server";
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const { event, properties } = data;

    mixpanel.track(event, properties);

    return NextResponse.json({ status: "Event tracked successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
