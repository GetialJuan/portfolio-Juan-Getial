import Geometries from "./components/Geometries/Geometries";
import Cat from "./components/World/Cat";
import Environments from "./components/World/Environment";
import Floor from "./components/World/Floor";
import Gym from "./components/World/Gym";
import Food from "./components/World/Gym";
import Lights from "./components/World/Lights";
import { OrbitControls } from "@react-three/drei";


const Experience = ({ title, info }) => {
    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[10, 10, 5]} intensity={2} />

            <Lights />

            <Environments />

            <Floor />

            {/* <Geometries /> */}

            <Cat position={[0, -2.5, 0]} />

            <Gym
                rotation-y={-1.5}
                position-x={-2.5}
                position-y={-1.9}
            />
        </>
    );
}

export default Experience;