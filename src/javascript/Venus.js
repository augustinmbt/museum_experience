import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import VenusModel from '../models/glTF-Binary/venus.glb'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import LoaderModel from './LoaderModel'

export default class Venus
{
    constructor()
    {
        this.group = new THREE.Group()
        this.loaderModel = new LoaderModel()
        this.loaderModel.gltfLoader.load(
            VenusModel, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.group.scale.set(0.02, 0.02, 0.02)
                    this.group.position.set(-2, 4.4, -0.8)
                    this.group.add(child)
                }
            }
        )
    }
}