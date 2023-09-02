import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = ({ title, info }) => {
    const boxRef = useRef();
    const sphereRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();

    let cosx = 0;
    let dir = 1;

    useFrame((state, delta) => {
        let x = 1 * delta * dir;
        boxRef.current.position.x += x;
        sphereRef.current.position.x += x;
        coneRef.current.position.x += x;
        torusRef.current.position.x += x;

        let y = Math.cos(cosx) * delta;
        boxRef.current.position.y += y;
        sphereRef.current.position.y += y;
        coneRef.current.position.y += y;
        torusRef.current.position.y += y;

        cosx += 0.03;
        if(boxRef.current.position.x > 5){
            dir = -1;
        }
        else if(boxRef.current.position.x < -10){
            dir = 1;
        }
    })
    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            
            <mesh ref={boxRef} position={[-3,0,0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="yellow" />
            </mesh>
            <mesh ref={sphereRef}>
                <sphereGeometry args={[1, 15, 15]} />
                <meshNormalMaterial color={"blue"} />
            </mesh>
            <mesh ref={coneRef} position={[3, 0, 0]}>
                <coneGeometry args={[1, 3, 32]} />
                <meshToonMaterial color={"green"} />
            </mesh>
            <mesh ref={torusRef} position={[-3, 0, 0]}>
                <torusGeometry args={[1, 0.4, 12, 48]} />
                <meshToonMaterial color={"red"} />
            </mesh>
            
        </>
    );
}

export default Experience;