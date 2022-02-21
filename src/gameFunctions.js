export function findWinner(p1Moves, p2Moves) {
    if (!p1Moves || !p2Moves) return null;
    let winner = null
    //from square indexes
    const patterns = [7, -6, 8, 1];
    patterns.forEach(pattern => {
        //p1moves is the array of indexes of the squares player one chose
        //p2moves is the array of indexes of the squares player two chose
        //put the array of moves and the pattern into findMatch. If the difference between each index matches the pattern, that player wins
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

//This ensures that the token is placed on the lowest row possible in each column
export function dropSquare(index, gameboard) {
    //highest index is 41, keep adding 7 to the index that was chosen until it gets to the highest index possible < 41
    while (index + 7 < 42) {
        index += 7;
    }
    while (gameboard[index].whoClicked && index - 7 >= 0) {
        index -= 7;
    }
    return index;
}