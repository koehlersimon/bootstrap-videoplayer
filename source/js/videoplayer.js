class BootstrapVideoplayer{

    constructor(selector) {

        let settings = {
            // Settings here...
        }

        let parent = this
        let player = document.getElementById(selector)
        let video = player.querySelector('video.video')
        let progress = player.querySelector('.progress')
        let progressbar = progress.querySelector('.progress-bar')
        let playbutton = player.querySelector('.btn-video-playpause')
        let pipbutton = player.querySelector('.btn-video-pip')
        let fullscreenbutton = player.querySelector('.btn-video-pip')
        let volumeinput = player.querySelector('.input-video-volume')

        try{
            video.addEventListener('loadedmetadata', function(e) {

                video.volume = (volumeinput.value/100)

                volumeinput.addEventListener('change',function(e){
                    video.volume = (e.target.value/100)
                })

                fullscreenbutton.addEventListener('click',function(){
                    parent.openFullscreen(video)
                })

                playbutton.addEventListener('click',function(){
                    parent.playpause(video,this,progressbar)
                })

                video.addEventListener('click',function(){
                    parent.playpause(video,playbutton,progressbar)
                })

                pipbutton.addEventListener('click',function(){
                    parent.pip(video,this)
                })

                progress.addEventListener('click',function(e){
                    let width = this.clientWidth
                    let bounds = this.getBoundingClientRect();
                    let x = e.clientX - bounds.left;
                    let y = e.clientY - bounds.top;
                    let percent = Math.floor(x / (width / 100))
                    progressbar.style.width = percent + '%'
                    video.currentTime = percent * (video.duration/100)
                })

            })
        }
        catch(error){
            console.log(error)
        }

    }

    pip(video,button){
        console.log('implement PIP here!')
    }

    playpause(video,button,progressbar){
        if(video.playing === true){
            video.pause()
            button.querySelector('.bi-play-fill').classList.remove('d-none')
            button.querySelector('.bi-pause-fill').classList.add('d-none')
            video.playing = false
            clearInterval(video.listener)
        }
        else{
            video.play()
            button.querySelector('.bi-play-fill').classList.add('d-none')
            button.querySelector('.bi-pause-fill').classList.remove('d-none')
            video.playing = true
            var listener = setInterval(function(){
                var percentPlayed = Math.floor(video.currentTime / (video.duration/100))
                if(percentPlayed < 100){
                    progressbar.style.width = percentPlayed + '%'
                }
                else if(percentPlayed === 100){
                    progressbar.style.width = '100%'
                    clearInterval(this)
                    video.pause()
                    video.currentTime = 0
                    video.playing = false
                    button.querySelector('.bi-play-fill').classList.remove('d-none')
                    button.querySelector('.bi-pause-fill').classList.add('d-none')
                }
            },200)
            video.listener = listener
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
