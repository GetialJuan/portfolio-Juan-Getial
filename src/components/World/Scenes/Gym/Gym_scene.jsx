import React, { useRef } from 'react'
import Lights from '../../Staging/Lights'
import Environments from '../../Staging/Environment'
import Floor from './Models/Floor'
import Doge from './Models/Doge'
import Gym from './Models/Gym'
import SocratesText from './Text/SocratesText'
import MotivationalText from './Text/MotivationalText'
import { Text3D } from '@react-three/drei'

const Gym_scene = () => {

    const GitbubText = (props) => {
        const text = "Click me to see\nmy Github Profile\n          v"
        return (
            <mesh
                scale={0.25}
                ref={githubTextRef}
                position={[-0.3, -0.05, 4]}
                rotation-z={0.57}
            >
                <Text3D
                    font='/assets/fonts/CaveatFont.json'
                >
                    {text}
                    <meshBasicMaterial color={"red"} />
                </Text3D>
            </mesh>

        )
    }

    const githubTextRef = useRef()

    const onPointerOverDoge = (e) => {
        githubTextRef.current.children[0].scale.addScalar(0.5)
        githubTextRef.current.children[0].material.color.setRGB(0, 1, 0)
    }
    const onPointerOutDoge = (e) => {
        githubTextRef.current.children[0].scale.addScalar(-0.5)
        githubTextRef.current.children[0].material.color.setRGB(1, 0, 0)
    }

    return (
        <>

            <Lights />

            <Environments />

            <Floor />

            <group
                onPointerOver={(e) => onPointerOverDoge(e)}
                onPointerOut={(e) => onPointerOutDoge(e)}
                onClick={(e) => {
                    window.open('https://github.com/GetialJuan')
                }}
            >
                <Doge position={[2, -2, 4]} rotation-y={0} />
            </group>
            <GitbubText />

            <Gym
                rotation-y={-1.5}
                position-x={-2.5}
                position-y={-1.9}
                position-z={1}
            />

            <SocratesText/>
            <MotivationalText />
        </>
    )
}

export default Gym_scene