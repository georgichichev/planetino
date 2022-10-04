import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Planets from "./Planets.js";
import userEvent from "@testing-library/user-event";

test('should display planets', () =>{
    render(<Planets/>);

    expect(screen.getByTestId('mercury')).toBeInTheDocument();
});

test('should open a planet on click', () =>{
    render(<Planets/>);

    userEvent.click(screen.getByTestId('mercury'));

    expect(screen.getByText('MERCURY')).toBeInTheDocument();
});

test('should return to home on second planet click', () =>{
    render(<Planets/>);

    userEvent.click(screen.getByTestId('mercury'));
    userEvent.click(screen.getByTestId('mercury'));

    expect(screen.getByText('Discover Solar System')).toBeInTheDocument();
})

test('should not open sun on click', () =>{
    render(<Planets/>);

    userEvent.click(screen.getByTestId('sun'));

    expect(screen.getByText('Discover Solar System')).toBeInTheDocument();
});