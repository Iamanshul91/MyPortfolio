// Skill Words Animation
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split('');
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
    });
});

let currentWordIndex = 0
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = '1';

let changeText = ()=> {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = 'letter out';
        },i * 80);
    });
    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = 'letter behind';
        setTimeout(()=> {
            letter.className = 'letter in';
        },300, i*80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,2000)

// Toggle Icon Navbar





// console.log(navbar.children);
// let x =0;
// for(let x=0; x<navbar.children.length; x++){
//     // console.log(navbar.childNodes);
//     console.log(`position of elemnt: ${x} ${navbar.children[x]}`)
// }


// navbar.children.onclick = () => {

// }

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let Homesection = document.querySelector('section');
let home = navbar.firstElementChild;

Array.from(navbar.children).forEach((item) => {
    item.addEventListener('click', (e)=> {
        if(e.pointerId > 1){
            home.classList.remove('active')
        }
    })
})

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    Homesection.classList.toggle('active');
    navbar.classList.toggle('active');
    // console.log(navbar.firstElementChild.classList.remove('active'))
}



