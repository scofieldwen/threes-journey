import { useControls } from 'leva'
import { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Fox() {

  const fox = useGLTF('./Fox/glTF/Fox.gltf')
  const animations = useAnimations(fox.animations, fox.scene)
  console.log(animations)

  const { animationName } = useControls({
    animationName: { options: animations.names }
  })

  useEffect(() => {
    console.log('animationName', animationName)
    const action = animations.actions[animationName]
    action
        .reset()
        .fadeIn(0.5)
        .play()

    return () => {
      // console.log('dispose')
      action.fadeOut(0.5)
    }
  }, [ animationName ])

  return <primitive
            object={ fox.scene }
            scale={ 0.02 }
            position={ [ - 2.5, 0, 2.5 ] }
            rotation-y={ 0.3 }
            />
}