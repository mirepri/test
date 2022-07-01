// comment here

let myImage = document.querySelector('img');
let experimentalHero = {
    url: 'images/experimental-hero.jpeg',
    alt: 'Alt of Experimental Hero'
};
let ray = {
  url: 'images/ray.jpeg',
  alt: 'Alt of Ray'
};
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === experimentalHero.url) {
        myImage.setAttribute('src', ray.url);
        myImage.setAttribute('alt', ray.alt);
    } else {
        myImage.setAttribute('src', experimentalHero.url);
        myImage.setAttribute('alt', experimentalHero.alt);
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This idea is so cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This idea is so cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}