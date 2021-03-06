import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Museum from '../models/glTF-Binary/museum.glb'
import TweenLite from 'gsap'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
// import Stats from 'three/examples/jsm/libs/stats.module.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

import IntroSong from '../assets/intro.mp3'
import LaunchRocketSong from '../assets/launchRocket.mp3'


import Rocket from './Rocket'
import Earth from './Earth'
import Mercury from './Mercury.js'
import Uranus from './Uranus.js'
import Mars from './Mars.js'
import Neptune from './Neptune.js'
import Jupiter from './Jupiter.js'
import Venus from './Venus.js'
import Saturn from './Saturn.js'

const mercury = new Mercury()
const mars = new Mars()
const uranus = new Uranus()
const jupiter = new Jupiter()
const neptune = new Neptune()
const saturn = new Saturn()
const venus = new Venus()
const earth = new Earth()

const rocket = new Rocket()


export default class Home {
    
    constructor() {

        this.canvas = null,
        this.scene = null,
        this.camera = null,
        this.renderer = null,
        this.sizes = { width : window.innerWidth, height : window.innerHeight},
        this.hoverSun = false
        this.exploreMode = false
        this.cursor = { x: 0 , y: 0}
        this.$homeContent = document.querySelector('.home')
        this.$exploreBtn = document.querySelector('.launch')
        this.$controllers = document.querySelector('.controllers')
        this.$rocketBtn = document.querySelector('.js-rocket-launch')
        this.$planetRotateBtn = document.querySelector('.js-planet-rotate')
        this.$sunModeBtn = document.querySelector('.js-sun-mode')
        this.launchRocket = false
        this.rotationMode = false
        this.sunMode = false
        this.planets = [mercury, mars, earth, venus, uranus, saturn, jupiter, neptune]


        //Music
        this.song = new Audio(IntroSong)
        this.launchRocketSong = new Audio(LaunchRocketSong)
        this.song.loop = true


        //Calling Methods
        this.init()
        this.launcherExperience() 

        this.$planetRotateBtn.addEventListener('click', ()=> {
          this.rotationMode = true
        })
        this.$rocketBtn.addEventListener('click', ()=> {
          

          this.launchRocketSong.play()
          this.$rocketBtn.classList.add('isActive')

          this.launchRocket = true
          this.$rocketBtn.innerHTML ='Lauching...'
        })

        this.$sunModeBtn.addEventListener('click', ()=> {
          this.$sunModeBtn.classList.toggle('isActive')

          
        })

        if(!this.explore) {
          this.camera.lookAt(new THREE.Vector3(0, 5, 0))
        }
      }

      launcherExperience(){
        this.$exploreBtn.addEventListener('click', () => {
          this.exploreMode = true
          this.setFlyControls()
          this.song.play()

          //Hide home Content
          this.$homeContent.classList.add('hide')
          setTimeout(() => {
              this.$controllers.style.transform = 'translateY(0)'
              this.$homeContent.style.visibility = 'hidden'
          }, 1000);
        })
      }

      createScene(){
        this.scene = new THREE.Scene()

        //Adding Planets
        this.scene.add(rocket.group)
        this.scene.add(earth.group)
        this.scene.add(mercury.group)
        this.scene.add(uranus.group)
        this.scene.add(venus.group)
        this.scene.add(saturn.group)
        this.scene.add(jupiter.group)
        this.scene.add(mars.group)
        this.scene.add(neptune.group)

      }
 
