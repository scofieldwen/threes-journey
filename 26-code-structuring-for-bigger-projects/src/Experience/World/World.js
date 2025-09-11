import * as THREE from "three"
import Experience from "../Experience.js";
import Enviroment from "./Environment.js";

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene

    // Test mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    )

    // Setup
    this.environment = new Enviroment()
    this.scene.add(testMesh)
  }
}