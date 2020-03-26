import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import JupiterModel from '../models/glTF-Binary/jupiter2.glb'
import LoaderModel from './LoaderModel'
import EarthModel from '../models/glTF-Binary/Earth.glb'


export default class Jupiter
{
    constructor()
    {
        this.group = new THREE.Group()
        this.loaderModel = new LoaderModel()
        this.loaderModel.gltfLoader.load(
        JupiterModel, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.group.scale.set(0.05, 0.05, 0.05)
                    this.group.position.set(2.3, 4.8, -1.3)
                    this.group.add(child)
                }
            }
        )
    }
}