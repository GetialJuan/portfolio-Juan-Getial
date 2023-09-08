import { OrbitControls } from "@react-three/drei";
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
        torusRef.current.position.y = Math.sin(state.clock.getElapsedTime());
        torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
        sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime());
    })
    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />

            <mesh ref={coneRef} position={[4.6, 0, -4]}>
                <coneGeometry args={[1, 2, 15]} />
                <meshStandardMaterial wireframe color={"green"} />
            </mesh>

            <mesh ref={boxRef} position={[6, 0, -2]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
            
            <mesh ref={torusRef} position={[-1.5, 0, -5]} rotation={[-Math.PI / 4, 0, 0]} scale={0.6}>
                <torusGeometry args={[2, 1, 32, 64]} />
                <meshStandardMaterial wireframe color="yellow" />
            </mesh>

            <mesh ref={sphereRef} position={[3, -7, -10]}>
                <sphereGeometry args={[2, 16, 32]} />
                <meshToonMaterial color="purple" />
            </mesh>
            
        </>
    );
}

export default Geometries;