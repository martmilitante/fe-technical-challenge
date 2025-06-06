import { Skeleton } from '../ui/skeleton';

export function LoadingProfile() {
  return (
    <div className="max-w-2xl mx-auto p-6 min-h-[80vh] flex flex-col items-center rounded-2xl">
      <div className="flex flex-col items-center w-full">
        <Skeleton className="w-32 h-32 rounded-full mb-4" data-testid="skeleton" />
        <Skeleton className="w-48 h-8 mb-2" data-testid="skeleton" />
        <Skeleton className="w-32 h-4 mb-2" data-testid="skeleton" />
        <div className="flex gap-2 mb-2">
          <Skeleton className="w-16 h-6" data-testid="skeleton" />
          <Skeleton className="w-16 h-6" data-testid="skeleton" />
        </div>
      </div>
      <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full mb-2" data-testid="skeleton" />
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-2 w-full">
        <Skeleton className="w-48 h-10 mb-2" data-testid="skeleton" />
        <Skeleton className="w-32 h-6" data-testid="skeleton" />
      </div>
    </div>
  );
}
