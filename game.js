(function game() {

    let player = [];
    let whoIsTheTurnNow = 0;

    //cache dom
    const $cells = document.querySelectorAll('.cell');
    const $message = document.querySelector('.message');
    const $player1 = document.querySelector('#player1');
    const $player2 = document.querySelector('#player2');

    //binding
    Observer.connect('cellClicked', updateGameBoard);
    Observer.connect('resetClicked', resetGame);

    $player1.addEventListener('input', updateName);
    $player2.addEventListener('input', updateName);

    function updateName() {
        const player1 = createPlayer(`${$player1.value}`, 'x');
        const player2 = createPlayer(`${$player2.value}`, 'O');
        player = [player1, player2];
        updateMessage();
        Observer.emit('resetClicked');
    }


    function updateGameBoard({ targetX, targetY, cell }) {
        const mark = player[whoIsTheTurnNow].getMark();
        gameboard.setCells(targetX, targetY, mark);
        togglePlayer();
        updateMessage();
        cell.disabled = true;
    }

    function updateMessage() {
        $message.innerHTML = `${player[whoIsTheTurnNow].getClearName()}'s turn now. Place ${player[whoIsTheTurnNow].getMark()}`;
    }

    function togglePlayer() {
        whoIsTheTurnNow = (whoIsTheTurnNow === 0) ? 1 : 0;
    }

    function resetGame() {
        enableAllBtn();
    }

    function enableAllBtn() {
        $cells.forEach((cell) => cell.disabled = false);
    }



    updateName();

})();