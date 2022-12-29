(function () {
    const form = document.querySelector('#msg-form');
    form.addEventListener('submit', funMsg);

    function funMsg(e) {
        e.preventDefault();
        const msg = document.querySelector('#msg');
        const showMsg = document.querySelector('.feedback');
        const passMsg = document.querySelector('.msg-content');

        if (msg.value === '') {
            showMsg.classList.add('show');
            setTimeout(fun, 4000);
            function fun() {
                showMsg.classList.remove('show');
            }
        }
        else {
            passMsg.textContent = msg.value;
            msg.value = '';
        }
    }
})()