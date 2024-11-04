(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = (e) => {
        const $TargetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($TargetButton.textContent === "+"){
            $counter.textContent = currentCount + 1; 
        } else {
            $counter.textContent = currentCount - 1;
        }
    };

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => {clickHandler(e)})
    };

})();
