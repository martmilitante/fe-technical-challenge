import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';
import { Spinner } from './components/loaders/Spinner';

const queryClient = new QueryClient();

const GrandmastersPage = lazy(() => import('./pages/GrandmastersPage'));
const GrandmasterProfilePage = lazy(() => import('./pages/GrandmasterProfilePage'));

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <QueryClientProvider client={queryClient}>
        <Router>
          <nav className="p-4 flex gap-4 items-center bg-background border-b">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <img src="/chess-logo.svg" alt="Chess logo" className="w-8 h-8" />
              <span>Chess Grandmasters Wiki</span>
            </Link>
          </nav>
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-[60vh] w-full">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<GrandmastersPage />} />
              <Route path="/profile/:username" element={<GrandmasterProfilePage />} />
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
