// Jedes Feld als Variable speichern
const fielda1 = document.querySelector("#field-a1");
const fielda2 = document.querySelector("#field-a2");
const fielda3 = document.querySelector("#field-a3");
const fielda4 = document.querySelector("#field-a4");
const fielda5 = document.querySelector("#field-a5");
const fielda6 = document.querySelector("#field-a6");
const fielda7 = document.querySelector("#field-a7");
const fielda8 = document.querySelector("#field-a8");
const fieldb1 = document.querySelector("#field-b1");
const fieldb2 = document.querySelector("#field-b2");
const fieldb3 = document.querySelector("#field-b3");
const fieldb4 = document.querySelector("#field-b4");
const fieldb5 = document.querySelector("#field-b5");
const fieldb6 = document.querySelector("#field-b6");
const fieldb7 = document.querySelector("#field-b7");
const fieldb8 = document.querySelector("#field-b8");
const fieldc1 = document.querySelector("#field-c1");
const fieldc2 = document.querySelector("#field-c2");
const fieldc3 = document.querySelector("#field-c3");
const fieldc4 = document.querySelector("#field-c4");
const fieldc5 = document.querySelector("#field-c5");
const fieldc6 = document.querySelector("#field-c6");
const fieldc7 = document.querySelector("#field-c7");
const fieldc8 = document.querySelector("#field-c8");
const fieldd1 = document.querySelector("#field-d1");
const fieldd2 = document.querySelector("#field-d2");
const fieldd3 = document.querySelector("#field-d3");
const fieldd4 = document.querySelector("#field-d4");
const fieldd5 = document.querySelector("#field-d5");
const fieldd6 = document.querySelector("#field-d6");
const fieldd7 = document.querySelector("#field-d7");
const fieldd8 = document.querySelector("#field-d8");
const fielde1 = document.querySelector("#field-e1");
const fielde2 = document.querySelector("#field-e2");
const fielde3 = document.querySelector("#field-e3");
const fielde4 = document.querySelector("#field-e4");
const fielde5 = document.querySelector("#field-e5");
const fielde6 = document.querySelector("#field-e6");
const fielde7 = document.querySelector("#field-e7");
const fielde8 = document.querySelector("#field-e8");
const fieldf1 = document.querySelector("#field-f1");
const fieldf2 = document.querySelector("#field-f2");
const fieldf3 = document.querySelector("#field-f3");
const fieldf4 = document.querySelector("#field-f4");
const fieldf5 = document.querySelector("#field-f5");
const fieldf6 = document.querySelector("#field-f6");
const fieldf7 = document.querySelector("#field-f7");
const fieldf8 = document.querySelector("#field-f8");
const fieldg1 = document.querySelector("#field-g1");
const fieldg2 = document.querySelector("#field-g2");
const fieldg3 = document.querySelector("#field-g3");
const fieldg4 = document.querySelector("#field-g4");
const fieldg5 = document.querySelector("#field-g5");
const fieldg6 = document.querySelector("#field-g6");
const fieldg7 = document.querySelector("#field-g7");
const fieldg8 = document.querySelector("#field-g8");
const fieldh1 = document.querySelector("#field-h1");
const fieldh2 = document.querySelector("#field-h2");
const fieldh3 = document.querySelector("#field-h3");
const fieldh4 = document.querySelector("#field-h4");
const fieldh5 = document.querySelector("#field-h5");
const fieldh6 = document.querySelector("#field-h6");
const fieldh7 = document.querySelector("#field-h7");
const fieldh8 = document.querySelector("#field-h8");

const insetColorMovePossibilty =
  "inset 0 0 1em rgb(0, 235, 102), inset 0 0 1em #cde, inset 0 0 1em #cde";

