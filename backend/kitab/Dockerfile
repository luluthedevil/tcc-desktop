FROM ubuntu:16.04

RUN apt-get update
RUN apt-get -y install python-pip
RUN apt-get update
RUN pip install --upgrade pip
RUN pip install psycopg2-binary

COPY base.py base.py

CMD ["python", "base.py"]