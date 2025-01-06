(function game() {
    const player1 = createPlayer('player1', 'x');
    const player2 = createPlayer('player2', 'o');

    const player = {
        player1: player1,
        player2: player2
    };

    let whoIsTheTurnNow = 'player1';
    //cache dom
    const $cells = document.querySelectorAll('.cell');

    //listen to click
    $cells.forEach(
        (cell) => cell.addEventListener('click', iAmClicked)
    )

    function iAmClicked(e) {
        const [targetX, targetY] = [...e.target.getAttribute('data-index').split(',')];
        const mark = player[whoIsTheTurnNow].getMark();
        gameboard.setCells(targetX, targetY, mark);
        whoIsTheTurnNow = whoIsTheTurnNow === 'player1' ? 'player2' : 'player1';
    };


})();