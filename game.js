(function game() {
    const player1 = createPlayer('john', 'x');
    const player2 = createPlayer('Kelvin', 'o');

    const player = [player1, player2];

    let whoIsTheTurnNow = 0;

    //cache dom
    const $cells = document.querySelectorAll('.cell');
    const $message = document.querySelector('.message');

    //binding
    Observer.connect('cellClicked', updateGameBoard);
    Observer.connect('resetClicked', resetGame);


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
        updateMessage();
        enableAllBtn();
    }

    function enableAllBtn() {
        $cells.forEach((cell) => cell.disabled = false);
    }


    updateMessage();

})();