import './Planets.css';
import { motion } from "framer-motion";
import {planets} from '../../planets.js';
import {useState} from "react";

const variantSetter = (planet) => {
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

const animationSetter = (planet, selectedPlanet) =>{
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

const Planets = () => {
    const [selectedPlanet, setSelectedPlanet] = useState('');

    const onPlanetClickHandler = (name) =>{
        if (selectedPlanet === name){
            setSelectedPlanet('');
        }
        else if(name === 'sun'){
            setSelectedPlanet('');
        }
        else{
            setSelectedPlanet(name);
        }
    };

    return(
        <>
            <motion.p
                className="text"
                initial={{opacity: 0}}
                animate={{opacity:1, transition:{duration:2}}}
            >
                Planet text here
            </motion.p>
            <section className="planets">
                {planets.map(planet => (
                    <motion.img
                        key={planet.name}
                        className="planet"
                        src={require(`../../assets/planets/${planet.name}.png`)}
                        alt="planet"
                        onClick={() => onPlanetClickHandler(planet.name)}
                        animate={animationSetter(planet.name, selectedPlanet)}
                        variants={variantSetter(planet)}
                    />
                ))}
            </section>
        </>
    )
}

export default Planets