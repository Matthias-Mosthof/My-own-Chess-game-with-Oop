// Funktion die jedes Feld auf dem Chessboard als Variable in einem Array speichert
const chessBoard = [];
const fields = ["a", "b", "c", "d", "e", "f", "g", "h"];

fields.forEach((char) => {
  let start = 1;
  while (start <= 8) {
    chessBoard.push(document.querySelector("#field-" + char + start));
    start++;
  }
});

console.log("1", chessBoard);

// Funktion die für den Läufer automatisch rausfindet wo er gerade ist und was er von seiner Position "sieht"
function renderWhereIsBishopF1() {
  let currentPosition;
  let fieldNumber = 0;

  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-bishop-f1") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  // Wo steht er
  // Wieviele Felder sieht er (Anzahl)
  // Welche Felder sieht er
  let bishopSees = [];

  // Was sieht Läufer nach oben links
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "8") {
    for (let r = 7; r < 63; r = r + 7) {
      if (chessBoard[fieldNumber - r] !== undefined) {
        bishopSees.push(chessBoard[fieldNumber - r]);
        if (
          chessBoard[fieldNumber - r].attributes.class.textContent.slice(-1) ===
          "8"
        ) {
          break;
        }
      }
    }
  }
  // Was sieht Läufer nach unten links
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "1") {
    for (let t = 9; t < 63; t = t + 9) {
      if (chessBoard[fieldNumber - t] !== undefined) {
        bishopSees.push(chessBoard[fieldNumber - t]);
        if (
          chessBoard[fieldNumber - t].attributes.class.textContent.slice(-1) ===
          "1"
        ) {
          break;
        }
      }
    }
  }

  // Was sieht Läufer nach unten rechts
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "1") {
    for (let d = 7; d < 63; d = d + 7) {
      if (chessBoard[fieldNumber + d] !== undefined) {
        bishopSees.push(chessBoard[fieldNumber + d]);
        if (
          chessBoard[fieldNumber + d].attributes.class.textContent.slice(-1) ===
          "1"
        ) {
          break;
        }
      }
    }
  }
  // Was sieht Läufer nach oben rechts
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "1") {
    for (let u = 9; u < 63; u = u + 9) {
      if (chessBoard[fieldNumber + u] !== undefined) {
        bishopSees.push(chessBoard[fieldNumber + u]);

        if (
          chessBoard[fieldNumber + u].attributes.class.textContent.slice(-1) ===
          "8"
        ) {
          break;
        }
      }
    }
  }

  //bishopSees.sort();
  //console.log(bishopSees);
  //console.log(currentPosition.attributes.class);
  //console.log(fieldNumber);
}
renderWhereIsBishopF1();

function renderWhereIsRookH1() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-rook-h1") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  // Wo steht er
  // Wieviele Felder sieht er (Anzahl)
  // Welche Felder sieht er
  let rookSees = [];
  // Was sieht Turm nach oben
  for (let r = 1; r < 8; r++) {
    if (chessBoard[fieldNumber + r] !== undefined) {
      rookSees.push(chessBoard[fieldNumber + r]);
      if (
        chessBoard[fieldNumber + r].attributes.class.textContent.slice(-1) ===
        "8"
      ) {
        break;
      }
    }
  }
  // Was sieht Turm nach unten
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "1") {
    for (let t = 1; t < 8; t++) {
      if (chessBoard[fieldNumber - t] !== undefined) {
        rookSees.push(chessBoard[fieldNumber - t]);
        if (
          chessBoard[fieldNumber - t].attributes.class.textContent.slice(-1) ===
          "1"
        ) {
          break;
        }
      }
    }
  }

  // Was sieht Turm nach rechts

  for (let d = 8; d < 64; d = d + 8) {
    if (chessBoard[fieldNumber + d] !== undefined) {
      rookSees.push(chessBoard[fieldNumber + d]);
    }
  }
  // Was sieht Turm nach links

  for (let u = 8; u < 64; u = u + 8) {
    if (chessBoard[fieldNumber - u] !== undefined) {
      rookSees.push(chessBoard[fieldNumber - u]);

      if (
        chessBoard[fieldNumber - u].attributes.class.textContent.slice(-1) ===
        "8"
      ) {
        break;
      }
    }
  }
  //console.log(rookSees);
  //console.log(currentPosition.attributes.class);
  //console.log(fieldNumber);
}
renderWhereIsRookH1();

function renderWhereIsKnightG1() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-knight-g1") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }

  // wenn CurrentPosition undefined: Ist ein anderes ChildElement an erster Stelle!
  console.log("hier bin ich:" + currentPosition);
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    knightSees: [],
  };
}

