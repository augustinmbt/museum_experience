import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import AsteroidsModel from '../../models/glTF-Binary/asteroide.glb'

export default class Asteroids1
{
    constructor()
    {
        this.group = new THREE.Group()

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(
        AsteroidsModel, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.group.scale.set(0.02, 0.02, 0.02)
                    this.group.position.set(0, 4.8,  1.2)
                    this.group.rotateY (Math.PI)
                    this.group.add(child)
                }
            }
        )
    }
}