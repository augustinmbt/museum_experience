import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class LoaderModel
{
    constructor(_model)
    {
        this.group = new THREE.Object3D()

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(
            _model, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.group.scale.set(0.2, 0.2, 0.2)
                    this.group.position.set(0, 0.66, 0)
                    this.group.add(child)
                }
            }
        )

    }
}