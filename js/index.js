
function calculate(){
 
  let eprice = document.getElementById("eprice").value;
  let sprice = document.getElementById("sprice").value;
  let value = document.getElementById("value").value;

  calculation = (sprice * value) - (eprice * value);
  rounded = Math.round(calculation * 100) / 100;
  positive = Math.abs(rounded);
 

  document.getElementById("output").innerHTML = "";
  return (document.getElementById("output").innerHTML += "~" + positive + " USD")

}