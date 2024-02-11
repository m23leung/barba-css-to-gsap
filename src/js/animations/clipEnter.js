import gsap from "gsap";

const clipEnter = (container, done) => {
    return gsap.fromTo(container, 
        { clipPath: "circle(0%)" }, 
        { clipPath: "circle(75%)", duration: 1, clearProps: 'all', ease: 'none' })
}

export default clipEnter;