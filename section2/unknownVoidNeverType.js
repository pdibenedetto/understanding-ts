var userInput; // type any would compile
var userName;
userInput = 5;
userInput = 'Hi';
if (typeof userInput === 'string') { // Javascript type check solves the compilation issue
    userName = userInput; // if defined as any, it would have worked
}
// Shouldn't use unknown a lot, Union types are better, but unknown is better than any
function generateError(message, code) {
    throw { message: message, errorCode: code }; // although, it infers a void type, it actually is a never, you can explicitly assign it
}
function neverReturned(message, code) {
    while (true) { } // although, it infers a void type, it actually is a never, you can explicitly assign it
}
generateError('An error occured!', 500);
// Somewhat a generic error generator a big app could use