renderWhereIsKnightG1();
// Wo steht er
// Wieviele Felder sieht er (Anzahl)
// Welche Felder sieht er
function whatAnyKnightSees(style) {
  let { currentPosition, fieldNumber, knightSees } = renderWhereIsKnightG1();
  // Was sieht Springer nach oben links und unten rechts
  if (
    chessBoard[fieldNumber - 6] !== undefined &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "7" &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8"
  ) {
    knightSees.push(chessBoard[fieldNumber - 6]);
  }
  if (
    chessBoard[fieldNumber + 6] !== undefined &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "2"
  ) {
    knightSees.push(chessBoard[fieldNumber + 6]);
  }

  // Was sieht Springer nach unten links und oben rechts

  if (
    chessBoard[fieldNumber - 10] !== undefined &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "2"
  ) {
    knightSees.push(chessBoard[fieldNumber - 10]);
  }
  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "7" &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8" &&
    chessBoard[fieldNumber + 10] !== undefined
  ) {
    knightSees.push(chessBoard[fieldNumber + 10]);
  }

  // Was sieht Springer nach links links oben und rechts rechts unten

  if (
    chessBoard[fieldNumber - 15] !== undefined &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8"
  ) {
    knightSees.push(chessBoard[fieldNumber - 15]);
  }

  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
    chessBoard[fieldNumber + 15] !== undefined
  ) {
    knightSees.push(chessBoard[fieldNumber + 15]);
  }

  // Was sieht Springer nach links links unten und rechts rechts oben

  if (
    chessBoard[fieldNumber + 17] !== undefined &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8"
  ) {
    //
    knightSees.push(chessBoard[fieldNumber + 17]);
  }
  if (
    chessBoard[fieldNumber - 17] !== undefined &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1"
  ) {
    knightSees.push(chessBoard[fieldNumber - 17]);
  }
  console.log(knightSees);

  for (i in knightSees) {
    knightSees[i].style.boxShadow = `${insetColorMovePossibilty}`;
    if (style === "none") {
      knightSees[i].style.boxShadow = "none";
    }
  }
  return knightSees;
}

renderWhereIsKnightG1();

function renderWhereIsQueenD1() {
  let currentPosition;
  let fieldNumber = 0;
  let queenSees = [];
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-queen-d1") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  for (let r = 1; r < 8; r++) {
    if (chessBoard[fieldNumber + r] !== undefined) {
      queenSees.push(chessBoard[fieldNumber + r]);
      if (
        chessBoard[fieldNumber + r].attributes.class.textContent.slice(-1) ===
        "8"
      ) {
        break;
      }
    }
  }
  // Was sieht Dame nach unten
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "1") {
    for (let t = 1; t < 8; t++) {
      if (chessBoard[fieldNumber - t] !== undefined) {
        queenSees.push(chessBoard[fieldNumber - t]);
        if (
          chessBoard[fieldNumber - t].attributes.class.textContent.slice(-1) ===
          "1"
        ) {
          break;
        }
      }
    }
  }

  // Was sieht Dame nach rechts

  for (let d = 8; d < 64; d = d + 8) {
    if (chessBoard[fieldNumber + d] !== undefined) {
      queenSees.push(chessBoard[fieldNumber + d]);
    }
  }
  // Was sieht Dame nach links

  for (let u = 8; u < 64; u = u + 8) {
    if (chessBoard[fieldNumber - u] !== undefined) {
      queenSees.push(chessBoard[fieldNumber - u]);

      if (
        chessBoard[fieldNumber - u].attributes.class.textContent.slice(-1) ===
        "8"
      ) {
        break;
      }
    }
  }
  // Was sieht Dame nach oben links
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "8") {
    for (let r = 7; r < 63; r = r + 7) {
      if (chessBoard[fieldNumber - r] !== undefined) {
        queenSees.push(chessBoard[fieldNumber - r]);
        if (
          chessBoard[fieldNumber - r].attributes.class.textContent.slice(-1) ===
          "8"
        ) {
          break;
        }
      }
    }
  }
  // Was sieht Dame nach unten links
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "1") {
    for (let t = 9; t < 63; t = t + 9) {
      if (chessBoard[fieldNumber - t] !== undefined) {
        queenSees.push(chessBoard[fieldNumber - t]);
        if (
          chessBoard[fieldNumber - t].attributes.class.textContent.slice(-1) ===
          "1"
        ) {
          break;
        }
      }
    }
  }

  // Was sieht Dame nach unten rechts
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "1") {
    for (let d = 7; d < 63; d = d + 7) {
      if (chessBoard[fieldNumber + d] !== undefined) {
        queenSees.push(chessBoard[fieldNumber + d]);
        if (
          chessBoard[fieldNumber + d].attributes.class.textContent.slice(-1) ===
          "1"
        ) {
          break;
        }
      }
    }
  }
  // Was sieht Dame nach oben rechts
  if (currentPosition.attributes.class.nodeValue.slice(-1) !== "8") {
    for (let u = 9; u < 63; u = u + 9) {
      if (chessBoard[fieldNumber + u] !== undefined) {
        queenSees.push(chessBoard[fieldNumber + u]);

        if (
          chessBoard[fieldNumber + u].attributes.class.textContent.slice(-1) ===
          "8"
        ) {
          break;
        }
      }
    }
  }

  console.log(queenSees);
  console.log(currentPosition);
}

