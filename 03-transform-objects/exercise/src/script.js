import * as THREE from 'three'
console.log("🚀 ~ THREE:", THREE)

// Canvas
const canvas = document.querySelector('canvas.wbgl')

// Scene
const scene = new THREE.Scene()

// Object
const group = new THREE.Group()

group.scale.y = 2
group.position.y = 1
group.rotation.y = Math.PI * 0.25

scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2

group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2

group.add(cube3)

scene.add(group)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Sizes
const sizes = {
    width: 800,
    height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1

camera.position.set(0, 0, 3)



// camera.lookAt(group.position)
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)