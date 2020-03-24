window.addEventListener("load", () => {
    const tl = gsap.timeline()
    tl.from("h2", { duration: 1, opacity: 0, y: -10 })
    tl.from("h5", { duration: 1, opacity: 0 })
    tl.from("#reg-button", { duration: 1, opacity: 0, x: -10 })
    tl.from(".logo", { duration: 1, opacity: 0, x: -10 })

    document.querySelector("#reg-button").addEventListener("click", () => {
        var regTl = gsap.timeline();
        regTl.fromTo(".registerForm", { opacity: 0, display: "none", width: 0, x: -20 }, { duration: .7, opacity: 1, width: "auto", x: 0, display: "block" })
        document.querySelector(".registerForm img").addEventListener("click", () => {
            regTl.reverse();
        })
    });
})