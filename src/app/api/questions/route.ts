import { getMongoDbUserIdFromClerkUserId } from "@/actions/userActions";
import { connectDB } from "@/config/db";
import QuestionModel from "@/models/QuestionModel";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const authResult = await auth();
    const { userId } = authResult;
    const reqBody = await request.json();
    reqBody.user = await getMongoDbUserIdFromClerkUserId(userId!);
    await QuestionModel.create(reqBody);
    return NextResponse.json({ message: "Question created successfully" });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: (error as Error).message, status: 500 },
      {
        status: 500,
      }
    );
  }
}