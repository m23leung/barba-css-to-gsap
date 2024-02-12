import gsap from "gsap";

const slideEnter = (container) => {
    const transition = container.querySelector('.transition');

    const tlEnter = gsap.timeline({
        default: { duration: 2, ease: 'Power2.easeOut' }
    });

    return (
        tlEnter.fromTo(transition,
                { y: "0%" },
                { y: "100%", duration: 1, clearProps: 'all' },
        )
    );
}

export default slideEnter;