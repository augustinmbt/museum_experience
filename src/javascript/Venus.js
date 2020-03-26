import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import VenusModel from '../models/glTF-Binary/venus.glb'

export default class Venus
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    VenusModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(1, 1, 1)
            this.group.position.set(0.6, 4.4, -0.8)
            this.group.add(child)
        }
    }
)
    }
}