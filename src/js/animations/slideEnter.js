import gsap from "gsap";

const slideEnter = (container, direction = "vertical") => {
    console.log("slideEnter - container: ", container);
    const transition = container.querySelector('.transition');

    const tlEnter = gsap.timeline({
        default: { duration: 2, ease: 'Power2.easeOut' }
    });

    if (direction == "horizontal") {
        return (
            tlEnter.fromTo(container,
            { x: "-100%"},
            { x: "0%", duration: 0.5, clearProps: 'all' },
            )
        ); 
    } else {
        return (
            tlEnter.fromTo(transition,
            { y: "0%" },
            { y: "100%", duration: 1, clearProps: 'all' },
            )
        );
    }
}

export default slideEnter;