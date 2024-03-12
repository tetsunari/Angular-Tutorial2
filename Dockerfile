FROM node:20.11.0-slim as node

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    tini git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV PATH=$HOME/.yarn/bin:$HOME/app/node_modules/.bin:$PATH
