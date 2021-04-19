import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import RouteDisplay from './RouteDisplay';

it('renders the legend component and marker imgs without crashing', () => {
    render(<RouteDisplay/>);
    const busSection = screen.getByTestId('bus-display');
    expect(busSection).toBeInTheDocument();
})

it('renders a list of buses when provided with data', () => {
    const testBusses = [{route: "Fake Street", rtNum: 1512, des: "Fake Destination 1"}, {route: "Fake Street", rtNum: 1479, des: "Fake Destination 2"}];
    const testList = [{route: "Fake Street", rt: 1512}, {route: "Fake Street", rt: 1479}]
    render(<RouteDisplay busList={testBusses} busNameList={testList}/>);
    const routes = screen.getAllByTestId('close-bus');
    expect(routes.length).toBe(2);
})
