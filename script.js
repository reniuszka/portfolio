// TOGGLE NAV
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => nav.classList.toggle('active'));

// TEXT EFFECT

const textEl1 = document.getElementById('header__text1');
//text I wanna write
const text = 'Welcome to my website';
// index of letterin the SVGComponentTransferFunctionElement, writing it one by one
let indx = 1;
// speed of writing
let speed = 200;

writeText();

function writeText() {
  //want to start with 'W' as slice takes the first letter (0) and index is saying to slice before 1
  textEl1.innerText = text.slice(0, indx);
  //   it will implement it by one, adding new letters to the sentence
  indx++;

  //   checks if it is the end of my sentence, if it is true, we will start over from W
  if (indx > text.length) {
    indx = 1;
  }

  //   it runs writeText with specific after .2s
  setTimeout(writeText, speed);
}

// Page Navigation - Smoooth Scrolling
// class nav__link is in every a tag. id classes to each section to easier loop through index number
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    // to not go to anchor path and not to show anything in the URL bar
    e.preventDefault();
    // getting href from anchor - relative path,this always relates to the event handler (el) absolute would be path.href
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Revealing sections with the intersection observer API
// const allSections = document.querySelectorAll('.section');

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove('section--hidden');
//   // unobserve
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   // root:null allows us to observe the entire viewport
//   root: null,
//   // shows current portion of the page
//   threshold: 0.2,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });

// gsap for animation
// tl - timeline
// using gsap library defaults - how long you want the animation to happen
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
// to() - where I want the animation to go to, the first argument is the element you want to animate, the second argument is the object so we want to specify the animation we want to do and duration, third argument is stagger to show one line by one
// grabbing the span -text, go back to 0%, 1s, .025 stagger - the way how the next line shows up
tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });

// after the above animation finished the one below will start. Thanks to timeline those animation are chained together

// '-=1' means start opne sec faster

tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');

tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
