import Geometries from "./components/Geometries/Geometries";
import Cat from "./components/World/Cat";
import Chest from "./components/World/Chest";


const Experience = ({ title, info }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />

            <Geometries />

            <Chest scale={0.004}
                position-z={0}
                position={[0, 1]}
                rotation-y={Math.PI * 1.8}/>

                    <Cat />
        </>
    );
}

export default Experience;