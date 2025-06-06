import { Skeleton } from '@/components/ui/skeleton';

export function LoadingGrandmasters() {
  return (
    <div className="p-6 bg-[#f7f7f7] dark:bg-[#181a1b] min-h-[80vh]">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-[#232323] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col items-center p-6 h-full w-full">
              <Skeleton className="w-20 h-20 rounded-full mb-3" />
              <Skeleton className="w-24 h-6 mb-2" />
              <Skeleton className="w-12 h-5 mb-2" />
              <Skeleton className="w-20 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
