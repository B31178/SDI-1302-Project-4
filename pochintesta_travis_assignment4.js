//	Travis J. Pochintesta
//	SDI 1302
//	Project 4
//  Function Library

myLibrary = function () {

    //  STRING METHODS

    //  Title Case

    var titleCase = function (title) {
        var words = title.split(" ");
        for (i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        title = words.join(" ");
        return title
    }

    //  Is URL?

    isUrl = function (url) {
        url = url.split("://");
        protocol = url[0];
        if (protocol === "http") {
            return true;
        } else if (protocol === "https") {
            return true;
        } else {
            return false;
        }
    }

    //  NUMBER METHODS

    //  String to Number

    convertNum = function (number, radix) {
        parseInt(number, radix);
        return number
    }

    //  Number Formatting
    var formatNum = function (number) {
        return number.toFixed(2);
    }

    //  ARRAY METHODS

    //  Smallest Value

    var findMin = function (array) {
        for (var i = 0; i < array.length; i++) {
            if (i < array[i]) {
                return array[i]
            }
        }
    }

    //  Total Value

    addNum = function (array, result) {
        for (var i = 0; i < array.length; i++) {
            if (!isNaN(parseInt(array[i]))) {
                result += array[i];
            }
        }
        return result;

    }

    //  Return Object
    return {

        "titleCase": titleCase,
        "isUrl": isUrl,
        "convertNum": convertNum,
        "formatNum": formatNum,
        "findMin": findMin,
        "addNum": addNum,

    }
}

var newLib = new myLibrary();

var myArray = [1, 2, 3, 5, 8, 13, 21];
var mixedArray = [1, "One", 2, "Two", 3, "Three", 5, "Five"];

console.log(newLib.titleCase("this is my title."));
console.log(newLib.isUrl("https://www.google.com"));
console.log(newLib.convertNum("333", 10));
console.log(newLib.formatNum(6));
console.log(newLib.findMin(myArray));
console.log(newLib.addNum(mixedArray, 0));