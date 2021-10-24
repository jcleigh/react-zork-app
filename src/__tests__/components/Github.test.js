import { render, screen } from '@testing-library/react';
import Github from '../../components/Github';

test('renders Github', () => {
    render(<Github />);
    const githubElement = screen.getByTestId('githubIcon');
    expect(githubElement).toBeInTheDocument();
});

test('renders Github link', () => {
    render(<Github />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveProperty('href', 'https://github.com/jcleigh/react-zork-app');
});