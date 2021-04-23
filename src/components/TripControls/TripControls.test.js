import React from "react";
import { getByTestId, render, screen, global } from "@testing-library/react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TripControls from './TripControls';

Enzyme.configure({ adapter: new Adapter() });

it("renders the button & tool tip without crashing", () => {
    render(<TripControls/>);
    const theButton = screen.getByRole('button');
    const toolTipElements = screen.getAllByTestId('tooltip-els');
    expect(theButton).toBeInTheDocument();
    expect(toolTipElements.length).toBe(2);
})


