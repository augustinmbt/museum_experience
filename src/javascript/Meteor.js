import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MeteorModel from '../models/glTF-Binary/meteor.glb'

export default class Meteor
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    MeteorModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(3, 3, 3)
            this.group.position.set(1, 1, 2)
            this.group.add(child)
        }
    }
)
    }
}