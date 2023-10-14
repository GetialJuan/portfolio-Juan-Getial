
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Dumbell = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/dumbell/dumbell.glb");
  return (
    <group {...props} dispose={null}>
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
  );
}

export default Dumbell;
useGLTF.preload("/assets/models/dumbell/dumbell.glb");