(function game() {
    const player1 = createPlayer('john', 'x');
    const player2 = createPlayer('Kelvin', 'o');

    const player = [player1, player2];

    let whoIsTheTurnNow = 0;

    //cache dom
    const $cells = document.querySelectorAll('.cell');
    const $message = document.querySelector('.message');

    //listen to click
    $cells.forEach(
        (cell) => cell.addEventListener('click', iAmClicked)
    )

    function iAmClicked(e) {
        updateGameBoard(e);
        togglePlayer();
        updateMessage();
    };

    function updateGameBoard(e) {
        const [targetX, targetY] = [...e.target.getAttribute('data-index').split(',')];
        const mark = player[whoIsTheTurnNow].getMark();
        gameboard.setCells(targetX, targetY, mark);
    };

    function updateMessage() {
        $message.innerHTML = `${player[whoIsTheTurnNow].getClearName()}'s turn now`;
    };

    function togglePlayer() {
        whoIsTheTurnNow = (whoIsTheTurnNow === 0) ? 1 : 0;
    };

    updateMessage();

})();