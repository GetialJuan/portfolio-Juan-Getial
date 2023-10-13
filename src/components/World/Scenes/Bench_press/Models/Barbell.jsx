import { useGLTF } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'

const Barbell = (props) => {

    const { nodes, materials } = useGLTF("/assets/models/gym/benchPress.glb");

    const barbellRef = useRef()

    useEffect(() =>{
        barbellRef.current.sleep();
    },[])

    const [dumbellSound, setDumbellSound] = useState(false)
    const [dumbellSoundMp3] = useState(() => new Audio("assets/sounds/dumbell.mp3"))

    // Handle Click Event
    const handleClickEvent = (e) => {
        
        
        barbellRef.current.wakeUp()
        barbellRef.current.setTranslation.y +=1
        barbellRef.current.applyImpulse({
            x:0,
            y:0.5,
            z:0
        },true)

        window.open('https://cum-ashen.vercel.app/')
    }

    // Audio efect
    useEffect(()=>{
        if(dumbellSound){
            dumbellSoundMp3.currentTime = 0;
            dumbellSoundMp3.volume = 0.5;
            dumbellSoundMp3.play();
        }
    },[dumbellSound])

    return (
        <group {...props}>
            <RigidBody
                ref={barbellRef}
                type="dynamic"
                colliders={false}
            >
                <CuboidCollider 
                    position={[0,0,-8]}
                    args={[1, 1, 24]} 
                    onCollisionEnter={() => {
                        setDumbellSound(true)
                        barbellRef.current.sleep()
                    }}
                    onCollisionExit={() => setDumbellSound(false)}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder001_Material_#0_0"].geometry}
                    material={materials.Material_0}

                    onClick={(e) => handleClickEvent(e)}
                />
            </RigidBody>
        </group>

    )
}

export default Barbell
useGLTF.preload("/assets/models/gym/benchPress.glb");