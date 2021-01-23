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

var colArrays = [
    //column//
    [0, 1, 2, 3],
    [5, 4, 3, 2],
    [1, 2, 3, 4],
    //column//
    [6, 7, 8, 9],
    [11, 10, 9, 8],
    [7, 8, 9, 10],
    //column//
    [12, 13, 14, 15],
    [17, 16, 15, 14],
    [13, 14, 15, 16],
    //column//
    [18, 19, 20, 21],
    [23, 22, 21, 20],
    [19, 20, 21, 22],
    //column//
    [24, 25, 26, 27],
    [29, 28, 27, 26],
    [25, 26, 27, 28],
    //column//
    [30, 31, 32, 33],
    [35, 34, 33, 32],
    [31, 32, 33, 34],
    //column//
    [36, 37, 38, 39],
    [41, 40, 39, 38],
    [37, 38, 39, 40],
];

var rowArrays = [
    //row//
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [23, 29, 35, 41],
    //row//
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [16, 22, 28, 34],
    [22, 28, 34, 40],
    //row//
    [3, 9, 15, 21],
    [9, 15, 21, 27],
    [15, 21, 27, 33],
    [21, 27, 33, 39],
    //row//
    [2, 8, 14, 20],
    [8, 14, 20, 26],
    [14, 20, 26, 32],
    [20, 26, 32, 38],
    //row//
    [1, 7, 13, 19],
    [7, 13, 19, 25],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    //row//
    [0, 6, 12, 18],
    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
];

var slots = $(".slot");
var column = $(".column");
var row = $(".row");
var currentPlayer = "player1";

//////////following the column////////////
$(".column").on("click", function (e) {
    var col = $(e.currentTarget);
    var slotsInCol = col.children();
    for (var i = slotsInCol.length - 1; i >= 0; i--) {
        if (
            !slotsInCol.eq(i).hasClass("player1") &&
            !slotsInCol.eq(i).hasClass("player2")
        ) {
            slotsInCol.eq(i).addClass(currentPlayer);
            break;
        }
    }

    console.log("i: ", i);
    if (i === -1) {
        return;
    }

    /////////////////////////

    var slotsInRow = $(".row" + i);
    // // console.log("slotsInRow: ", slotsInRow);
    // // // we want to check if there was a column victory
    // // // we want to check if there was a row victory
    // // // this afternoon we want to check for diagonal victory...
    // if (checkForVictory(slotsInCol)) {
    //     console.log("col victory!!!!");
    // } else if (checkForVictory(slotsInRow)) {
    //     // there must be a row victory
    //     // do the victory dance!!
    //     console.log("row victory!!!!");
    // }

    switchPlayer();
});

//////////////////////////////////

function checkForVictory(slots) {
    console.log("checking for vicotry with these slots", slots);
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        console.log(
            "slots.eq(i).hasClass(): ",
            slots.eq(i).hasClass(currentPlayer)
        );
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            console.log("count: ", count);
            if (count === 4) {
                return true;
            }
        } else {
            count = 0;
        }
    }
}

/////////////////////////////////////////
function switchPlayer() {
    console.log("switch the player!");
    currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
}

///////////////reset the game////////////////////

// (function () {}();
