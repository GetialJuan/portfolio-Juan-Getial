import Geometries from "./components/Geometries/Geometries";
import Cat from "./components/World/Cat";


const Experience = ({ title, info }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />

            <Geometries />

            <Cat />
        </>
    );
}

export default Experience;