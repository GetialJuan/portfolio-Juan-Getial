import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Bench_press = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/gym/benchPress.glb");

    const Barbell = () => {
        return (
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder001_Material_#0_0"].geometry}
                material={materials.Material_0}
                position={[6.234, 64.133, -24.964]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={1.561}
            />
        )
    }

    const Bench = () => {
        return (
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Bench_Press_01_-_Default_0"].geometry}
                material={materials["01_-_Default"]}
                position={[0, 0, -44.012]}
            />
        )
    }

    return (
        <group {...props} dispose={null}>
            <group scale={0.03}>
                <group
                    position={[-7.419, 28.382, 2.286]}
                    rotation={[0, 0, Math.PI / 2]}
                >
                    <Bench />
                </group>
                <Barbell />
            </group>
        </group>
    );
}

export default Bench_press;
useGLTF.preload("/assets/models/gym/benchPress.glb");