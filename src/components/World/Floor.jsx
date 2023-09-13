import { useTexture } from "@react-three/drei";

const Floor = () => {

    const PATH = "/assets/textures/wood/"
    const propsTexture = useTexture({
        map: PATH + "wood_color.jpg",
        normalMap: PATH + 'wood_normal.jpg',
        roughnessMap: PATH + 'wood_roughness.jpg',
        aoMap: PATH + 'wood_ao.jpg',
    })

    return (
        <mesh position-y={-2} rotation-x={-Math.PI / 2} >
            <planeGeometry attach="geometry" args={[12, 12]} />
            <meshStandardMaterial {...propsTexture} />
        </mesh>
    );
}

export default Floor;