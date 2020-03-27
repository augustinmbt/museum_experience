import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import RocketModel from '../models/glTF-Binary/fusee.glb'

export default class Rocket
{
    constructor()
    {
        this.group = new THREE.Object3D()

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(
            RocketModel, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.group.scale.set(0.4, 0.4, 0.4)
                    this.group.position.set(3, 1.82, 0)
                    this.group.rotateY(Math.PI * 0.9)
                    this.group.add(child)
                }
            }
        )

    }
}

