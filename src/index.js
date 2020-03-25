import './styles/main.scss'
// import './experience'
import './javascript/Home'
import Home from './javascript/Home'
// import ContentAnim from './javascript/ContentAnim'
import Rocket from './javascript/Rocket'
import Sun from './javascript/Sun.js'
import Astronaut from './javascript/Astronaut.js'
import Astronaut1 from './javascript/Astronaut1.js'
import Astronaut2 from './javascript/Astronaut2.js'
import Earth from './javascript/Earth.js'
import Meteor from './javascript/Meteor.js'
import Mercury from './javascript/Mercury.js'
import Moon from './javascript/Moon.js'
import Uranus from './javascript/Uranus.js'
import Mars from './javascript/Mars.js'
import Neptune from './javascript/Neptune.js'
import Jupiter from './javascript/Jupiter.js'
import Venus from './javascript/Venus.js'
import Saturn from './javascript/Saturn.js'


import Ufo from './javascript/Ufo.js'
import Asteroids from './javascript/asteroids/Asteroids.js'
import Asteroids1 from './javascript/asteroids/Asteroids1.js'
import Asteroids2 from './javascript/asteroids/Asteroids2.js'
import Asteroids3 from './javascript/asteroids/Asteroids3.js'
import Asteroids4 from './javascript/asteroids/Asteroids4.js'
import Asteroids5 from './javascript/asteroids/Asteroids5.js'

import Spaceship from './javascript/Spaceship.js'
import Sign from './javascript/Sign.js'
import Sign1 from './javascript/Sign1.js'
import Sign2 from './javascript/Sign2.js'
import Spaceshuttle from './javascript/Spaceshuttle'
import Sputnik from './javascript/Sputnik.js'

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

//Jupiter
const jupiter = new Jupiter()
home.scene.add(jupiter.group)

//Neptune 
const neptune = new Neptune()
home.scene.add(neptune.group)

//Saturne 
const saturn = new Saturn()
home.scene.add(saturn.group)

//Venus
const venus = new Venus()
home.scene.add(venus.group)

//Ufo
const ufo = new Ufo()
home.scene.add(ufo.group)

//Asteroids
const asteroids = new Asteroids()
home.scene.add(asteroids.group)

const asteroids1 = new Asteroids1()
home.scene.add(asteroids1.group)

const asteroids2 = new Asteroids2()
home.scene.add(asteroids2.group)

const asteroids3 = new Asteroids3()
home.scene.add(asteroids3.group)

const asteroids4 = new Asteroids4()
home.scene.add(asteroids4.group)

const asteroids5 = new Asteroids5()
home.scene.add(asteroids5.group)

//Spaceship
const spaceship = new Spaceship()
home.scene.add(spaceship.group)

//Sign
const sign = new Sign()
home.scene.add(sign.group)

const sign1 = new Sign1()
home.scene.add(sign1.group)

const sign2 = new Sign2()
home.scene.add(sign2.group)



//Astronaut
const astronaut = new Astronaut()
home.scene.add(astronaut.group)

const astronaut1 = new Astronaut1()
home.scene.add(astronaut1.group)

const astronaut2 = new Astronaut2()
home.scene.add(astronaut2.group)

//Spaceshuttle
// const spaceshuttle = new Spaceshuttle()
// home.scene.add(spaceshuttle.group)

//Sputnik
const sputnik = new Sputnik()
home.scene.add(sputnik.group)