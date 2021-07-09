function unitConverter(source, valNum) {
    valNum = parseFloat(valNum);
    val inputMeter = document.getElementById("inputMeter");
    val inputInches = document.getElementById("inputInches");
    val inputFeet = document.getElementById("inputFeet");
    val inputYard = document.getElementById("inputYard");

    if(source == "inputMeter") {
        inputInches.value = (valNum*39.37).toFixed(2);
        inputFeet.value = (valNum*3.28084).toFixed(3);
        inputYard.value = (valNum*1.09361).toFixed(4);
    }
    if(source == "inputInches") {
        inputMeter.value = (valNum/39.37).toFixed(2);
        inputFeet.value = (valNum/12).toFixed(3);
        inputYard.value = (valNum/36).toFixed(4);
    }
    if(source == "inputFeet") {
        inputYard.value = (valNum/3).toFixed(2);
        inputMeter.value = (valNum/3.28).toFixed(3);
        inputInches.value = (valNum*12).toFixed(4);
    }
    if(source == "inputYard") {
        inputMeter.value = (valNum/1.094).toFixed(2);
        inputInches.value = (valNum*36).toFixed(3);
        inputFeet.value = (valNum*3).toFixed(4);
    }
}
// function LengthConverter(valNum) {
//     document.getElementById("outputMeters").innerHTML=valNum/3.2808;
//   }