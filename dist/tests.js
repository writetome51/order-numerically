"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_shuffled_1 = require("@writetome51/array-get-shuffled");
var index_1 = require("./index");
var numbers = [];
var i = 0;
while (++i <= 100) {
    numbers.push(i);
}
var shuffledNumbers = array_get_shuffled_1.getShuffled(numbers);
// Test 1: make sure it triggers errors when passing incorrect values:
var errorsTriggered = 0;
try {
    var ordered = index_1.getInNumericOrder();
}
catch (e) {
    ++errorsTriggered;
}
try {
    var ordered = index_1.getInNumericOrder('0');
}
catch (e) {
    ++errorsTriggered;
}
try {
    var ordered = index_1.getInNumericOrder('');
}
catch (e) {
    ++errorsTriggered;
}
try {
    var ordered = index_1.getInNumericOrder([]);
}
catch (e) {
    ++errorsTriggered;
}
try {
    var ordered = index_1.getInNumericOrder({});
}
catch (e) {
    ++errorsTriggered;
}
try {
    var ordered = index_1.getInNumericOrder(false);
}
catch (e) {
    ++errorsTriggered;
}
try {
    var ordered = index_1.getInNumericOrder(['', 1]);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 7)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: If array with only 1 number is passed, it should return it without error:
var errorTriggered = false;
try {
    var result = index_1.getInNumericOrder([4]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 2 failed');
else if (result.length === 1 && result[0] === 4)
    console.log('test 2 passed');
// Test 3: make sure it sorts the shuffled numbers correctly:
result = index_1.getInNumericOrder(shuffledNumbers);
if (result.length === 100 && result[0] === 1 && result[result.length - 1] === 100) {
    console.log('test 3 passed');
}
else
    console.log('test 3 failed');
