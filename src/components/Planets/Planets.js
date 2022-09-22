import './Planets.css';
import { motion } from "framer-motion";
import {planets} from '../../planets.js';
import {useState} from "react";
import {variantSetter, animationSetter} from "../../util.js";

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