document.addEventListener('DOMContentLoaded', () => {

    var player1 = new BootstrapVideoplayer('player-1',{
        selectors:{
            video: '.video'
        }
    })
    var player2 = new BootstrapVideoplayer('player-2')
    var player3 = new BootstrapVideoplayer('player-3')
    var player4 = new BootstrapVideoplayer('player-4')
    var player5 = new BootstrapVideoplayer('player-5')
    var player6 = new BootstrapVideoplayer('player-6')
    var player7 = new BootstrapVideoplayer('player-7')
    var player8 = new BootstrapVideoplayer('player-8')

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl,{
          boundary: document.body
      })
    })

})
