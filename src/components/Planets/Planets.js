import './Planets.css';
import { motion } from "framer-motion";
import {planets} from '../../planets.js';
import {useEffect, useState} from "react";
import {planetsVariantSetter, planetsAnimationSetter} from "../../util.js";
import PlanetsHomeInfo from "../PlanetsHomeInfo/PlanetsHomeInfo.js";

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
            <PlanetsHomeInfo/>
            <section className="planets">
                {planets.map(planet => (
                    <motion.img
                        key={planet.name}
                        className="planet"
                        src={require(`../../assets/planets/${planet.name}.png`)}
                        alt="planet"
                        onClick={() => onPlanetClickHandler(planet.name)}
                        animate={planetsAnimationSetter(planet.name, selectedPlanet)}
                        variants={planetsVariantSetter(planet)}
                    />
                ))}
            </section>
        </>
    )
}

export default Planets