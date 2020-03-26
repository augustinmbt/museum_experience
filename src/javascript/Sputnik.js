import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import SputnikModel from '../models/glTF-Binary/sputnik.glb'

export default class Sputnik
{
    constructor()
    {
        this.group = new THREE.Object3D()

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(
            SputnikModel, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.group.scale.set(0.06, 0.06, 0.06)
                    this.group.position.set(-3.4, 3.1, 0)
                    this.group.add(child)
                }
            }
        )

    }
}

