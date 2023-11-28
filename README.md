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

##### `pip install django djangorestframework django-cors-headers requests`
 - установка django, djangorestframework, requests и django-cors-headers

##### `django-admin startproject django_react`
 - старт приложения django (здесь именуется django_react)

##### `python manage.py startapp backend`
 - создание приложения на бэкенд (здесь именуется backend)

#### 2.1. Настройки импорта в django_react/settings.py
 - В INSTALLED_APPS добавить:
    - 'rest_framework',
    - 'corsheaders',
    - 'backend'*
    
*При этом backend - django-приложение для бекенда

 - В MIDDLEWARES добавить:
    - 'corsheaders.middleware.CorsMiddleware',
    - 'django.middleware.common.CommonMiddleware',
    
 - Прописать статику:
    - STATIC_URL = '/static/'
    - STATIC_ROOT = os.path.join(BASE_DIR, 'static')
    
#### 2.2. Модели, сериалайзеры и пр.:
Сейчас наша цель - собрать приложение на django и react, поэтому разделы 
models.py и прч. на этом этапе пропустим.

#### 2.3. Сбор статики
По идее, при пропуске п. 2.2 собирать статику не требуется, однако команды упомянем

##### `python manage.py makemigrations`
##### `python manage.py migrate`

#### 2.4. Настройка API в django_react/urls.py
 - Сделать импорты:
   - from django.urls import path, include
   - from backend import views - импортируем функции из backend/urls.py
   
 - Добавть path:
   - path('api/', include('backend.api.urls')) - для доступа к классам в backend/api/views.py
   - path('', views.index) - для отрисовки начальной страницы*
   
*Для добавления юрлов для страниц, открываемых с помощью роутинга, достаточно в django_react/urls.py добавить следующий path:
`path('main', views.index)`, где main - часть адресной строки раздела main

#### 2.5. Настройка backend/views.py
 - Добавить импорты:
   - from django.http import request
   
 - Добавить функции (см. здесь в backend/views.py):
   - index
   - request_to_detail
   
#### 2.6. Настройка backend/api/views.py
  - Этот файл является основным местом, где прописываеются классы APIView типа
  - Для дальнейшей работы с этими классами им присваивается url в backend/api/urls (рассмотрим далее в п 2.7)
  - Наполнение см. здесь в backend/api/views.py
 
 
 - Добавить импорты:
   - import requests - для использования библиотеки requests (необходима для внешней интеграции по REST API)
   - from rest_framework.views import APIView - для объявления класса типа APIView
   - from rest_framework.response import Response - неоходим для связи с фронтендом
   
### 3. Установка, развертывание и "дружба" React-приложения с бэком
#### 3.1. Установка:
#### `npx create-react-app frontend --skip-git`
 - Удостоверьтесь, что находитесь в корневой директории, и введите команду выше
 - frontend - это название нашего react-приложения, можно дать другое
 - Ключ `--skip-git` необходим для развертывания приложения без своей конфигурации git, что позволяет без проблем коммитить события во frontend

