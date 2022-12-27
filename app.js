function calculate() {
  event.preventDefault();
  let vize = document.getElementById("vize").value;
  let final = document.getElementById("final").value;

  let ortalama = vize * 0.4 + final * 0.6;
  document.getElementById("not1").innerHTML = ortalama;
  if (ortalama >= 50 && final > 50) {
    document.getElementById("durum").innerHTML = "GECTINIZ";
    document.getElementById("durum").style.background = "#00ff15";
  } else {
    document.getElementById("durum").innerHTML = "kaldiniz Maalasaf";
    document.getElementById("durum").style.background = "#ff0000";
  }

  if (ortalama <= 49) {
    document.getElementById("level").innerHTML = "FF";
  } else if (ortalama >= 50 && ortalama <= 70) {
    document.getElementById("level").innerHTML = "CC";
  } else if (ortalama >= 70 && ortalama <= 90) {
    document.getElementById("level").innerHTML = "BB";
  } else if (ortalama >= 90 && ortalama <= 100) {
    document.getElementById("level").innerHTML = "AA";
  } else if (ortalama >= 101) {
    document.getElementById("level").innerHTML = "";
    document.getElementById("durum").innerHTML =
      "LÜTFEN GERÇEK SONUÇLARINIZI YAZIN";
    document.getElementById("not1").innerHTML = "";
    document.getElementById("durum").style.background = "#ff0000";
  }
}
