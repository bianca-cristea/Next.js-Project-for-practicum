import connectToDB, { connectToDBApp } from "@/database";
import CompetitiveProgramming from "@/models/CompetitiveProgramming";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDBApp();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "ID is required to delete the data.",
      });
    }

    const deletedData = await CompetitiveProgramming.findByIdAndDelete(id);

    if (deletedData) {
      return NextResponse.json({
        success: true,
        message: "Data deleted successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No data found with the provided ID.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}
