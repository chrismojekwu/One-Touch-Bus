import React from "react";
import { render, screen } from "@testing-library/react";
import Header from './Header'

it('renders the header image without crashing', () => {
    render(<Header/>);
    expect(screen.getAllByRole('img').length).toBe(1);
})