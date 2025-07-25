import { connectToDB } from "@/database";
import Research from "@/models/Research";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Research.find({});

    if (extractData) {
      return NextResponse.json({ success: true, data: extractData });
    } else {
      return NextResponse.json({ success: false, message: "No data found!" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something goes wrong! Please try again.",
    });
  }
}
