//menna ahmed sayed ahmed 20230586
function changeStyleSheet() {
    var stylesheet = document.getElementById('ch-css');

    if (stylesheet.href.endsWith('css_home/home.css')) {
        stylesheet.href = 'css_home/home2.css';
    } else {
        stylesheet.href = 'css_home/home.css';
    }
}


var music = document.getElementById("music");
function playmusic() {
    music.play();
}
function pause() {
    music.pause();
}
function load() {
    music.load();
}

function stopvolume() {
    music.volume = 0;
}
function playvolume() {
    music.volume = 1;
}

function search() {
    let searchBar = document.querySelector('.search-input').value.toUpperCase();
    let productList = document.querySelector('.product-list');
    let product = document.querySelectorAll('.product');
    let productName = document.getElementsByTagName('h4');


    for (let i = 0; i < productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
            product[i].style.display = "";
        }
        else {
            product[i].style.display = "none";
        }
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var song1 = document.getElementById("song1");
function playmusic1() {
    song1.play();
}
function pause1() {
    song1.pause();
}
function load1() {
    song1.load();
}

function stopvolume1() {
    song1.volume = 0;
}
function playvolume1() {
    song1.volume = 1;
}
/*===================================*/

var song2 = document.getElementById("song2");
function playmusic2() {
    song2.play();
}
function pause2() {
    song2.pause();
}
function load2() {
    song2.load();
}

function stopvolume2() {
    song2.volume = 0;
}
function playvolume2() {
    song2.volume = 1;
}
/*======================================*/
var song3 = document.getElementById("song3");
function playmusic3() {
    song3.play();
}
function pause3() {
    song3.pause();
}
function load3() {
    song3.load();
}

function stopvolume3() {
    song3.volume = 0;
}
function playvolume3() {
    song3.volume = 1;
}
/*=================================================*/
var song4 = document.getElementById("song4");
function playmusic4() {
    song4.play();
}
function pause4() {
    song4.pause();
}
function load4() {
    song4.load();
}

function stopvolume4() {
    song4.volume = 0;
}
function playvolume4() {
    song4.volume = 1;
}
/*====================================*/
var song5 = document.getElementById("song5");
function playmusic5() {
    song5.play();
}
function pause5() {
    song5.pause();
}
function load5() {
    song5.load();
}

function stopvolume5() {
    song5.volume = 0;
}
function playvolume5() {
    song5.volume = 1;
}
/*===========================================*/
var song6 = document.getElementById("song6");
function playmusic6() {
    song6.play();
}
function pause6() {
    song6.pause();
}
function load6() {
    song6.load();
}

function stopvolume6() {
    song6.volume = 0;
}
function playvolume6() {
    song6.volume = 1;
}

/*=======================================================================*/



