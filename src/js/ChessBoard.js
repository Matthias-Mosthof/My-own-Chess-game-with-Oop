import rook from "./pieces/white-rook.js";
import bishop from "./pieces/white-bishop.js";
import knight from "./pieces/white-knight.js";
import queen from "./pieces/white-queen.js";
import pawn from "./pieces/white-pawn.js";
import king from "./pieces/white-king.js";

(function () {
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
    createOwner() {
      for (let field of this.fields) {
        if (field.name === "a1" || field.name === "h1") {
          field.owner = "rook";
        }
        if (field.name === "b1" || field.name === "g1") {
          field.owner = "knight";
        }
        if (field.name === "c1" || field.name === "f1") {
          field.owner = "bishop";
        }

        if (field.name === "d1") {
          field.owner = "queen";
        }
        if (field.name === "e1") {
          field.owner = "king";
        }
        if (
          field.name === "a2" ||
          field.name === "b2" ||
          field.name === "c2" ||
          field.name === "d2" ||
          field.name === "e2" ||
          field.name === "f2" ||
          field.name === "g2" ||
          field.name === "h2"
        ) {
          field.owner = "pawn";
        }
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
          owner: undefined,
        });

        currentField++;
      }

      console.log(this.fields);
    }
    placePieces() {
      for (let field in this.fields) {
        console.log(this.fields[field].domNode);

        if (this.fields[field].owner === "rook") {
          this.fields[field].domNode.innerHTML = rook();
        }
        if (this.fields[field].owner === "bishop") {
          this.fields[field].domNode.innerHTML = bishop();
        }
        if (this.fields[field].owner === "knight") {
          this.fields[field].domNode.innerHTML = knight();
        }
        if (this.fields[field].owner === "queen") {
          this.fields[field].domNode.innerHTML = queen();
        }
        if (this.fields[field].owner === "king") {
          this.fields[field].domNode.innerHTML = king();
        }
        if (this.fields[field].owner === "pawn") {
          this.fields[field].domNode.innerHTML = pawn();
        }
      }
    }
    createElement(currentFieldName) {
      const div = document.createElement("div");
      div.className = "field " + currentFieldName;
      div.id = "field-" + currentFieldName;
      div.innerText = currentFieldName;

      //div.innerHTML = currentFieldName + rook();
      return div;
    }

    renderField() {
      for (let field of this.fields) {
        document.querySelector("main").appendChild(field.domNode);
      }
    }
  }

  const ChessBoardInstance = new ChessBoard();
  ChessBoardInstance.createField();
  ChessBoardInstance.renderField();
  ChessBoardInstance.createOwner();
  ChessBoardInstance.placePieces();

  class Piece {}

  class Pawn extends Piece {}
  class Bishop extends Piece {}
  class Knight extends Piece {}
  class Rook extends Piece {}
  class Queen extends Piece {}
  class King extends Piece {}
})();
