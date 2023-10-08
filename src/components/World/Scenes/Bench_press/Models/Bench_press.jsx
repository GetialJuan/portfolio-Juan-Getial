import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Bench_press = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/gym/benchPress.glb");

    const barbellRef = useRef()
    const benchRef = useRef()

    const [dumbellSound, setDumbellSound] = useState(false)
    const [dumbellSoundMp3] = useState(()=>new Audio("assets/sounds/dumbell.mp3"))

    const Barbell = () => {
        return (
            <RigidBody
                ref={barbellRef}
                type="dynamic"
                colliders="trimesh"
                position={[6.234, 67, -24.964]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder001_Material_#0_0"].geometry}
                    material={materials.Material_0}
                    scale={1.561}
                />
            </RigidBody>
        )
    }

    const Bench = () => {
        return (
            <RigidBody
                ref={benchRef}
                type="dynamic"
                colliders="trimesh"
                position={[0, 0.1, -44.012]}
                onCollisionEnter={(e) => setDumbellSound(true)}
                onCollisionExit={(e) => setDumbellSound(false)}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Bench_Press_01_-_Default_0"].geometry}
                    material={materials["01_-_Default"]}
                    onClick={(e) => onClickBench(e)}
                />
            </RigidBody>
        )
    }

    const onClickBench = (e) => {
        e.stopPropagation()
        barbellRef.current.applyImpulse({
            x:0,
            y:0.7,
            z:0
        },true)
        barbellRef.current.addTorque({
            x:1,
            y:1,
            z:0
        },true)
    }

    useEffect(() =>{
        barbellRef.current.sleep()
        benchRef.current.sleep()
    },[])

    useEffect(()=>{
        if(dumbellSound){
            dumbellSoundMp3.currentTime = 0;
            dumbellSoundMp3.volume = Math.random();
            dumbellSoundMp3.play();
        }
    },[dumbellSound])

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