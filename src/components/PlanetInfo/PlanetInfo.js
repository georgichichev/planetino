import './PlanetInfo.css';
import { motion } from "framer-motion";
import PlanetInfoCard from "./PlanetInfoCard/PlanetInfoCard.js";

const PlanetInfo = ({info}) => {
    return(
        <>
            <motion.p
                className="infoHeading"
                initial={{opacity: 0}}
                animate={{opacity:1, transition:{duration: 0.5}}}
            >
                {info.name.toUpperCase()}
            </motion.p>
            <motion.div
                className="firstFact"
                initial={{opacity: 0, x: -150}}
                animate={{opacity:1, x: 0, transition:{duration: 1.5, delay: 0.2}}}
            >
                <PlanetInfoCard fact={info.brief[0]}/>
            </motion.div>
            <motion.div
                className="secondFact"
                initial={{opacity: 0, y: 150}}
                animate={{opacity:1, y: 0, transition:{duration: 1.5, delay: 0.7}}}
            >
                <PlanetInfoCard fact={info.brief[1]}/>
            </motion.div>
            <motion.p className="returnHeading">
                click on the planet to return
            </motion.p>
        </>
    )
}

export default PlanetInfo