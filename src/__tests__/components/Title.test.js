import { render, screen } from '@testing-library/react';
import Title from '../../components/Title';

test('renders Title', () => {
    render(<Title />);
    const titleElement = screen.getByText(/react-zork/i);
    expect(titleElement).toBeInTheDocument();
});
