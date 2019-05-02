function sensors(num) {
  document.getElementById("myProgress1").value = num[0];
  document.getElementById("myProgress2").value = num[1];
  document.getElementById("myProgress3").value = num[2];
  document.getElementById("myProgress4").value = num[3];
  document.getElementById("myProgress5").value = num[4];
  document.getElementById("myProgress6").value = num[5];
  document.getElementById("myProgress7").value = num[6];
  document.getElementById("myProgress8").value = num[7];
  document.getElementById("val1").innerHTML = num[0].toFixed(2);
  document.getElementById("val2").innerHTML = num[1].toFixed(2);
  document.getElementById("val3").innerHTML = num[2].toFixed(2);
  document.getElementById("val4").innerHTML = num[3].toFixed(2);
  document.getElementById("val5").innerHTML = num[4].toFixed(2);
  document.getElementById("val6").innerHTML = num[5].toFixed(2);
  document.getElementById("val7").innerHTML = num[6].toFixed(2);
  document.getElementById("val8").innerHTML = num[7].toFixed(2);
}
