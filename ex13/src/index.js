// Only change code below this line

function randomRangeNumber(minNumber, maxNumber) {

    return console.log(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
}


randomRangeNumber(3, 15);

// Only change code above this line

module.exports = randomRangeNumber;