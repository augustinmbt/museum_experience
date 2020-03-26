import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MercuryModel from '../models/glTF-Binary/mercury.glb'

export default class Merury
{
    constructor()
    {
    this.group = new THREE.Group()

    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
        MercuryModel, 
        (gltf) =>
        {
            while(gltf.scene.children.length)
            {
                const child = gltf.scene.children[0]
                this.group.scale.set(0.01, 0.01, 0.01)
                this.group.position.set(1, 3.7, 0.5)
                this.group.rotation.x = Math.PI / 2
                this.group.add(child)
            }
        })
    }
}