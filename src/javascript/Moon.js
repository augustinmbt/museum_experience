import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MoonModel from '../models/glTF-Binary/moon.glb'

export default class Moon
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    MoonModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.01, 0.01, 0.01)
            this.group.position.set(-3.8, 5.2, -0.1)
            this.group.add(child)
        }
    }
)
    }
}