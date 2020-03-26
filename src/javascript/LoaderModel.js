import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class LoaderModel
{
    constructor(_model)
    {
        this.group = new THREE.Group()

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(
            _model, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    this.child = gltf.scene.children[0]
                    this.group.add(this.child)
                }
            }
        )

    }
}