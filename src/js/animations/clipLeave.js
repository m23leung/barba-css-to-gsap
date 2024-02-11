import gsap from "gsap";

const clipLeave = (container, done) => {
    return gsap.fromTo(container, 
                { autoAlpha: 1},
                { autoAlpha: 0, duration: 0.5, clearProps: 'all', ease: 'none' })
}

export default clipLeave;