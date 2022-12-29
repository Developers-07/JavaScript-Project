function dis(val) {
    let s = document.getElementById('res');
    s.value += val
}

function clr() {
    document.getElementById('res').value = '';
}

function slv() {
    let x = document.getElementById('res').value;
    let y = eval(x);

    document.getElementById('res').value = y;
}
