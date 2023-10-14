import React, { useContext, useRef, useState } from "react";
import { Center, Text, Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils, Vector2 } from "three";
import { MainSceneContext } from "../../../../../Experience";

const Gym = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/gym/gym_equipments.glb");
  const {mainScene, setMainScene} = useContext(MainSceneContext)

  const AboutMeText = (props) => {
    const text = "About Me"
    return (
      <Center position={[-2.6, 0, 1]}>
        <mesh
          ref={aboutMeTextRef}
          scale={0.4}
        >
          <Text3D
            font='/assets/fonts/CaveatFont.json'
          >
            {text}
            <meshBasicMaterial color={"red"} />
          </Text3D>
        </mesh>
      </Center>

    )
  }

  const benchPressRef = useRef()
  const aboutMeTextRef = useRef()

  const [selectedScene, setSelectedScene] = useState()

  const onPointerOverBenchPress = (e) => {
    aboutMeTextRef.current.children[0].scale.addScalar(0.5)
    aboutMeTextRef.current.children[0].material.color.setRGB(0, 1, 0)
  }
  const onPointerOutBenchPress = (e) => {
    aboutMeTextRef.current.children[0].scale.addScalar(-0.5)
    aboutMeTextRef.current.children[0].material.color.setRGB(1, 0, 0)
  }

  const conClickBenchPress = (e) => {
    setMainScene(false)
    setSelectedScene('Bench_press_scene')
  }

  const getScenePosition = (scene) => {
    if (scene == 'Bench_press_scene'){
      return {
        x:42,
        z:1
      }
    }
    return {
      x:0,
      z:12
    }
  }

  useFrame((state) => {
    const {x,z} = getScenePosition(selectedScene) 

    state.camera.position.x = MathUtils.lerp(state.camera.position.x, mainScene ? 0 : x, 0.03)
    state.camera.position.z = MathUtils.lerp(state.camera.position.z, mainScene ? 12 : z, 0.03)
  })


  return (
    <>
      <AboutMeText />
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <group
            position={[-116.317, 129.822, 77.359]}
            rotation={[-Math.PI / 2, 0.992, 0]}
            scale={[0.688, 1.666, 4.427]}

          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_Material004_0.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-116.562, 132.798, 3.452]}
            scale={[1.802, 1.742, 111.907]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-579.234, 129.822, -203.116]}
            rotation={[-Math.PI / 2, 0.992, 0]}
            scale={[0.688, 1.666, 4.427]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material004_0.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-579.479, 132.798, -277.023]}
            scale={[1.802, 1.742, 111.907]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-88.163, 169.888, -507.5]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.802, 1.742, 16.315]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-88.163, 169.888, -542.565]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.802, 1.742, 16.315]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-82.333, 170.365, -580.201]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[2.061, 2.158, 23.547]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-82.333, 170.365, -617.843]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[2.061, 2.158, 23.547]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-42.151, 153.289, -507.5]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.495, 1.368, 14.833]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-42.151, 153.289, -536.221]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.495, 1.368, 14.833]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-42.151, 147.586, -562.857]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.006, 1.031, 14.464]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-42.151, 147.586, -584.268]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.006, 1.031, 14.464]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder009_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder009_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-42.151, 147.586, -607.584]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.006, 1.031, 14.464]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder010_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder010_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-42.151, 147.586, -628.994]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.006, 1.031, 14.464]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-4.251, 137.832, -504.875]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.495, 1.368, 14.833]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder012_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder012_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-4.251, 137.832, -532.335]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.495, 1.368, 14.833]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder013_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder013_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-1.927, 142.316, -561.165]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.802, 1.742, 16.315]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder014_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder014_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-1.927, 142.316, -593.085]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.802, 1.742, 16.315]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder015_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder015_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-6.21, 136.83, -616.098]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.006, 1.031, 14.464]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder016_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder016_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-6.21, 136.83, -637.509]}
            rotation={[Math.PI / 2, 1.245, -Math.PI / 2]}
            scale={[1.006, 1.031, 14.464]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder017_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder017_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-99.23, -5.722, -371.903]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[3.744, 1.526, 3.642]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[160.326, -5.722, -371.903]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[3.744, 1.526, 3.642]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[6.192, -5.722, -213.785]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[6.058, 2.042, 3.642]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-69.908, -5.722, -213.785]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[6.058, 2.042, 3.642]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-32.234, 132.798, -242.07]}
            scale={[1.802, 1.742, 26.761]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder018_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder018_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-32.234, 18.027, -242.07]}
            scale={[2.54, 2.738, 23.223]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder021_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder021_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-32.234, 72.731, -242.07]}
            scale={[3.486, 3.321, 23.223]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder022_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder022_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          {/* Cojin Press de Banca */}
          <mesh
            ref={benchPressRef}
            castShadow
            receiveShadow
            geometry={nodes.Roundcube_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[0, 57.705, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[133.619, 44.958, 10.503]}

            onPointerOver={(e) => onPointerOverBenchPress(e)
            }
            onPointerOut={(e) => onPointerOutBenchPress(e)}
            onClick={(e) => conClickBenchPress(e)}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube001_Material008_0.geometry}
            material={materials["Material.008"]}
            position={[-396.196, 50.58, -282.658]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[58.716, 44.958, 7.182]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-589.202, 82.54, -276.437]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[3.744, 74.312, 3.642]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-78.543, 68.297, -491.377]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-7.407, 4.258, 79.024]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube002_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[30.536, 57.705, -388.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[135.779, 44.958, 10.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[30.256, 44.537, -389.978]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[3.744, 133.083, 3.642]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[160.382, 45.613, -389.978]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[-41.517, 3.549, 2.862]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-99.369, 46.294, -389.164]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[-41.517, 3.549, 2.287]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-30.786, 67.513, -243.335]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[-76.755, 14.775, 4.475]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-33.945, 131.991, -232.338]}
            scale={[26.794, 24.81, 5.046]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-33.945, 131.991, -255.318]}
            scale={[26.794, 24.81, 5.046]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-33.945, 71.892, -232.338]}
            scale={[26.794, 24.81, 5.046]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-33.945, 71.892, -255.318]}
            scale={[26.794, 24.81, 5.046]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-33.945, 17.678, -232.338]}
            scale={[26.794, 24.81, 5.046]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-33.945, 17.678, -252.758]}
            scale={[26.794, 24.81, 5.046]}
          />
        </group>
      </group>
    </>
  );
}

export default Gym;
useGLTF.preload("/assets/models/gym/gym_equipments.glb");