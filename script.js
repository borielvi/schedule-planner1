var now = moment()
var currentTime = now.format("H");
var currentDay = now.format("dddd, MMMM Do");
var countInput = 0;
var text = [];
var day = document.querySelector("#currentDay");
day.innerHTML = currentDay;


var timeBlock = function(){
    for(var i = 9; i <= 17; i++){
        var num = i.toString();
        if(currentTime < i){
            document.getElementById(num).style.backgroundColor = "teal";
            console.log(document.getElementById(num))
        }else{
            if(currentTime == i){
                document.getElementById(num).style.backgroundColor = "tomato";
                console.log(document.getElementById(num))
            }
        }
    }
}


var createText = function(textData){
    var update = textData[1];
    document.querySelector(textData[0]).value = update;
}


var saveText = function(){
    localStorage.setItem("text", JSON.stringify(text));
}


var loadText = function(){
    var textInput = localStorage.getItem("text");

    if(textInput){

        textInput = JSON.parse(textInput);

        for (var i = 0; i < textInput.length; i++) {
            // pass each task object into the `createText()` function
           createText(textInput[i]);
       }
    }else{
        text = [];
    }
}


document.querySelector("#saveBtn9").onclick = function(){
    var savePush = [
        key = "#\\39",
        saveInput = document.querySelector("#\\39").value
    ]
    text.push(savePush);
    saveText();
}
document.querySelector("#saveBtn10").onclick = function(){
    var savePush = [
        key = "#\\31 0",
        saveInput = document.querySelector("#\\31 0").value
    ]
    text.push(savePush);
    saveText("#\\31 0");
}
document.querySelector("#saveBtn11").onclick = function(){
    var savePush = [
        key = "#\\31 1",
        saveInput = document.querySelector("#\\31 1").value
    ]
    text.push(savePush);
    saveText("#\\31 1");
}
document.querySelector("#saveBtn12").onclick = function(){
    var savePush = [
        key = "#\\31 2",
        saveInput = document.querySelector("#\\31 2").value
    ]
    text.push(savePush);
    saveText("#\\31 2");
}
document.querySelector("#saveBtn13").onclick = function(){
    var savePush = [
        key = "#\\31 3",
        saveInput = document.querySelector("#\\31 3").value
    ]
    text.push(savePush);
    saveText("#\\31 3");
}
document.querySelector("#saveBtn14").onclick = function(){
    var savePush = [
        key = "#\\31 4",
        saveInput = document.querySelector("#\\31 4").value
    ]
    text.push(savePush);
    saveText("#\\31 4");
}
document.querySelector("#saveBtn15").onclick = function(){
    var savePush = [
        key = "#\\31 5",
        saveInput = document.querySelector("#\\31 5").value
    ]
    text.push(savePush);
    saveText("#\\31 5");
}
document.querySelector("#saveBtn16").onclick = function(){
    var savePush = [
        key = "#\\31 6",
        saveInput = document.querySelector("#\\31 6").value
    ]
    text.push(savePush);
    saveText("#\\31 6");
}
document.querySelector("#saveBtn17").onclick = function(){
    var savePush = [
        key = "#\\31 7",
        saveInput = document.querySelector("#\\31 7").value
    ]
    text.push(savePush);
    saveText("#\\31 7");
}


loadText();
timeBlock();