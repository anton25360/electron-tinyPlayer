let song = document.getElementById('songTitle')
let artist = document.getElementById('songArtist')
let logout = document.getElementById('logout')
let hasAccount = false

console.log(hasAccount);
checkForAccount(hasAccount)

function checkForAccount(input) {

    if (input) {
        //do this
        // logout.innerHTML = 'Sign In'
    } else {
        alert('SIGN IN WINDOW')
        logout.innerHTML = 'Sign In'

    }
}


// song.innerHTML = 'Mercy'
// artist.innerHTML = 'MUSE'
logout.onclick = function () {
    alert('You are now signed out');
}