
////Q..Write a program that displays current date and time in your browser
    
// **********Coding***************
// let today = new Date();
// document.write(today)



//// Q..Write a program that alerts the current month in words.

// **********Coding***************
// let arrOfmonthNames = ["January", "Feburary", "March", "April", "May", "June", "July"];
// let currentDate = new Date();
// let gettingmonth = currentDate.getMonth();
// document.write("current month :" + monthNames[gettingmonth]);


///Q..Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show sun



// **********Coding***************
// let arrOfDaysName = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let currentDate = new Date();
// let today = currentDate.getDay();
// let currentDay = arrOfDaysName[today];
// let extractthreeLetters = currentDay.slice(0, 3)
// document.write("Today is " + extractthreeLetters);


///Q..Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// **********Coding***************
// let arrOfDaysName = [ "Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
// let currentDate = new Date();
// let today = currentDate.getDay();
// let currentDay = arrOfDaysName[today];
// if(currentDay === "Saturday" || currentDay === "Sunday"){
//     alert("Its fun day");
// }
// else{
//     alert("Its not fun day " + " Today is " + currentDay);
// }


///Q..Write a program that shows the message “First fifteen
  // days of the month” if the date is less than 16th of the month
  // else shows “Last days of the month”.


// **********Coding***************
// let getDate = new Date();
// let currentDate = getDate.getDate();
// if(currentDate < 16){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }



///Q.Write a program that tests whether it's before noon and
   // alert “Its AM” else “its PM”.


// **********Coding***************
// let currentDate = new Date();
// let currentHrs  = currentDate.getHours();
// // console.log(currentHrs);
// if(currentHrs < 12){
//     console.log(" Its AM")
// }
// else{
//     console.log(" Its PM")
// }






////Q..Write a program that creates a Date object for the last day
   // of the last month of 2020 and assigns it to variable named
   // laterDate.


/**********Coding***************
//  var laterDate = new Date(2020, 11, 31);
//  document.write("Later Date : "  + laterDate);



///Q..Create a date object of the starting date of this Ramadan
  // and alert the number of days past since 1st Ramadan?
  // Note: 1st Ramadan was on June 18, 2015


  // **********Coding***************///
// let laterDate = new Date("june, 18, 2015");
// let currentDate = new Date();
// let diffMiliSec = currentDate.getTime() - laterDate.getTime();
// document.write (Math.floor(diffMiliSec/(1000 * 60 * 60 * 24)) + " days have passed since first Ramadan, 2015");




////Q..Write a program that displays in your browser the
   // seconds that elapsed between the reference date and the
   // beginning of 2015.


// **********Coding***************///
// let passedDate = new Date("jan 29 2015");
// let currentDay = new Date();
// let diffMiliSec = currentDay.getTime() - passedDate.getTime();
// document.write  ("On reference date " + passedDate + "<br>" + Math.floor(diffMiliSec/(1000 * 60)) + " seconds had passed since beginning of 2015");



///Q..Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// **********Coding***************
// let useraBirthaYear = +prompt("Enter your birth year !");
// let userInputedYear = new Date(useraBirthaYear);
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// document.write("Your birthday year is : " + useraBirthaYear + "<br>" +" Your Age is : " + (currentYear - userInputedYear -1) );

///reverse way
//  let userAge = +prompt("Enter your age !");
// let currentYear = new Date().getFullYear();
// console.log(currentYear);
// // document.write("Your age is : " + userAge + "<br>" + "Your birth year is : " + (currentYear - userAge -1) );



////Q..Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


// **********Coding***************
// let userName = prompt("Enter your name.");
// let monthOfBill = prompt("Enter the month of your bill");
// let userBillUnit = +prompt("Enter the  number units of Your bill");
// let chargePerUnit = 16;
// let netAmountPayable = userBillUnit * chargePerUnit;
// let lateCharges = 350;
// let grossAmount = netAmountPayable + lateCharges;
// document.write("<h1>K-Electric Bill</h1>" + "<br>" + "Customer Name : " + userName + " customer " + "<br>" + "Month : " + monthOfBill + "<br>" + "Number of units : " + userBillUnit + "<br>" + "Charges per unit : " + chargePerUnit + "<br>" + "Net amount payable (within due date : " + netAmountPayable + "<br>" + "late Payment surcharge : " + lateCharges + "<br>" + "Gross amount payable (after due date) : " + grossAmount )


////Q.Write a program that determines the minutes since
//  midnight, Jan. 1, 1970 and assigns it to a variable that
//  hasn't been declared beforehand. Use any variable you like
//  to represent the Date object.


// **********Coding***************///;
// let today = new Date();
// let miliSec = today.getTime();
// let convertMiliSec = miliSec/(1000 * 60 * 60);
// document.write("Current date : " + today + "<br>" + "Elapsed milliseconds since january 1, 1970 : " + miliSec + "<br>" + "Elapsed minutes since january 1, 1970 : " + convertMiliSec);




////Q..Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// **********Coding***************///
// let currentDate = new Date ();
// document.write("Current date : " + currentDate + "<br>");
// let gettingHors = currentDate.getHours();
// currentDate.setHours(gettingHors - 1);
// document.write("1 hour ahead it was : " + currentDate);




///Q..Write a program that creates a date object and show the
// date in 


// **********Coding***************////
// let currentDate = new Date();
// document.write("Current date : " + currentDate + "<br>");
// let gettingYear = currentDate.getFullYear();
// currentDate.setFullYear(gettingYear -100);
// document.write("100 years back : " + currentDate)
