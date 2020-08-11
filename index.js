// load board

const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];

// create variables

var selectedNum;
var selectedTile;
var disableSelect;

window.onload = function() {
    // run startgame function
    id("start-btn").addEventListener("click", startGame);
    for (let i = 0; i < id("number-container").children.length; i++) {
        id("number-container").children[i].addEventListener("click", function() {
            if (!disableSelect) {
                if (this.classList.contains("selected")) {
                    this.classList.remove("selected");
                    selectedNum = null;
                } else {
                    for (let i = 0; i < 9; i++) {
                        id("number-container").children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    selectedNum = this;
                    updateMove();
                }


            }
        })
    }
}

function startGame() {
    console.log('start');
    board = medium[0];
    disableSelect = false;
    generateBoard(board);
    id("number-container").classList.remove("hidden");
}

function generateBoard(board) {
    // clear previous
    clearPrevious();

    // let used to increment tile ids
    let idCount = 0;

    for (let i = 0; i < 81; i++) {
        let tile = document.createElement("p");
        if (board.charAt(i) != "-") {
            tile.textContent = board.charAt(i);
        } else {
            // tile.textContent = "69"
            // make changable
            tile.addEventListener("click", function() {
                if (!disableSelect) {
                    if (tile.classList.contains("selected")) {
                        tile.classList.remove("selected");
                        selectedTile = null;
                    } else {
                        for (let i = 0; i < 81; i++) {
                            qsa(".tile")[i].classList.remove("selected")
                        }
                        tile.classList.add("selected");
                        selectedTile = tile;
                        updateMove();
                    }
                }
            })

        }
        tile.id = idCount;
        idCount++;
        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 & tile.id < 54)) {
            tile.classList.add("bottomBorder");
        }
        if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
            tile.classList.add("rightBorder")
        }
        id("board").appendChild(tile)
    }
}

function updateMove() {
    if (selectedTile && selectedNum) {
        selectedTile.textContent = selectedNum.textContent;
        selectedTile.classList.remove("selected");
        selectedNum.classList.remove("selected");
        selectedNum = null;
        selectedTile = null;
    }
}

function clearPrevious() {
    let tiles = qsa(".tile");
    // remove each tile
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].remove();
    }
    for (let i = 0; i < id("number-container").children.length; i++) {
        id("number-container").children[i].classList.remove("selected");
    }
    selectedTile = null;
    selectedNum = null;
}
// helper

function qs(selector) {
    return document.querySelector(selector);
}

function qsa(selector) {
    return document.querySelectorAll(selector);
}

function id(id) {
    return document.getElementById(id);
}