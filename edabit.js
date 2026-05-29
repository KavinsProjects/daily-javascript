
//Return the Remainder from Two Numbers
function remainder(x, y) {
	return x % y
}//logic is use ->%
console.log(remainder(1,3));

//Return the First Element in an Array
function getFirstValue(arr) {
	return arr[0]

}// indexOf[0]
console.log(getFirstValue([12,45,67,89,5]))

//Correct the Mistakes
function squaed(b) {
	return b * b
}
console.log(squaed(6))

//Sum of Polygon Angles
//The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

function sumPolygon(n) {
	
}

//Basic Variable Assignment

function nameString(name){
	let b = "Edabit"
	let result = name + b
  	return result
}

console.log(nameString("kavin"));

//Is the Number Less than or Equal to Zero?

function lessThanOrEqualToZero(num) {
	if(num <=0  ){
        return true;
    }else{
        return false;
    }
}

console.log(lessThanOrEqualToZero(-9));

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored,
// find the final points for the team and return that value.

function points(twoPointers, threePointers) {
	
    let two = twoPointers * 2;
    let three = threePointers * 3;

    return two + three
}
console.log(points(10,3));

//Football Points
/*
Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

wins get 3 points
draws get 1 point
losses get 0 points
*/

function footballPoints(wins, draws, losses) {
	
    let winn = wins * 3;
    let draw = draws * 1;
    //let loss = losses * 0;
    
    return(winn + draw);
}

console.log(footballPoints(40,50,10));


function animals(chickens, cows, pigs) {
	
    let chicken = chickens * 2;
    let cow = cows * 4;
    let pig = pigs *4;
    return (chicken + cow + pig);
}
animals(50,40,30)

//Boolean to String Conversion

function boolToString(flag) {
	let fla = flag.toString();
    const valuess = fla
    return (valuess);
}
console.log(boolToString(true)) //use .toString() to conver bool values into str


//Concatenate First and Last Name into One String
function concatName(firstName, lastName) {
	let concat =  firstName + "," + lastName ;
    return concat;
}

console.log(concatName("meera", "kavin"));

//medium

//Find Number of Digits in Number
function num_of_digits(num) {
	
    let numStr = num.toString()
    let find = numStr.length
    return find
}
console.log(num_of_digits(200000))
//logic number into string .toString() next find the converted string's length



