import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import UranusModel from '../models/glTF-Binary/uranus.glb'
import LoaderModel from './LoaderModel'
import EarthModel from '../models/glTF-Binary/Earth.glb'


export default class Uranus
{
    constructor()
    {
        this.group = new THREE.Group()
        this.loaderModel = new LoaderModel()
        this.loaderModel.gltfLoader.load(
    UranusModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(1.1, 1.1, 1.1)
            this.group.position.set(- 2.3, 3.9, - 1.1)
            this.group.rotateX(Math.PI * 0.5)
            this.group.add(child)
        }
    }
)
    }
}