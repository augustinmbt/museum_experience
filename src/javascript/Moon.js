import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MoonModel from '../models/glTF-Binary/moon.glb'
import LoaderModel from './LoaderModel'
import EarthModel from '../models/glTF-Binary/Earth.glb'

export default class Moon
{
    constructor()
    {
        this.group = new THREE.Group()
        this.loaderModel = new LoaderModel()
        this.loaderModel.gltfLoader.load(
    MoonModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.005, 0.005, 0.005)
            this.group.position.set(-2.5, 5.2, 1)
            this.group.add(child)
        }
    }
)
    }
}