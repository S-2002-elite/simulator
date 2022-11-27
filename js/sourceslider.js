var dcsliderval;
function dcsliderChange() {
  dcsliderval = document.getElementById("dc-slider").value;
  document.getElementById("dc-value").value = dcsliderval;
  check();
}

var rlsliderval;
function rlsliderChange() {
  rlsliderval = document.getElementById("rl-slider").value;
  document.getElementById("rl-value").value = rlsliderval;
  check();
}