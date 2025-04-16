document.getElementById('arrowLeft').addEventListener('click', function() {
    const slider = document.getElementById('categoriesSlider');
    const scrollAmount = slider.offsetWidth - 50;
    var scrolled = 0;
    setInterval(function () {
        if(scrolled >= scrollAmount) {
            clearInterval(this);
        }
        else {
            slider.scrollLeft -= 10;
            scrolled += 10;
        }
    }, 1);
});

document.getElementById('arrowRight').addEventListener('click', function() {
    const slider = document.getElementById('categoriesSlider');
    const scrollAmount = slider.offsetWidth - 50;
    var scrolled = 0;
    setInterval(function () {
        if(scrolled >= scrollAmount) {
            clearInterval(this);
        }
        else {
            slider.scrollLeft += 10;
            scrolled += 10;
        }
    }, 1);
});