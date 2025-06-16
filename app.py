
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    item_price = float(data["price"])
    monthly_salary = float(data["monthly_salary"])
    years = int(data["years"])
    investment_rate = float(data["investment_rate"])
    hours_per_day=8
    hourly_rate = monthly_salary / (22 * hours_per_day)  # Assuming 22 working days in a month
    daily_rate = monthly_salary / 22  # Assuming 22 working days in a month


    hours_needed = round(item_price / hourly_rate, 2)
    days_needed = round(hours_needed / hours_per_day, 2)
    future_value = round(item_price * ((1 + investment_rate / 100) ** years), 2)
    investment_return = future_value - item_price 


    return jsonify({
        "hourly_rate": round(hourly_rate, 2),
        "daily_rate": round(daily_rate, 2),
        "investment_return": round(investment_return, 2),
        "item_price": item_price,
        "monthly_salary": monthly_salary,
        "years": years,
        "investment_rate": investment_rate,
        "hours_needed": hours_needed,
        "days_needed": days_needed,
        "future_value": future_value
    })

if __name__ == "__main__":
    # app.run(debug=True)
    app.run(host="0.0.0.0", port=5000, debug=True)

