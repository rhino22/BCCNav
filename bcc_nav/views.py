from flask import render_template

from . import app


@app.route('/')
def main():
    """
    Root URl for the web app.
    :return:
    """

    return render_template('index.html')
