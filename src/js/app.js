import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss)

barba.init({
    transitions: [
        {
            name: 'home',
            beforeOnce() {
                console.log("beforeOnce");
            },
            once() {
                // with css plugin, this will not run
                console.log('once');
            },
            afterOnce() {
                console.log('afterOnce');
            },
        }
    ]
})
