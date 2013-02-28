//	Travis J. Pochintesta
//	SDI 1302
//	Project 4
//  Code Library


//  STRING METHODS

//  Title Case
var heading = "my document title.";

var words = heading.split(" ");
for (i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
finalTitle = words.join(" ");
console.log(finalTitle);

//  Is URL?
exampleURL = "https://www.google.com/";
splitURL = exampleURL.split("://");
protocol = splitURL[0];
if (protocol === "http") {
    console.log("This is a URL.");
} else if (protocol === "https") {
    console.log("This is a URL.")
} else {
    console.log("This is not a URL.");
}


//  NUMBER METHODS

//  String to Number
var tammetNumber = "333";
parseInt("333", 10);
console.log(tammetNumber);

//  Fuzzy Match



//  ARRAY METHODS

//  Smallest Value

//  Total Value