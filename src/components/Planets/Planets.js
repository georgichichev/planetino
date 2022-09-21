import './Planets.css';
import { motion } from "framer-motion";
import {planets} from '../../planets.js';
import {useState} from "react";

const variantSetter = (x) =>{
    return{
        open: {
            x: x,
            y: -350,
            transition:{
                type: 'spring',
                stiffness: 70
            },
            scale: 5
        },
        closed: {
            x: 0,
            y: 0,
            transition:{
                type: 'spring',
                stiffness: 50}
            }
        }
    };

const Planets = () => {
    const [selectedPlanet, setSelectedPlanet] = useState('');

    const onPlanetClickHandler = (name) =>{
        if (selectedPlanet === name){
            setSelectedPlanet('');
        }
        else{
            setSelectedPlanet(name);
        }
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
                        animate={selectedPlanet === planet.name ? 'open' : 'closed'}
                        whileHover={selectedPlanet !== planet.name ? {scale: 1.2, transition:{duration:0.5}} : null}
                        variants={variantSetter(planet.x)}
                    />
                ))}
            </section>
        </>
    )
}

export default Planets