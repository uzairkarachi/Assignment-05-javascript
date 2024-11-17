// QNO1. Declare an empty array using JS literal notation to store
// student names in future.

var array = [];



// QNO2. Declare an empty array using JS object notation to store
// student names in future.

var array1 = [1, 2, 3];


// QNO3. Declare and initialize a strings array.
var array2 = ["a", "b", "c"];



// QNO4. Declare and initialize a numbers array.
var array3 = [true, false, true];


// QNO5. Declare and initialize a boolean array.

var mixedArray = [1, "a", true];


// QNO6. Declare and initialize a mixed array.
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualification</h1>");
document.write("<br>");
document.write("<ol>");
for (var i = 0; i < qualification.length; i++) {
    document.write("<li>" + qualification[i] + "</li>");
}
document.write("</ol>");


// QNO7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

var studentName = ["Michael", "John", "Tony"]; 
var score = [320, 230, 480];
var totalMarks = 500;
document.write("<h1>Student Score Card</h1>");
document.write("<table border='1'>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
for (var i = 0; i < studentName.length; i++) {
    var percentage = (score[i] / totalMarks) * 100;
    document.write("<tr><td>" + studentName[i] + "</td><td>" + score[i] + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
}
document.write("</table>");


// QNO8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:
var color = ["Blue ", "Green", "Red"];
document.write("<h1>Initial Array</h1>");
document.write(color + "<br>");
var addColor = prompt("Enter a color to add at the beginning");
color.unshift(addColor);
document.write("<br>");
document.write("<h1>Updated Array</h1>");
document.write(color + "<br>");



// QNO9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var color = ["Blue ", "Green", "Red"];
document.write("<h1>Initial Array</h1>");
document.write(color + "<br>");
var addColor = prompt("Enter a color to add at the beginning");
color.unshift(addColor);
document.write("<br>");
document.write("<h1>Updated Array</h1>");
document.write(color + "<br>");



// QNO10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
var studentScore = [320, 230, 480, 120];
document.write("<h1>Student Score</h1>");
document.write(studentScore + "<br>");
var sortedScore = studentScore.sort(function (a, b) { return a - b; });
document.write("<h1>Sorted Student Score</h1>");
document.write(sortedScore + "<br>");



// QNO11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h1>Cities</h1>");
document.write(cities + "<br>");
var selectedCities = cities.slice(2, 4);
document.write("<h1>Selected Cities</h1>");
document.write(selectedCities + "<br>");




// QNO12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]

var array4 = ["This ", "is ", "my ", "cat."];
document.write("<h1>Array</h1>");
document.write(array4 + "<br>");
var arrayJoin = array4.join(" ");
document.write("<h1>String</h1>");
document.write(arrayJoin + "<br>");






