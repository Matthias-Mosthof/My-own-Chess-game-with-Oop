let moveCounter = 0;
let whitePieceCounter = 0;
let blackPieceCounter = 0;
let lastMovedPiece;
let lastMovedSide;
let clickCounter = 0;
let pieceIsActive = false;

const state = {
  Start: [{ move: 0, done: false, whitePieces: 16, blackPieces: 16 }],
  Moves: [
    {
      moves: moveCounter,
      done: false,
      whitePieces: whitePieceCounter,
      blackPieces: blackPieceCounter,
    },
  ],
  currentMove: [
    {
      move: moveCounter,
      lastMovedPiece: lastMovedPiece,
      lastMovedSide: lastMovedSide,
    },
  ],
  End: [
    {
      moves: moveCounter,
      done: true,
      whitePieces: whitePieceCounter,
      blackPieces: blackPieceCounter,
    },
  ],
};

function pieceDeactivateActivate() {
  clickCounter++;
  if (clickCounter === 2) {
    clickCounter = 0;
    return (pieceIsActive = false);
  } else if (clickCounter === 1) {
    pieceIsActive = true;
  }

  return pieceIsActive;
}

const fieldb3 = document.querySelector("#field-b3");
const fieldb4 = document.querySelector("#field-b4");

const pawnB2 = document.querySelector("#white-pawn-b2");

pawnB2.addEventListener("click", (event) => {
  pieceDeactivateActivate();
  if (pieceIsActive === true) {
    fieldb3.addEventListener("click", () => {
      clickCounter = 0;
      clickCounter++;
      //console.log(clickCounter);
      if (clickCounter === 1) {
        fieldb3.append(pawnB2);
        moveCounter = 1;
        possibleB3.style.width = "0px";
        possibleB4.style.width = "0px";
        return moveCounter;
      }
    });
  }
  if (pieceIsActive === true) {
    fieldb4.addEventListener("click", () => {
      clickCounter = 0;
      clickCounter++;
      //console.log(clickCounter);
      if (clickCounter === 1) {
        fieldb4.append(pawnB2);
        moveCounter = 1;
        possibleB3.style.width = "0px";
        possibleB4.style.width = "0px";
        return moveCounter;
      }
    });
  }
});
//console.log(moveCounter);
// Showing all possible moves for Each piece on the first Move
// White Pieces
// Pawns
// Pawn A2 Possible Moves:

const pawnA2 = document.querySelector("div:nth-child(2)> svg");

const possibleA3 = document.querySelector("div:nth-child(3) > aside");
const possibleA4 = document.querySelector("div:nth-child(4) > aside");

function toggle() {
  possibleA4.classList.toggle("possiblemove");
  possibleA3.classList.toggle("possiblemove");
}

pawnA2.addEventListener("click", toggle);

// Pawn B2 Possible Moves:

const possibleB3 = document.querySelector("div:nth-child(11) > aside");
const possibleB4 = document.querySelector("div:nth-child(12) > aside");

function toggle1() {
  possibleB3.classList.toggle("possiblemove");
  possibleB4.classList.toggle("possiblemove");
}

pawnB2.addEventListener("click", toggle1);

// Pawn C2 Possible Moves:
const pawnC2 = document.querySelector("div:nth-child(18) > svg");

const possibleC3 = document.querySelector("div:nth-child(19) > aside");
const possibleC4 = document.querySelector("div:nth-child(20) > aside");

function toggle2() {
  possibleC3.classList.toggle("possiblemove");
  possibleC4.classList.toggle("possiblemove");
}

pawnC2.addEventListener("click", toggle2);

// Pawn D2 Possible Moves:

const pawnD2 = document.querySelector("div:nth-child(26) > svg");

const possibleD3 = document.querySelector("div:nth-child(27) > aside");
const possibleD4 = document.querySelector("div:nth-child(28) > aside");

function toggle3() {
  possibleD3.classList.toggle("possiblemove");
  possibleD4.classList.toggle("possiblemove");
}

pawnD2.addEventListener("click", toggle3);

// Pawn E2 Possible Moves:

const pawnE2 = document.querySelector("div:nth-child(34) > svg");

const possibleE3 = document.querySelector("div:nth-child(35) > aside");
const possibleE4 = document.querySelector("div:nth-child(36) > aside");

function toggle4() {
  possibleE3.classList.toggle("possiblemove");
  possibleE4.classList.toggle("possiblemove");
}

pawnE2.addEventListener("click", toggle4);

// Pawn F2 Possible Moves:

const pawnF2 = document.querySelector("div:nth-child(42) > svg");

const possibleF3 = document.querySelector("div:nth-child(43) > aside");
const possibleF4 = document.querySelector("div:nth-child(44) > aside");

function toggle5() {
  possibleF3.classList.toggle("possiblemove");
  possibleF4.classList.toggle("possiblemove");
}

pawnF2.addEventListener("click", toggle5);

// Pawn G2 Possible Moves:

const pawnG2 = document.querySelector("div:nth-child(50) > svg");

const possibleG3 = document.querySelector("div:nth-child(51) > aside");
const possibleG4 = document.querySelector("div:nth-child(52) > aside");

function toggle6() {
  possibleG3.classList.toggle("possiblemove");
  possibleG4.classList.toggle("possiblemove");
}

