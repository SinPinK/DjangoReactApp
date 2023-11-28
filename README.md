## Простое SPA-приложение на Django-React

### 1. Создание проекта
В данном случае я создаю проект в pyCharm, где автоматически заводится virtualenv

#### 1.1. Если необходимо развернуть virtualenv:
В терминале необходимо набрать следующие команды:
##### `python -m venv env`
 - развертывание в проекте virtualenv под наименованием env

##### `source env/bin/activate`
 - запуск виртуального окружения

### 2. Установка Django и запуск django-приложения

##### `pip install django djangorestframework django-cors-headers`
 - установка django, djangorestframework и django-cors-headers

##### `django-admin startproject django_react`
 - старт приложения django (здесь именуется django_react)

##### `python manage.py startapp backend`
 - создание приложения на бэкенд (здесь именуется backend)

#### 2.1. Настройки импорта в django_react/settings.py
 - В INSTALLED_APPS добавить:
    - 'rest_framework',
    - 'corsheaders',
    - 'backend'
    
При этом backend - django-приложение для бекенда