// --------------------DC SLIDER--------------------
var dcsliderval;
function dcsliderChange() {
  dcsliderval = document.getElementById("dc-slider").value;
  document.getElementById("dc-value").value = dcsliderval;
  check();
}
// --------------------RL SLIDER--------------------
var rlsliderval;
function rlsliderChange() {
  rlsliderval = document.getElementById("rl-slider").value;
  document.getElementById("rl-value").value = rlsliderval;
  check();
}
// --------------------TEMP SLIDER--------------------
var tempsliderval;
function tpsliderChange() {
  tempsliderval = document.getElementById("tp-slider").value;
  document.getElementById("temp-value").value = tempsliderval;
  check();
}