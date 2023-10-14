import { Center, Float, Text3D } from '@react-three/drei';
import React from 'react'

const MotivationalText = (props) => {
    return (
        <group {...props}>
            <Float speed={5}>
                <Center position-y={2}>
                    <Text3D
                        font='/assets/fonts/CaveatFont.json'
                    >
                        {"Five More Reps!!!"}
                        <meshNormalMaterial />

                    </Text3D>
                </Center>
            </Float>
        </group>
    )
}

export default MotivationalText;