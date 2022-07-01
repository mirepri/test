// comment here

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/experimental-hero') {
        myImage.setAttribute('src','images/ray.jpeg');
        myImage.setAttribute('alt', 'abstract image');
    } else {
        myImage.setAttribute('src','images/experimental-hero');
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