var btns = document.getElementsByClassName("btns");
                var slide = document.getElementById('slidez');
                btns[0].onclick = function () {
                    slide.style.transform = "translateX(0px)";
                    for (i = 0; i < 4; i++) {
                        btns[i].classList.remove("actives");
                    }
                    this.classList.add("actives");
                }
                btns[1].onclick = function () {
                    slide.style.transform = "translateX(-800px)";
                    for (i = 0; i < 4; i++) {
                        btns[i].classList.remove("actives");
                    }
                    this.classList.add("actives");
                }
                btns[2].onclick = function () {
                    slide.style.transform = "translateX(-1600px)";
                    for (i = 0; i < 4; i++) {
                        btns[i].classList.remove("actives");
                    }
                    this.classList.add("actives");
                }
                btns[3].onclick = function () {
                    slide.style.transform = "translateX(-2400px)";
                    for (i = 0; i < 4; i++) {
                        btns[i].classList.remove("actives");
                    }
                    this.classList.add("actives");
                }