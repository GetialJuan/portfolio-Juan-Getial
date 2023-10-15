
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Dumbell = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/dumbell/dumbell.glb");
  const dumbellRef = useRef()
  useEffect(() => {
    dumbellRef.current.sleep()
  }, [])
  const [dumbellSoundMp3] = useState(() => new Audio("assets/sounds/dumbell.mp3"))
  const [dumbellSound, setDumbellSound] = useState(false)


  const handleClick = (e) =>{

    const posOrNeg = () => {return Math.round(Math.random()) ? 1 : -1}
    const ramdomN = (li, ls) => {return posOrNeg() * (Math.floor(Math.random()*ls) + li)}

    dumbellRef.current.wakeUp()
    dumbellRef.current.applyImpulse({
      x:ramdomN(10,20),
      y:ramdomN(10,20),
      z:ramdomN(10,20),
    },true)
    
    dumbellRef.current.applyTorqueImpulse({
      x:ramdomN(10,20),
      y:ramdomN(10,20),
      z:ramdomN(10,20),
    },true)

  }

  useEffect(()=>{
    if(dumbellSound){
        dumbellSoundMp3.currentTime = 0;
        dumbellSoundMp3.volume = 0.1;
        dumbellSoundMp3.play();
    }
},[dumbellSound])

  return (
    <RigidBody
      type="dynamic"
      colliders='trimesh'
      ref={dumbellRef}
      onCollisionEnter={() => setDumbellSound(true)}
      onIntersectionExit={() => setDumbellSound(false)}
    >
      <group
        {...props}
        dispose={null}
        onClick={(e) => handleClick(e)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.001"]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-1, -0.585, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.001"]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-1, -0.585, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          scale={[0.183, 0.562, 0.183]}
        />
      </group>
    </RigidBody>
  );
}

export default Dumbell;
useGLTF.preload("/assets/models/dumbell/dumbell.glb");