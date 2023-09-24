import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Geometries = () => {
    const boxRef = useRef();
    const sphereRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();

    useFrame((state, delta) => {
        coneRef.current.rotation.x += 1 * delta;
        coneRef.current.rotation.y += 1 * delta;
        boxRef.current.rotation.x += 1 * delta;
        torusRef.current.position.y = Math.sin(state.clock.getElapsedTime()) - 0.3;
        torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
        sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime()) - 0.3;
    })
    return (
        <>

            <mesh ref={coneRef} position={[2,-0.5, -4]}>
                <coneGeometry args={[1, 2, 15]} />
                <meshStandardMaterial wireframe color={"green"} />
            </mesh>

            <mesh ref={boxRef} position={[3, -0.5, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
            
            <mesh ref={torusRef} position={[-2, -1, -4]} rotation={[-Math.PI / 4, 0, 0]} scale={0.4}>
                <torusGeometry args={[2, 1, 32, 64]} />
                <meshStandardMaterial wireframe color="yellow" />
            </mesh>

            <mesh ref={sphereRef} position={[-3, 0, 0]} scale={0.3}>
                <sphereGeometry args={[2, 16, 32]} />
                <meshToonMaterial color="purple" />
            </mesh>
            
        </>
    );
}

export default Geometries;