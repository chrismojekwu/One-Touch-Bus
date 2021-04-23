import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Header from './Header'

it('renders the header image without crashing', () => {
    render(<Header/>);
    expect(screen.getAllByRole('img').length).toBe(1);
})

it('renders the snapshot correctly', () => {
    const tree = 
    renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
});