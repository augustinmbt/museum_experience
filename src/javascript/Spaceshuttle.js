import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import SpaceshuttleModel from '../models/glTF-Binary/vaisseauspatial.glb'

export default class Spaceshuttle
{
    constructor()
    {
        this.group = new THREE.Object3D()

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(
            SpaceshuttleModel, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.group.scale.set(0.06, 0.06, 0.06)
                    this.group.position.set(-1, 0.9, 0)
                    this.group.rotateX(Math.PI * 0.5)
                    this.group.add(child)
                }
            }
        )

    }
}

