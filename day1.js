function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
var ii,dd,ss;
    // Read and save an integer, double, and String to your variables.
ii=parseInt(readLine());
//function parseInt(s: string, radix?: number): number
//Converts a string to an integer.
//@param - s A string to convert into a number.
//@param radix A value between 2 and 36 that specifies the base of the number in numString. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
dd=parseFloat(readLine());
//function parseFloat(string: string): number
//Converts a string to a floating-point number.
//@param - string A string that contains a floating-point number.
ss=readLine();
//function readLine(): string
    // Print the sum of both integer variables on a new line.
console.log(i+ii);
    // Print the sum of the double variables on a new line.
console.log((d+dd).toFixed(1));

//(method) Number.toFixed(fractionDigits?: number): string
// Returns a string representing a number in fixed-point notation.

// @param - fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
console.log(s+ss);
}