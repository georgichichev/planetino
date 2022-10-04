import './Planets.css';
import {motion} from "framer-motion";
import {planets} from '../../planets.js';
import {useEffect, useRef, useState} from "react";
import {planetsVariantSetter, planetsAnimationSetter} from "../../util.js";
import PlanetsHomeInfo from "../PlanetsHomeInfo/PlanetsHomeInfo.js";
import PlanetInfo from "../PlanetInfo/PlanetInfo.js";

const Planets = () => {
    const [selectedPlanet, setSelectedPlanet] = useState('');

    const didMount = useRef({planets: true, info: true});

    useEffect(() => {
        didMount.current.planets = false;
        if (selectedPlanet !== '') {
            didMount.current.info = false;
        }
    }, [selectedPlanet]);

    const onPlanetClickHandler = (name) => {
        if (selectedPlanet === name) {
            setSelectedPlanet('');
        } else if (name === 'sun') {
            setSelectedPlanet('');
        } else if (selectedPlanet !== '' && name !== selectedPlanet) {
            return
        } else {
            setSelectedPlanet(name);
        }
    };

    return (
        <>
            {selectedPlanet === '' ?
                <PlanetsHomeInfo didMount={didMount.current.info}/>
                : <PlanetInfo info={planets.find(x => x.name === selectedPlanet)}/>
            }
            <section className="planets">
                {planets.map(planet => (
                        <motion.img
                            key={planet.name}
                            data-testid={planet.name}
                            className="planet"
                            src={require(`../../assets/planets/${planet.name}.png`)}
                            alt="planet"
                            onClick={() => onPlanetClickHandler(planet.name)}
                            whileHover={planet.name !== 'sun' && selectedPlanet === '' ? {scale: 1.1} : null}
                            animate={planetsAnimationSetter(planet.name, selectedPlanet, didMount.current.planets)}
                            variants={planetsVariantSetter(planet)}
                        />
                ))}
            </section>
        </>
    )
}

export default Planets