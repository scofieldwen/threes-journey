import Sizes from './Utils/Size.js'
import Time from './Utils/Time.js'
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

    // Resize event
    this.sizes.on('resize', () => {
      this.resize()
    })
  }

  resize() {

  }
}
