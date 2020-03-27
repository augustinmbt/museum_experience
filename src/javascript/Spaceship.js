import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import SpaceshipModel from '../models/glTF-Binary/vaisseau.glb'

export default class Spaceship
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    SpaceshipModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.01, 0.01, 0.01)
            this.group.position.set(0, 0, 0)
            this.group.add(child)
        }
    }
)
    }
}