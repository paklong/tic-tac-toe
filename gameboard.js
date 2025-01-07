const gameboard = (function () {

    const gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]

    //cache dom
    const $cells = document.querySelectorAll('.cell');

    //renders
    function render() { $cells.forEach(displayCells) }

    function displayCells(cell) {
        const dataIndex = cell.getAttribute('data-index').split(',');
        cell.innerText = gameboard[dataIndex[0]][dataIndex[1]];
    }

    function setCells(targetX, targetY, mark) {
        gameboard[targetX][targetY] = mark;
        render();
    }

    function resetBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                setCells(i, j, '');
            }
        }
    }

    return {
        setCells, resetBoard
    }

})();