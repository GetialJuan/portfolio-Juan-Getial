import { Center, Float, Text3D } from '@react-three/drei';
import React from 'react'

const AdviceText = (props) => {
    return (
        <group {...props}>
            <Float speed={5}>
                <Text3D
                    font='/assets/fonts/CaveatFont.json'
                >
                    {"Lift the Dumbells!!!"}
                    <meshNormalMaterial />

                </Text3D>
            </Float>
        </group>
    )
}

export default AdviceText;