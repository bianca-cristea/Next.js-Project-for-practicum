import { connectToDB } from "@/database";
import Passion from "@/models/Passion";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Passion.create(extractData);
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
