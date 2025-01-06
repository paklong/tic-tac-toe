const gameboard = (function () {

    const gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    //cache dom
    const $cells = document.querySelectorAll('.cell');

    //renders
    const render = () => $cells.forEach(displayCells);

    const displayCells = function (cell) {
        const dataIndex = cell.getAttribute('data-index').split(',');
        cell.innerText = gameboard[dataIndex[0]][dataIndex[1]];
    };

    const setCells = function (targetX, targetY, mark) {
        gameboard[targetX][targetY] = mark;
        render();
    }

    return {
        setCells
    };

})();