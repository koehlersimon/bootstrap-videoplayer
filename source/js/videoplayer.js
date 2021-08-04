class BootstrapVideoplayer{

    constructor(selector) {
        let settings = {
            // Settings here...
        }
        let parent = this
        let player = document.getElementById(selector)
        let video = player.querySelector('video.video')
        let progress = player.querySelector('.progress')
        video.playing = false

        video.addEventListener('loadedmetadata', function() {
            //console.log(video.playing)
        })

        player.querySelector('.btn-video-fullscreen').addEventListener('click',function(){
            parent.openFullscreen(video)
        })

        player.querySelector('.btn-video-playpause').addEventListener('click',function(){
            parent.playpause(video,this)
        })

        video.addEventListener('click',function(){
            parent.playpause(video,player.querySelector('.btn-video-playpause'))
        })

        player.querySelector('.btn-video-pip').addEventListener('click',function(){
            parent.pip(video,this)
        })

        progress.addEventListener('click',function(e){
            let width = this.clientWidth
            let bounds = this.getBoundingClientRect();
            let x = e.clientX - bounds.left;
            let y = e.clientY - bounds.top;
            let percent = Math.floor(x / (width / 100))
            this.querySelector('.progress-bar').style.width = percent + '%'

        })
    }

    pip(video,button){
        console.log('implement PIP here!')
    }

    videoPosition(percentage){

    }

    playpause(video,button){
        if(video.playing === true){
            video.pause()
            button.querySelector('.bi-play-fill').classList.remove('d-none')
            button.querySelector('.bi-pause-fill').classList.add('d-none')
            video.playing = false
        }
        else{
            video.play()
            button.querySelector('.bi-play-fill').classList.add('d-none')
            button.querySelector('.bi-pause-fill').classList.remove('d-none')
            video.playing = true
        }
    }

    openFullscreen(video) {
        if (video.requestFullscreen) {
            video.requestFullscreen()
        } else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen()
        } else if (video.msRequestFullscreen) { /* IE11 */
            video.msRequestFullscreen()
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {

    var player1 = new BootstrapVideoplayer('demoplayer-1')
    var player2 = new BootstrapVideoplayer('demoplayer-2')
    var player3 = new BootstrapVideoplayer('demoplayer-3')
    var player4 = new BootstrapVideoplayer('demoplayer-4')
    var player5 = new BootstrapVideoplayer('demoplayer-5')

})
