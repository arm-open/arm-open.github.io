FROM python:3.6

MAINTAINER David Awad "davidawad64@gmail.com"

COPY . /app
WORKDIR /app

RUN pip install -r /app/requirements.txt
RUN bash setup-env.sh

CMD python /app/server.py
