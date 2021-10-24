import { render, screen } from '@testing-library/react';
import Info from '../../components/Info';

test('renders Info', () => {
    render(<Info />);
    const infoElement = screen.getByTestId('infoIcon');
    expect(infoElement).toBeInTheDocument();
});

test('renders Info link', () => {
    render(<Info />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveProperty('href', 'http://localhost/#info');
});