renderWhereIsQueenD1();

function renderWhereIsKingE1() {
  let currentPosition;
  let fieldNumber = 0;
  let kingSees = [];
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-king-e1") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }

  // Was King nach oben sieht

  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8" &&
    chessBoard[fieldNumber + 1] !== undefined
  ) {
    kingSees.push(chessBoard[fieldNumber + 1]);
  }
  // Was King nach unten sieht
  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
    chessBoard[fieldNumber - 1] !== undefined
  ) {
    kingSees.push(chessBoard[fieldNumber - 1]);
  }
  // Was King nach links sieht
  if (chessBoard[fieldNumber - 8] !== undefined) {
    kingSees.push(chessBoard[fieldNumber - 8]);
  }
  // Was King nach rechts sieht
  if (chessBoard[fieldNumber + 8] !== undefined) {
    kingSees.push(chessBoard[fieldNumber + 8]);
  }
  // Was King nach oben rechts sieht
  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8" &&
    chessBoard[fieldNumber + 9] !== undefined
  ) {
    kingSees.push(chessBoard[fieldNumber + 9]);
  }
  // Was King nach oben links sieht
  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8" &&
    chessBoard[fieldNumber - 7] !== undefined
  ) {
    kingSees.push(chessBoard[fieldNumber - 7]);
  }
  // Was King nach unten links sieht
  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
    chessBoard[fieldNumber - 9] !== undefined
  ) {
    kingSees.push(chessBoard[fieldNumber - 9]);
  }
  // Was King nach unten rechts sieht
  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
    chessBoard[fieldNumber + 7] !== undefined
  ) {
    kingSees.push(chessBoard[fieldNumber + 7]);
  }
  //console.log(kingSees);
  //console.log(fieldNumber);
}

renderWhereIsKingE1();
function renderWhereIsPawnA2() {
  let currentPosition;
  let fieldNumber = 0;
  let pawnSees = [];
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-a2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}

function renderWhereIsPawnB2() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-b2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}

function renderWhereIsPawnC2() {
  let currentPosition;
  let fieldNumber = 0;
  let pawnSees = [];
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-c2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}

function renderWhereIsPawnD2() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-d2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}

function renderWhereIsPawnE2() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-e2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}
function renderWhereIsPawnF2() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-f2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}
function renderWhereIsPawnG2() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-g2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}
function renderWhereIsPawnH2() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].childElementCount > 0) {
      if (chessBoard[i].children[0].attributes.id.value === "white-pawn-h2") {
        currentPosition = chessBoard[i];
        fieldNumber = i;
      }
    }
  }
  return {
    currentPosition: currentPosition,
    fieldNumber: fieldNumber,
    pawnSees: [],
  };
}

function whatAnyPawnSees(style) {
  let { currentPosition, fieldNumber, pawnSees } = renderWhereIsPawnB2();

  if (
    currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
    currentPosition.attributes.class.nodeValue.slice(-1) !== "8"
  ) {
    pawnSees.push(chessBoard[fieldNumber + 1]);
  }
  for (i in pawnSees) {
    pawnSees[i].style.boxShadow = `${insetColorMovePossibilty}`;
    if (style === "none") {
      pawnSees[i].style.boxShadow = "none";
    }
  }
  return pawnSees;
}

// Alle weißen Figuren als Variable speichern
// Bauern
/*const pawnA2 = document.querySelector("#white-pawn-a2");
const pawnB2 = document.querySelector("#white-pawn-b2");
const pawnC2 = document.querySelector("#white-pawn-c2");
const pawnD2 = document.querySelector("#white-pawn-d2");
const pawnE2 = document.querySelector("#white-pawn-e2");
const pawnF2 = document.querySelector("#white-pawn-f2");
const pawnG2 = document.querySelector("#white-pawn-g2");
const pawnH2 = document.querySelector("#white-pawn-h2");*/

