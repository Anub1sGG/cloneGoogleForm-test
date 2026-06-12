interface ButtonSubmitProps {
  isLoading?: boolean;
  onCancel: () => void;
}

const ButtonSubmit = ({ isLoading, onCancel }: ButtonSubmitProps) => {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        onClick={onCancel}
        className="text-sm font-semibold text-gray-600 hover:text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:bg-gray-400"
      >
        {isLoading ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default ButtonSubmit;
