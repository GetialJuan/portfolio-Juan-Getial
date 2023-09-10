import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Chest(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/chest/minecraft_chest.glb");

    const PATH = "/assets/textures/wood/"
    const propsTexture = useTexture({
        map: PATH + "wood_color.jpg",
        normalMap: PATH + 'wood_normal.jpg',
        roughnessMap: PATH + 'wood_roughness.jpg',
        aoMap: PATH + 'wood_ao.jpg',
    })

    const woodenMaterial = new MeshStandardMaterial(propsTexture);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="chestfbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Chest_0_A"
                                    position={[-6.365, -87.985, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                >
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_12"
                                            geometry={nodes.Object_12.geometry}
                                            material={woodenMaterial}
                                            skeleton={nodes.Object_12.skeleton}
                                        />
                                        <group
                                            name="Object_11"
                                            rotation={[-Math.PI / 2, 0, 0]}
                                            scale={100}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Chest_0"
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

export default Chest;
useGLTF.preload("/assets/models/chest/minecraft_chest.glb");