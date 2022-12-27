var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var lingoOutput = document.querySelector("#lingo-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json" ;

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//This is the input part to write something in input box
function getUrlTranslation(txtInput) {

    return serverUrl + "?" + "text= " + txtInput;
}

function ifErrorHappens(error) {
    console.log("erroer occured" , error);
    alert("The server is down right now, please try later");
}

// This is the processing part using server
function clickHandler() {

    var inputTxt = txtInput.value ;
    fetch (getUrlTranslation(inputTxt))
    .then (response => response.json())
    .then (json => { 
        var translatedOutputText = json.contents.translated ;
        lingoOutput.innerText = translatedOutputText; //This is the output part which will show in output box 
     }) 
    .catch(ifErrorHappens)

};

btnTranslate.addEventListener("click", clickHandler)

