import { Physics } from "@react-three/rapier";
import Controls from "./components/World/Controls/Controls";
import Bench_press_scene from "./components/World/Scenes/Bench_press/Bench_press_scene";
import Gym_scene from "./components/World/Scenes/Gym/Gym_scene";
import { createContext, useState } from "react";
import Dumbell_scene from "./components/World/Scenes/Dumbell/Dumbell_scene";

export const MainSceneContext = createContext({
    mainScene: true,
    setMainScene: () => { }
})

const Experience = ({ title, info }) => {
    const [mainScene, setMainScene] = useState(true)

    return (
        <>
            <Controls />
            <MainSceneContext.Provider value={{
                mainScene,
                setMainScene
            }}>

                <Gym_scene />
                <Physics >
                    <Bench_press_scene />

                    <Dumbell_scene />
                </Physics>

            </MainSceneContext.Provider>
        </>
    );
}

export default Experience;