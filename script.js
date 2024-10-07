// Theme Toggle
const themeSlider = document.getElementById('theme-slider');
themeSlider.addEventListener('change', () => {
  document.documentElement.setAttribute('data-theme', themeSlider.checked ? 'dark' : 'light');
});

// Copy to Clipboard
const results = document.querySelectorAll('.output');
results.forEach(result => {
  result.addEventListener('click', () => {
    navigator.clipboard.writeText(result.textContent);
    alert('Copied: ' + result.textContent);
  });
});

// Conversion Logic
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const errorMessage = document.getElementById('errorMessage');

convertBtn.addEventListener('click', convertNumber);
clearBtn.addEventListener('click', clearInputs);

// Live Conversion
document.getElementById('inputNumber').addEventListener('input', convertNumber);

function convertNumber() {
  const inputNumber = document.getElementById('inputNumber').value.trim();
  const inputBase = document.getElementById('inputBase').value;

  // Input validation
  if (!isValidInput(inputNumber, inputBase)) {
    showError(`Invalid input for base ${inputBase}.`);
    clearResults();
    return;
  }

  // Convert input to decimal
  const decimalValue = parseInt(inputNumber, inputBase);
  updateResults(decimalValue);
}

function updateResults(decimalValue) {
  errorMessage.textContent = '';

  document.getElementById('binaryResult').textContent = decimalValue.toString(2);
  document.getElementById('octalResult').textContent = decimalValue.toString(8);
  document.getElementById('decimalResult').textContent = decimalValue.toString(10);
  document.getElementById('hexadecimalResult').textContent = decimalValue.toString(16).toUpperCase();
  document.getElementById('base5Result').textContent = decimalValue.toString(5);
  document.getElementById('base12Result').textContent = decimalValue.toString(12);
}

function isValidInput(input, base) {
  const baseChars = {
    '2': /^[0-1]+$/,
    '8': /^[0-7]+$/,
    '10': /^[0-9]+$/,
    '16': /^[0-9A-Fa-f]+$/,
    '5': /^[0-4]+$/,
    '12': /^[0-9A-Ba-b]+$/
  };
  return baseChars[base].test(input);
}

function showError(message) {
  errorMessage.textContent = message;
}

function clearInputs() {
  document.getElementById('inputNumber').value = '';
  clearResults();
  errorMessage.textContent = '';
}

function clearResults() {
  const outputs = document.querySelectorAll('.output');
  outputs.forEach(output => output.textContent = '0');
}





