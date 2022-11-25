import rook from "./pieces/white-rook.js";
import bishop from "./pieces/white-bishop.js";
import knight from "./pieces/white-knight.js";
import queen from "./pieces/white-queen.js";
import pawn from "./pieces/white-pawn.js";
import king from "./pieces/white-king.js";

class ChessBoard {
  constructor() {
    this.fields = [
      /*{
          name: "a1",
          domNode: "DOMNODE",
          owner: {},
        },
        {
          name: "a2",
          domNode: "DOMNODE",
          owner: {},
        },

        {
          name: "a1",
          domNode: "DOMNODE",
          owner: {
            player: "black",
            // piece: Rook,
          },
        },*/
    ];
  }

  // fields 8x8 = 64 felder
  // schwarze und weiße felder
  createField() {
    let currentRow = 0;
    let maxRows = 8;

    const fieldColumns = ["a", "b", "c", "d", "e", "f", "g", "h"];

    while (currentRow < maxRows) {
      const currentColumn = fieldColumns[currentRow];
      this.createRows(currentColumn);
      currentRow++;
    }
  }

  createRows(currentColumn) {
    let maxFields = 8;
    let currentField = 0;

    while (currentField < maxFields) {
      const currentFieldName = currentColumn + (currentField + 1);

      const div = this.createElement(currentFieldName);

      this.fields.push({
        name: currentFieldName,
        domNode: div,
        owner: { player: undefined, owner: undefined },
      });

      currentField++;
    }

    //console.log(this.fields);
  }

  placePieces() {
    /*const conditions = [
      {
        if: "rook",
        file: rook(),
      },
      {
        if: "bishop",
        file: bishop(),
      },
    ];

    for (let condition of conditions) {
      if (this.fields[field].owner.owner === condition.if) {
        this.fields[field].domNode.innerHTML = condition.file;
      }
    }*/
  }
  createElement(currentFieldName) {
    const div = document.createElement("div");
    div.className = "field " + currentFieldName;
    div.id = "field-" + currentFieldName;
    div.innerText = currentFieldName;

    //div.innerHTML = currentFieldName + rook();
    return div;
  }
  createOwnerInitial() {
    for (let field of this.fields) {
      if (field.name === "d1") {
        field.owner = { player: "white", owner: "pawn" };
      }
    }
  }

  renderField() {
    document.querySelector("main").innerHTML = "";
    for (let field of this.fields) {
      document.querySelector("main").appendChild(field.domNode);
      if (field.owner.owner === "pawn") {
        field.domNode.innerHTML = pawn();
      }
    }
  }
}

const ChessBoardInstance = new ChessBoard();

ChessBoardInstance.placePieces();
ChessBoardInstance.createField();
ChessBoardInstance.createOwnerInitial();
ChessBoardInstance.renderField();

class Pieces {
  constructor(color) {
    this.color = color;
  }
}
class whitePawnC2 extends Pieces {
  constructor(color) {
    super(color);
    this.opponentFields = [];
    this.straightMove = [];
  }
  iterateThroughFields() {
    for (let i = 0; i < ChessBoardInstance.fields.length; i++) {
      if (ChessBoardInstance.fields[i].owner.owner === "pawn") {
        if (ChessBoardInstance.fields[i].name.slice(-1) !== "8") {
          this.lookingForOpponent(i);
          this.createStraightMovesFields(i);
        }
      }
    }
    console.log(this.straightMove);
  }

  lookingForOpponent(i) {
    if (ChessBoardInstance.fields[i - 7] !== undefined) {
      this.opponentFields.push(ChessBoardInstance.fields[i - 7]);
    }
    if (ChessBoardInstance.fields[i + 9] !== undefined) {
      this.opponentFields.push(ChessBoardInstance.fields[i + 9]);
    }
  }

  createStraightMovesFields(i) {
    this.straightMove.push(ChessBoardInstance.fields[i + 1]);
  }
}

const PawnInstance = new whitePawnC2();

PawnInstance.iterateThroughFields();
PawnInstance.createStraightMovesFields();
//PawnInstance.renderMove();

class Bishop extends Pieces {}
class Knight extends Pieces {}
class Rook extends Pieces {}
class Queen extends Pieces {}
class King extends Pieces {}
