var iptext= document.querySelector("#txt1");
var btn= document.querySelector("#btn-translate");
var optxt= document.querySelector("#txt2");

var serverUrl="	https://api.funtranslations.com/translate/yoda.json";

function getTranslated(text){
    return serverUrl+"?"+"text="+text
}
function error(error){
    console.log("error:", error)
    alert("server issue, Kindly try again later!")

}

function yoda(){
    var input= iptext.value;

    fetch (getTranslated(input))
    
    
  
    .then(response=> response.json())
    .then(json=>{
        var translatedtext= json.contents.translated;
        optxt.innerText = translatedtext;
    })
    .catch(error)
    
}
btn.addEventListener("click", yoda);