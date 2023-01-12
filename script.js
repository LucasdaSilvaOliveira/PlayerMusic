let audio = document.querySelectorAll('.audio');
let audioList = Array.from(audio);
let play = document.getElementById('play');
let stop = document.getElementById('stop');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let pause = document.getElementById('pause');
let trackName = document.getElementById('track_name');
const body = document.querySelector('body');
const trackList = document.getElementById('track_list');
let trackListItens = trackList.childNodes;

audioList.forEach((song, index) => {
    let p = document.createElement('p')

    trackList.appendChild(p)

    p.innerHTML = `${index + 1} - ${song.getAttribute('src').replace('audios/', '').replace('.mp3', '')}`
})

let lastSongPlayed = [];

audioList.forEach(song => {
    lastSongPlayed.push(song.getAttribute('src'))
});

let songNumber = 0;

play.addEventListener('click', () => {
    prev.style.display = 'none'
    next.style.display = 'none'

    if (songNumber > 12) {
        songNumber = 0
    }
    if (songNumber < 0) {
        songNumber = 12
    }
    if (audioList[songNumber].getAttribute('src') == '') {
        audioList[songNumber].setAttribute('src', lastSongPlayed[songNumber])
    }

    audioList[songNumber].play()

    body.classList.add('setAnimation')

    trackListItens.forEach(item => {

        trackListItens.forEach(tracks => tracks.classList.remove('color_item'))

        trackListItens[songNumber].classList.add('color_item')
    })
});

stop.addEventListener('click', () => {
    prev.style.display = 'flex'
    next.style.display = 'flex'

    if (lastSongPlayed.length == 0) {
        return
    } else {
        audioList[songNumber].setAttribute('src', '')
    }

    body.classList.remove('setAnimation')

});

pause.addEventListener('click', () => {

    audioList[songNumber].pause()

    body.classList.remove('setAnimation')

});

next.addEventListener('click', () => {

    songNumber++

    if (songNumber > 12) {
        songNumber = 0
    }

    trackName.innerHTML = lastSongPlayed[songNumber].replace('audios/', '').replace('.mp3', '')

    trackListItens.forEach(item => {

        trackListItens.forEach(tracks => tracks.style.color = 'white')

        trackListItens[songNumber].style.color = 'yellow'
    })

});

prev.addEventListener('click', () => {

    songNumber = songNumber - 1

    if (songNumber < 0) {
        songNumber = 12
    }

    trackName.innerHTML = lastSongPlayed[songNumber].replace('audios/', '').replace('.mp3', '')

    trackListItens.forEach(item => {

        trackListItens.forEach(tracks => tracks.style.color = 'white')

        trackListItens[songNumber].style.color = 'yellow'
    })

});