import './PlanetInfoCard.css';

const PlanetInfoCard = ({fact}) => {
    return(
        <article className="planetInfoCard">
            <header className="planetInfoHeading">
                {fact[0]}
            </header>
            <p className="planetInfoText">
                {fact[1]}
            </p>
        </article>
    )
}

export default PlanetInfoCard