import { useNavigate } from "react-router-dom";
import type { QuestionType } from "../graphql/generated";

import { useFormBuilder } from "../hooks/useFormBuilder";
import ButtonSubmit from "../components/ButtonSubmit";

const CreateFormPage = () => {
  const navigate = useNavigate();
  const {
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
  } = useFormBuilder();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Create Form</h1>

      <form onSubmit={handleSave} className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-8 border-indigo-500">
          <input
            className="w-full text-xl font-semibold border-b border-gray-200 focus:border-indigo-500 outline-none pb-2 mb-4"
            placeholder="Untitled Form"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full text-gray-600 border-b border-gray-200 focus:border-indigo-500 outline-none resize-none"
            placeholder="Form description"
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  className="flex-1 rounded border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Question title"
                  value={question.title}
                  onChange={(e) =>
                    updateQuestionTitle(question.id, e.target.value)
                  }
                />

                <select
                  value={question.type}
                  onChange={(e) =>
                    updateQuestionType(
                      question.id,
                      e.target.value as QuestionType,
                    )
                  }
                  className="rounded border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 outline-none bg-white md:w-48"
                >
                  <option value="TEXT">Short Answer</option>
                  <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                  <option value="CHECKBOX">Checkboxes</option>
                  <option value="DATE">Date</option>
                </select>
              </div>

              {(question.type === "MULTIPLE_CHOICE" ||
                question.type === "CHECKBOX") && (
                <div className="mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                  {question.options?.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 border border-gray-400 ${question.type === "MULTIPLE_CHOICE" ? "rounded-full" : "rounded"}`}
                      />
                      <input
                        value={option}
                        placeholder={`Option ${index + 1}`}
                        onChange={(e) =>
                          updateOptionValue(question.id, index, e.target.value)
                        }
                        className="flex-1 rounded border border-gray-300 p-2"
                      />
                      <button
                        type="button"
                        onClick={() => deleteOption(question.id, index)}
                        className="text-red-500 hover:text-red-700 text-sm px-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => addOption(question.id)}
                    className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    + Add Option
                  </button>
                </div>
              )}

              <div className="mt-4 flex justify-end border-t pt-4 border-gray-100">
                <button
                  type="button"
                  onClick={() => deleteQuestion(question.id)}
                  className="text-sm font-medium text-red-600 hover:text-red-800"
                >
                  Delete Question
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={addQuestion}
            className="w-full md:w-auto px-6 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-md shadow hover:bg-indigo-700 transition"
          >
            + Add Question
          </button>
        </div>

        <ButtonSubmit isLoading={isLoading} onCancel={() => navigate("/")} />
      </form>
    </div>
  );
};

export default CreateFormPage;
