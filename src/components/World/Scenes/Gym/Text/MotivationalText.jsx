import { Center, Float, Text3D } from '@react-three/drei';
import React from 'react'

const MotivationalText = () => {
    return (
        <Float speed={5}>
            <Center position-y={2}>
                <Text3D
                    font='/assets/fonts/CaveatFont.json'
                >
                    {"Never Give Up"}
                    <meshNormalMaterial />

                </Text3D>
            </Center>
        </Float>
    )
}

export default MotivationalText;