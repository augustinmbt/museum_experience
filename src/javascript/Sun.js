import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import SunModel from '../models/glTF-Binary/sun.glb'

export default class Sun
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    SunModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.001, 0.001, 0.001)
            this.group.position.set(0, 4, 0)
            this.group.add(child)
        }
    }
)
    }
}