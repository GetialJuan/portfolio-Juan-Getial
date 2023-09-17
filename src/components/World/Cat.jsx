import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Cat = (props) => {
    const catRef = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/cat/lowpoly_cat_npc.glb");

    const { actions } = useAnimations(animations, catRef);

    useEffect(() => {
        const action = actions["show_lc_001"]
        action.play()
    }, [])

    return (
        <group ref={catRef} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={241.792}
                >
                    <group
                        name="Mmengchong_10004fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Mmengchong_10004">
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            castShadow
                                            name="Object_8"
                                            geometry={nodes.Object_8.geometry}
                                            material={materials.Mmengchong_T_10004}
                                            skeleton={nodes.Object_8.skeleton}
                                        />
                                        <group name="Object_7" rotation={[-Math.PI / 2, 0, 0]} />
                                        <group name="pet_004_0" rotation={[-Math.PI / 2, 0, 0]} />
                                        <group name="EF_cw_002">
                                            <group
                                                name="EF_cw_002_01"
                                                rotation={[-Math.PI / 2, 0, 0]}
                                            >
                                                <group name="lizi5" position={[0, 0, 0.3]} />
                                                <group name="lizi4" position={[0, 0, 0.3]} />
                                                <group name="lizi1" position={[0, 0.05, 0]} />
                                                <group name="lizi2" position={[0, 0.2, 0.1]} />
                                                <group name="lizi3" position={[0, 0.2, 0.1]} />
                                            </group>
                                            <group name="EF_cw_002_03">
                                                <group
                                                    name="di_glow_b"
                                                    rotation={[-Math.PI / 2, 0, 0]}
                                                />
                                                <group name="di_starstar" />
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Cat;
useGLTF.preload("/assets/models/cat/lowpoly_cat_npc.glb");