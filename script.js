function _(x) {
  return document.querySelector(x);
}

function insert(x) {
  _("#layar").value += x;
}

for (let i = 0; i < 10; i++) {
  _("#btn" + i).addEventListener("click", () => {
    if (_("#layar").value.length == 16) {
      alert("max 16 digit !!!");
    } else {
      _("#layar").value += _("#btn" + i).id.split("btn")[1];
    }
  });
}

_("#calc").addEventListener("click", () => {
  val = eval(_("#layar").value);
  _("#layar").value = val;
});

_("#cls").addEventListener("click", () => {
  _("#layar").value = "";
});
