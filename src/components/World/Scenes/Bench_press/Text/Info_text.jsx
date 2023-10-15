import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useContext, useState } from 'react'
import { MathUtils } from 'three'
import { MainSceneContext } from '../../../../../Experience'

const Info_text = (props) => {

    const {mainScene, setMainScene} = useContext(MainSceneContext)

    const handleOnClick = (e) => {
        setMainScene(true)
    }


    return (
        <group {...props}>
            <Text
                font='/assets/fonts/CaveatFont.ttf'
                textAlign='center'
                color={"blue"}
                onClick={(e) => handleOnClick(e)}
            >
                {props.text}
            </Text>
        </group>
    )
}

export default Info_text;