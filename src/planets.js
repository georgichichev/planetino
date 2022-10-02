export const planets = [
    {
        name: 'mercury',
        initial: {x: 820, y: -400},
        open:{x: 560},
        brief:[
            ['SMALL WORLD', 'Mercury is the smallest planet in our solar system – only slightly larger than Earth\'s Moon. '],
            ['CAN\'T BREATHE THERE', 'Mercury\'s thin atmosphere, or exosphere, is composed mostly of oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and potassium (K). '],
        ]
    },
    {
        name: 'venus',
        initial: {x: 100, y: -350},
        open:{x: 420},
        brief:[
            ['SECOND ROCK', 'Venus is the second closest planet to the Sun, orbiting at a distance of about 67 million miles (108 million kilometers)'],
            ['LONG DAYS, SHORT YEARS', 'Venus rotates very slowly on its axis – one day on Venus lasts 243 Earth days. The planet orbits the Sun faster than Earth, however, so one year on Venus takes only about 225 Earth days, making a Venusian day longer than its year!'],
        ]
    },
    {
        name: 'earth',
        initial: {x: 700, y: -200},
        open:{x: 280},
        brief:[
            ['MEASURING UP', 'If the Sun were as tall as a typical front door, Earth would be the size of a nickel.'],
            ['HOME, SWEET HOME', 'Earth is the perfect place for life as we know it.'],
        ]
    },
    {
        name: 'mars',
        initial: {x: -400, y: -150},
        open:{x: 140},
        brief:[
            ['LONGER DAYS', 'One day on Mars takes a little over 24 hours. Mars makes a complete orbit around the Sun (a year in Martian time) in 687 Earth days.'],
            ['TOUGH PLACE FOR LIFE', 'At this time, Mars\' surface cannot support life as we know it. Current missions are determining Mars\' past and future potential for life.'],
        ]
    },
    {
        name: 'jupiter',
        initial: {x: 700, y: -600},
        open:{x: 0},
        brief:[
            ['WHAT\'S INSIDE', 'Jupiter is a gas giant and so lacks an Earth-like surface. If it has a solid inner core at all, it’s likely only about the size of Earth.'],
            ['WORLDS GALORE', 'Jupiter has more than 75 moons.'],
        ]
    },
    {
        name: 'uranus',
        initial: {x: -950, y: -450},
        open:{x:-140 },
        brief:[
            ['ICE GIANT', 'Uranus is an ice giant. Most of its mass is a hot, dense fluid of "icy" materials – water, methane and ammonia – above a small rocky core.'],
            ['HUGE', 'Uranus is about four times wider than Earth. If Earth were a large apple, Uranus would be the size of a basketball.'],
        ]
    },
    {
        name: 'neptune',
        initial: {x: 550, y: 20},
        open:{x: -280},
        brief:[
            ['ONE VOYAGE THERE', 'Voyager 2 is the only spacecraft to have visited Neptune. No spacecraft has orbited this distant planet to study it at length and up close.'],
            ['GIANT', 'Neptune is about four times wider than Earth. If Earth were a large apple, Neptune would be the size of a basketball.'],
        ]
    },
    {
        name: 'pluto',
        initial: {x: -1300, y: 130},
        open:{x: -420},
        brief:[
            ['DEEP SPACE', 'Pluto orbits the Sun about 3.6 billion miles (5.8 billion km) away on average, about 40 times as far as Earth, in a region called the Kuiper Belt.'],
            ['SOLE ENCOUNTER', 'The only spacecraft to visit Pluto is NASA’s New Horizons, which passed close by in July 2015.'],
        ]
    },
    {
        name: 'sun',
        initial: {x: -570, y: -270},
        open:{x: -550},
        scale: 5
    },
];