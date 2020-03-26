import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import AstronautModel from '../models/glTF-Binary/astronaut.glb'

export default class Astronaut2
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    AstronautModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.2, 0.2, 0.2)
            this.group.position.set(-1.19, 0.45, -1.75)
            this.group.add(child)
        }
    }
)

    }
}
