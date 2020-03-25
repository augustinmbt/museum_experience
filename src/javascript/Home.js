import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Museum from '../models/glTF-Binary/museum.glb'
import TweenLite from 'gsap'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



export default class Home {
    
    constructor() {

        this.canvas = null,
        this.scene = null,
        this.camera = null,
        this.renderer = null,
        this.sizes = { width : window.innerWidth, height : window.innerHeight},

        this.init()

        }

    createScene(){
        this.scene = new THREE.Scene()
        // this.scene.fog = new THREE.Fog(0xffffff, 2, 6)
        // this.scene.background = new THREE.Color(0xff0000)
        
        
      }
    
      /**
       * Camera
       */
      createCamera(){
        this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 20)
        this.camera.position.set(0, 8, 0) 
        // this.camera.lookAt(this.scene.position)

        
    
      
        
        this.scene.add(this.camera)
      }
    
      createRender(){
        this.renderer = new THREE.WebGLRenderer( {alpha : true} )
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild(this.renderer.domElement)
        

        const cameraControls = new OrbitControls(this.camera, this.renderer.domElement)
        cameraControls.zoomSpeed = 1
        cameraControls.enableDamping = true
        
      }
    
      /**
       * OnResize
       */
      onResize() {
    
              this.renderer.setSize(this.sizes.width, this.sizes.height);
              this.camera.aspect = (this.sizes.width / this.sizes.height);
              this.camera.updateProjectionMatrix();
    
      }
    
      gltfLoader(){
        this.gltfLoader = new GLTFLoader()
        this.gltfLoader.load(
            Museum, 
            (gltf) =>
            {
                while(gltf.scene.children.length)
                {
                    const child = gltf.scene.children[0]
                    this.scene.add(child)
                    child.position.set(0, 2, 0)
                }
            }
        )
      }
      dracoLoader() {
        this.dracoLoader = new DRACOLoader()
        this.dracoLoader.setDecoderPath('/draco/')
        this.gltfLoader.setDRACOLoader(this.dracoLoader)
      }
    
      setLight(){
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
        this.scene.add(ambientLight)
        console.log(ambientLight);
        
    
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
    
    
        this.scene.add(directionalLight)
        this.scene.add(ambientLight)
        this.scene.add(directionalLight2)
        this.scene.add(directionalLight3)
        this.scene.add(directionalLight4)
    
      }
      
    
      loop() {

        window.requestAnimationFrame(()=> {
          this.loop()
        })
        // this.introAnim()
    
    
        // Render
        this.renderer.render(this.scene, this.camera)
      }
    
      // introAnim(){
      //  TweenLite.to(this.camera.rotation, 4, {
      //     //  ease :'Expo.easeOut',
      //      z : Math.PI
      //  })
    
      //  TweenLite.to(this.camera.position, 4, {
      //     //  ease :'Expo.easeOut',
      //      y : 3
      //  })
      // }
      
      init(){
        this.createScene()
        this.createCamera()
        this.gltfLoader()
        this.dracoLoader()
        this.setLight()
        this.createRender()
        this.onResize()
        this.loop()
    }

}

