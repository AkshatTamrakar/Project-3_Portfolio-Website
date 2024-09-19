let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1; 
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Web Development Popup
document.querySelector("#open-web-popup").addEventListener("click", function() {
    document.querySelector("#web-popup").classList.add("active");
});
document.querySelector("#web-popup .close-btn").addEventListener("click", function() {
    document.querySelector("#web-popup").classList.remove("active");
});

// Java Development Popup
document.querySelector("#open-java-popup").addEventListener("click", function() {
    document.querySelector("#java-popup").classList.add("active");
});
document.querySelector("#java-popup .close-btn").addEventListener("click", function() {
    document.querySelector("#java-popup").classList.remove("active");
});

// App Development Popup
document.querySelector("#open-app-popup").addEventListener("click", function() {
    document.querySelector("#app-popup").classList.add("active");
});
document.querySelector("#app-popup .close-btn").addEventListener("click", function() {
    document.querySelector("#app-popup").classList.remove("active");
});
