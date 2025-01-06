const createPlayer = function (name, mark) {
    const getName = () => name;
    const getMark = () => mark.toUpperCase();
    return {
        getName, getMark
    };
};


