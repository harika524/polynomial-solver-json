function printResult(text) {
  document.getElementById("output").innerText = text;
}

async function runDefault() {
  try {
    const res = await fetch("input.json");
    const data = await res.json();
    const output = solvePolynomial(data);
    printResult(output);
  } catch (err) {
    printResult("Error loading input.json\n" + err);
  }
}

function loadUserFile() {
  const fileInput = document.getElementById("fileInput");
  if (!fileInput.files.length) return alert("Choose a JSON file");

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = e => {
    try {
      const json = JSON.parse(e.target.result);
      const output = solvePolynomial(json);
      printResult(output);
    } catch (err) {
      printResult("Invalid JSON file\n" + err);
    }
  };

  reader.readAsText(file);
}

function bigIntFromBase(str, base) {
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  base = BigInt(base);
  let result = 0n;

  for (const c of str.toLowerCase()) {
    result = result * base + BigInt(digits.indexOf(c));
  }
  return result;
}

function buildPolynomial(roots) {
  let poly = [1n];

  for (const r of roots) {
    const next = new Array(poly.length + 1).fill(0n);
    for (let i = 0; i < next.length; i++) {
      const a = i > 0 ? poly[i - 1] : 0n;
      const b = i < poly.length ? -r * poly[i] : 0n;
      next[i] = a + b;
    }
    poly = next;
  }
  return poly;
}

function solvePolynomial(json) {
  const n = json.keys.n;
  const k = json.keys.k;
  const roots = [];

  for (let i = 1; i <= n; i++) {
    if (!json[i]) continue;
    const base = parseInt(json[i].base);
    const value = json[i].value;
    const decimal = bigIntFromBase(value, base);
    roots.push(decimal);
  }

  const selected = roots.slice(0, k);
  const coeffs = buildPolynomial(selected);

  let txt = "";
  txt += "Degree = " + (k - 1) + "\n";
  txt += "Roots used = " + selected.join(", ") + "\n\n";
  txt += "Coefficients (highest degree first):\n";

  for (let i = coeffs.length - 1; i >= 0; i--) {
    txt += coeffs[i] + "\n";
  }

  txt += "\nConstant Term C = " + coeffs[0];
  return txt;
}
