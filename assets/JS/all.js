function counterNum() {
    const counterItems = document.querySelectorAll('.counter-item');

    counterItems.forEach(function(item) {
        let clickCount = 0;
        const btnIncrease = item.querySelector('.btnIncrease');
        const btnReduce = item.querySelector('.btnReduce');
        const counterText = item.querySelector('.counter-text');

        btnIncrease.addEventListener('click', function() {
            clickCount++;
            counterText.textContent = clickCount;
        });

        btnReduce.addEventListener('click', function() {
            if (clickCount > 0) {
                clickCount--;
                counterText.textContent = clickCount;
            }
        });
    });
}

counterNum();
