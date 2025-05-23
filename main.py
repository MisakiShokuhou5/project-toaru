from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def serve_home():
    return render_template('site.html')  

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=True)