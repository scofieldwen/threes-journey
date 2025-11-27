import { Clone, useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default function Model() {

  // const model = useGLTF('./hamburger.glb')
  const model = useGLTF('./hamburger-draco.glb')

  // const model = useLoader(
  //     GLTFLoader,
  //     './FlightHelmet/glTF/FlightHelmet.gltf',
  //     (loader) => {
  //         const dracoLoader = new DRACOLoader()
  //         dracoLoader.setDecoderPath('./draco/')
  //         loader.setDRACOLoader(dracoLoader)
  //         console.log(loader)
  //     }
  // )
  return <>
      <Clone object={ model.scene } scale={ 0.35 } position-x={ - 4 } />
      <Clone object={ model.scene } scale={ 0.35 } position-x={ 0 } />
      <Clone object={ model.scene } scale={ 0.35 } position-x={ 4 } />
  </>

}

useGLTF.preload('./hamburger-draco.glb')