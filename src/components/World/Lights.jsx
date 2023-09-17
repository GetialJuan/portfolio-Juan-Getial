import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper } from "three";


const Lights = () => {
    const spotLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper);

    return (
        <>
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