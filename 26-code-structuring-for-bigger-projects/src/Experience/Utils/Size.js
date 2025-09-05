export default class Sizes
{
  constructor()
  {

    // Resize event
    window.addEventListener('resize', () =>
    {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    })
  }
}