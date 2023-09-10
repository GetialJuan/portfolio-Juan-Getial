import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Cat = () => {
    const catRef = useRef();
    const catModel = useGLTF("/assets/models/cat/scene.gltf");
    const {animations} = catModel;

    const {actions} = useAnimations(animations, catRef);

    useEffect(() => {
        const action = actions["show_lc_001"]
        action.play()
    }, [])

    return (
        //[-3.6, 0.9, 0]
        <mesh ref={catRef} position={[2, -1, 0]} rotation-y={-Math.PI * 0.1} rotation-x={-Math.PI * -0.05} scale={1}>
            <primitive object={catModel.scene}/>
        </mesh>
    )
}

export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");