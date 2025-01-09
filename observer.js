// Minimal Observer Pattern
const Observer = (function () {
    const signals = {};

    function connect(signal, callback) {
        signals[signal] = signals[signal] || [];
        signals[signal].push(callback);
    }

    function disconnect(signal, callback) {
        if (signals[signal]) {
            signals[signal] = signals[signal].filter(cb => cb !== callback);
        }
    }

    function emit(signal, data) {
        if (signals[signal]) {
            signals[signal].forEach(callback => callback(data));
        }
    }
    return {
        connect, disconnect, emit
    };
})();


const eventBinder = (function () {

    const $resetBtn = document.querySelector('.resetBtn');
    $resetBtn.addEventListener('click', () => Observer.emit('resetClicked'));

    const $cells = document.querySelectorAll('.cell');
    $cells.forEach((cell) => cell.addEventListener('click',
        function (e) {
            const [targetX, targetY] = [...e.target.getAttribute('data-index').split(',')];
            Observer.emit('cellClicked', { targetX, targetY, cell: e.target });
        }
    ));


})();