// Türme
const rookA1 = document.querySelector("#white-rook-a1");
const rookH1 = document.querySelector("#white-rook-h1");

// Läufer
const bishopC1 = document.querySelector("#white-bishop-c1");
const bishopF1 = document.querySelector("#white-bishop-f1");

// Springer
const knightB1 = document.querySelector("#white-knight-b1");
const knightG1 = document.querySelector("#white-knight-g1");

// Dame
const queenD1 = document.querySelector("#white-queen-d1");

// König
const kingE1 = document.querySelector("#white-king-e1");

let whitePawns = [];
fields.forEach((char) =>
  whitePawns.push(document.querySelector("#white-pawn-" + char + "2"))
);

console.log(whitePawns);

const insetColorMovePossibilty =
  "inset 0 0 1em rgb(0, 235, 102), inset 0 0 1em #cde, inset 0 0 1em #cde";

// Variablen für das State-Objekt generieren

let moveCounter = 0;
let whitePieceAmount = 16;
let blackPieceAmount = 16;
let lastMovedPiece;
let lastMovedSide;
let clickCounter = 0;
let pieceIsActive = false;
let currentPosition;
let lastPosition;
let currentMovedPiece;
let currentActiveSide;
let result;

const state = {
  /*Pieces: {
    pawns: {
      initialFields: ["a2", "b2", "c2",],
      items: []
    },
    knights: [],
    bishop: [],
    rooks: [],
    queen: [],
    king: [],
  },*/
  Start: [
    {
      move: 0,
      done: false,
      whitePieces: whitePieceAmount,
      blackPieces: blackPieceAmount,
    },
  ],
  betweenStartAndEnd: [
    {
      moveAmount: moveCounter,
      done: false,
      whitePieces: whitePieceAmount,
      blackPieces: blackPieceAmount,
      moveHistory: [],
    },
  ],
  currentMove: [
    {
      lastMovedPiece,
      lastMovedSide,
      currentMovedPiece,
      pieceMovedFromPosition: lastPosition,
      pieceMovedToPosition: currentPosition,
      currentActiveSide,
      lastPossibleMoves: [],
    },
  ],
  End: [
    {
      moves: moveCounter,
      done: true,
      whitePieces: whitePieceAmount,
      blackPieces: blackPieceAmount,
      result: result,
    },
  ],
};

// Klassen der Figuren deklarieren und definieren

class Piece {
  constructor(color, moveBehaviour) {
    this.color = color;
    this.moveBehaviour = moveBehaviour;
  }
  setMoveBehaviour(moveBehaviour) {
    console.log(this.oveBehaviour);
    // throw new Error("You need to implement this method");
  }
}

class moveBehaviour {}
class OneUpMoveBehaviour extends moveBehaviour {
  move() {}
}

class Pawn extends Piece {
  constructor(color) {
    super(color, new OneUpMoveBehaviour());
    console.log(this.moveBehaviour.move());
  }
  setMoveBehaviour(moveBehaviour) {
    // console.log(this.oveBehaviour);
  }
}

const whitePawn = new Pawn("white");
//console.log(whitePawn);

class Rook extends Piece {
  constructor(color) {
    super(color, "n up, n left, n right over full Board");
  }
}

const whiteRook = new Rook("white");
//console.log(whiteRook);

class Knight extends Piece {
  constructor(color) {
    super(color, "two up or left or down or right, 1 left or right = L Shape");
  }
}
const whiteKnight = new Knight("white");
//console.log(whiteKnight);

class Bishop extends Piece {
  constructor(color) {
    super(color, "n Diagonalleft or n Diagonalright over full Board ");
  }
}
const whiteBishop = new Bishop("white");
//console.log(whiteBishop);

class Queen extends Piece {
  constructor(color) {
    super(
      color,
      "n Diagonalleft or n Diagonalright, n right, n left, n down, n up, over full Board"
    );
  }
}
const whiteQueen = new Queen("white");
//console.log(whiteQueen);

class King extends Piece {
  constructor(color) {
    super(color, "one up, one down, one left, one right");
  }
}
const whiteKing = new King("white");

