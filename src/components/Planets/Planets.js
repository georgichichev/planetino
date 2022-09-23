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
                className="heading"
                initial={{opacity: 0,y: -50}}
                animate={{opacity:1,y: 0, transition:{duration:2.5}}}
            >
                Discover Solar System
            </motion.p>
            <motion.p
                className="selectHeading"
                initial={{opacity: 0, y:150}}
                animate={{opacity:1, y:0, transition:{duration:1, delay:2}}}
            >
                select a planet
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