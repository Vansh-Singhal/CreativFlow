# MoU Generator

A Flask-based web application that generates professional Memorandum of Understanding (MoU) documents for freelancers and clients.

## Features

- 📝 Generate customized MoUs in seconds
- 💰 Support for both INR and USD currencies
- ⚖️ Optional confidentiality clauses
- 🔄 Configurable revision policies
- 🎨 Clean, responsive user interface

## Tech Stack

- Flask (Python web framework)
- Flask-WTF (Form handling)
- Gunicorn (WSGI HTTP Server)
- Bootstrap 5 (Frontend styling)
- Render (Deployment platform)

## Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd Creativ\ Flow
```

2. Create and activate virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set environment variables:
```bash
export FLASK_ENV=development
export FLASK_DEBUG=1
```

5. Run the application:
```bash
python3 server.py
```

Visit `http://localhost:8080` in your browser.

## Deployment

The application is deployed on Render. To deploy your own instance:

1. Fork this repository
2. Connect to Render
3. Create a new Web Service
4. Use the following settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn server:app`

## Environment Variables

- `FLASK_ENV`: Set to `production` in production
- `SECRET_KEY`: Required for form security
- `PORT`: Optional, defaults to 8080

## Project Structure

```
Creativ Flow/
├── server.py          # Main application file
├── requirements.txt   # Python dependencies
├── render.yaml        # Render configuration
├── static/           # Static assets
│   ├── css/
│   └── js/
└── templates/        # HTML templates
    ├── base.html
    ├── index.html
    └── mou.html
```


