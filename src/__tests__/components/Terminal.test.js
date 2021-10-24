import { render, screen } from '@testing-library/react';
import Terminal from '../../components/Terminal';

test('renders Terminal', () => {
    render(<Terminal />);
    const terminalElement = screen.getByText(/ZORK I: The Great Underground Empire/i);
    expect(terminalElement).toBeInTheDocument();
});
