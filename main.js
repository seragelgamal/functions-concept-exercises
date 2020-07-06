// A: 80% - 100%
//   B: 70% - 79%
//   C: 60% - 69%
//   D: 50% - 59%
//   F:  0% - 49%

function letterGrade(percentGrade) {
    if (percentGrade < 50) {
        return 'F';
    } else if (percentGrade < 60) {
        return 'D';
    } else if (percentGrade < 70) {
        return 'C';
    } else if (percentGrade < 80) {
        return 'B';
    } else {
        return 'A';
    }
}


// Celsius = (Fahrenheit - 32) * 5 / 9

function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) * 5 / 9;
}

// - more than 20 over the speed limit is a “Big Ticket”
// - up to and including 20 over the speed limit is a “Small Ticket”
// - equal to or under the speed limit is “No Ticket”

function determineTicket(speed, limit) {
    if (speed <= limit) {
        return 'No Ticket';
    } else if (speed - limit <= 20) {
        return 'Small Ticket';
    } else {
        return 'Big Ticket';
    }
}

function maxNum(num1, num2, num3, num4) {
    if ((num1 >= num2) && (num1 >= num3) && (num1 >= num4)) {
        return num1;
    } else if ((num2 >= num1) && (num2 >= num3) && (num2 >= num4)) {
        return num2;
    } else if ((num3 >= num1) && (num3 >= num2) && (num3 >= num4)) {
        return num3;
    } else {
        return num4;
    }
}

// Determine and return the sum of the arithmetic sequence with the provided start, stop and step values.
// ie. start = 1, stop = 9, step = 2 produces 1 + 3 + 5 + 7 + 9 = 25
// start + (step *  

function arithmeticSum(start, stop, step) {
    // let sum = (((stop-start)/step)*start)+;
    // sum += start + ((stop-start)/step)*step;
    // return sum;
    let numberToAdd = step;
    let sum = start;
    while (numberToAdd < stop) {
        numberToAdd += step;
        sum += numberToAdd;
    }
    return sum;
}

function constrain(n, low, high) {
    if (n < low) {
        return low;
    } else if (n > high) {
        return high;
    } else {
        return n;
    }
}