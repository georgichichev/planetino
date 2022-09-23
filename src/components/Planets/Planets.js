import './Planets.css';
import { motion } from "framer-motion";
import {planets} from '../../planets.js';
import {useEffect, useState} from "react";
import {variantSetter, animationSetter} from "../../util.js";

const Planets = () => {
    const [selectedPlanet, setSelectedPlanet] = useState({name: '', initialAnimation: true});

    useEffect(() =>{
        setSelectedPlanet({...selectedPlanet, initialAnimation: false});
    }, []);

    const onPlanetClickHandler = (name) =>{
        if (selectedPlanet === name){
            setSelectedPlanet({...selectedPlanet, name: ''});
        }
        else if(name === 'sun'){
            setSelectedPlanet({...selectedPlanet, name: ''});
        }
        else{
            setSelectedPlanet({...selectedPlanet, name});
        }
    };

    return(
        <>
            <motion.p
                className="text"
                initial={{opacity: 0, scale: 0.25}}
                animate={{opacity:1, scale: 1, transition:{duration:3}}}
            >
                Discover Solar System
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