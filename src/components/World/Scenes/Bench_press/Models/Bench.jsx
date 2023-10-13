import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'

const Bench = (props) => {

    const { nodes, materials } = useGLTF("/assets/models/gym/benchPress.glb");
    const benchRef = useRef()
    useEffect(() =>{
        benchRef.current.sleep();
    },[])

    return (
        <group {...props}>
            <RigidBody
                ref={benchRef}
                type="fixed"
                colliders="trimesh"
                rotation-z={1.58}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Bench_Press_01_-_Default_0"].geometry}
                    material={materials["01_-_Default"]}
                />
            </RigidBody>
        </group>
    )
}

export default Bench
useGLTF.preload("/assets/models/gym/benchPress.glb");