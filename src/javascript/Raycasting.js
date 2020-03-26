import * as THREE from 'three'
import Home from './Home'
import { Raycaster } from 'three'

const home = new Home()

export default class Raycasting {
    constructor(_objectToIntersect){
            this.raycaster = new THREE.Raycaster()
            // Cursor raycasting
            this.raycasterCursor = new THREE.Vector2(home.cursor.x * 2, - home.cursor.y * 2)
            this.raycaster.setFromCamera(this.raycasterCursor, home.camera)
    
            // console.log(this.cursor.x);
            
            this.intersects = this.raycaster.intersectObject(_objectToIntersect)

            if(this.intersects.length)
            {
                this.hoverSun = true
            }
            else
            {
                this.hoverSun = false
            }
    
            console.log(hoverSun);
            
    }
}