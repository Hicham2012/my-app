import { render, screen } from '@testing-library/react';
import { BookingForm } from './Reservation';

test('Render the BookingForm header', () => {
    render( < BookingForm / > );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument()
})