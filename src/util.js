export const variantSetter = (planet) => {
    return {
        open: {
            x: planet.open.x,
            y: -350,
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
                type: 'spring',
                stiffness: 50
            },
            scale: planet?.scale
        },
        dimmed: {
            opacity: 0,
            transition:{
                duration: 0.3
            },
            scale: planet?.scale,
            x: planet.initial.x,
            y: planet.initial.y
        }
    };
}

export const animationSetter = (planet, selectedPlanet) =>{
    if(selectedPlanet === ''){
        return 'initial'
    }
    else if(selectedPlanet !== planet){
        return 'dimmed'
    }
    else if(selectedPlanet === planet){
        return 'open'
    }
}