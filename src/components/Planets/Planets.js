import './Planets.css';
import { motion } from "framer-motion";
import {planets} from '../../planets.js';
import {useState} from "react";

const variantSetter = (x) =>{
    return{
        open: {x: x, y: -350, scale: 5},
        closed: {x: 0, y: 0}
    }
};

const Planets = () => {
    const [isOpen, setIsOpen] = useState({
        mercury: false,
        venus: false,
        earth: false,
        mars: false,
        jupiter: false,
        uranus: false,
        neptune: false,
        pluto: false
    });

    const onPlanetClickHandler = (name) =>{
        setIsOpen({...isOpen, [name]: !isOpen[name]})
    };

    return(
        <>
            <section className="planets">
                {planets.map(planet => (
                    <motion.img
                        key={planet.name}
                        className="planet"
                        src={require(`../../assets/planets/${planet.name}.png`)}
                        alt="planet"
                        onClick={() => onPlanetClickHandler(planet.name)}
                        animate={isOpen[planet.name] ? 'open' : 'closed'}
                        whileHover={!isOpen[planet.name] ? {scale: 1.2} : null}
                        variants={variantSetter(planet.x)}
                    />
                ))}
            </section>
        </>
    )
}

export default Planets