/* experience.js */
import Object from './javascript/Astronaut.js'

/* Object.js */
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import ObjectModel from '../glTF-Binary/fusee.glb'

export default class Object
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    ObjectModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(1, 1, 1)
            this.group.position.set(0, 0, 0)
            this.group.add(child)
        }
    }
)
    }
}

/* experience.js */
const object = new Object()
scene.add(object.group)
