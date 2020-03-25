import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Museum from './glTF-Binary/museum.glb'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TweenMax } from 'gsap'
import { Vector3 } from 'three'

console.log(Earth)
/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Scene
 */
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xffffff)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.position.set(0, 6, 0)
scene.add(camera)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)



camera.lookAt(scene.position)
// TweenMax.to(camera.rotation, 4, {
//     // ease : Expo.easeOut,
//     z : Math.PI
// })

// TweenMax.to(camera.position, 4, {
//     // ease : Expo.easeOut,
//     y : 3
// })

/* window.addEventListener('mousewheel', (e)=> {

    
    console.log(e);
    camera.lookAt(scene.position)
    TweenMax.to(camera.position, 4, {
        // ease : Expo.easeOut,
        x : 5,
        y: 3
    })
}) */


const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Render
renderer.render(scene, camera)
}

loop()

// const gltfLoader = new GLTFLoader()
// gltfLoader.load(
//     Museum, 
//     (gltf) =>
//     {
//         while(gltf.scene.children.length)
//         {
//             const child = gltf.scene.children[0]
//             scene.add(child)
//         }
//     }
// )

/**
 * Camera Controls
 */
 const cameraControls = new OrbitControls(camera, renderer.domElement)
 cameraControls.zoomSpeed = 0.3
 cameraControls.enableDamping = true

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1)
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1)
const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1)



directionalLight2.position.set(-5, 15,0)
directionalLight3.position.set(0, 15,5)
directionalLight4.position.set(0, 15,-5)

directionalLight.position.x = 5
directionalLight.position.y = 15
directionalLight.position.z = 0


scene.add(directionalLight)
scene.add(directionalLight2)
scene.add(directionalLight3)
scene.add(directionalLight4)

const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
const helper2 = new THREE.DirectionalLightHelper( directionalLight2, 5 );

scene.add( helper );
scene.add( helper2 );