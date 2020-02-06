FROM python:3.6

WORKDIR /pinfo/backend

COPY requirements.txt /pinfo/backend
RUN pip3 install --upgrade pip -r requirements.txt

COPY . /pinfo/backend

EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000
