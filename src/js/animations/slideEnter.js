import gsap from "gsap";

const slideEnter = (container) => {
    const tlEnter = gsap.timeline({
        default: { duration: 2, ease: 'Power2.easeOut' }
    });

    return (
        tlEnter.fromTo(container,
                { x: "-100%"},
                { x: "0%", duration: 0.5, clearProps: 'all' },
            )
    ); 
}

export default slideEnter;