# VIDEO PLAYER INTERFACE

This is an experimental interface to implement a video player using the Bootstrap 5 framework. The HTML structure was deliberately created so that you can customize the player to your own design using Bootstrap's built-in CSS classes.

<a href="https://koehlersimon.github.io/bootstrap-videoplayer/">https://koehlersimon.github.io/bootstrap-videoplayer/</a>

### HTML Markup for Video Player
```
<!-- Video Player with default light controls -->
<div class="videoplayer">
  <div class="ratio ratio-16x9 bg-dark">
    <video class="video" src="video-demo-timelapse.mp4"></video>
  </div>
  <div class="controls">
    <button class="btn btn-lg play" data-state="play" type="button"><i class="bi bi-play-fill"></i></button>
    <div class="px-1 w-100">
      <div class="progress w-100">
        <div class="progress-bar w-25" min="0" value="0"></div>
      </div>
    </div>
    <button class="btn btn-lg" title="Play picture in picture"><i class="bi bi-pip"></i></button><button class="btn btn-lg"><i class="bi bi-arrows-fullscreen"></i></button>
    <div class="dropup">
      <button class="btn btn-lg" data-bs-toggle="dropdown" title="Volume"><i class="bi bi-volume-mute-fill"></i></button>
      <div class="dropdown-menu dropdown-menu-end dropup-volume">
        <input class="form-range" type="range" value="25">
      </div>
    </div>
    <div class="dropup">
      <button class="btn btn-lg" data-bs-toggle="dropdown" title="More..."><i class="bi bi-three-dots-vertical"></i></button>
      <div class="dropdown-menu dropdown-menu-end">
        <a class="dropdown-item" href="#"><i class="bi bi-info-circle-fill"></i> About</a>
      </div>
    </div>
  </div>
</div>
```

### CSS Classes

<table>
    <tr>
        <th>Class</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Class</td>
        <td>Description</td>
    </tr>
</table>
