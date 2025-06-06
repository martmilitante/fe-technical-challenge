import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import type { GrandmasterProfile } from '../chessApi/types';
import * as useGrandmasterProfileModule from '../api/hooks/useGrandmasterProfile';
import GrandmasterProfilePage from '../pages/GrandmasterProfilePage';

describe('GrandmasterProfilePage', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    jest.spyOn(useGrandmasterProfileModule, 'useGrandmasterProfile').mockReturnValue({
      isLoading: true,
      isError: false,
      isSuccess: false,
      isIdle: false,
      data: undefined,
      error: null,
      refetch: jest.fn(),
      failureCount: 0,
      isFetched: false,
      isFetching: true,
      isRefetching: false,
      status: 'loading',
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      isPlaceholderData: false,
      isPreviousData: false,
      isStale: false,
      remove: jest.fn(),
      fetchStatus: 'fetching',
    } as unknown as UseQueryResult<GrandmasterProfile, Error>);
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <GrandmasterProfilePage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    // LoadingProfile renders 12 skeletons (4 top, 6 grid, 2 bottom)
    expect(screen.getAllByTestId('skeleton')).toHaveLength(13);
  });

  it('renders no data found state', () => {
    jest.spyOn(useGrandmasterProfileModule, 'useGrandmasterProfile').mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: false,
      isIdle: false,
      data: undefined,
      error: null,
      refetch: jest.fn(),
      failureCount: 0,
      isFetched: true,
      isFetching: false,
      isRefetching: false,
      status: 'success',
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      isPlaceholderData: false,
      isPreviousData: false,
      isStale: false,
      remove: jest.fn(),
      fetchStatus: 'idle',
    } as unknown as UseQueryResult<GrandmasterProfile, Error>);
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <GrandmasterProfilePage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText(/no data found/i)).toBeInTheDocument();
  });
});
