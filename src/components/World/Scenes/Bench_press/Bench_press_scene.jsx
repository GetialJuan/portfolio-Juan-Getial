import React from 'react'
import Floor from '../Gym/Models/Floor'
import Wall from './Models/Wall'
import Bench_press from './Models/Bench_press'

const Bench_press_scene = () => {
    return (
        <>
            <Floor position-x={30} position-z={1} />
            <Wall
                position-x={24}
                rotation-y={1.6}
                position-z={1}
            />
            <Bench_press
                scale={2}
                position-x={29}
                position-y={-2}
                rotation-y={2}
            />
        </>

    )
}

export default Bench_press_scene