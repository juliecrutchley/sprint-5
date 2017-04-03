// Looping a Triangle
/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/


for (var i="#"; i.length<8; i=i+"#")
console.log(i);

//FizzBuzz

/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

for (var i=1; i<101; i++) {
  if (i%3 ===0 && i%5 === 0) {
    console.log("FizzBuzz");
  } else if (i%3 ===0) {
    console.log("Fizz");
  } else if (i%5 ===0) {
    console.log("Buzz");
  } else {
    console.log(i);
    }
  }


//Chess board

/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.*/

// create string to print when we call each line
var board = "";
// create size variable to adjust size
var size = 8;

// run loop to size(8) to create vertical lines
for (var y=0; y<size; y++) {
// once each vertical line is created, run loop again to size(8) to create horizontal rows
	for (var x=0; x<size; x++) {
// for each horizontal row, if the line number + the row number is even, i.e. line1, row1, add a # to string
  	if ((x+y)%2 == 0) {
    	board += "#";
// otherwise, if the line number + the row number is odd, i.e. line 1,row2, add a space to string
    } else {
    	board += " ";
  	}
// after the inner (x) loop has run to size(8), add a new line
  }
	board += "\n";
// print the board string
}
console.log (board);
