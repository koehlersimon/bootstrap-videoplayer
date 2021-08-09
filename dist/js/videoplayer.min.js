class BootstrapVideoplayer{

    constructor(selector,settingsCustom) {

        let settingsDefault = {
            selectors:{
                video: '.video',
                playPauseButton: '.btn-video-playpause',
                playIcon: '.bi-play-fill',
                pauseIcon: '.bi-pause-fill',
                progress: '.progress',
                progressbar: '.progress-bar',
                pipButton: '.btn-video-pip',
                fullscreenButton: '.btn-video-fullscreen',
                volumeRange: '.form-range-volume'
            }
        }

        const deepMerge = function(){
            // create a new object
            let target = {};
            // deep merge the object into the target object
            const merger = (obj) => {
                for (let prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                            // if the property is a nested object
                            target[prop] = deepMerge(target[prop], obj[prop])
                        } else {
                            // for regular property
                            target[prop] = obj[prop]
                        }
                    }
                }
            };
            // iterate through all objects and
            // deep merge them with target
            for (let i = 0; i < arguments.length; i++) {
                merger(arguments[i])
            }
            return target;
        }

        let settings = deepMerge(settingsDefault, settingsCustom) //console.log(settings)
        let parent = this
        let player = document.getElementById(selector)
        let video = player.querySelector(settings.selectors.video)
        let progress = player.querySelector(settings.selectors.progress)
        let progressbar = player.querySelector(settings.selectors.progressbar)
        let playbutton = player.querySelector(settings.selectors.playPauseButton)
        let pipbutton = player.querySelector(settings.selectors.pipButton)
        let fullscreenbutton = player.querySelector(settings.selectors.fullscreenButton)
        let volumeinput = player.querySelector(settings.selectors.volumeRange)

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
            console.log('Bootstrap Video Player: Video object can not be found. Please check your plugin settings.')
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
