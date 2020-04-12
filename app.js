window.addEventListener("load", () => {
    const tl = gsap.timeline()
    tl.from("h2", { duration: 1, opacity: 0, y: -50 })
    tl.from("h5", { duration: 1, opacity: 0 }, '>-.5')
    tl.from("#reg-button", { duration: 1, opacity: 0, x: -50 }, '>-.25')
    tl.from(".logo", { duration: 1, opacity: 0, x: 50 })
    tl.timeScale(2.1)

    document.querySelector("#reg-button").addEventListener("click", () => {
        var regTl = gsap.timeline();
        regTl.fromTo(".modal", { opacity: 0, display: "none", width: 0, y: -40 }, { opacity: 1, width: "auto", y: 0, display: "block" }, );
        regTl.fromTo(".overlay", { opacity: 0 }, { display: "block", backgroundColor: "rgba(0, 0, 0, 0.804)", opacity: 1 }, '<');
        regTl.timeScale(2)
        document.querySelector(".modal img").addEventListener("click", () => {
            regTl.reverse();
        })
    });
})