const chessBoard = [
  fielda1,
  fielda2,
  fielda3,
  fielda4,
  fielda5,
  fielda6,
  fielda7,
  fielda8,
  fieldb1,
  fieldb2,
  fieldb3,
  fieldb4,
  fieldb5,
  fieldb6,
  fieldb7,
  fieldb8,
  fieldc1,
  fieldc2,
  fieldc3,
  fieldc4,
  fieldc5,
  fieldc6,
  fieldc7,
  fieldc8,
  fieldd1,
  fieldd2,
  fieldd3,
  fieldd4,
  fieldd5,
  fieldd6,
  fieldd7,
  fieldd8,
  fielde1,
  fielde2,
  fielde3,
  fielde4,
  fielde5,
  fielde6,
  fielde7,
  fielde8,
  fieldf1,
  fieldf2,
  fieldf3,
  fieldf4,
  fieldf5,
  fieldf6,
  fieldf7,
  fieldf8,
  fieldg1,
  fieldg2,
  fieldg3,
  fieldg4,
  fieldg5,
  fieldg6,
  fieldg7,
  fieldg8,
  fieldh1,
  fieldh2,
  fieldh3,
  fieldh4,
  fieldh5,
  fieldh6,
  fieldh7,
  fieldh8,
];

// Funktion die für den Läufer automatisch rausfindet wo er gerade ist und was er von seiner Position "sieht"
function renderWhereIsBishopF1() {
  let currentPosition;
  let fieldNumber = 0;
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].children[0].attributes.id.value === "white-bishop-f1") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-rook-h1") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-knight-g1") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
    }
  }
  // Wo steht er
  // Wieviele Felder sieht er (Anzahl)
  // Welche Felder sieht er
  let knightSees = [];
  // Was sieht Springer nach oben links und unten rechts
  for (let r = 6; r < 12; r = 6 + 6) {
    if (
      chessBoard[fieldNumber - r] !== undefined &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "7" &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "8"
    ) {
      knightSees.push(chessBoard[fieldNumber - r]);
    }
    if (
      chessBoard[fieldNumber + r] !== undefined &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "2"
    ) {
      knightSees.push(chessBoard[fieldNumber + r]);
    }
  }
  // Was sieht Springer nach unten links und oben rechts

  for (let t = 10; t < 20; t = 10 + 10) {
    if (
      chessBoard[fieldNumber - t] !== undefined &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "2"
    ) {
      knightSees.push(chessBoard[fieldNumber - t]);
    }
    if (
      currentPosition.attributes.class.nodeValue.slice(-1) !== "7" &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "8" &&
      chessBoard[fieldNumber + t] !== undefined
    ) {
      console.log("hello");
      knightSees.push(chessBoard[fieldNumber + t]);
    }
  }

  // Was sieht Springer nach links links oben und rechts rechts unten

  for (let d = 15; d < 30; d = 15 + 15) {
    if (
      chessBoard[fieldNumber - d] !== undefined &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "8"
    ) {
      knightSees.push(chessBoard[fieldNumber - d]);
    }

    //) {

    if (
      currentPosition.attributes.class.nodeValue.slice(-1) !== "1" &&
      chessBoard[fieldNumber + d] !== undefined
    ) {
      knightSees.push(chessBoard[fieldNumber + d]);
    }
  }

  // Was sieht Springer nach links links unten und rechts rechts oben

  for (let u = 17; u < 34; u = u + 17) {
    console.log("hello");
    if (
      chessBoard[fieldNumber + u] !== undefined &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "8"
    ) {
      //
      knightSees.push(chessBoard[fieldNumber + u]);
    }
    if (
      chessBoard[fieldNumber - u] !== undefined &&
      currentPosition.attributes.class.nodeValue.slice(-1) !== "1"
    ) {
      knightSees.push(chessBoard[fieldNumber - u]);
    }
  }

  //console.log(knightSees);
  //console.log(currentPosition.attributes.class);
  //console.log(fieldNumber);
}

renderWhereIsKnightG1();

function renderWhereIsQueenD1() {
  let currentPosition;
  let fieldNumber = 0;
  let queenSees = [];
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].children[0].attributes.id.value === "white-queen-d1") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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

  //console.log(queenSees);
  //console.log(currentPosition);
}

renderWhereIsQueenD1();

