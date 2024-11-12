(() => {
    const $counter = document.getElementById("js-counter");

    const wait = (ms) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    };

    const clapSound = new Audio("./sounds/crowd-cheer-in-school-auditorium.mp3");

    const clickHandler = async (e) => {
        const currentCounter = parseInt($counter.textContent);
        const TargetButtonText = e.currentTarget.textContent;

        if (TargetButtonText === "Count down" && currentCounter > 0) {
            for (let index = currentCounter; index > 0; index--) {
                $counter.textContent = index - 1;
                //wait unless the counter is 0
                if($counter.textContent !== "0") {
                    await wait(1000);
                }
            }
            clapSound.play();
        } else if(TargetButtonText === "Count up" && currentCounter < 0) {
            for (let index = currentCounter; index < 0; index++) {
                $counter.textContent = index + 1;
                //wait unless the counter is 0
                if($counter.textContent !== "0") {
                    await wait(1000);
                }
            }
            clapSound.play();
        }
    }

    const $updownButton = document.getElementsByClassName("js-countupdown-button");

    for (index = 0; index < $updownButton.length; index++) {
        $updownButton[index].addEventListener("click", (e) => clickHandler(e));
    }

})();