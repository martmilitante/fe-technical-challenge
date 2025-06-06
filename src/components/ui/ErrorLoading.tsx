export function ErrorLoading({ message = "Error loading data." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] w-full text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16 text-red-300 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
      <div className="text-lg text-red-500 font-medium">{message}</div>
    </div>
  );
}
