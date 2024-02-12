import barba from '@barba/core';
import gsap from "gsap";

import {    animationEnter,
            clipEnter,
            slideEnter,
            slideLeave,
            slideEnterBlock,
            slideLeaveBlock,
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
    preventRunning: true,
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
        to: {
            namespace: ['clip'],
         },
        once({next}) {
            clipEnter(next.container)
        },
        leave: ({current}) => clipLeave(current.container),
        enter({next}) {
            clipEnter(next.container)
        },
    },
    {
        name: 'with-cover',
        to: {
            namespace: ['with-cover'],
         },
        once({next}) {
            slideEnterBlock(next.container)
        },
        leave: ({current}) => slideLeaveBlock(current.container),
        enter({next}) {
            slideEnterBlock(next.container)
         },
    }, 
    ]
});
