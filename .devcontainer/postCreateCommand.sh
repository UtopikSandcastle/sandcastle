#!/usr/bin/env bash

sudo npm install -g npm@latest @angular/cli
echo "source <(ng completion script)" >> /home/node/.bashrc

yarn install