function renderWhereIsKingE1() {
  let currentPosition;
  let fieldNumber = 0;
  let kingSees = [];
  for (let i = 0; i < chessBoard.length; i++) {
    if (chessBoard[i].children[0].attributes.id.value === "white-king-e1") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-a2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-b2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-c2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-d2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-e2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-f2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-g2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
    if (chessBoard[i].children[0].attributes.id.value === "white-pawn-h2") {
      currentPosition = chessBoard[i];
      fieldNumber = i;
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
  //return pawnSees;
  console.log(currentPosition);
  for (i in pawnSees) {
    pawnSees[i].style.boxShadow = `${insetColorMovePossibilty}`;
    if (style.length > 1) {
      pawnSees[i].style.boxShadow = "none";
    }
  }
}

// Alle weißen Figuren als Variable speichern
// Bauern
const pawnA2 = document.querySelector("#white-pawn-a2");
const pawnB2 = document.querySelector("#white-pawn-b2");
const pawnC2 = document.querySelector("#white-pawn-c2");
const pawnD2 = document.querySelector("#white-pawn-d2");
const pawnE2 = document.querySelector("#white-pawn-e2");
const pawnF2 = document.querySelector("#white-pawn-f2");
const pawnG2 = document.querySelector("#white-pawn-g2");
const pawnH2 = document.querySelector("#white-pawn-h2");

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
      lastMovedPiece: lastMovedPiece,
      lastMovedSide: lastMovedSide,
      currentMovedPiece: currentMovedPiece,
      pieceMovedFromPosition: lastPosition,
      pieceMovedToPosition: currentPosition,
      currentActiveSide: currentActiveSide,
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
  }
}

class Pawn extends Piece {
  constructor(color) {
    super(color, "one up");
  }
}

const whitePawn = new Pawn("white");
console.log(whitePawn);

class Rook extends Piece {
  constructor(color) {
    super(color, "n up, n left, n right over full Board");
  }
}

const whiteRook = new Rook("white");
console.log(whiteRook);

class Knight extends Piece {
  constructor(color) {
    super(color, "two up or left or down or right, 1 left or right = L Shape");
  }
}
const whiteKnight = new Knight("white");
console.log(whiteKnight);

class Bishop extends Piece {
  constructor(color) {
    super(color, "n Diagonalleft or n Diagonalright over full Board ");
  }
}
const whiteBishop = new Bishop("white");
console.log(whiteBishop);

class Queen extends Piece {
  constructor(color) {
    super(
      color,
      "n Diagonalleft or n Diagonalright, n right, n left, n down, n up, over full Board"
    );
  }
}
const whiteQueen = new Queen("white");
console.log(whiteQueen);

class King extends Piece {
  constructor(color) {
    super(color, "one up, one down, one left, one right");
  }
}
const whiteKing = new King("white");
console.log(whiteKing);

