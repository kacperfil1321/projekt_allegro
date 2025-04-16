var toogle = 0;

document.getElementById('helpImg').addEventListener('click', function() {
    if(toogle == 0) {
        document.getElementById('options').style.display = 'flex';
        toogle = 1;
    }
    else {
        document.getElementById('options').style.display = 'none';
        toogle = 0;
    }
});