var diagArrays = [
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 32],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [21, 26, 31, 36],
    [22, 27, 32, 37],
    [23, 28, 33, 38],
];

var slots = $(".slot");
var column = $(".column");
var row = $(".row0");
var currentPlayer = "player1";

// selecting slots//
column.on("click", function (e) {
    var currentColumn = $(e.currentTarget);
    var slotsInCurrentColumn = currentColumn.children();
    var currentRow;
    for (var i = slotsInCurrentColumn.length - 1; i >= 0; i--) {
        if (
            !slotsInCurrentColumn.eq(i).hasClass("player1") &&
            !slotsInCurrentColumn.eq(i).hasClass("player2")
        ) {
            slotsInCurrentColumn.eq(i).addClass(currentPlayer);
            currentRow = i;
            break;
        }
    }
    winnerCheckForRow(currentRow);
    changePlayer();
});

//change player//
function changePlayer() {
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
    } else if (currentPlayer == "player2") {
        currentPlayer = "player1";
    }
}

function winnerCheck(slotsInCurrentColumn) {
    winnerCheckForColumn(slotsInCurrentColumn);
    winnerCheckForRow();
    winnerCheckForDiagonal();
}

// function winnerCheckForDiagonal(slotsInCurrentColumn) {
//     var counter = 0;
//     var indexArray = [];
//     for (var i = 0; i < slotsInCurrentColumn.length; i++) {
//         if (slotsInCurrentColumn.eq(i).hasClass(currentPlayer)) {
//             indexArray.push(i);
//             counter++;
//         }
//         if (counter == 4 && isConsecutive(indexArray)) {
//             console.log("winner");
//             return true;
//         }
//     }
// }

function winnerCheckForColumn(slotsInCurrentColumn) {
    var counter = 0;
    var indexArray = [];
    for (var i = 0; i < slotsInCurrentColumn.length; i++) {
        if (slotsInCurrentColumn.eq(i).hasClass(currentPlayer)) {
            indexArray.push(i);
            counter++;
        }
        if (counter == 4 && isConsecutive(indexArray)) {
            console.log("column winner");
            return true;
        }
    }
}

function winnerCheckForRow(rowIndex) {
    var indexArray = [];
    var counter = 0;
    for (var i = 0; i < column.length; i++) {
        if (column.eq(i).children().eq(rowIndex).hasClass(currentPlayer)) {
            indexArray.push(i);
            counter++;
        }
        if (counter == 4 && isConsecutive(indexArray)) {
            console.log("row winner");
            return true;
        }
    }
}

function isConsecutive(array) {
    var i = 2;
    var d = 0;
    while (i < array.length) {
        d = array[i - 1] - array[i - 2];
        if ((d === 1 || d === -1) && d === array[i] - array[i - 1]) {
            return true;
        }
        i++;
        return false;
    }
}
