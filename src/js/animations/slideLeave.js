import gsap from "gsap";

const slideLeave = (container) => {
    console.log('slideLeave');

    return gsap.fromTo(container,
        { x: "0%", clearProps: 'all' },
        { x: "100%", duration: 0.5, clearProps: 'all' },
    )
}

export default slideLeave;