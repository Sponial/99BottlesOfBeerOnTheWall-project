var bottles = 99

function bottlesOfBeer() {
    while (bottles >= 2) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");
        bottles--;
        if (bottles === 1) console.log("Take one down and pass it around, " + bottles + " more bottles of beer on the wall.")
        else {console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");}
    }
    console.log(bottles + " more bottle of beer on the wall, " + bottles + " more bottle of beer.");
    bottles--;
    console.log("Take one down and pass it around, " + "no more bottles of beer on the wall.");
    console.log("No more bottles of beer on the wall, no more bottles of beer.")
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
}

bottlesOfBeer();