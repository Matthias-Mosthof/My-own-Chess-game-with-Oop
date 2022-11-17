# Creating Chess

### Note

This project is there to use quite a range of what I know so far about HTML, CSS and Javascript.
It isnt there to copy any existing project on this subject as I do this to learn Coding. Everything I do is using my own knowledge and also looking up general methods in documentations to learn how to use them.

## Progress

04.11.22: Creating the Chess Board using Grid-Areas. These are 64 areas as the Chess Board consists of 8 x 8 fields.

05.11.22: Placing the White and Black Pieces in the starting Position.

05.11.22: Adding all possible Moves (on the first Move) for each Piece if you click them.

14.11.22: Adding a Datastructure-Basis. The Structure constists of an Object with different states. Each state is an Object within an Array.

14.11.22: Adding the possibilty to move a Piece (Pawnb2 to B3 or B4)

-> This is just for me to get an Idea how to move pieces. In the final code a move should be saved in the State object and rendered from there.

15.11.22: Adding the basics of a global Renderfunction per move.
Adding more values which are going to be saved per move (->in Object)

-> Last position of Piece

-> Move Amount

-> current field position
etc.

16.11.22: Adding a basic structure of Classes. One Main Class, each piece Typ inherits from the main class and brings its own propertys with it. (Move behaviour, Color...)

16.11.22: Adding a function for the bishop which finds its Position automatically.
With the pattern I found in the Board it allows me to give me every Field which the bishop can "see" (Its allowed fields) so the function also puts every field which the bishop "sees" in an Array.

17.11.22: Extending the function where each pieces Position is found automatically and the function which saves all Fields apiece can see - for each Piece. (Pawn, Bishop, Knight, Queen, King, Rook).
Sidenode: Knights can not only be tricky in the actual game....

## Goal

A fully working chess game with all its mechanics for 2 Players
