from flask import Blueprint, app, render_template, url_for, redirect

home_bp = Blueprint('home', __name__)

@home_bp.route('/')
def home():
    return render_template('home.html')
