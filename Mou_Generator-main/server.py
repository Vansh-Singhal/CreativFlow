from flask import Flask, render_template, request, redirect, url_for, flash
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DecimalField, IntegerField, SelectField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Optional
import datetime
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'default-dev-key')  # Use environment variable in production

class MoUForm(FlaskForm):
    # Freelancer details
    freelancer_name = StringField('Freelancer Name', validators=[DataRequired()])
    
    # Client details
    client_name = StringField('Client Name', validators=[DataRequired()])
    
    # Payment details
    project_fee_inr = DecimalField('Project Fee (INR)', validators=[Optional()])
    project_fee_usd = DecimalField('Project Fee (USD)', validators=[Optional()])
    payment_days = IntegerField('Payment Days Allowed', default=7, validators=[DataRequired()])
    
    # Additional fields from new design
    project_type = SelectField('Project Type', choices=[
        ('', 'Select project type...'),
        ('design', 'Design'),
        ('development', 'Development'),
        ('writing', 'Content Writing'),
        ('marketing', 'Marketing'),
        ('other', 'Other')
    ], validators=[Optional()])
    
    # Additional terms
    include_confidentiality = BooleanField('Include confidentiality clause', default=True)
    include_revisions = BooleanField('Include revisions policy', default=True)
    number_of_revisions = IntegerField('Number of Revisions', default=2, validators=[Optional()])
    
    submit = SubmitField('Generate MoU')

@app.route('/', methods=['GET', 'POST'])
def index():
    form = MoUForm()
    if form.validate_on_submit():
        # Process form data
        return redirect(url_for('view_mou', 
                               freelancer=form.freelancer_name.data,
                               client=form.client_name.data,
                               fee_inr=form.project_fee_inr.data,
                               fee_usd=form.project_fee_usd.data,
                               days=form.payment_days.data,
                               project_type=form.project_type.data,
                               include_confidentiality=form.include_confidentiality.data,
                               include_revisions=form.include_revisions.data,
                               number_of_revisions=form.number_of_revisions.data))
    return render_template('index.html', form=form)

@app.route('/mou')
def view_mou():
    # Get data from URL parameters
    freelancer = request.args.get('freelancer', 'Freelancer Name')
    client = request.args.get('client', 'Client Name')
    fee_inr = request.args.get('fee_inr', '')
    fee_usd = request.args.get('fee_usd', '')
    days = request.args.get('days', 7)
    project_type = request.args.get('project_type', '')
    include_confidentiality = request.args.get('include_confidentiality', 'True') == 'True'
    include_revisions = request.args.get('include_revisions', 'True') == 'True'
    number_of_revisions = request.args.get('number_of_revisions', 2)
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    
    return render_template('mou.html', 
                           freelancer=freelancer,
                           client=client,
                           fee_inr=fee_inr,
                           fee_usd=fee_usd,
                           days=days,
                           project_type=project_type,
                           include_confidentiality=include_confidentiality,
                           include_revisions=include_revisions,
                           number_of_revisions=number_of_revisions,
                           date=today)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))