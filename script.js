function calculateEMI() {
  const principal = parseFloat(document.getElementById('amount').value);
  const annualRate = parseFloat(document.getElementById('rate').value);
  const years = parseFloat(document.getElementById('tenure').value);

  if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  document.getElementById('emi').innerText = emi.toFixed(2);
  document.getElementById('interest').innerText = totalInterest.toFixed(2);
  document.getElementById('total').innerText = totalPayment.toFixed(2);
  document.getElementById('result').style.display = 'block';
}

function clearFields() {
  document.getElementById('amount').value = '';
  document.getElementById('rate').value = '';
  document.getElementById('tenure').value = '';
  document.getElementById('result').style.display = 'none';
}
