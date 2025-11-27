import { Suspense } from "react"
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import Hamburger from "./Hamburger.jsx";
import Fox from "./Fox.jsx";
import Placeholder from "./Placeholder.jsx";

export default function Experience()
{
    // const model = useLoader(
    //     GLTFLoader,
    //     './hamburger-draco.glb',
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader()
    //         dracoLoader.setDecoderPath('./draco/')
    //         loader.setDRACOLoader(dracoLoader)
    //         console.log(loader)
    //     }
    // )

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 1.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense fallback={ <Placeholder scale={ [ 2, 3, 2 ] } /> }>
            <Hamburger scale={ 0.35 } />
        </Suspense>

        <Fox />

    </>
}