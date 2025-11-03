import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from "three";
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 3, 2, 6 ] 
}

root.render(
    <Canvas
        gl={ {
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.LinearSRGBColorSpace
            // toneMapping: THREE.CineonToneMapping
        } }
        camera={ cameraSettings }
    >
        <Experience />
    </Canvas>
)