import React from "react";
import { render, screen } from "@testing-library/react";
import MapDisplay from './Map';

it("renders without crashing", () => {
    render(<MapDisplay busList={[]} lat={12.3} lng={32.1}/>)
});
