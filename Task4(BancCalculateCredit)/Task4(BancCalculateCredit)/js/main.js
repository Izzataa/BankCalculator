(() => {
  let calculateLoan = (event) => {
    event.preventDefault();

    let amount = parseInt(document.getElementById("miqdar").value);
    let duration = parseInt(document.getElementById("muddet").value);
    let interestRate = parseFloat(document.getElementById("derece").value);

    let monthlyPayment = (amount * interestRate / 100) / (12 * (1 - Math.pow(1 + (interestRate / 100) / 12, -duration)));
    let totalPayment = monthlyPayment * duration;

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      Aylıq ödəniş: ${monthlyPayment.toFixed(2)} AZN<br>
      Ümumi ödəniş: ${totalPayment.toFixed(2)} AZN
    `;

    console.log("Aylıq ödəniş:", monthlyPayment.toFixed(2), "AZN");
    console.log("Ümumi ödəniş:", totalPayment.toFixed(2), "AZN");
  };

  let button = document.getElementById("hesabla");
  button.onclick = calculateLoan;
})();