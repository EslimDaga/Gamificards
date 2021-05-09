const example2Left = document.getElementById("example2Left");
const example2Right = document.getElementById("example2Right");
const example2Right_two = document.getElementById("example2Right-two");

new Sortable(example2Left, {
  group: 'shared', // set both lists to same group
  animation: 150
});

new Sortable(example2Right, {
  group: 'shared',
  animation: 150
});

new Sortable(example2Right_two, {
  group: 'shared',
  animation: 150
});

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}