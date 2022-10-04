import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import PlanetsHomeInfo from "./PlanetsHomeInfo.js";

test('should display planets home info', () =>{
    render(<PlanetsHomeInfo/>);

    expect(screen.getByText('Discover Solar System')).toBeInTheDocument();
});