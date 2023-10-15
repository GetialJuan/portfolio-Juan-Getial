import { Text } from '@react-three/drei'
import React from 'react'

const SocratesText = () => {
    const text = "It is a shame for a man\nto grow old without seeing\nthe beauty and strength \nof which his body is capable.\n- Socrates"
    return (
        <Text
            font='/assets/fonts/CaveatFont.ttf'
            textAlign='center'
            fontSize={0.5}
            position={[-2-1, -1.95, 4]}
            rotation-x={-1.5702}
        >
            {text}
        </Text>
    )
}

export default SocratesText;