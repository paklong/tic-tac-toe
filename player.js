const createPlayer = function (name, mark) {
    const getName = () => name;
    const getMark = () => mark.toUpperCase();
    const getClearName = () => name[0].toUpperCase() + name.slice(1, name.length);
    return {
        getName, getMark, getClearName
    }
}


