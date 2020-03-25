import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import AstronautModel from '../models/glTF-Binary/duck.glb'

export default class Astronaut
{
    constructor()
    {
  /*       this.group = new THREE.Group()

        const gltfLoader = new GLTFLoader()

        gltfLoader.load(
            EarthModel,
            (_gltf) =>
            {
                console.log(_gltf)
                this.earth = _gltf.scene.children[0]
                 this.earth.material = new THREE.MeshStandardMaterial({
                 })
                this.group.add(this.earth)
                console.log(this.earth)
            }
        ) */
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    AstronautModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(3, 3, 3)
            this.group.position.set(0, 0, 0)
            this.group.add(child)
        }
    }
)

    }
}

