import React from 'react'
import Lights from '../../Staging/Lights'
import Environments from '../../Staging/Environment'
import Floor from './Models/Floor'
import Doge from './Models/Doge'
import Gym from './Models/Gym'
import SocratesText from './Text/SocratesText'
import MotivationalText from './Text/MotivationalText'

const Gym_scene = () => {
    return (
        <>

            <Lights />

            <Environments />

            <Floor />

            <Doge position={[3, -2, 4]} rotation-y={-1} />

            <Gym
                rotation-y={-1.5}
                position-x={-2.5}
                position-y={-1.9}
                position-z={1}
            />

            <SocratesText />
            <MotivationalText />
        </>
    )
}

export default Gym_scene