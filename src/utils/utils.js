const repaymentCount = (days, cycle) => {
    const result = days / cycle;
    if (result >= 24) {
        return 24;
    } else if (result >= 18) {
        return 18;
    } else if (result >= 12) {
        return 12;
    }
    if (result >= 6) {
        return 6;
    }
    return 3;
};

const cashLoan = (productPrice, paramInterest = 3.5, repayment_duration = 180) => {
    if (!productPrice) return { total: 0, actualDownpayment: 0, actualRepayment: 0, biMonthlyRepayment: 0 };
    const count = repaymentCount(repayment_duration, 14);
    const actualDownpayment = 0.2 * productPrice;
    const residual = productPrice - actualDownpayment;
    const principal = residual / count;
    const interest = (paramInterest / 100) * residual;
    const tempActualRepayment = (principal + interest) * count;
    const biMonthlyRepayment = Math.round(tempActualRepayment / count / 100) * 100;
    const actualRepayment = biMonthlyRepayment * count;
    let total = Math.ceil((actualDownpayment + actualRepayment) / 100) * 100;
    total = actualRepayment + actualDownpayment;
    return { total, actualDownpayment, actualRepayment, biMonthlyRepayment };
};

const money = (amount) => {
    return amount.toLocaleString("en-NG", { style: "currency", currency: "NGN" });
};

export { cashLoan, money };
