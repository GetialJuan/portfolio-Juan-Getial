import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper } from "three";


const Lights = () => {
    const spotLightRef = useRef();

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[10, 10, 5]} intensity={2} />
            <spotLight
                castShadow
                ref={spotLightRef}
                intensity={10}
                position={[5, 2, 0]}
            />
        </>
    )
}

export default Lights;