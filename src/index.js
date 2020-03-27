import './styles/main.scss'
// import './experience'
import Home from './javascript/Home'

// Museum
import Museum from './javascript/Museum'

// Astres
import Sun from './javascript/Sun'
import Meteor from './javascript/Meteor.js'
import Moon from './javascript/Moon.js'


// Asteroids
import Asteroids from './javascript/asteroids/Asteroids.js'
import Asteroids1 from './javascript/asteroids/Asteroids1.js'
import Asteroids2 from './javascript/asteroids/Asteroids2.js'
import Asteroids3 from './javascript/asteroids/Asteroids3.js'
import Asteroids4 from './javascript/asteroids/Asteroids4.js'
import Asteroids5 from './javascript/asteroids/Asteroids5.js'

// Deco Elements
import Spaceship from './javascript/Spaceship.js'
import Sign from './javascript/Sign.js'
import Sign1 from './javascript/Sign1.js'
import Sign2 from './javascript/Sign2.js'
import Spaceshuttle from './javascript/Spaceshuttle'
import Sputnik from './javascript/Sputnik.js'
import Ufo from './javascript/Ufo.js'

// Astronauts
import Astronaut from './javascript/Astronaut.js'
import Astronaut1 from './javascript/Astronaut1.js'
import Astronaut2 from './javascript/Astronaut2.js'




const home = new Home()

//Museum
const museum = new Museum()
home.scene.add(museum.group)


//Sun
const sun = new Sun()
home.scene.add(sun.group)


// //Meteor
const meteor = new Meteor()
home.scene.add(meteor.group)

// //Moon
const moon = new Moon()
home.scene.add(moon.group)


//Ufo
const ufo = new Ufo()
home.scene.add(ufo.group)

// //Asteroids
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

// //Spaceship
const spaceship = new Spaceship()
home.scene.add(spaceship.group)

// Sign
const sign = new Sign()
home.scene.add(sign.group)

const sign1 = new Sign1()
home.scene.add(sign1.group)

const sign2 = new Sign2()
home.scene.add(sign2.group)

// //Astronaut
const astronaut = new Astronaut()
home.scene.add(astronaut.group)

const astronaut1 = new Astronaut1()
home.scene.add(astronaut1.group)

const astronaut2 = new Astronaut2()
home.scene.add(astronaut2.group)

// Spaceshuttle
// const spaceshuttle = new Spaceshuttle()
// home.scene.add(spaceshuttle.group)

//Sputnik
const sputnik = new Sputnik()
home.scene.add(sputnik.group)

