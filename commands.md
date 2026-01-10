# Stock Prediction Portal

### to create env
backend: 

python3 -m venv env

pip install django==5.0.6

django-admin startproject stock_prediction_main .

pip install python-decouple==3.8

python manage.py migrate

python manage.py createsuperuser

pip install djangorestframework==3.15.2

python manage.py startapp accounts

python manage.py startapp api

Create:
* Model
* Serialization
* Views
* URL
* Test

### install django
backend: 

pip install -r requirements.txt

if you install new package, then:

pip freeze > requirements.txt


### install react
frontend:

npm create vite@5.2

* selecting options: React(18.2.0) > Javascript

npm i react-router-dom@7.9.1

npm i axios

npm i --save @fortawesome/free-solid-svg-icons

npm i --save @fortawesome/free-regular-svg-icons

npm i --save @fortawesome/free-brands-svg-icons


