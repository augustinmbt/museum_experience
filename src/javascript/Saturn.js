import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import SatrunModel from '../models/glTF-Binary/saturne.glb'

export default class Saturn
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    SatrunModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.5, 0.5, 0.5)
            this.group.position.set(1, 3.7, -1)
            this.group.add(child)
        }
    }
)
    }
}