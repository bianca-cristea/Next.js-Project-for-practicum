import connectToDB from "@/database";
import CompetitiveProgramming from "@/models/CompetitiveProgramming";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await CompetitiveProgramming.create(extractData);

    if (saveData) {
      return NextResponse.json(
        { message: "Data saved successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
