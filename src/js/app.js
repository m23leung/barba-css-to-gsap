import barba from '@barba/core';
import gsap from "gsap";

import {    animationEnter,
            clipEnter,
            slideEnter,
            slideLeave,
            animationLeave,
            clipLeave,
            staggerLeave,
        } from './animations';

const body = document.querySelector('body')

// Global hook which runs before every transition for
// resolving the white flicker screen between transitions
barba.hooks.before((data) => {
    console.log("RUN BEFORE EVERY TRANSITION");

    const background = data.current.container.dataset.background;
    console.log('background: ', background);
    body.style.setProperty('--page-background', background);
})

barba.init({
    transitions: [
     {
        name: 'halvo',
        // sync: true,
        to: {
            namespace: ['halvo'],
         },
        leave({current}) {
            const done = this.async();
            staggerLeave(current.container, done);
        },
    },
    {
        name: 'home',
        to: {
            namespace: ['home'],
         },
        leave: ({current}) => slideLeave(current.container, "horizontal"),
        enter({next}) {
            console.log("HOME NEXT");
            slideEnter(next.container, "horizontal");
        },
    },       
    {
        name: 'fade',
        once({next}) {
            animationEnter(next.container)
        },
        leave: ({current}) => animationLeave(current.container),
        enter({next}) {
            animationEnter(next.container);
        },
    },
    {
        name: 'clip',
        // sync: true,
        to: {
            namespace: ['clip'],
         },
        // once({next}) {
        //     console.log("CLIP ONCE")
        //     animationEnter(next.container)
        // },
        leave: ({current}) => clipLeave(current.container),
        enter({next}) {
            console.log('CLIP - entering');
            clipEnter(next.container)
        },
    },
    {
        name: 'with-cover',
        to: {
            namespace: ['with-cover'],
         },
        leave: ({current}) => slideLeave(current.container),
        // enter({next}) {
        //     console.log('WITH-COVER - entering');
        //     slideEnter(next.container)
        // },
    }, 
    ]
});

// barba.init({
//     transitions: [
//         {
//             name: 'home',
//             sync: true,
//             to: {
//                 namespace: ['home'],
//             },
//             once() {},
//             leave() {
//                 console.log('home leave');
//             },
//             enter() {
//                 console.log('home enter');
//             },
//         },
//         {
//             name: 'fade',
//             from: { namespace: ['home'] },
//             to: {
//                 namespace: ['fade'],
//             },
//             // once(data) {
//             //     console.log("FADE ONCE");
//             //     const done = this.async();
//             //     let next = data.next.container;
//             //     let gradient = getGradient(data.next.namespace);

//             //     // On page load, set the body background color
//             //     gsap.set('body', { background: gradient });                
//             // },
//             leave(data) {
//                 // with css plugin, this will not run
//                 console.log('fade leave');
//                 const done = this.async();
//                 let current = data.current.container;
//                 console.log("CURRENT: ", current);
//                 const content = current.querySelector('.content');
//                 tlLeave.fromTo(content, { opacity: 1 }, { opacity: 0, onComplete: done });
//             },
//             enter(data) {
//                 // with css plugin, this will not run
//                 console.log('fade enter');
//                 const done = this.async();
//                 let next = data.next.container;
//                 let gradient = getGradient(data.next.namespace);
//                 console.log("GRADIENT: ", gradient);
//                 const content = next.querySelector('.content');


//                 // tlEnter.to('body', { background: gradient});
//                 const body = document.querySelector('body')
//                 body.style.setProperty('--page-background', gradient);
//             },
//         },
//         {
//             name: 'clip',
//             sync: true,
//             to: {
//                 namespace: ['clip'],
//             },
//             leave() {
//                 // with css plugin, this will not run
//                 console.log('leave');
//             },
//             enter() {
//                 // with css plugin, this will not run
//                 console.log('enter');   
//             },
//         },
//         {
//             name: 'with-cover',
//             to: {
//                 namespace: ['with-cover'],
//             },
//             leave() {
//                 // with css plugin, this will not run
//                 console.log('leave');
//             },
//             enter() {
//                 // with css plugin, this will not run
//                 console.log('enter');
//             },
//         }
//     ]
// })

// // changing gradient on showcase
// const getGradient = (name) => {
//     switch(name) {
//         case "fade":
//             return "#CC98C6";
//         case "clip":
//             return "#161636";
//         case "with-cover":
//             return "#E66F7F";  
//     }
// }
