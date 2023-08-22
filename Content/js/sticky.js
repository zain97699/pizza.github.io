 window.addEventListener("scroll", function () {
        const hd = document.querySelector("hd");
        hd.classList.toggle('sticky', window.scrollY > 0);
    });
