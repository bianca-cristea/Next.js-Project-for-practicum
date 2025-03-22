import connectToDB from "@/database";
import User from "@/models/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { email, password } = await req.json();

    console.log("Received email:", email);
    console.log("Received password:", password);

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      console.log("User not found");
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    console.log("User found:", checkUser);

    const checkPassword = await compare(password, checkUser.password);
    if (!checkPassword) {
      console.log("Wrong credentials");
      return NextResponse.json({
        success: false,
        message: "Wrong credentials",
      });
    }

    console.log("Password matched");

    const token = sign({ userId: checkUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Generated token:", token);

    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
      sameSite: "Strict",
    });

    return NextResponse.json({
      success: true,
      message: "Logged in successfully!",
    });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}
