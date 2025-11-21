# Polynomial Solver (JSON Based)

A simple and clean browser-based polynomial solver that reads roots from a JSON file, converts them from their respective bases, forms the polynomial:

\[
P(x) = (x - r_1)(x - r_2) \ldots (x - r_k)
\]

and displays:

- Polynomial degree  
- Selected roots  
- Expanded coefficients  
- Constant term **C**

This project was built as part of the Hivel Placement Assignment.

---
<img width="1891" height="911" alt="image" src="https://github.com/user-attachments/assets/0a892623-8f24-488b-8418-620ac7648004" />

## 🌐 Live Demo

You can access the running application here:

**🔗 https://polynomial-solver.netlify.app/**

---

## 📂 Project Structure

polynomial-solver-json/
│
├── index.html
├── style.css
├── script.js
└── input.json ← default test case (provided in assignment)

yaml
Copy code

---

## ✨ Features

- Supports very large numbers using **BigInt**
- Converts values from any base (2–36) to decimal
- Expands the polynomial using selected roots
- Reads **default input.json** (no hardcoding)
- Supports **manual JSON upload**
- Clean, minimal UI
- Works entirely in the browser (no backend needed)

---

## 🚀 How to Run Locally

### Using VS Code (Recommended)

1. Open the project folder
2. Install **Live Server** extension
3. Right-click `index.html`
4. Choose **"Open with Live Server"**
5. Use one of the options:

- **Run Default JSON** → reads `input.json`
- **Upload JSON File** → choose your own test case

### Or open index.html directly in any browser.

---

## 📄 JSON Format

Your input JSON file must follow this structure:

```json
{
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
}
n → total number of entries

k → number of roots required

Application will take the first k decoded roots

Base conversion automatically handled

Polynomial expansion done using BigInt arithmetic

📤 Output Example
mathematica
Copy code
Degree = 6
Roots used = 995085094601491, 320923294898495900, ...

Coefficients (highest degree first):
1
-42744980544161216684
...

Constant Term C = -68251311922474227931291131263381...
👩‍💻 Author
Muchuramu Harika

