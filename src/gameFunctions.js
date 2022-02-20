export function findWinner(p1Moves, p2Moves) {
    if (!p1Moves || !p2Moves) return null;
    let winner = null
    const patterns = [7, -6, 8, 1];
    patterns.forEach(pattern => {
        if (findMatch(p1Moves, pattern)) {
            winner = 1;
        }
        if (findMatch(p2Moves, pattern)) {
            winner = 2;
        }
    })
    return winner;
}

function findMatch(moves, plus) {
    let win = false;
    let winArray = []
    moves.forEach(move => {
        const match1 = findPlusNumber(move, moves, plus);
        winArray.push(move);
        winArray.push(match1)
        if (match1) {
            const match2 = findPlusNumber(match1, moves, plus);
            if (match2) {
                winArray.push(match2);
                const match3 = findPlusNumber(match2, moves, plus);
                if (match3) {
                    winArray.push(match3);
                    win = true;
                    console.log(winArray.filter((v, i, a) => a.indexOf(v) === i));
                }
            }
        }
    })
    return win;
}

function findPlusNumber(coordinate, array, plus) {
    return array.find(otherCoordinates => otherCoordinates === coordinate + plus && otherCoordinates !== undefined);
}

export function dropSquare(index, gameboard) {
    while (index + 7 < 42) {
        index += 7;
    }
    while (gameboard[index].whoClicked && index - 7 >= 0) {
        index -= 7;
    }
    return index;
}