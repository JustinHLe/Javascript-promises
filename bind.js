/*

    Bind - Binds an object to a function
    - References the object with this

*/

let c1 = {
    x: 5,
    y: 10
};

let c2 = {
    x: 75,
    y: 235,

    //bind basically puts the function as a member of the object
    // printCoordinates(){
    //     console.log(this.x + ', ' + this.y)
    // }
};


function printCoordinates() {
    // console.log(this)
    console.log(this.x + ', ' + this.y)
}

let c1_func = printCoordinates.bind(c1)

c1_func(); 

let c2_func = printCoordinates.bind(c2)

c2_func()


//prints undefined, undefined because it isn't bounded to anything
//this is referring to the global object.
printCoordinates();