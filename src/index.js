import './styles/main.scss'
// import './experience'
import './javascript/Home'
import Home from './javascript/Home'
// import ContentAnim from './javascript/ContentAnim'
import Rocket from './javascript/Rocket'
import Sun from './javascript/Sun.js'
import Astronaut from './javascript/Astronaut.js'
import Earth from './javascript/Earth.js'
import Meteor from './javascript/Meteor.js'
import Mercury from './javascript/Mercury.js'
import Moon from './javascript/Moon.js'
import Uranus from './javascript/Uranus.js'
import Mars from './javascript/Mars.js'
/* import Neptune from './javascript/Neptune.js'
 */
import Ufo from './javascript/Ufo.js'
import Asteroids from './javascript/Asteroids.js'
import Spaceship from './javascript/Spaceship.js'
import Sign from './javascript/Sign.js'







//Museum
const home = new Home()
// const contentAnim = new ContentAnim()
const rocket = new Rocket()
home.scene.add(rocket.group)

//Sun
const sun = new Sun()
home.scene.add(sun.group)

//Earth
const earth = new Earth()
home.scene.add(earth.group)

//Meteor
const meteor = new Meteor()
home.scene.add(meteor.group)

//Mercury
const mercury = new Mercury()
home.scene.add(mercury.group)

//Moon
const moon = new Moon()
home.scene.add(moon.group)

//Mars
const mars = new Mars()
home.scene.add(mars.group)

//Uranus
const uranus = new Uranus()
home.scene.add(uranus.group)

//Ufo
const ufo = new Ufo()
home.scene.add(ufo.group)

//Asteroids
const asteroids = new Asteroids()
home.scene.add(asteroids.group)

//Spaceship
const spaceship = new Spaceship()
home.scene.add(spaceship.group)

//Sign
const sign = new Sign()
home.scene.add(sign.group)

//Neptune 
/* const neptune = new Neptune()
home.scene.add(neptune.group) */

//Astronaut
const astronaut = new Astronaut()
home.scene.add(astronaut.group)