function renderMove() {
  //state.Start.forEach((move) => console.log(move));

  //state.betweenStartAndEnd.forEach((move) => console.log(move));

  //state.currentMove.forEach((move) => console.log(move));

  //state.End.forEach((move) => console.log(move));

  let allPossibleMovesBeforeNewPosition =
    state.currentMove[0].lastPossibleMoves;

  //console.log(allPossibleMovesBeforeNewPosition[0].style);

  let positionNow = state.currentMove[0].pieceMovedToPosition;
  let pieceNow = state.currentMove[0].currentMovedPiece;

  console.log(state);

  if (positionNow === "field-b3") {
    //allPossibleMovesBeforeNewPosition[0].style.boxShadow = "none";

    chessBoard[10].append(pieceNow);

    //moveCounter++;
  }

  if (positionNow === "field-b4") {
    chessBoard[11].append(pieceNow);

    //moveCounter++;
  }

  if (positionNow === "field-b5") {
    chessBoard[12].append(pieceNow);
    //moveCounter++;
  }
  if (positionNow === "field-b6") {
    chessBoard[13].append(pieceNow);
    //moveCounter++;
  }
  if (positionNow === "field-b7") {
    chessBoard[14].append(pieceNow);
    //moveCounter++;
  }

  if (positionNow === "field-e2") {
    chessBoard[33].append(pieceNow);
    //moveCounter++;
  }
  if (positionNow === "field-f3") {
    chessBoard[42].append(pieceNow);
    //moveCounter++;
  }
  if (positionNow === "field-h3") {
    chessBoard[58].append(pieceNow);
    //moveCounter++;
  }
  //console.log(state.betweenStartAndEnd[0]);
  //console.log(state.currentMove[0]);
}

renderMove();

// Funktion um true oder false auszugeben wenn Figur geklickt wird
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

whitePawns[1].addEventListener("click", () => {
  let pieceIsActive = pieceDeactivateActivate();
  let pawnSees = whatAnyPawnSees();
  let parent = whitePawns[1].parentElement;

  if (pieceIsActive === true) {
    whatAnyPawnSees();
  } else {
    whatAnyPawnSees("none");
  }
  for (let i = 0; i < pawnSees.length; i++) {
    pawnSees[i].addEventListener("click", () => {
      //if (clickCounter === 1) {

      state.currentMove[0].pieceMovedToPosition =
        pawnSees[i].attributes[1].value;
      state.currentMove[0].currentMovedPiece = whitePawns[1];
      state.betweenStartAndEnd[0].moveAmount = moveCounter;
      state.currentMove[0].lastMovedSide = "White";
      state.currentMove[0].pieceMovedFromPosition = parent;
      state.currentMove[0].lastPossibleMoves = pawnSees;
      renderMove();
      //}
    });
  }
});

knightG1.addEventListener("click", () => {
  let pieceIsActive = pieceDeactivateActivate();
  let knightSees = whatAnyKnightSees();
  let parent = knightG1.parentElement;

  if (pieceIsActive === true) {
    whatAnyKnightSees();
  } else {
    whatAnyKnightSees("none");
  }
  for (let i = 0; i < knightSees.length; i++) {
    knightSees[i].addEventListener("click", () => {
      //if (clickCounter === 1) {

      state.currentMove[0].pieceMovedToPosition =
        knightSees[i].attributes[1].value;
      state.currentMove[0].currentMovedPiece = knightG1;
      state.betweenStartAndEnd[0].moveAmount = moveCounter;
      state.currentMove[0].lastMovedSide = "White";
      state.currentMove[0].pieceMovedFromPosition = parent;
      state.currentMove[0].lastPossibleMoves = knightSees;
      renderMove();
      //}
    });
  }
});

/*
whitePawns.forEach((piece, ind) => {
  let inde = ind;

  piece.addEventListener("click", () => {
    let pieceIsActive = pieceDeactivateActivate();
    let pawnSees = whatAnyPawnSees();
    let parent = piece.parentElement;
    console.log(pieceIsActive);

    if (pieceIsActive === true) {
      console.log(inde);
      whatAnyPawnSees("test", inde);
    } else {
      whatAnyPawnSees("none");
    }
    for (let i = 0; i < pawnSees.length; i++) {
      pawnSees[i].addEventListener("click", () => {
        //if (clickCounter === 1) {

        state.currentMove[0].pieceMovedToPosition =
          pawnSees[i].attributes[1].value;
        state.currentMove[0].currentMovedPiece = piece;
        state.betweenStartAndEnd[0].moveAmount = moveCounter;
        state.currentMove[0].lastMovedSide = "White";
        state.currentMove[0].pieceMovedFromPosition = parent;
        state.currentMove[0].lastPossibleMoves = pawnSees;
        renderMove();
        //}
      });
    }
  });
});*/
