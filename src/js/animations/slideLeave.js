import gsap from "gsap";

const slideLeave = (container, direction = "vertical") => {
    console.log('slideLeave');
    const transition = container.querySelector('.transition');

    if (direction == "horizontal") {
        return gsap.fromTo(container, 
            { x: "0%", clearProps: 'all' },
            { x: "100%", duration: 0.5, clearProps: 'all' },
        )   
    } else {
        return (gsap.fromTo(transition, 
            { y: "-100%", clearProps: 'all' },
            { y: "0%", duration: 2, clearProps: 'all' })
        )
    }
}

export default slideLeave;