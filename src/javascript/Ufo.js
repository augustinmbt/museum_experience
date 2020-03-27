import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import UfoModel from '../models/glTF-Binary/ufo.glb'

export default class Ufo
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    UfoModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.0002, .0002, .0002)
            this.group.position.set(0, 4, 0)
            this.group.add(child)
        }
    }
)
    }
}