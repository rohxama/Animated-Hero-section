var tl = gsap.timeline();
tl.from(".nav img,.nav-menu li,.nav-button" ,{
    y: -100,
    duration: 1.3,
    delay: 1,
    stagger: 0.2,
    opacity: 0
});
tl.from(".hero-section h1,.play-btn,.icons,.btm",{
    y: 100,
    stagger: 0.3,
    opacity: 0
});
tl.from(".hero-section img",{
    scale: 0,
    stagger: 0.3,
    opacity: 0
})
tl.to(".btm",{
    y: 10,
    yoyo: true,
    repeat: -1
})