import { Center, Float, Text3D } from '@react-three/drei';
import React from 'react'

const MotivationalText = () => {
    return (
        <Float speed={5}>
            <Center position-y={2.5} position-x={0.5}>
                <Text3D
                    font='/assets/fonts/CaveatFont.json'
                    scale={0.8}
                >
                    {"Never Give Up"}
                    <meshNormalMaterial />

                </Text3D>
            </Center>
        </Float>
    )
}

export default MotivationalText;