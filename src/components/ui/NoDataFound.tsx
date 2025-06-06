export function NoDataFound({ message = "No data found." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] w-full text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16 text-gray-300 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9m7.5 0H6.75"
        />
      </svg>
      <div className="text-lg text-gray-500 font-medium">{message}</div>
    </div>
  );
}
