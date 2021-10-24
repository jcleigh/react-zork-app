import { render, screen } from '@testing-library/react';
import Heading from '../../components/Heading';

test('renders Heading', () => {
    const expectedTitle = 'foobar';
    render(<Heading title={expectedTitle} />);
    const headingElement = screen.getByText(expectedTitle);
    expect(headingElement).toBeInTheDocument();
});
