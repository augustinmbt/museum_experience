import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import NeptuneModel from '../glTF-Binary/duck.glb'

export default class Neptune
{
    constructor()
    {
this.group = new THREE.Group()

const gltfLoader = new GLTFLoader()
gltfLoader.load(
    NeptuneModel, 
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
