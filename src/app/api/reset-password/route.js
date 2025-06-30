import connectToDB, { connectToDBAdmin } from "@/database";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDBAdmin();
    const { email, oldPassword, newPassword } = await req.json();

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    const checkPassword = await bcrypt.compare(oldPassword, checkUser.password);
    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    checkUser.password = hashedPassword;
    await checkUser.save();

    return NextResponse.json({
      success: true,
      message: "Password reset successfully!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}
