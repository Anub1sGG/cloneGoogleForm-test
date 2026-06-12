import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateFormMutation } from "../app/baseApi";
import type { QuestionInput, QuestionType } from "../graphql/generated";
import type { Question } from "../Form";

export const useFormBuilder = () => {
  const navigate = useNavigate();
  const [createForm, { isLoading }] = useCreateFormMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: crypto.randomUUID(),
      type: "TEXT",
      title: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestionTitle = (id: string, value: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, title: value } : q)),
    );
  };

  const updateQuestionType = (id: string, type: QuestionType) => {
    setQuestions(
      questions.map((q) => {
        if (q.id !== id) return q;
        const hasOptions = type === "MULTIPLE_CHOICE" || type === "CHECKBOX";
        return {
          ...q,
          type,
          options: hasOptions ? ["Option 1"] : undefined,
        };
      }),
    );
  };

  const addOption = (questionId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id !== questionId) return q;
        const currentOptions = q.options || [];
        return {
          ...q,
          options: [...currentOptions, `Option ${currentOptions.length + 1}`],
        };
      }),
    );
  };

  const updateOptionValue = (
    questionId: string,
    optionIndex: number,
    value: string,
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q.id !== questionId || !q.options) return q;
        const updatedOptions = [...q.options];
        updatedOptions[optionIndex] = value;
        return { ...q, options: updatedOptions };
      }),
    );
  };

  const deleteOption = (questionId: string, optionIndex: number) => {
    setQuestions(
      questions.map((q) => {
        if (q.id !== questionId || !q.options) return q;
        return {
          ...q,
          options: q.options.filter((_, index) => index !== optionIndex),
        };
      }),
    );
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a form title");
      return;
    }

    try {
      const formattedQuestions: QuestionInput[] = questions.map((q) => ({
        type: q.type,
        title: q.title || "Untitled Question",
        options: q.options || [],
      }));

      await createForm({
        title,
        description,
        questions: formattedQuestions,
      }).unwrap();

      navigate("/");
    } catch (error) {
      console.error("Failed to save form:", error);
      alert("Error saving form.");
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    questions,
    isLoading,
    addQuestion,
    deleteQuestion,
    updateQuestionTitle,
    updateQuestionType,
    addOption,
    updateOptionValue,
    deleteOption,
    handleSave,
  };
};
