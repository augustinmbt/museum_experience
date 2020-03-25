import './styles/main.scss'
// import './experience'
import './javascript/Home'
import Home from './javascript/Home'
// import ContentAnim from './javascript/ContentAnim'
import Rocket from './javascript/Rocket'

const home = new Home()
// const contentAnim = new ContentAnim()
const rocket = new Rocket()
home.scene.add(rocket.group)

