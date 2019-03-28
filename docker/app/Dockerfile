FROM ubuntu:18.04

ENV DEBIAN_FRONTEND noninteractive

MAINTAINER Nikolay Georgiev <symfonist@gmail.com>

RUN apt-get update && apt-get install -y \
    cron \
    software-properties-common \
    curl

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash

RUN apt-get install -y \
    nodejs

RUN adduser --disabled-password --gecos "" app

USER app

WORKDIR /var/www/application

RUN echo 'export PATH=$PATH:/usr/local/bin' >> $HOME/.bashrc

ARG node_env
ENV NODE_ENV=$node_env






