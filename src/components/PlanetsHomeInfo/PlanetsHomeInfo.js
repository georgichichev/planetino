import {motion} from "framer-motion";
import './PlanetsHomeInfo.css';
import {infoAnimationSetter, infoInitialSetter} from "../../util.js";

const planetsInfo = [
    {text: 'planets', count: '8', delay: 2.5},
    {text: 'moons', count: '200 +', delay: 3},
    {text: 'asteroids', count: '1 113 527', delay: 3.5},
    {text: 'comets', count: '3 743', delay: 4},
]

const PlanetsHomeInfo = ({didMount}) => {
    return (
        <>
            <motion.p
                className="heading"
                initial={infoInitialSetter(didMount, 'heading')}
                animate={infoAnimationSetter(didMount, 'heading')}
            >
                Discover Solar System
            </motion.p>
            <motion.p
                className="selectHeading"
                initial={infoInitialSetter(didMount, 'selectHeading')}
                animate={infoAnimationSetter(didMount, 'selectHeading')}
            >
                select a planet
            </motion.p>
            <div className="planetsInfo">
                {planetsInfo.map(x => (
                    <div key={x.text}>
                        <motion.div
                            initial={infoInitialSetter(didMount, 'planetsInfo', x.delay)}
                            animate={infoAnimationSetter(didMount, 'planetsInfo', x.delay)}
                        >
                            <div>{x.text}</div>
                            <div>{x.count}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PlanetsHomeInfo