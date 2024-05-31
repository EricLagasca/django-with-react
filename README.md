# Django with React

A sandbox Django project that uses the React UI library for the web application front-end.

## Django 

### Setup environment

```
$ mkdir django-with-react
$ cd django-with-react
$ python -m venv .venv
$ source .venv/bin/activate
(.venv) $ python -m pip install -U pip
(.venv) $ python -m pip install Django~=4.2
(.venv) $ echo 'Django~=4.2' >> requirements.txt
```

Notes:
* The virtual environment can also be automatically activated using [direnv](https://direnv.net); check `.envrc.example` for details
* Django version 4.2 is the latest LTS version when this project was created

### Create the Django project

```
(.venv) $ django-admin startproject config .
(.venv) $ python manage.py startapp website
```

Notes:
* I prefer to put the Django project under the `config` directory thus `...startproject config .`
* The `website` application will house the React code
