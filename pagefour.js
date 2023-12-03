var bill=prompt "Total bill amount";
const percent= ".20,.15, or .10";
var tippercent=prompt "Enter tip amount";
var servicequality=prompt "Please rate your service: Great, Okay or Poor?"

function servicequality=input(){
  //validate servicequality
  if servicequality == "Good, Fair, or Ok"
    show_message2("Error!");
    stop()
}

function  percent()=input() {
  //validate percent
  if percent == "5.00=><=500.00"
  show_message3("Error if percent=<5.00 or =>500.00");
  stop()
}

function  calculatetip(){
  //validate calculatetip
  if (bill ==="" servicequality =="";
  return show_message4("Ex: Bill $285.25 + Great + $57.05 = $342.30");
}

function show_message1(){
window.alert text= "Thank you for enjoying the service";
}
show_message1();

document.write("bill");
document.write("tippercent");
document.write("servicequality");
