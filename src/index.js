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






const home = new Home()
// const contentAnim = new ContentAnim()
const rocket = new Rocket()
home.scene.add(rocket.group)

const sun = new Sun()
home.scene.add(sun.group)

// const astronaut = new Astronaut()
// home.scene.add(astronaut.group)

const earth = new Earth()
home.scene.add(earth.group)

const meteor = new Meteor()
home.scene.add(meteor.group)

const mercury = new Mercury()
home.scene.add(mercury.group)

const moon = new Moon()
home.scene.add(moon.group)
