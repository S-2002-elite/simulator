// --------------------DC SLIDER--------------------
var dcsliderval;
function dcsliderChange() {
  dcsliderval = document.getElementById("dc-slider").value;
  document.getElementById("dc-value").value = dcsliderval;
  fbias();
}
// --------------------RL SLIDER--------------------
var rlsliderval;
function rlsliderChange() {
  rlsliderval = document.getElementById("rl-slider").value;
  document.getElementById("rl-value").value = rlsliderval;
  fbias();
}
// --------------------TEMP SLIDER--------------------
var tempsliderval;
function tpsliderChange() {
  tempsliderval = document.getElementById("tp-slider").value;
  document.getElementById("temp-value").value = tempsliderval;
  fbias();
}
var tc;
function txtchng() {
    tc = document.getElementById("dc-value").value;
    document.getElementById("dc-slider").value = tc;
}
var rc;
function txtchnge() {
    rc = document.getElementById("rl-value").value;
    document.getElementById("rl-slider").value = rc;
}
var rtc;
function txtchnge() {
    rtc = document.getElementById("temp-value").value;
    document.getElementById("tp-slider").value = rtc;
}
// --------------------FORWARD BIAS SIMULATOR--------------------
var rl,vs,rt,vt,irev,isc,nl1,nl2,vd,id;
var n = 1, vfmin = 0.6, vfmax = 0.7, rd = 0.3, k = 273, dn = 11600, rtmax = 100, rtmin = 26, iscmax = 50, iscmin = 5;

function fbias(){
  vs = document.getElementById("dc-value").value;
  rl = document.getElementById("rl-value").value;
  rt = document.getElementById("temp-value").value;

  vt = (parseInt(k) + parseFloat(rt))/parseInt(dn);
  irev = ((parseInt(iscmax)-(parseInt(iscmin))/(parseInt(rtmax))-parseInt(rtmin))) * ((parseFloat(rt)-parseInt(rtmin))) + parseInt(iscmin);
  isc = parseInt(irev) * Math.pow(10,-12);
  nl1 = (parseFloat(vs) / parseInt(rl));
  nl2 = Math.log(nl1 / isc);
  vd = n * vt * nl2; //Forward voltage across the diode in VOLTS
  id = ((parseFloat(vs) - parseFloat(vfmin)) / ((parseInt(rl))+parseFloat(rd))) * Math.pow(10, 3); //Forward current across the diode in MICROAMPERE

  if (vs < vfmin) {
    document.getElementById("am-value").value = 0;
    document.getElementById("vm-value").value = 0;
  }
  else {
    document.getElementById("am-value").value = id.toPrecision(3);//in MICROAMPERE
    document.getElementById("vm-value").value = irev.toPrecision(3);//in VOLTS
  }
}