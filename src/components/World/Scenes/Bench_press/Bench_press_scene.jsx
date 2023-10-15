import React, { createContext } from 'react'
import Floor from '../Gym/Models/Floor'
import Wall from './Models/Wall'
import { RigidBody } from '@react-three/rapier'
import Barbell from './Models/Barbell'
import Bench from './Models/Bench'
import MotivationalText from './Text/MotivationalText'
import Info_text from './Text/Info_text'

const Bench_press_scene = () => {

    const SceneContext = createContext('light');

    return (
        <>
            <RigidBody>
                <Floor
                    position-x={30}
                    position-z={1}
                    scale={0.8}
                />
            </RigidBody>
            <Wall
                position-x={25}
                rotation-y={1.6}
                position-z={1}
                scale={0.8}
            />
            <Barbell
                position={[27.8, 2, -0.3]}
                scale={0.1}
            />
            <Bench
                scale={0.05}
                position={[27, -0.17, -1]}
                rotation-y={1.6}
            />
            <MotivationalText
                position={[32, -1, 2]}
                rotation-y={1}
                scale={0.8}
            />
            <Info_text
                position={[32, 3.2, 2.5]}
                rotation-y={1}
                rotation-x={0.2}
                scale={0.8}
                text={"Click the Barbell"}
            />
            <Info_text
                position={[32, 3.5, -1]}
                rotation-y={1}
                rotation-x={-0.2}
                scale={0.5}
                text={"Click to Back"}
            />
        </>

    )
}

export default Bench_press_scene