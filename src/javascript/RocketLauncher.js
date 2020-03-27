import * as THREE from 'three'
import home from './Home'
import Rocket from './Rocket'
import Home from './Home'
import TweenLite from 'gsap'




export default class RocketLauncher {
    constructor() {
        this.rocket = new Rocket()
        
        

        this.$rocketBtn = document.querySelector('.js-rocket-launch')

        this.$rocketBtn.addEventListener('click', ()=> {
            this.setLaunching()
        })
        console.log(this.rocket.group.position);
        
    }
    setLaunching (){ 
        // console.log('ok');
        
            TweenLite.to(this.rocket.group.position, 4, {
                //  ease :'Expo.easeOut',
                 y : 10
        })
    }
    
    
}