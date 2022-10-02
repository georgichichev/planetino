export const planetsVariantSetter = (planet) => {
    return {
        open: {
            x: planet.open.x,
            y: -250,
            transition: {
                type: 'spring',
                stiffness: 70
            },
            scale: 5
        },
        initial: {
            x: planet.initial.x,
            y: planet.initial.y,
            transition: {
                duration: 2.5
            },
            scale: planet?.scale
        },
        close: {
            x: planet.initial.x,
            y: planet.initial.y,
            scale: planet?.scale,
        },
        dimmed: {
            opacity: 0,
            transition: {
                duration: 0.3
            },
            scale: planet?.scale,
            x: planet.initial.x,
            y: planet.initial.y
        }
    };
};

export const planetsAnimationSetter = (planet, selectedPlanet, didMount) => {
    if (didMount) {
        return 'initial'
    } else if (selectedPlanet === '') {
        return 'close'
    } else if (selectedPlanet !== planet) {
        return 'dimmed'
    } else if (selectedPlanet === planet) {
        return 'open'
    }
};

export const infoInitialSetter = (didMount, component) => {
    if (!didMount) {
        return {opacity: 0.1}
    } else {
        switch (component) {
            case 'heading':
                return {opacity: 0, scale: 0.75}
            case 'selectHeading':
                return {y: 230}
            case 'planetsInfo':
                return {y: 210}
            default:
                return null
        }
    }
};

export const infoAnimationSetter = (didMount, component, delay) =>{
    if(!didMount){
        return {opacity: 1}
    } else {
        switch (component) {
            case 'heading':
                return {opacity: 1, scale: 1, transition: {duration: 2}}
            case 'selectHeading':
                return {y: 0, transition: {duration: 2, delay: 5}}
            case 'planetsInfo':
                return {y: 0, transition: {duration: 1, delay}}
            default:
                return null
        }
    }
}