export const variantSetter = (planet) => {
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
            transition:{
                duration: 2.5
            },
            scale: planet?.scale
        },
        close:{
            x: planet.initial.x,
            y: planet.initial.y,
            scale: planet?.scale,
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
    if(selectedPlanet.initialAnimation){
        return 'initial'
    }
    else if(selectedPlanet.name === ''){
        return 'close'
    }
    else if(selectedPlanet.name !== planet){
        return 'dimmed'
    }
    else if(selectedPlanet.name === planet){
        return 'open'
    }
}