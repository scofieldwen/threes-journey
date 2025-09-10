import * as THREE from 'three'
import Sizes from './Utils/Size.js'
import Time from './Utils/Time.js'
import Camera from './Utils/Camera.js'
import Renderer from './Renderer.js'

let instance = null
export default class Experience {
  constructor(canvas) {

    // Singleton
    if(instance) {
      return instance
    }
    instance = this
    
    // Global access
    window.experience = this

    // Options
    this.canvas = canvas
    console.log('Here starts a great experience')

    // Setup
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()

    // Resize event
    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      this.update()
    })
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    // console.log('time tick resolve ---->')
    this.camera.update()
    this.renderer.update()
  }
}
