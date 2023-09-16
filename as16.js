//1.  Install Node.js, TypeScript and VS Code on your computer.
// done
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//2. Personal Message: Store a person’s name in a variable, and print a message to that person.
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var name2 = "Ali";
var msg = "nice to meat you. Would you like to collabore with us.";
console.log("Dear", name2, ", ", msg);
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name 
//in lowercase, uppercase, and titlecase.
var name3 = "Ali";
console.log(" Lowee case", name3.toLowerCase(), "\n Upper case", name3.toUpperCase(), "\n title case");
//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
//  Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var name4 = "Stephen Hawking";
var msg2 = '“However difficult life may seem, there is always something you can do and succeed at.”';
console.log(name4, ':', msg2);
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
// famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = " Stephen Hawking  ";
var message = '“ However difficult life may seem, there is always something you can do and succeed at.”';
console.log(famous_person, ':', message);
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of 
//the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var fname5 = "Muhammad Asif";
console.log('Name with some whitespace \t', fname5, '\t : \n Name without some whitespace', fname5);
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in 
//the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(' Addition 5+3=', 5 + 3, '\n Subtraction 10-2=', 10 - 2, '\n multiplication 4*2=', 4 * 2, '\n Division 32/4=', 32 / 4);
// 8. You should create four lines that look like this:
// console.log(5 + 3)
console.log('Addition 5+3=', 5 + 3);
console.log('Subtraction 10-2=', 10 - 2);
console.log('multiplication 4*2=', 4 * 2);
console.log('Division 32/4=', 32 / 4);
//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals
// your favorite number. Print that message.
var Num1 = 51214;
var msg9 = "My favorite number is ".concat(Num1, ".");
console.log(msg9);
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t
// have anything specific to write because your programs are too simple at this point, just add your name and the current
// date at the top of each program file. Then write one sentence describing what the program does.
// var Number1:number= 372;
// var Print:string=` My favorite number is ${Number1}.`;
// console.log(print);
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing
// each element in the list, one at a time.
var names = ["arfan", "naveed", "zia", "arslan", "yasir", "mudassar"];
var i = 0;
for (i; i < names.length; i++) {
    console.log(names[i]);
}
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized with
// the person’s name.
var names = ["arfan", "naveed", "zia", "arslan", "yasir", "mudassar"];
for (var i = 0; i < names.length; i++) {
    console.log("God bless you dear", names[i], ".");
}
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that
// stores several examples. Use your list to print a series of statements about these items, such as “I would like to own
// a Honda motorcycle.”
var cars = ["Honda", "Toyota", "BMW"];
for (var i_1 = 0; i_1 < cars.length; i_1++) {
    console.log("I would like to own a", cars[i_1], "car.");
}
// 14.  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
//includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
// inviting them to dinner.
var guestNames = ["arfan", "naveed", "zia", "arslan", "yasir", "mudassar"];
for (var i_2 = 0; i_2 < guestNames.length; i_2++) {
    console.log("Dear", guestNames[i_2], ",You are cordially invited to join me for dinner today.");
}
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new
// set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the
// guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestNames = ["arfan", "naveed", "zia", "arslan", "yasir", "mudassar"];
for (var i_3 = 0; i_3 < guestNames.length; i_3++) {
    console.log(guestNames[i_3], ",You are cordially invited to join me for dinner today.");
}
for (var i_4 = 0; i_4 < guestNames.length; i_4++) {
    guestNames.splice(2, 1, "Shahid");
    console.log(guestNames[i_4], "join me for dinner today.");
}
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
guestNames.splice(0, 0, "Zia");
guestNames.splice(i / 2, 0, "Naseer");
guestNames.splice(guestNames.length, 0, "Latife");
var modifyGuest = guestNames.length;
console.log(modifyGuest);
for (var i_5 = 0; i_5 < guestNames.length; i_5++) {
    console.log("I have a dinner for you dear", guestNames[i_5]);
}
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
// two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program.
for (var i = guestNames.length - 1; i >= 0; i--) {
    if (i > 1) {
        console.log(guestNames.pop(), ", you are not invited for the next dinner. Because you did't come in time last time.");
    }
    else {
        console.log(guestNames.pop(), "you are invited for dinner today");
    }
}
console.log(guestNames);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var cityNames = ['Paris', 'Vienna', 'Berlin', 'London', 'Dublin'];
console.log("Original=", cityNames);
var modifyArray = __spreadArray([], cityNames, true).sort();
console.log("Modified Array=", modifyArray);
console.log("Original after modification=", cityNames);
console.log("Original array in reverse order=", cityNames.reverse());
console.log("Original array in alphabatic order=", cityNames.sort());
console.log("Original array in reverse alphabatic order=", cityNames.sort().reverse());
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the
// number of people you are inviting to dinner.
console.log("people you are inviting to dinner", modifyGuest);
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var itemObject = { country: ["Pakistan", "india", "Afganistan", "Iran", "Sudia Arabia", "Iraq"],
    cities: ['Paris', 'Vienna', 'Berlin', 'London', 'Dublin'],
    friendsNames: ["arfan", "naveed", "zia", "arslan", "yasir", "mudassar"]
};
console.log(itemObject.country);
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing 
//these items.
console.log(itemObject);
// 22.  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one 
//happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before
// closing the program.
var citiesNames1 = ['Paris', 'Vienna', 'Berlin', 'London', 'Dublin'];
console.log("For index=5, the city name is", citiesNames1[5]);
for (var i_6 = 0; i_6 < citiesNames1.length; i_6++) {
    console.log("For index=", i_6, ", the city name is", citiesNames1[i_6], ".");
}
