import { useGrandmasters } from '../api/hooks/useGrandmasters';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { LoadingGrandmasters } from '../components/loaders/LoadingGrandmasters';
import { ErrorLoading } from '@/components/ui/ErrorLoading';

export default function GrandmastersPage() {
  const { data, isLoading, isError, error } = useGrandmasters();

  if (isLoading) return <LoadingGrandmasters />;

  if (isError && error) return <ErrorLoading message="Error loading grandmasters." />;

  return (
    <div className="p-6 bg-[#f7f7f7] dark:bg-[#181a1b] min-h-[80vh]">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.players?.map((username: string) => (
          <Card
            key={username}
            className="group bg-white dark:bg-[#232323] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition overflow-hidden"
          >
            <Link
              to={`/profile/${username}`}
              className="flex flex-col items-center p-6 h-full w-full"
            >
              <img
                src={`https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif`}
                alt={username}
                className="w-20 h-20 rounded-full border-2 border-[#bfa76a] shadow mb-3 object-cover bg-white"
              />
              <div className="text-lg font-semibold text-[#222] dark:text-white group-hover:text-[#bfa76a] transition">
                {username}
              </div>
              <div className="mt-2">
                <span className="inline-block px-2 py-0.5 bg-[#bfa76a] text-white text-xs rounded font-semibold shadow">
                  GM
                </span>
              </div>
              <div className="mt-2 text-blue-700 group-hover:underline text-sm">View Profile</div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
