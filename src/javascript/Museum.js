import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MuseumModel from '../models/glTF-Binary/museum.glb'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import LoaderModel from './LoaderModel'

export default class Museum
{
    constructor()
    {
        this.group = new THREE.Group()
        this.loaderModel = new LoaderModel()
        this.loaderModel.gltfLoader.load(
            MuseumModel, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    child.position.set(0, 2, 0)
                    this.group.add(child)
                }
            }
        )
    }
}