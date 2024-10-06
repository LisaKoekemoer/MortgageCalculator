export function calculateLoanPayment (amount, term, rate) {
    const P = amount;

    const i = rate / 100 / 12;

    const n = term * 12;

    const monthlyPayment = 
        (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);

    const totalRepayment = monthlyPayment * n;

    return {
        monthlyPayment, 
        totalRepayment,
    };
}