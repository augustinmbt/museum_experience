import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MarsModel from '../models/glTF-Binary/mars.glb'

export default class Mars
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    MarsModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.004, 0.004, 0.004)
            this.group.position.set(2.6, 4.1, 1.6)

            this.group.add(child)
        }
    }
)
    }
}