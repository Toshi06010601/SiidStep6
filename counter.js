(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = (e) => {
        const TargetButton = e.currentTarget.textContent;
        let currentCount = parseInt($counter.textContent);
        if(TargetButton === "+"){
            $counter.textContent = currentCount + 1; 
        } else if (TargetButton === "-") {
            $counter.textContent = currentCount - 1;
        } else if (TargetButton === "+10"){
            $counter.textContent = currentCount + 10;
        } else {
            $counter.textContent = currentCount - 10;
        }
    };

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => {clickHandler(e)})
    };

})();