pawnG2.addEventListener("click", toggle6);

// Pawn H2 Possible Moves:

const pawnH2 = document.querySelector("div:nth-child(58) > svg");

const possibleH3 = document.querySelector("div:nth-child(59) > aside");
const possibleH4 = document.querySelector("div:nth-child(60) > aside");

function toggle7() {
  possibleH3.classList.toggle("possiblemove");
  possibleH4.classList.toggle("possiblemove");
}

pawnH2.addEventListener("click", toggle7);

// Knights
// Knight B1 Possible Moves:

const knightB1 = document.querySelector("div:nth-child(9) > svg");

function toggle8() {
  possibleA3.classList.toggle("possiblemove");
  possibleC3.classList.toggle("possiblemove");
}

knightB1.addEventListener("click", toggle8);

//Knight G1 Possible Moves:
const knightG1 = document.querySelector("div:nth-child(49) > svg");

function toggle9() {
  possibleF3.classList.toggle("possiblemove");
  possibleH3.classList.toggle("possiblemove");
}

knightG1.addEventListener("click", toggle9);

// Black Pieces
// Pawn A7 Possible Moves

const pawnA7 = document.querySelector("div:nth-child(7)> svg");

const possibleA6 = document.querySelector("div:nth-child(6) > aside");
const possibleA5 = document.querySelector("div:nth-child(5) > aside");

function toggle10() {
  possibleA6.classList.toggle("possiblemove");
  possibleA5.classList.toggle("possiblemove");
}

pawnA7.addEventListener("click", toggle10);

// Pawn B7 Possible Moves

const pawnB7 = document.querySelector("div:nth-child(15)> svg");

const possibleB6 = document.querySelector("div:nth-child(14) > aside");
const possibleB5 = document.querySelector("div:nth-child(13) > aside");

function toggle11() {
  possibleB6.classList.toggle("possiblemove");
  possibleB5.classList.toggle("possiblemove");
}

pawnB7.addEventListener("click", toggle11);

// Pawn C7 Possible Moves

const pawnC7 = document.querySelector("div:nth-child(23)> svg");

const possibleC6 = document.querySelector("div:nth-child(22) > aside");
const possibleC5 = document.querySelector("div:nth-child(21) > aside");

function toggle12() {
  possibleC6.classList.toggle("possiblemove");
  possibleC5.classList.toggle("possiblemove");
}

pawnC7.addEventListener("click", toggle12);

// Pawn D7 Possible Moves

const pawnD7 = document.querySelector("div:nth-child(31)> svg");

const possibleD6 = document.querySelector("div:nth-child(30) > aside");
const possibleD5 = document.querySelector("div:nth-child(29) > aside");

function toggle13() {
  possibleD6.classList.toggle("possiblemove");
  possibleD5.classList.toggle("possiblemove");
}

pawnD7.addEventListener("click", toggle13);

// Pawn E7 Possible Moves

const pawnE7 = document.querySelector("div:nth-child(39)> svg");

const possibleE6 = document.querySelector("div:nth-child(38) > aside");
const possibleE5 = document.querySelector("div:nth-child(37) > aside");

function toggle14() {
  possibleE6.classList.toggle("possiblemove");
  possibleE5.classList.toggle("possiblemove");
}

pawnE7.addEventListener("click", toggle14);

// Pawn F7 Possible Moves

const pawnF7 = document.querySelector("div:nth-child(47)> svg");

const possibleF6 = document.querySelector("div:nth-child(46) > aside");
const possibleF5 = document.querySelector("div:nth-child(45) > aside");

function toggle15() {
  possibleF6.classList.toggle("possiblemove");
  possibleF5.classList.toggle("possiblemove");
}

pawnF7.addEventListener("click", toggle15);

// Pawn G7 Possible Moves

const pawnG7 = document.querySelector("div:nth-child(55)> svg");

const possibleG6 = document.querySelector("div:nth-child(54) > aside");
const possibleG5 = document.querySelector("div:nth-child(53) > aside");

function toggle16() {
  possibleG6.classList.toggle("possiblemove");
  possibleG5.classList.toggle("possiblemove");
}

pawnG7.addEventListener("click", toggle16);

// Pawn H7 Possible Moves

const pawnH7 = document.querySelector("div:nth-child(63)> svg");

const possibleH6 = document.querySelector("div:nth-child(62) > aside");
const possibleH5 = document.querySelector("div:nth-child(61) > aside");

function toggle17() {
  possibleH6.classList.toggle("possiblemove");
  possibleH5.classList.toggle("possiblemove");
}

pawnH7.addEventListener("click", toggle17);

//Knight B8 Possible Moves:
const knightB8 = document.querySelector("div:nth-child(16) > svg");

function toggle18() {
  possibleA6.classList.toggle("possiblemove");
  possibleC6.classList.toggle("possiblemove");
}

knightB8.addEventListener("click", toggle18);

//Knight G8 Possible Moves:
const knightG8 = document.querySelector("div:nth-child(56) > svg");

function toggle19() {
  possibleF6.classList.toggle("possiblemove");
  possibleH6.classList.toggle("possiblemove");
}

knightG8.addEventListener("click", toggle19);
