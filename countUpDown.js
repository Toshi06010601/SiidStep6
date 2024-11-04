(() => {
    const $counter = document.getElementById("js-counter");

    const waitForASecond = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

    // TargetButtonText === "Count down" && 

    const clickHandler = async (e) => {
        const currentCounter = parseInt($counter.textContent);
        const TargetButtonText = e.currentTarget.textContent;
        if (TargetButtonText === "Count down" && currentCounter > 0) {
            for (let index = currentCounter; index > 0; index--) {
                await waitForASecond();
                $counter.textContent = index - 1;
            }
        } else if(TargetButtonText === "Count up" && currentCounter < 0) {
            for (let index = currentCounter; index < 0; index++) {
                await waitForASecond();
                $counter.textContent = index + 1;
            }
        }
    }

    const $updownButton = document.getElementsByClassName("js-countupdown-button");

    for (index = 0; index < $updownButton.length; index++) {
        $updownButton[index].addEventListener("click", (e) => clickHandler(e));
    }

})();