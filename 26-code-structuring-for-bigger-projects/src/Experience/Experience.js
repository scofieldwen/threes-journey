import Sizes from './Utils/Size.js'
export default class Experience {
  constructor(canvas) {
    // Global access
    window.experience = this

    // Options
    this.canvas = canvas
    console.log('Here starts a great experience')

    // Setup
    this.sizes = new Sizes()
  }
}
