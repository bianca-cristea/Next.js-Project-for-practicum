import connectToDB from "@/database";
import User from "@/models/User";
import { hash, compare } from "bcryptjs";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { email, password } = await req.json();

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "Wrong credentials",
      });
    }
    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);

    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "Wrong credentials",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Logged in successfully!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something goes wrong! Please try again.",
    });
  }
}
