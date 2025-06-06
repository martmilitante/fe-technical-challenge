import { render, screen } from '@testing-library/react';
import { ErrorLoading } from '@/components/ui/ErrorLoading';
import { NoDataFound } from '@/components/ui/NoDataFound';

describe('ErrorLoading', () => {
  it('renders error message', () => {
    render(<ErrorLoading message="Test error" />);
    expect(screen.getByText(/test error/i)).toBeInTheDocument();
  });
});

describe('NoDataFound', () => {
  it('renders no data message', () => {
    render(<NoDataFound message="Nothing here" />);
    expect(screen.getByText(/nothing here/i)).toBeInTheDocument();
  });
});
