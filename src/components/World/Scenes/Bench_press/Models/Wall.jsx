import { useTexture } from "@react-three/drei";

const Wall = (props) => {

    const PATH = "/assets/textures/metallic/"
    const propsTexture = useTexture({
        map: PATH + "metallic_color.jpg"
    })

    return (
        <group {...props}>
            <mesh receiveShadow onClick={(e) => e.stopPropagation()}>
                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial {...propsTexture} />
            </mesh>
        </group>
    );
}

export default Wall;