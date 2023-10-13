import React from 'react'
import Floor from '../Gym/Models/Floor'
import Wall from './Models/Wall'
import { RigidBody } from '@react-three/rapier'
import Barbell from './Models/Barbell'
import Bench from './Models/Bench'
import MotivationalText from './Text/MotivationalText'

const Bench_press_scene = () => {
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
                scale={0.8  }
            />
            <Barbell 
                position={[27.8, 2, -0.3]}
                scale={0.1}
            />
            <Bench 
                scale={0.05}
                position={[27,-0.17,-1]}
                rotation-y={1.6}
            />
            <MotivationalText 
                position={[32,-1,2]}
                rotation-y={1}
                scale={0.8}
            />
        </>

    )
}

export default Bench_press_scene