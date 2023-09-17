import Geometries from "./components/Geometries/Geometries";
import Cat from "./components/World/Cat";
import Environments from "./components/World/Environment";
import Floor from "./components/World/Floor";
import Lights from "./components/World/Lights";


const Experience = ({ title, info }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[10, 10, 5]} intensity={2} />

            <Lights />

            <Environments />

            <Floor />

            <Geometries />

            <Cat position={[0, -2.5, 0]}/>
        </>
    );
}

export default Experience;