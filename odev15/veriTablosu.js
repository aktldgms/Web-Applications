var meyveler = ["Elma", "Muz"];
var sebzeler = ["Brokoli", "Lahana"];

var birlesikVeri =
  meyveler.concat(
    sebzeler
  ); /* ******************************************************** */

var tbody = document.querySelector("#veriTablosu tbody");

var a;
if (sebzeler.length > meyveler.length) {
  a = sebzeler.length;
} else if (sebzeler.length < meyveler.length) {
  a = meyveler.length;
} else {
  a = sebzeler.length;
}

for (var i = 0; i < a; i++) {
  var tr = document.createElement("tr");

  var tdMeyveler = document.createElement("td");
  tdMeyveler.textContent = meyveler[i];
  tr.appendChild(tdMeyveler);

  var tdSebzeler = document.createElement("td");
  tdSebzeler.textContent = sebzeler[i];
  tr.appendChild(tdSebzeler);

  tbody.appendChild(tr);
}
