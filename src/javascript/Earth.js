import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import EarthModel from '../models/glTF-Binary/Earth.glb'

export default class Earth
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    EarthModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.015, 0.015, 0.015)
            this.group.position.set(-1, 4.5, 0.7)
            this.group.add(child)
        }
    }
)
    }
}