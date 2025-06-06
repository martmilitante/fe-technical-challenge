import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GrandmastersPage from '../pages/GrandmastersPage';

describe('GrandmastersPage', () => {
  it('renders loading state', () => {
    jest.mock('../api/hooks/useGrandmasters', () => ({
      useGrandmasters: () => ({ isLoading: true })
    }));
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <GrandmastersPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getAllByTestId('skeleton')).toHaveLength(48);
  });
});
