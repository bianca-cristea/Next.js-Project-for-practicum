import connectToDB, { connectToDBAdmin } from "@/database";
import User from "@/models/User";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    await connectToDB();
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    const resetToken = sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "15m",
    });

    console.log(
      `Link resetare: http://localhost:3000/reset-password?token=${resetToken}`
    );

    return NextResponse.json({
      success: true,
      message: "Check your email for the password reset link.",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
