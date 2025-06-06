import { useParams, Link } from 'react-router-dom';
import { useGrandmasterProfile } from '../api/hooks/useGrandmasterProfile';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { LoadingProfile } from '@/components/loaders/LoadingProfile';
import { NoDataFound } from '@/components/ui/NoDataFound';
import { ErrorLoading } from '@/components/ui/ErrorLoading';

export default function GrandmasterProfilePage() {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, isError, error } = useGrandmasterProfile(username || '');
  const [elapsed, setElapsed] = useState('');

  useEffect(() => {
    if (!data?.last_online) return;

    const updateElapsed = () => {
      const now = Math.floor(Date.now() / 1000);
      const diff = now - (data.last_online ?? 0);
      const hours = String(Math.floor(diff / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
      const seconds = String(diff % 60).padStart(2, '0');
      setElapsed(`${hours}:${minutes}:${seconds}`);
    };

    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);

    return () => clearInterval(interval);
  }, [data?.last_online]);

  if (isLoading) return <LoadingProfile />;

  if (isError && error) return <ErrorLoading message="Error loading profile." />;

  if (!data) return <NoDataFound message="No data found." />;

  return (
    <div className="p-6 bg-[#f7f7f7] dark:bg-[#181a1b] min-h-[80vh]">
      <Card className="max-w-2xl mx-auto p-6 bg-[#f7f7f7] dark:bg-[#232323] min-h-[80vh] flex flex-col items-center rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center w-full">
          <div className="relative">
            <img
              src={
                data.avatar || 'https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif'
              }
              alt={data.username}
              className="w-32 h-32 rounded-full border-4 border-[#bfa76a] shadow-lg object-cover bg-white"
            />
            {data.verified && (
              <span className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                ✔
              </span>
            )}
          </div>
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-[#222] dark:text-white flex items-center justify-center gap-2">
              {data.name || data.username}
              {data.title && (
                <span className="ml-2 px-2 py-0.5 bg-[#bfa76a] text-white text-xs rounded font-semibold shadow">
                  {data.title}
                </span>
              )}
            </div>
            <div className="text-gray-500 text-sm mt-1">@{data.username}</div>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {data.league && (
                <span className="bg-[#e6e6e6] dark:bg-[#232323] text-[#bfa76a] px-2 py-0.5 rounded text-xs font-semibold">
                  {data.league}
                </span>
              )}
              {data.is_streamer && (
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                  Streamer
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white dark:bg-[#232323] rounded-xl p-6 shadow-inner">
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Country</div>
            <a
              href={data.country}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-blue-700 hover:underline font-medium"
            >
              {data.country.split('/').pop()}
            </a>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Status</div>
            <div className="capitalize text-base font-medium">{data.status}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Followers</div>
            <div className="text-base font-medium">{data.followers ?? 0}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">FIDE Rating</div>
            <div className="text-base font-medium">{data.fide ?? 'N/A'}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Joined</div>
            <div className="text-base font-medium">
              {data.joined ? new Date(data.joined * 1000).toLocaleDateString() : 'N/A'}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Last Online</div>
            <div className="text-base font-medium">
              {data.last_online ? new Date(data.last_online * 1000).toLocaleString() : 'N/A'}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              <b>Time Since:</b> <span className="font-mono">{elapsed}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 w-full">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#bfa76a] text-white rounded-lg shadow hover:bg-[#a68d4a] font-semibold transition text-lg w-full text-center max-w-xs"
          >
            View on Chess.com
          </a>
          <Link to="/" className="text-gray-600 hover:underline text-sm mt-2">
            ← Back to list
          </Link>
        </div>
      </Card>
    </div>
  );
}
