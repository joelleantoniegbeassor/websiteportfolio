var myString = "Dramaj is a theatre*performance artist/production collective funded in 2024 and is currently based between Vienna AT and Zurich CH**. We have been asked (and asked ourselves) why this website??????? We have struggled to answer those questions at most times and other times it has been painfully clear. Because drama draws from life, from moments of thrill, grace, melancholia, sweat and despair as well as from deep and precious or superficial connections. But drama not only draws from life, its raw material is 'actual human bodies, human characters and human relationships.";
var myDiv = document.getElementById("myDiv");
function printStringByLetter() {
    var index = 0;
    var intervalId = setInterval(function() {
        myDiv.innerHTML += myString.charAt(index);
        index++;
        if(index == myString.length) {
            clearInterval(intervalId);
        }
    }, 10);
}

function printStringByWord() {
    var words = myString.split(" ");
    var index = 0;
    var intervalId = setInterval(function() {
        myDiv.innerHTML += words[index] + " ";
        index++;
        if(index == words.length) {
            clearInterval(intervalId);
        }
    }, 200);
}
document.addEventListener("DOMContentLoaded", function() {
    printStringByLetter();
  });