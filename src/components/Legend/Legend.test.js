import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Legend from './Legend';

it('renders the legend component and marker imgs without crashing', () => {
    render(<Legend/>);
    expect(screen.getAllByRole('img').length).toBe(2);
})

it('renders snapshot correcrtly', () => {
    const tree = 
    renderer.create(<Legend/>).toJSON();
    expect(tree).toMatchSnapshot();
});