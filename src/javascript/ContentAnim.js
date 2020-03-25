import Home from './Home'
import IntroSong from '../assets/intro.mp3'


const home = new Home()

export default class ContentAnim {
    constructor() {
        this.$exploreBtn = document.querySelector('.launch')
        this.$homeContent = document.querySelector('.home')
        this.$welcomeContent = document.querySelector('.welcome')

        this.song = new Audio(IntroSong)

        this.$exploreBtn.addEventListener('click', () => {
            // home.loop()
            this.song.play()
            this.$welcomeContent.style.display = 'flex'


            this.$homeContent.classList.add('hide')
            setTimeout(() => {
                this.$homeContent.style.visibility = 'hidden'
            }, 1000);

            setTimeout(() => {
                this.$welcomeContent.classList.add('show')
                this.showed = true

                this.onWheel()

            }, 4000)
        })



    }

    onWheel() {
        
            const welcomeText = [
                'It\'s an imersive experience made for curious  people who wants to learn basics\' Astronomy',
                'The opening of the doors of our museum scheduled for March 27 being postponed due to Coronavirus, we decided to make you live the experience differently. ',
                'Enjoy & Stay Home'
            ]

            let counter = -1
            window.addEventListener('mousewheel', _event=> {
                _event.stopPropagation()

                console.log(_event);
                
                if(_event.deltaY > 0 && counter < 2) {
                    this.text = document.querySelector('.welcome__content__text')

                    

                    this.text.classList.add('hide')

                    setTimeout(() => {
                    counter++

                        this.text.innerHTML = welcomeText[counter]
                        this.text.classList.remove('hide')
                        
                    }, 1000);
                }
        })
             
        
    }
}