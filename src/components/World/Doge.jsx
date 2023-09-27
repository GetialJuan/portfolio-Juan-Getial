import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react'

const Doge = (props) => {
    const dogeModel = useGLTF("/assets/models/doge/scene.gltf");
    const dogeRef = useRef()
    const {actions} = useAnimations(dogeModel.animations, dogeRef)

    useEffect(() =>{
        const action = actions["mixamo.com"]
        action.play()
    }, [])

    return (
        <mesh ref={dogeRef} {...props}>
            <primitive object={dogeModel.scene}/>
        </mesh>
    )
}

export default Doge;
useGLTF.preload("/assets/models/doge/scene.gltf");