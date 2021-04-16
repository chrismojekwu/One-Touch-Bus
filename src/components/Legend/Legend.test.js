import React from "react";
import { render, screen } from "@testing-library/react";
import Legend from './Legend';

it('renders the legend component and marker imgs without crashing', () => {
    render(<Legend/>);
    expect(screen.getAllByRole('img').length).toBe(2);
})