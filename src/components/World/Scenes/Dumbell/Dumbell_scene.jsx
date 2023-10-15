import React, { useState } from 'react'
import Dumbell from './Models/Dumbell'
import Floor from '../Gym/Models/Floor'
import Wall from '../Bench_press/Models/Wall'
import { RigidBody } from '@react-three/rapier'
import Info_text from '../Bench_press/Text/Info_text'
import AdviceText from './Text/Advice_text'

const Dumbell_scene = () => {

  const dumbells = [
    [-30, -1, 1],
    [-30, -1, 3.2],
    [-30, -1, -1.2],
    [-32.2, -1, 1],
    [-27.8, -1, 1]
  ]

  const [clicks, setClicks] = useState(0)

  const handleClickDumbell = (e) => {
    setClicks(clicks + 1)
    if (clicks >= 4) {
      setClicks(0)
      window.open('https://replit.com/@JUANSEBASTIA145/Cats-N-Foods-JuanGetial?v=1')
    }
  }

  return (
    <>
      <RigidBody>
        <Floor
          position-x={-30}
          position-z={1}
          scale={0.8}
        />
      </RigidBody>

      <RigidBody>
        <Wall
          position-x={-25}
          rotation-y={-1.55}
          position-z={1}
          scale={0.8}
        />
      </RigidBody>
      <RigidBody>
        <Wall
          position-x={-30}
          rotation-y={-3.13}
          position-z={5.7}
          scale={0.8}
        />
      </RigidBody>
      <RigidBody>
        <Wall
          position-x={-30}
          rotation-y={-0.025}
          position-z={-3.7}
          scale={0.8}
        />
      </RigidBody>
      <RigidBody>
        <Wall
          position-x={-34}
          rotation-y={1.55}
          position-z={1}
          scale={0.8}
        />
      </RigidBody>

      <group
        onClick={(e) => handleClickDumbell(e)}
      >
        {dumbells.map((dumbell, key) =>
          <Dumbell
            key={key}
            position={dumbell}
          />
        )}
      </group>

      <Info_text
        position={[-26, 3.5, 2.8]}
        rotation-y={-1}
        rotation-x={-0.2}
        scale={0.7}
        text={"Click to Back"}
      />

      <AdviceText 
        position={[-29.7, 2, -3.3]}
        rotation-y={-1}
        rotation-x={0}
        scale={0.8}
      />

    </>
  )
}

export default Dumbell_scene