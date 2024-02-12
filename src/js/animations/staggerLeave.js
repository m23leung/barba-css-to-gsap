import gsap from "gsap";

const staggerLeave = (container, done) => {
    const tl = gsap.timeline();
    tl.to('ul.transition-lines li', { duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.1, onComplete: done }),
    tl.to('ul.transition-lines li', { duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.1, delay: 0.1 })
}

export default staggerLeave;