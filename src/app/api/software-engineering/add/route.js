import { connectToDB } from "@/database";
import { NextResponse } from "next/server";
import SoftwareEngineering from "@/models/SoftwareEngineering";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await SoftwareEngineering.create(extractData);
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something goes wrong! Please try again.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something goes wrong! Please try again.",
    });
  }
}
