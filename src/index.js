import { createRoot } from "react-dom/client";
import "./styles.css"
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Info from "./components/Info/Info";

const root = createRoot(document.getElementById("root"))

root.render(
    <>
        <Info
            name="Juan Sebastian Getial"
            biography="Hi friends, i am a developer"
        />
        <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            shadows
        >
            <Experience />
        </Canvas>
    </>
);