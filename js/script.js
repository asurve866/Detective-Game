
console.log("Javascript Works!");

var suspectList = [ "Suspect 1", "Suspect 2", " Suspect 3", "Suspect 4", "Suspect 5", "Suspect 6"];
var suspectGuilty = [ null, null, null, null, "Suspect 5", null];
var suspectDeduced = [];
var promptSingleCard = [];

console.log(suspectDeduced);
console.log(suspectDeduced.length);

var image1 = document.getElementById("pic_s1");
var image2 = document.getElementById("pic_s2");
var image3 = document.getElementById("pic_s3");
var image4 = document.getElementById("pic_s4");
var image5 = document.getElementById("pic_s5");
var image6 = document.getElementById("pic_s6");





//DISPLAY FUNCTION
var display = function( data ){
    output.innerText = data;
}

var alertButton = document.createElement('button');
alertButton.innerHTML = 'ARREST';

    alertButton.onclick = function(){
        if (suspectList[4] === suspectGuilty[4]) {
        display("Excellent! you proved your deduction skills! ");
        console.log(display);
        image1.onclick = null;
        image2.onclick = null;
        image3.onclick = null;
        image4.onclick = null;
        image5.onclick = null;
        image6.onclick = null;
        window.location.href="/Conclusion.html";
        }
        else {
        display("Oops, the murderer got away! ");
        image1.onclick = null;
        image2.onclick = null;
        image3.onclick = null;
        image4.onclick = null;
        image5.onclick = null;
        image6.onclick = null;
        }
    };
i
//UPON CLICK USER IS ABLE TO CHANGE THE IMAGE AND ELIMINATE THE ELEMENT FROM THE ARRAY
function changeImage(){
   if (image1.src.match("images/Wife.png") && promptSingleCard.length === 4) {
        image1.src = "images/Eliminated-Suspect.png";
        suspectList[0] = null;
        console.log(suspectList);
        promptSingleCard.push(1);
        console.log(promptSingleCard);
        alert("Are you sure this is your final suspect?");
        document.getElementById("deliberation").appendChild(alertButton);
    }
    else if (image1.src.match("images/Wife.png")) {
        image1.src = "images/Eliminated-Suspect.png";
        suspectList[0] = null;
        console.log(suspectList);
        promptSingleCard.push(1);
        console.log(promptSingleCard);
    }
    else {
        image1.src = "images/Wife.png";
        suspectList[0] = "Suspect 1";
        console.log(suspectList);
        promptSingleCard.pop();
        console.log(promptSingleCard);
    }
}

function changeImage2(){
    if (image2.src.match("images/Director.png") && promptSingleCard.length === 4) {
        image2.src = "images/Eliminated-Suspect.png";
        suspectList[1] = null;
        console.log(suspectList);
        promptSingleCard.push(2);
        console.log(promptSingleCard);
        alert("Are you sure?");
        document.getElementById("deliberation").appendChild(alertButton);
    }
        else if (image2.src.match("images/Director.png")) {
        image2.src = "images/Eliminated-Suspect.png";
        suspectList[1] = null;
        console.log(suspectList);
        promptSingleCard.push(2);
        console.log(promptSingleCard);
    }
    else {
        image2.src = "images/Director.png";
        suspectList[1] = "Suspect 2";
        console.log(suspectList);
        promptSingleCard.pop();
        console.log(promptSingleCard);
    }
}

function changeImage3(){
    if (image3.src.match("images/Driver.png") && promptSingleCard.length === 4) {
        image3.src = "images/Eliminated-Suspect.png";
        suspectList[2] = null;
        console.log(suspectList);
        promptSingleCard.push(3);
        console.log(promptSingleCard);
        alert("Are you sure?");
        document.getElementById("deliberation").appendChild(alertButton);
    }
     else if (image3.src.match("images/Driver.png")) {
        image3.src = "images/Eliminated-Suspect.png";
        suspectList[2] = null;
        console.log(suspectList);
        promptSingleCard.push(3);
        console.log(promptSingleCard);
    }
    else {
        image3.src = "images/Driver.png";
        suspectList[2] = "Suspect 3";
        console.log(suspectList);
        promptSingleCard.pop();
        console.log(promptSingleCard);
    }
}

function changeImage4(){
    if (image4.src.match("images/Partner2.png") && promptSingleCard.length === 4) {
        image4.src = "images/Eliminated-Suspect.png";
        suspectList[3] = null;
        console.log(suspectList);
        promptSingleCard.push(4);
        console.log(promptSingleCard);
        alert("Are you sure?");
        document.getElementById("deliberation").appendChild(alertButton);
    }
    else if (image4.src.match("images/Partner2.png")) {
        image4.src = "images/Eliminated-Suspect.png";
        suspectList[3] = null;
        console.log(suspectList);
        promptSingleCard.push(4);
        console.log(promptSingleCard);
    }
    else {
        image4.src = "images/Partner2.png";
        suspectList[3] = "Suspect 4";
        console.log(suspectList);
        promptSingleCard.pop();
        console.log(promptSingleCard);
    }
}

function changeImage5(){
    if (image5.src.match("images/Partner1.png") && promptSingleCard.length === 4) {
        image5.src = "images/Eliminated-Suspect.png";
        suspectList[4] = null;
        console.log(suspectList);
        promptSingleCard.push(5);
        console.log(promptSingleCard);
        alert("Are you sure?");
        document.getElementById("deliberation").appendChild(alertButton);
    }
    else if (image5.src.match("images/Partner1.png")) {
        image5.src = "images/Eliminated-Suspect.png";
        suspectList[4] = null;
        console.log(suspectList);
        promptSingleCard.push(5);
        console.log(promptSingleCard);
    }
    else {
        image5.src = "images/Partner1.png";
        suspectList[4] = "Suspect 5";
        console.log(suspectList);
        promptSingleCard.pop();
        console.log(promptSingleCard);
    }
}

function changeImage6(){
    if (image6.src.match("images/Mom.png") && promptSingleCard.length === 4) {
        image6.src = "images/Eliminated-Suspect.png";
        suspectList[5] = null;
        console.log(suspectList);
        promptSingleCard.push(6);
        console.log(promptSingleCard);
        alert("Are you sure?");
        document.getElementById("deliberation").appendChild(alertButton);
    }
    else if (image6.src.match("images/Mom.png")) {
        image6.src = "images/Eliminated-Suspect.png";
        suspectList[5] = null;
        console.log(suspectList);
        promptSingleCard.push(6);
        console.log(promptSingleCard);
    }
    else {
        image6.src = "images/Mom.png";
        suspectList[5] = "Suspect 6";
        console.log(suspectList);
        promptSingleCard.pop();
        console.log(promptSingleCard);
    }
}


// // INPUT FIELD -- REMOVING SOON
// document.querySelector('#input').addEventListener('change',function(event){
//     var currentInput = event.target.value;
//     var parsedInput = parseInt(currentInput);
//     inputHappened(parsedInput);
//     console.log(parsedInput);
// });



// //FINAL VERDICT, IF USER HAS KEYED IN THE RIGHT ANSWER
// var inputHappened = function(parsedInput) {
//     if (parsedInput === suspectGuilty[0]) {
//         display("Excellent! Elementary, my dear " + detectiveName);
//         console.log(display);
//     }
//     else {
//         display("Try again! Never trust to general impressions, my boy, but concentrate yourself upon details.");
//     }
// };