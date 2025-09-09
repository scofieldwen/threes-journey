import * as THREE from 'three'
import Sizes from './Utils/Size.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
export default class Experience {
  constructor(canvas) {
    // Global access
    window.experience = this

    // Options
    this.canvas = canvas
    console.log('Here starts a great experience')

    // Setup
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera(this)

    // Resize event
    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      this.update()
    })
  }

  resize() {

  }

  update() {

  }
}
