import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Museum from '../models/glTF-Binary/museum.glb'
import TweenLite from 'gsap'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import IntroSong from '../assets/intro.mp3'





export default class Home {
    
    constructor() {

        this.canvas = null,
        this.scene = null,
        this.camera = null,
        this.renderer = null,
        this.sizes = { width : window.innerWidth, height : window.innerHeight},

        this.hoverSun = false
        this.explorer = false
        this.cursor = { x: 0 , y: 0}

        this.init()

        this.song = new Audio(IntroSong)

        if(!this.explore) {
          this.camera.lookAt(new THREE.Vector3(0, 0, 0))
        }

        this.$homeContent = document.querySelector('.home')
        this.$exploreBtn = document.querySelector('.launch')

        this.$exploreBtn.addEventListener('click', () => {

          this.explorer = true
          this.setFlyControls()
          
          
          this.song.play()


          this.$homeContent.classList.add('hide')
          setTimeout(() => {
              this.$homeContent.style.visibility = 'hidden'
          }, 1000);


      })

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
        this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 30)
        this.camera.position.set(0, 8, 0) 
        
        
        this.scene.add(this.camera)
      }

      setFlyControls() {
        this.controls = new FlyControls( this.camera, this.renderer.domElement )

				this.controls.domElement = this.renderer.domElement;
        this.controls.movementSpeed = 1000;
				this.controls.rollSpeed = Math.PI / 24;
				this.controls.autoForward = true;
        this.controls.dragToLook = false;
        
        this.clock = new THREE.Clock()

        this.stats = new Stats();
				document.body.appendChild( this.stats.dom );

      }
    
      createRender(){
        this.renderer = new THREE.WebGLRenderer( { antialias : true } )
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild(this.renderer.domElement)
        
        this.renderer.gammaOutput = true
        this.renderer.gammaFactor = 2.2
        

        // const cameraControls = new OrbitControls(this.camera, this.renderer.domElement)
        // cameraControls.zoomSpeed = 1
        // cameraControls.enableDamping = true
        
      }
    
      /**
       * OnResize
       */
      onResize() {
    
              this.renderer.setSize(this.sizes.width, this.sizes.height);
              this.camera.aspect = (this.sizes.width / this.sizes.height);
              this.camera.updateProjectionMatrix();
              this.effectComposer.setSize(this.sizes.width, this.sizes.height)
    
      }

      setCursor(){
        window.addEventListener('mousemove', (_event) =>
        {
          this.cursor.x = _event.clientX / this.sizes.width - 0.5
          this.cursor.y = _event.clientY / this.sizes.height - 0.5
          this.camera.position.x = this.cursor.x / 5
          this.camera.position.z = this.cursor.y / 5
        })

        
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
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        // this.scene.add(ambientLight)
        
    
        const directionalLight = new THREE.DirectionalLight(0x555555, .07)
        const directionalLight2 = new THREE.DirectionalLight(0x555555, .07)
        const directionalLight3 = new THREE.DirectionalLight(0x555555, .07)
        const directionalLight4 = new THREE.DirectionalLight(0x555555, .07)
    
    
    
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
        this.introAnim()

        if(this.explorer) {
          this.goToExplore()
          this.delta = this.clock.getDelta()
          this.controls.update(this.delta)
          this.controls.movementSpeed = 0.5 * this.delta
          this.stats.update()

        }


        // this.raycasting()
        
        
        // Render
        // this.renderer.render(this.scene, this.camera)
        this.effectComposer.render(this.scene, this.camera)
      }
    
      introAnim(){
       TweenLite.to(this.camera.rotation, 4, {
          //  ease :'Expo.easeOut',
           z : Math.PI
       })
    
       TweenLite.to(this.camera.position, 4, {
          //  ease :'Expo.easeOut',
           y : 5
       })
      }

      postProcess(){
        this.effectComposer = new EffectComposer(this.renderer)

        this.renderPass = new RenderPass(this.scene, this.camera)
        this.effectComposer.addPass(this.renderPass)

        this.unrealPass = new UnrealBloomPass(new THREE.Vector2(this.sizes.width, this.sizes.height))
        this.unrealPass.strength = 0.6
        this.unrealPass.radius = 0.4
        this.unrealPass.threshold = 0.05
        this.effectComposer.addPass(this.unrealPass)

        
     }


     raycasting() {
       

        this.raycaster = new THREE.Raycaster()
        // Cursor raycasting
        this.raycasterCursor = new THREE.Vector2(this.cursor.x * 2, - this.cursor.y * 2)
        this.raycaster.setFromCamera(this.raycasterCursor, this.camera)

        // console.log(this.cursor.x);
        
        const intersects = this.raycaster.intersectObject(sun.group)
      

        if(intersects.length)
        {
            this.hoverSun = true
        }
        else
        {
            this.hoverSun = false
        }

        // console.log(intersects);
        // console.log(this.hoverSun);
        
     }

     goToExplore(){
      
  
     TweenLite.to(this.camera.position, 4, {
        //  ease :'Expo.easeOut',
         y : 0
      })
     }
      
      init(){
        this.createScene()
        this.createCamera()
        // this.setCursor()
        this.gltfLoader()
        this.dracoLoader()
        this.setLight()
        this.createRender()
        this.postProcess()
        this.onResize()
        // this.setFlyControls()
        this.loop()

    }

}

