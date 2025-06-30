import connectToDB, { connectToDBApp } from "@/database";
import { NextResponse } from "next/server";
import SoftwareEngineering from "@/models/SoftwareEngineering";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "ID is required to delete the data.",
      });
    }

    const deletedData = await SoftwareEngineering.findByIdAndDelete(id);

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
