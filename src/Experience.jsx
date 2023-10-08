import Controls from "./components/World/Controls/Controls";
import Bench_press_scene from "./components/World/Scenes/Bench_press/Bench_press_scene";
import Gym_scene from "./components/World/Scenes/Gym/Gym_scene";

const Experience = ({ title, info }) => {
    return (
        <>
            <Controls />
            <Gym_scene />
            <Bench_press_scene />
        </>
    );
}

export default Experience;