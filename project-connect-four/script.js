var diags = [
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

var column = $(".column");
var currentPlayer = "player1";
var popup = $("#popup");
popup.hide();
var closeButton = $("#x");
var resetButton = $(".button");

closeButton.on("click", function () {
    popup.hide();
});

resetButton.on("click", reset);

function reset() {
    currentPlayer = "player1";

    for (var i = 0; i < column.length; i++) {
        for (var j = 0; j < column.eq(i).children().length; j++) {
            column.eq(i).children().eq(j).removeClass("player1");
            column.eq(i).children().eq(j).removeClass("player2");
        }
    }
}

// selecting slots//
column.on("click", function (e) {
    var currentColumn = $(e.currentTarget);
    var slotsInCurrentColumn = currentColumn.children();
    var rowIndex;
    for (var i = slotsInCurrentColumn.length - 1; i >= 0; i--) {
        if (
            !slotsInCurrentColumn.eq(i).hasClass("player1") &&
            !slotsInCurrentColumn.eq(i).hasClass("player2")
        ) {
            slotsInCurrentColumn.eq(i).addClass(currentPlayer);
            rowIndex = i;
            break;
        }
    }
    if (winnerCheck(currentColumn, rowIndex)) {
        popup.toggle();
        currentPlayer = "player1";
    } else {
        changePlayer();
    }
});

//change player//
function changePlayer() {
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
    } else if (currentPlayer == "player2") {
        currentPlayer = "player1";
    }
}

function winnerCheck(currentColumn, rowIndex) {
    return (
        winnerCheckForColumn(currentColumn.children()) ||
        winnerCheckForRow(rowIndex)
        // winnerCheckForDiagonal()
        // winnerCheckForDiagonal(currentColumn, rowIndex)
    );
}

function winnerCheckForDiagonal() {
    var indexArray = [];
    var counter = 0;

    for (var i = 0; i < diags.length; i++) {
        for (var j = 0; j < diags.eq(i).length; j++) {
            if (column.eq(i).children().eq(j).hasClass(currentPlayer)) {
                indexArray.push(6 * i + j);
                counter++;
            }
        }
    }
    if ($.inArray(indexArray, diags) > -1) return true;
    return false;
}

function winnerCheckForColumn(slotsInCurrentColumn) {
    var counter = 0;
    var indexArray = [];
    for (var i = 0; i < slotsInCurrentColumn.length; i++) {
        if (slotsInCurrentColumn.eq(i).hasClass(currentPlayer)) {
            indexArray.push(i);
            counter++;
        }
        if (counter == 4 && isConsecutive(indexArray.sort())) {
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
        if (counter == 4 && isConsecutive(indexArray.sort())) {
            console.log("row winner");
            return true;
        }
    }
}

function isConsecutive(array) {
    var i = 2;
    var diff = 1;
    if (
        diff === array[i - 1] - array[i - 2] &&
        diff === array[i] - array[i - 1] &&
        diff === array[i + 1] - array[i]
    ) {
        return true;
    }
    return false;
}
