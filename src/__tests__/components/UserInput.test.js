import { render, screen } from '@testing-library/react';
import UserInput from '../../components/UserInput';

test('renders UserInput', () => {
    render(<UserInput />);
    const userInputElement = screen.getByRole('textbox');
    expect(userInputElement).toBeInTheDocument();
    expect(userInputElement).toHaveProperty('placeholder', 'Not yet implemented');
});