function renderMove() {
  //state.Start.forEach((move) => console.log(move));

  //state.betweenStartAndEnd.forEach((move) => console.log(move));

  //state.currentMove.forEach((move) => console.log(move));

  //state.End.forEach((move) => console.log(move));

  let positionNow = state.currentMove[0].pieceMovedToPosition;
  let pieceNow = state.currentMove[0].currentMovedPiece;

  if (positionNow === "fieldb3") {
    fieldb3.append(pieceNow);
    //moveCounter++;
  }

  if (positionNow === "fieldc3") {
    fieldc3.append(pieceNow);
    //moveCounter++;
  }
  if (positionNow === "fieldc4") {
    fieldc4.append(pieceNow);
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

pawnB2.addEventListener("click", () => {
  pieceDeactivateActivate();

  let parent = pawnB2.parentElement;
  console.log(pieceIsActive);
  if (pieceIsActive === true) {
    whatAnyPawnSees();
  } else {
    whatAnyPawnSees("none");
  }

  fieldb3.addEventListener("click", () => {
    clickCounter = 0;
    clickCounter++;

    if (clickCounter === 1) {
      state.currentMove[0].pieceMovedToPosition = "fieldb3";
      state.currentMove[0].currentMovedPiece = pawnB2;
      state.betweenStartAndEnd[0].moveAmount = moveCounter;
      state.currentMove[0].lastMovedSide = "White";
      state.currentMove[0].pieceMovedFromPosition = parent;
      renderMove();
      clickCounter--;
      return;
    }
  });
});

pawnC2.addEventListener("click", () => {
  pieceDeactivateActivate();
  let parent = pawnC2.parentElement;
  if (pieceIsActive === true) {
    fieldc3.addEventListener("click", () => {
      state.currentMove[0].pieceMovedToPosition = "fieldc3";
      writeMoveToObjectPawnC2();
    });

    fieldc4.addEventListener("click", () => {
      state.currentMove[0].pieceMovedToPosition = "fieldc4";
      writeMoveToObjectPawnC2();
    });
  }
});

function writeMoveToObjectPawnC2() {
  clickCounter = 0;
  clickCounter++;
  if (clickCounter === 1) {
    possibleC3.style.width = "0px";
    possibleC4.style.width = "0px";
    state.currentMove[0].currentMovedPiece = pawnC2;
    state.betweenStartAndEnd[0].moveAmount = moveCounter;
    state.currentMove[0].lastMovedSide = "White";
    state.currentMove[0].pieceMovedFromPosition = parent;
    renderMove();
    clickCounter--;
    return moveCounter;
  }
}

//console.log(moveCounter);
// Showing all possible moves for Each piece on the first Move
// White Pieces
// Pawns
// Pawn A2 Possible Moves:

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

const possibleC3 = document.querySelector("div:nth-child(19) > aside");
const possibleC4 = document.querySelector("div:nth-child(20) > aside");

function toggle2() {
  possibleC3.classList.toggle("possiblemove");
  possibleC4.classList.toggle("possiblemove");
}

pawnC2.addEventListener("click", toggle2);

// Pawn D2 Possible Moves:

const possibleD3 = document.querySelector("div:nth-child(27) > aside");
const possibleD4 = document.querySelector("div:nth-child(28) > aside");

function toggle3() {
  possibleD3.classList.toggle("possiblemove");
  possibleD4.classList.toggle("possiblemove");
}

pawnD2.addEventListener("click", toggle3);

// Pawn E2 Possible Moves:

const possibleE3 = document.querySelector("div:nth-child(35) > aside");
const possibleE4 = document.querySelector("div:nth-child(36) > aside");

function toggle4() {
  possibleE3.classList.toggle("possiblemove");
  possibleE4.classList.toggle("possiblemove");
}

pawnE2.addEventListener("click", toggle4);

// Pawn F2 Possible Moves:

const possibleF3 = document.querySelector("div:nth-child(43) > aside");
const possibleF4 = document.querySelector("div:nth-child(44) > aside");

function toggle5() {
  possibleF3.classList.toggle("possiblemove");
  possibleF4.classList.toggle("possiblemove");
}

pawnF2.addEventListener("click", toggle5);

// Pawn G2 Possible Moves:

const possibleG3 = document.querySelector("div:nth-child(51) > aside");
const possibleG4 = document.querySelector("div:nth-child(52) > aside");

function toggle6() {
  possibleG3.classList.toggle("possiblemove");
  possibleG4.classList.toggle("possiblemove");
}

pawnG2.addEventListener("click", toggle6);

// Pawn H2 Possible Moves:

const possibleH3 = document.querySelector("div:nth-child(59) > aside");
const possibleH4 = document.querySelector("div:nth-child(60) > aside");

function toggle7() {
  possibleH3.classList.toggle("possiblemove");
  possibleH4.classList.toggle("possiblemove");
}

pawnH2.addEventListener("click", toggle7);

// Knights
// Knight B1 Possible Moves:

function toggle8() {
  possibleA3.classList.toggle("possiblemove");
  possibleC3.classList.toggle("possiblemove");
}

knightB1.addEventListener("click", toggle8);

//Knight G1 Possible Moves:

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
