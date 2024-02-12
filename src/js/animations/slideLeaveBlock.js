import gsap from "gsap";

const slideLeave = (container) => {
    console.log('slideLeave');
    const transition = container.querySelector('.transition');

    return (gsap.fromTo(transition, 
        { y: "-100%", clearProps: 'all' },
        { y: "0%", duration: 2, clearProps: 'all' })
    )
}

export default slideLeave;