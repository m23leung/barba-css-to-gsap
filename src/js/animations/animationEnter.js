import gsap from "gsap";

const animationEnter = (container, done) => {
    return gsap.fromTo(container,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.5, clearProps: 'all', ease: 'none' })
}

export default animationEnter;