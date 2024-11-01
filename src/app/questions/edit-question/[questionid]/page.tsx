import React from "react";
import QuestionForm from "../../_components/QuestionForm";
import QuestionModel from "@/models/QuestionModel";
import { IQuestion } from "@/interfaces";
import { connectDB } from "@/config/db";

connectDB();

interface EditQuestionProps {
  params: {
    questionid: string;
  };
}

async function EditQuestion({ params }: EditQuestionProps) {
  const question: IQuestion = (await QuestionModel.findById(params.questionid).populate("user")) as IQuestion;
  return (
    <>
      {" "}
      <div className="bg-gray-100 p-3">
        <h1 className="text-secondary font-semibold text-xl">Edit Question</h1>
        <span className="text-gray-600 text-sm">
          Write a question that you want to ask from the community.
        </span>
      </div>
      <div className="border p-3 mt-5">
        <QuestionForm
          initialData={JSON.parse(JSON.stringify(question))}
          type="edit"
        />
      </div>
    </>
  );
}

export default EditQuestion;