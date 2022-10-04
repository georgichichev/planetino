import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import PlanetInfo from "./PlanetInfo.js";

const planet = {
    name: 'mercury',
    initial: {x: 820, y: -400},
    open:{x: 560},
    brief:[
        ['SMALL WORLD', 'Mercury is the smallest planet in our solar system – only slightly larger than Earth\'s Moon. '],
        ['CAN\'T BREATHE THERE', 'Mercury\'s thin atmosphere, or exosphere, is composed mostly of oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and potassium (K). '],
    ]
}

test('should display planet name', () =>{
    render(<PlanetInfo info={planet}/>);

    expect(screen.getByText('MERCURY')).toBeInTheDocument();
});

test('should display planet facts', () =>{
    render(<PlanetInfo info={planet}/>);

    expect(screen.getByText('SMALL WORLD')).toBeInTheDocument();
});