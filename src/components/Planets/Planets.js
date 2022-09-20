import './Planets.css';
import { motion } from "framer-motion";

const planets = [
    'mercury.png',
    'venus.png',
    'earth.png',
    'mars.png',
    'jupiter.png',
    'uranus.png',
    'neptune.png',
    'pluto.png'
];

const Planets = () => {
    return(
        <>
            <section className="planets">
                {planets.map(x => (
                    <motion.img
                        className="planet"
                        src={require(`../../assets/planets/${x}`)}
                        alt="planet"
                        whileHover={{scale: 2}}
                    />
                ))}
            </section>
        </>
    )
}

export default Planets