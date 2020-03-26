import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import NeptuneModel from '../models/glTF-Binary/neptune.glb'
import LoaderModel from './LoaderModel'
import EarthModel from '../models/glTF-Binary/Earth.glb'


export default class Neptune
{
    constructor()
    {
        this.group = new THREE.Group()
        this.loaderModel = new LoaderModel()
        this.loaderModel.gltfLoader.load(
    NeptuneModel, 
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            this.group.scale.set(0.002, 0.002, 0.002)
            this.group.position.set(0, 5.2, -1.1)
            this.group.add(child)
        }
    }
)
    }
}