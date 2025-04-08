import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DemoComponent from './DemoComponent';

test('renders initial message and changes message on button click', () => {
    render(<DemoComponent />);

    // Check initial message
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();

    // Click the button
    fireEvent.click(screen.getByText('Click me'));

    // Check updated message
    expect(screen.getByText('You clicked the button!')).toBeInTheDocument();
});