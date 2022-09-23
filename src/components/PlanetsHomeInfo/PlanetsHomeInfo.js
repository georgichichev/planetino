import {motion} from "framer-motion";
import './PlanetsHomeInfo.css';

const planetsInfo = [
    {text: 'planets', count: '8', delay: 3},
    {text: 'moons', count: '200 +', delay: 3.5},
    {text: 'asteroids', count: '1 113 527', delay: 4},
    {text: 'comets', count: '3 743', delay: 4.5},
]

const PlanetsHomeInfo = () => {
    return (
        <>
            <motion.p
                className="heading"
                initial={{opacity: 0, scale: 0.25}}
                animate={{opacity: 1, scale: 1, transition: {duration: 3}}}
            >
                Discover Solar System
            </motion.p>
            <motion.p
                className="selectHeading"
                initial={{y: 230}}
                animate={{y: 0, transition: {duration: 1, delay: 5.5}}}
            >
                select a planet
            </motion.p>
            <div className="planetsInfo">
                {planetsInfo.map(x => (
                    <>
                        <motion.p
                            initial={{y: 210}}
                            animate={{y: 0, transition: {delay: x.delay}}}
                        >
                            <div>{x.text}</div>
                            <div>{x.count}</div>
                        </motion.p>
                        <motion.div
                            className="divider"
                            initial={{opacity:0}}
                            animate={{opacity: 1, transition: {delay: x.delay}}}
                        />
                    </>
                ))}
            </div>
        </>
    )
}

export default PlanetsHomeInfo