      createCamera(){
        this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 50)
        this.camera.position.set(5, 1, 0) 
        this.scene.add(this.camera)
      }

      setFlyControls() {
        this.controls = new FlyControls( this.camera, this.renderer.domElement )
				this.controls.domElement = this.renderer.domElement;
        this.controls.movementSpeed = 100;
				this.controls.rollSpeed = Math.PI / 24;
				this.controls.autoForward = true;
        this.controls.dragToLook = false;
        
        this.clock = new THREE.Clock()

        // this.stats = new Stats();
				// document.body.appendChild( this.stats.dom );

      }
    
      createRender(){
        this.renderer = new THREE.WebGLRenderer( { antialias : true } )
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild(this.renderer.domElement)
        
        this.renderer.gammaOutput = true
        this.renderer.gammaFactor = 2.2

      }

      onResize() {
          this.renderer.setSize(this.sizes.width, this.sizes.height);
          this.camera.aspect = (this.sizes.width / this.sizes.height);
          this.camera.updateProjectionMatrix();
          this.effectComposer.setSize(this.sizes.width, this.sizes.height)
      }

      setCursor(){
        
        if(this.exploreMode == false) {
          window.addEventListener('mousemove', (_event) =>
            {
              this.cursor.x = _event.clientX / this.sizes.width - 0.5
              this.cursor.y = _event.clientY / this.sizes.height - 0.5
              
              this.camera.position.x += (this.cursor.x - this.camera.position.x) * .0001
              this.camera.position.z += (this.cursor.y - this.camera.position.z) * .0001
          })
        }
           
      }

      setLight(){
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
        this.pointLight = new THREE.PointLight(0xffffff, .2)
    
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
        
        this.pointLight.position.set(0, 4, 0)
    
        this.scene.add(directionalLight)
        this.scene.add(ambientLight)
        this.scene.add(directionalLight2)
        this.scene.add(directionalLight3)
        this.scene.add(directionalLight4)
        // this.scene.add(pointLight)
        
    
      }
      
    
      
    
      introAnim(){
       TweenLite.to(this.camera.position, 4, {
          //  ease :'Expo.easeOut',
           x : 0
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

     goToExplore(){
        TweenLite.to(this.camera.position, 4, {
          y : 0
        }) 
     }

     raycasting(){
        this.raycaster = new THREE.Raycaster()
        // Cursor raycasting
        this.raycasterCursor = new THREE.Vector2(this.cursor.x * 2, - this.cursor.y * 2)
        this.raycaster.setFromCamera(this.raycasterCursor, this.camera)

        this.intersects = this.raycaster.intersectObject(earth.group)

        if(this.intersects.length){
          this.hoverSun = true
        }
        else{
          this.hoverSun = false
        }
     }

     setLaunching(){
      TweenLite.to(rocket.group.position, 60, {
        //  ease :'Expo.easeOut',
         y : 20
        })

        if(rocket.group.position.y > 19){ 
          rocket.group.position.y = 1.82
          this.$rocketBtn.textContent = 'Relaunch ?'
          this.$rocketBtn.classList.remove('rocketLaunched')
        }
          this.launchRocket = false

     }

     planetRotation(){
      this.planets.forEach(planet => {
        TweenLite.to(planet.group.rotation, 60, {
          y : Math.PI * Math.max(Math.floor(Math.random() * 7))
        })
       })
      }

      setSunMode() {
        if(this.$sunModeBtn.classList.contains('isActive')) {
          this.sunMode = true
          this.scene.add(this.pointLight)
        } else {
          this.sunMode = false
          this.scene.remove(this.pointLight)
        }
        
      }
      
      
     

     loop() {
        window.requestAnimationFrame(()=> {
        this.loop()
      })

      this.introAnim()
      this.setCursor()
      

      if(this.launchRocket == true){
        this.setLaunching()
      }


      if(this.rotationMode == true){
        this.planetRotation()
      }

      // if(this.sunMode == true){
        this.setSunMode()
      // }


      if(this.exploreMode) {
        this.delta = this.clock.getDelta()
        this.controls.update(this.delta)
        this.controls.movementSpeed = 0.5 * this.delta
        // this.stats.update()
      } 

      
      // Render
      this.effectComposer.render(this.scene, this.camera)
    }
      
      init(){
        this.createScene()
        this.createCamera()
        this.setLight()
        this.createRender()
        this.postProcess()
        this.onResize()
        this.loop()
    }

}

