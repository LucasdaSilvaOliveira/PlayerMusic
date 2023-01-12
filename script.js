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

let numberSong = 0;

play.addEventListener('click', () => {
    prev.style.display = 'none'
    next.style.display = 'none'

    if (numberSong > 12) {
        numberSong = 0
    }
    if (numberSong < 0) {
        numberSong = 12
    }
    if (audioList[numberSong].getAttribute('src') == '') {
        audioList[numberSong].setAttribute('src', lastSongPlayed[numberSong])
    }

    audioList[numberSong].play()

    body.classList.add('setAnimation')

    trackListItens.forEach(item => {

        trackListItens.forEach(tracks => tracks.classList.remove('color_item'))

        trackListItens[numberSong].classList.add('color_item')
    })
});

stop.addEventListener('click', () => {
    prev.style.display = 'flex'
    next.style.display = 'flex'

    if (lastSongPlayed.length == 0) {
        return
    } else {
        audioList[numberSong].setAttribute('src', '')
    }

    body.classList.remove('setAnimation')

});

pause.addEventListener('click', () => {

    audioList[numberSong].pause()

    body.classList.remove('setAnimation')

});

next.addEventListener('click', () => {

    numberSong++

    if (numberSong > 12) {
        numberSong = 0
    }

    trackName.innerHTML = lastSongPlayed[numberSong].replace('audios/', '').replace('.mp3', '')

    trackListItens.forEach(item => {

        trackListItens.forEach(tracks => tracks.style.color = 'white')

        trackListItens[numberSong].style.color = 'yellow'
    })

});

prev.addEventListener('click', () => {

    numberSong = numberSong - 1

    if (numberSong < 0) {
        numberSong = 12
    }

    trackName.innerHTML = lastSongPlayed[numberSong].replace('audios/', '').replace('.mp3', '')

    trackListItens.forEach(item => {

        trackListItens.forEach(tracks => tracks.style.color = 'white')

        trackListItens[numberSong].style.color = 'yellow'
    })

});