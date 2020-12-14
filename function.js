var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event){
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if(Content == 'take my selfie'){
    console.log("Taking selfie ---");
    speak();
}
}

function speak(){
    var synthesis = window.speechSynthesis;
    var text = "Taking your selfie in 5 seconds.";
    var speech = new SpeechSynthesisUtterance(text);
    synthesis.speak(speech);
   Webcam.attach(camera);

   setTimeout(
    function(){
        take_snapshot();
         save();
    },  5000
);
}

var camera = document.getElementById("camera");

Webcam.set({
    width: 500,
    height: 250,
    image_format: 'jpg',
    jpg_quality: 90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie' src= '" + data_uri + "'>";
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}




