FROM ubuntu:16.04

ENV DEBIAN_FRONTEND noninteractive

MAINTAINER Nikolay Georgiev <symfonist@gmail.com>

RUN apt-get update && apt-get install -y \
    wget \
    cron \
    build-essential \
    python-software-properties \
    curl

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash

RUN apt-get install -y \
    nodejs

RUN adduser --disabled-password --gecos "" app

USER app

WORKDIR /var/www/application

RUN echo 'export PATH=$PATH:/usr/local/bin' >> $HOME/.bashrc

EXPOSE 3000
EXPOSE 4000






