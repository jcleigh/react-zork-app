import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App', () => {
    render(<App />);
    const appElement = screen.getByText(/ZORK I: The Great Underground Empire/i);
    expect(appElement).toBeInTheDocument();
});
