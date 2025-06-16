
document.getElementById("calc-form").addEventListener("submit", async function(e) {
    e.preventDefault();
    const price = document.getElementById("price").value;
    // const hourly_rate = document.getElementById("hourly_rate").value;
    const monthly_salary = document.getElementById("monthly_salary").value;
    const years = document.getElementById("years").value;
    const investment_rate = document.getElementById("investment_rate").value;

    const res = await fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ price, monthly_salary, years, investment_rate }),
    });

    const data = await res.json();
    document.getElementById("result").innerHTML = `
        <h2>Calculation Result</h2>
        <p>💰 The price of the item is <strong>₹${data.item_price}</strong>.</p> 
        <p>💵 Your hourly salary rate is <strong>₹${data.hourly_rate}</strong>.</p>
        <p>💵 Your daily salary rate is <strong>₹${data.daily_rate}</strong>.</p>
        <p>📅 Your monthly salary is <strong>₹${data.monthly_salary}</strong>.</p>
        <p>⏳ You need to work <strong>${data.hours_needed}</strong> hours or <strong>${data.days_needed} days to buy this item.</p>
        <p>💸 If you invest this amount, it could grow to <strong>₹${data.future_value}</strong> in ${years} years.</p>
        <p>💸 Return on investment after ${years} years would be <strong>₹${data.investment_return}</strong>.</p>
    `;
});
document.getElementById("reset-btn").addEventListener("click", function () {
    document.getElementById("price").value = "";
    document.getElementById("monthly_salary").value = "";
    document.getElementById("years").value = "1";
    document.getElementById("investment_rate").value = "8";
    document.getElementById("result").innerHTML = "";
});
