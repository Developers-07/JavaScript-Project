(function () {

    const btnOne = document.querySelector('.btn1');
    const btnTwo = document.querySelector('.btn2');
    const res = document.querySelector('.output');
    let ans = 0;
    
    btnOne.addEventListener('click', sub);
    function sub() {
        ans--;
        if (ans > 0) {
            res.style.color = 'green';
        }
        else if (ans === 0) {
            res.style.color = 'gray'
        }
        else {
            res.style.color = 'red';
        }
        res.textContent = ans;
    }
    btnTwo.addEventListener('click', add);
    function add() {
        ans++;
        if (ans > 0) {
            res.style.color = 'green';
        }
        else if (ans === 0) {
            res.style.color = 'gray'
        }
        else {
            res.style.color = 'red';
        }
        res.textContent = ans;
    }
    
})()

