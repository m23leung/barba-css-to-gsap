import gsap from "gsap";

const animationLeave = (container) => {
    return gsap.to(container, 
                { autoAlpha: 0, duration: 0.5, clearProps: 'all', ease: 'none' })
}

export default animationLeave;