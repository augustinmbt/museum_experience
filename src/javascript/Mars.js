import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MarsModel from '../models/glTF-Binary/mars.glb'
import LoaderModel from './LoaderModel'
import EarthModel from '../models/glTF-Binary/Earth.glb'


export default class Mars
{
    constructor()
    {
        this.group = new THREE.Group()
        this.loaderModel = new LoaderModel()
        this.loaderModel.gltfLoader.load(
    MarsModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.004, 0.004, 0.004)
            this.group.position.set(2.6, 4.1, 1.6)

            this.group.add(child)
        }
    }
)
    }
}