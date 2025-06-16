# 💸 BuyWorth – Is It Worth Your Time?

**BuyWorth** is a web application that helps users evaluate if a purchase is worth the effort they put into earning that money. By inputting the price of an item, hourly wage, and expected investment return, users can make informed financial decisions.

---

## ✨ Features

- 🔢 Converts item price into hours and days of work
- 📈 Calculates future investment value if the money were saved
- 🧮 Responsive calculator with input validation
- 🔁 Reset button to clear fields
- 🧭 Sidebar navigation UI
- ☁️ Deploy-ready for Render, Heroku, or Docker environments
- 🔁 GitHub Actions CI/CD workflows included

---

## 🏁 Live Preview (Optional Hosting Options)

- 🔗 [Deploy to Render](https://render.com)
- 🔗 [Deploy to Heroku](https://heroku.com)
- 🐳 Self-host via Docker

---

## 🧠 How It Works

Users enter:
- 💰 Item Price
- 💼 Hourly Wage
- 📅 Investment Years
- 📊 Expected Investment Return

The app calculates:
- 🕒 Work Hours and Days needed
- 💹 Potential Investment Value after the specified time

---

## 🖥 Local Development

### ✅ Requirements
- Python 3.10+
- pip
- Flask

### ▶️ Run Locally
```bash
pip install flask
python app.py
```

Visit: [http://localhost:5000](http://localhost:5000)

---

## 🐳 Docker Setup

### 🏗️ Build the Container
```bash
docker build -t buyworth .
```

### ▶️ Run the Container
```bash
docker run -d -p 5000:5000 buyworth
```

Visit in browser: [http://localhost:5000](http://localhost:5000)

---

## 🌐 Render Deployment

### 📁 `render.yaml`
Add this to your project root:

```yaml
services:
  - type: web
    name: buyworth
    env: python
    region: oregon
    buildCommand: "pip install flask"
    startCommand: "python app.py"
    plan: free
    autoDeploy: true
```

Then:
1. Push your repo to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service → Link repo → Done ✅

---

## 🚀 Heroku Deployment (via GitHub Actions)

### 🔐 Add GitHub Secrets
| Name             | Description                   |
|------------------|-------------------------------|
| HEROKU_API_KEY   | From `heroku auth:token`      |
| HEROKU_APP_NAME  | Your Heroku app name          |
| HEROKU_EMAIL     | Your Heroku email             |

### 📄 GitHub Workflow: `.github/workflows/heroku.yml`

```yaml
name: Deploy to Heroku

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      - run: pip install flask
      - uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: ${{ secrets.HEROKU_APP_NAME }}
          heroku_email: ${{ secrets.HEROKU_EMAIL }}
```

---

## 🧪 GitHub Actions CI/CD

📁 `.github/workflows/ci.yml`  
This workflow performs:

- ✅ Python syntax validation
- 🐳 Docker build test (optional)
- 💡 Can be extended for deploy steps

---

## 🗂 Project Structure

```
buyworth_project/
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── .env.example
├── Dockerfile
├── .gitignore
├── render.yaml
├── README.md
└── .github/
    └── workflows/
        └── ci.yml
```

---

## 📄 License

MIT License © 2025 [Sahil Patni](https://github.com/sahilpatni95)

---

## 💬 Questions or Feedback?

Submit an [issue](https://github.com/sahilpatni95/buyworth/issues) or fork the project and contribute!