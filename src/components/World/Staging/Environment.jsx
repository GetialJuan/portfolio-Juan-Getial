import { Environment } from "@react-three/drei";

const Environments = () => {
    return (
        <>
            <Environment 
                files={"assets/environments/chinese_garden_1k.hdr"}
                background={true}
            />
        </>
    )
}

export default Environments;